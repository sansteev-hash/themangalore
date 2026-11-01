import { describe, expect, it, vi } from "vitest";
import { createRateLimiter } from "@/lib/rate-limit";
import { processContactSubmission } from "./process-submission";
import { HONEYPOT_FIELD } from "./types";

const validFields = {
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

function context(
  overrides: Partial<Parameters<typeof processContactSubmission>[1]> = {},
) {
  return {
    enabled: true,
    clientKey: "1.2.3.4",
    limiter: createRateLimiter({ limit: 5, windowMs: 60_000 }),
    onValid: vi.fn(async () => {}),
    ...overrides,
  };
}

describe("processContactSubmission", () => {
  it("accepts a valid enquiry and passes clean data on", async () => {
    const ctx = context();
    const result = await processContactSubmission(
      form({ ...validFields, email: "  asha@example.com  " }),
      ctx,
    );

    expect(result).toEqual({ status: "success" });
    expect(ctx.onValid).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "asha@example.com",
        interest: "ai-agents",
      }),
    );
  });

  it("treats empty optional fields as missing", async () => {
    const ctx = context();
    await processContactSubmission(
      form({ ...validFields, phone: "", company: "   " }),
      ctx,
    );
    expect(ctx.onValid).toHaveBeenCalledWith(
      expect.objectContaining({ phone: undefined, company: undefined }),
    );
  });

  it("returns field errors and keeps the typed values when invalid", async () => {
    const ctx = context();
    const result = await processContactSubmission(
      form({ ...validFields, email: "not-an-email", message: "Hi" }),
      ctx,
    );

    expect(result.status).toBe("error");
    if (result.status !== "error") return;
    expect(result.fieldErrors?.email).toMatch(/valid email/);
    expect(result.fieldErrors?.message).toMatch(/at least 10/);
    expect(result.fieldErrors?.name).toBeUndefined();
    expect(result.values?.name).toBe("Asha Rao");
    expect(ctx.onValid).not.toHaveBeenCalled();
  });

  it("rejects an unknown interest value", async () => {
    const result = await processContactSubmission(
      form({ ...validFields, interest: "hacking" }),
      context(),
    );
    expect(result.status).toBe("error");
    if (result.status === "error") {
      expect(result.fieldErrors?.interest).toBeDefined();
    }
  });

  it("rejects phone numbers with letters", async () => {
    const result = await processContactSubmission(
      form({ ...validFields, phone: "call me maybe" }),
      context(),
    );
    expect(result.status === "error" && result.fieldErrors?.phone).toBeTruthy();
  });

  it("silently drops bot submissions that fill the honeypot", async () => {
    const ctx = context();
    const result = await processContactSubmission(
      form({ ...validFields, [HONEYPOT_FIELD]: "https://spam.example" }),
      ctx,
    );
    expect(result).toEqual({ status: "success" });
    expect(ctx.onValid).not.toHaveBeenCalled();
  });

  it("blocks a visitor after too many attempts", async () => {
    const ctx = context({
      limiter: createRateLimiter({ limit: 2, windowMs: 60_000 }),
    });
    await processContactSubmission(form(validFields), ctx);
    await processContactSubmission(form(validFields), ctx);
    const third = await processContactSubmission(form(validFields), ctx);

    expect(third.status).toBe("error");
    if (third.status === "error") expect(third.message).toMatch(/wait/);
    expect(ctx.onValid).toHaveBeenCalledTimes(2);
  });

  it("refuses submissions while the form is switched off", async () => {
    const ctx = context({ enabled: false });
    const result = await processContactSubmission(form(validFields), ctx);
    expect(result.status).toBe("error");
    expect(ctx.onValid).not.toHaveBeenCalled();
  });

  it("reports a friendly error if delivery fails", async () => {
    const ctx = context({
      onValid: vi.fn(async () => {
        throw new Error("database down");
      }),
    });
    const result = await processContactSubmission(form(validFields), ctx);
    expect(result.status).toBe("error");
    if (result.status === "error") {
      expect(result.message).not.toMatch(/database/);
      expect(result.values?.email).toBe("asha@example.com");
    }
  });
});
