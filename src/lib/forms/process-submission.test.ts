import { describe, expect, it, vi } from "vitest";
import { contactFields } from "@/lib/contact/types";
import { createRateLimiter } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations/contact";
import { waitlistSchema } from "@/lib/validations/waitlist";
import { waitlistFields } from "@/lib/waitlist/types";
import { processFormSubmission } from "./process-submission";
import { HONEYPOT_FIELD } from "./types";

const validContact = {
  name: "Asha Rao",
  email: "asha@example.com",
  phone: "+91 98765 43210",
  company: "Example Pvt Ltd",
  interest: "ai-agents",
  message: "We'd like an AI agent to answer customer questions.",
};

function form(fields: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
}

function contactOptions(
  overrides: Partial<{
    enabled: boolean;
    limiter: ReturnType<typeof createRateLimiter>;
    onValid: (data: unknown) => Promise<void>;
  }> = {},
) {
  return {
    schema: contactSchema,
    fields: contactFields,
    enabled: true,
    clientKey: "1.2.3.4",
    limiter: createRateLimiter({ limit: 5, windowMs: 60_000 }),
    onValid: vi.fn(async () => {}),
    messages: { disabled: "Forms are off.", failure: "Please try again." },
    ...overrides,
  };
}

describe("processFormSubmission — contact form", () => {
  it("accepts a valid enquiry and passes clean data on", async () => {
    const options = contactOptions();
    const result = await processFormSubmission(
      form({ ...validContact, email: "  asha@example.com  " }),
      options,
    );

    expect(result).toEqual({ status: "success" });
    expect(options.onValid).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "asha@example.com",
        interest: "ai-agents",
      }),
    );
  });

  it("treats empty optional fields as missing", async () => {
    const options = contactOptions();
    await processFormSubmission(
      form({ ...validContact, phone: "", company: "   " }),
      options,
    );
    expect(options.onValid).toHaveBeenCalledWith(
      expect.objectContaining({ phone: undefined, company: undefined }),
    );
  });

  it("returns field errors and keeps the typed values when invalid", async () => {
    const options = contactOptions();
    const result = await processFormSubmission(
      form({ ...validContact, email: "not-an-email", message: "Hi" }),
      options,
    );

    expect(result.status).toBe("error");
    if (result.status !== "error") return;
    expect(result.fieldErrors?.email).toMatch(/valid email/);
    expect(result.fieldErrors?.message).toMatch(/at least 10/);
    expect(result.fieldErrors?.name).toBeUndefined();
    expect(result.values?.name).toBe("Asha Rao");
    expect(options.onValid).not.toHaveBeenCalled();
  });

  it("rejects an unknown interest value", async () => {
    const result = await processFormSubmission(
      form({ ...validContact, interest: "hacking" }),
      contactOptions(),
    );
    expect(
      result.status === "error" && result.fieldErrors?.interest,
    ).toBeTruthy();
  });

  it("rejects phone numbers with letters", async () => {
    const result = await processFormSubmission(
      form({ ...validContact, phone: "call me maybe" }),
      contactOptions(),
    );
    expect(result.status === "error" && result.fieldErrors?.phone).toBeTruthy();
  });

  it("silently drops bot submissions that fill the honeypot", async () => {
    const options = contactOptions();
    const result = await processFormSubmission(
      form({ ...validContact, [HONEYPOT_FIELD]: "https://spam.example" }),
      options,
    );
    expect(result).toEqual({ status: "success" });
    expect(options.onValid).not.toHaveBeenCalled();
  });

  it("blocks a visitor after too many attempts", async () => {
    const options = contactOptions({
      limiter: createRateLimiter({ limit: 2, windowMs: 60_000 }),
    });
    await processFormSubmission(form(validContact), options);
    await processFormSubmission(form(validContact), options);
    const third = await processFormSubmission(form(validContact), options);

    expect(third.status).toBe("error");
    if (third.status === "error") expect(third.message).toMatch(/wait/);
    expect(options.onValid).toHaveBeenCalledTimes(2);
  });

  it("refuses submissions while forms are switched off", async () => {
    const options = contactOptions({ enabled: false });
    const result = await processFormSubmission(form(validContact), options);
    expect(result).toEqual({ status: "error", message: "Forms are off." });
    expect(options.onValid).not.toHaveBeenCalled();
  });

  it("shows a friendly error (no technical details) if saving fails", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const options = contactOptions({
      onValid: vi.fn(async () => {
        throw new Error("database down");
      }),
    });
    const result = await processFormSubmission(form(validContact), options);
    expect(result.status).toBe("error");
    if (result.status === "error") {
      expect(result.message).toBe("Please try again.");
      expect(result.values?.email).toBe("asha@example.com");
    }
  });
});

describe("processFormSubmission — waitlist", () => {
  const waitlistOptions = () => ({
    schema: waitlistSchema,
    fields: waitlistFields,
    enabled: true,
    clientKey: "1.2.3.4",
    limiter: createRateLimiter({ limit: 5, windowMs: 60_000 }),
    onValid: vi.fn(async () => {}),
    messages: { disabled: "Off.", failure: "Try again." },
  });

  it("normalises the email to lowercase", async () => {
    const options = waitlistOptions();
    const result = await processFormSubmission(
      form({ email: "  Asha@Example.COM " }),
      options,
    );
    expect(result).toEqual({ status: "success" });
    expect(options.onValid).toHaveBeenCalledWith({ email: "asha@example.com" });
  });

  it("rejects an invalid email", async () => {
    const result = await processFormSubmission(
      form({ email: "nope" }),
      waitlistOptions(),
    );
    expect(result.status === "error" && result.fieldErrors?.email).toMatch(
      /valid email/,
    );
  });
});
