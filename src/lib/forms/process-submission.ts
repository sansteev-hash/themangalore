import { z } from "zod";
import type { RateLimiter } from "@/lib/rate-limit";
import { HONEYPOT_FIELD, type FormState } from "./types";

type Options<Schema extends z.ZodType, Field extends string> = {
  schema: Schema;
  /** Form fields to read from the submission. */
  fields: readonly Field[];
  enabled: boolean;
  /** Visitor identifier for rate limiting (IP address). */
  clientKey: string;
  limiter: RateLimiter;
  /** Called with validated data — save it, send alerts, etc. */
  onValid: (data: z.output<Schema>) => Promise<void>;
  messages: {
    /** Shown while forms are switched off. */
    disabled: string;
    /** Shown if onValid throws. Never reveals technical details. */
    failure: string;
  };
};

/**
 * The rules every public form follows, in one tested place:
 * on/off switch → honeypot → rate limit → validation → onValid.
 * Kept separate from Server Actions so it can be unit-tested without Next.js.
 */
export async function processFormSubmission<
  Schema extends z.ZodType,
  Field extends string,
>(
  formData: FormData,
  {
    schema,
    fields,
    enabled,
    clientKey,
    limiter,
    onValid,
    messages,
  }: Options<Schema, Field>,
): Promise<FormState<Field>> {
  if (!enabled) {
    return { status: "error", message: messages.disabled };
  }

  // Bots fill every field. Pretend it worked so they don't adapt.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success" };
  }

  const values: Partial<Record<Field, string>> = {};
  for (const field of fields) {
    const value = formData.get(field);
    if (typeof value === "string") values[field] = value;
  }

  if (!limiter.check(clientKey)) {
    return {
      status: "error",
      message:
        "You've sent several requests in a short time. Please wait a few minutes and try again.",
      values,
    };
  }

  const result = schema.safeParse(values);
  if (!result.success) {
    // Our schemas are flat objects, so errors are keyed by field name.
    const { fieldErrors } = z.flattenError(
      result.error as z.ZodError<Record<string, unknown>>,
    );
    const firstErrors: Partial<Record<Field, string>> = {};
    for (const field of fields) {
      const message = fieldErrors[field]?.[0];
      if (message) firstErrors[field] = message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: firstErrors,
      values,
    };
  }

  try {
    await onValid(result.data);
  } catch (error) {
    // Log the failure for us (no personal data), show a friendly message.
    console.error("[forms] submission failed:", (error as Error).message);
    return { status: "error", message: messages.failure, values };
  }

  return { status: "success" };
}
