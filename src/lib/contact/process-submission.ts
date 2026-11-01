import { z } from "zod";
import type { RateLimiter } from "@/lib/rate-limit";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import {
  HONEYPOT_FIELD,
  type ContactField,
  type ContactFormState,
} from "./types";

const FIELDS: ContactField[] = [
  "name",
  "email",
  "phone",
  "company",
  "interest",
  "message",
];

type Context = {
  enabled: boolean;
  /** Visitor identifier for rate limiting (IP address). */
  clientKey: string;
  limiter: RateLimiter;
  /** Called with valid data. Milestone 7: save to Supabase + email alert. */
  onValid: (data: ContactInput) => Promise<void>;
};

/**
 * All contact-form rules in one place, kept separate from the Server Action
 * so it can be unit-tested without Next.js.
 */
export async function processContactSubmission(
  formData: FormData,
  { enabled, clientKey, limiter, onValid }: Context,
): Promise<ContactFormState> {
  if (!enabled) {
    return {
      status: "error",
      message: "The contact form isn't available right now. Please email us.",
    };
  }

  // Bots fill every field. Pretend it worked so they don't adapt.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success" };
  }

  const values: Partial<Record<ContactField, string>> = {};
  for (const field of FIELDS) {
    const value = formData.get(field);
    if (typeof value === "string") values[field] = value;
  }

  if (!limiter.check(clientKey)) {
    return {
      status: "error",
      message:
        "You've sent several messages in a short time. Please wait a few minutes and try again.",
      values,
    };
  }

  const result = contactSchema.safeParse(values);
  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).map(([field, errors]) => [
          field,
          errors?.[0],
        ]),
      ),
      values,
    };
  }

  try {
    await onValid(result.data);
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again or email us.",
      values,
    };
  }

  return { status: "success" };
}
