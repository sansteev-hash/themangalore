"use server";

import { headers } from "next/headers";
import { isContactFormEnabled } from "@/lib/contact/config";
import { processContactSubmission } from "@/lib/contact/process-submission";
import type { ContactFormState } from "@/lib/contact/types";
import { createRateLimiter } from "@/lib/rate-limit";

// 5 messages per 10 minutes per visitor (per server instance).
const limiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

/**
 * Server Action behind the contact form. It's a public endpoint, so every
 * input is validated on the server in processContactSubmission().
 */
export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const requestHeaders = await headers();
  const clientKey =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  return processContactSubmission(formData, {
    enabled: isContactFormEnabled(),
    clientKey,
    limiter,
    onValid: async (data) => {
      // Milestone 7 replaces this with: save to Supabase + send email alert.
      // Log only non-personal details.
      console.info("[contact] valid enquiry received", {
        interest: data.interest,
      });
    },
  });
}
