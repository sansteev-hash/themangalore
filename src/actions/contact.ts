"use server";

import type { ContactFormState } from "@/lib/contact/types";
import { contactFields } from "@/lib/contact/types";
import { saveLead } from "@/lib/data/submissions";
import { buildLeadAlert } from "@/lib/email/lead-alert";
import { isEmailConfigured, sendEmail } from "@/lib/email/resend";
import { getClientKey } from "@/lib/forms/client-key";
import { isFormsEnabled } from "@/lib/forms/config";
import { processFormSubmission } from "@/lib/forms/process-submission";
import { createRateLimiter } from "@/lib/rate-limit";
import { contactSchema, interestOptions } from "@/lib/validations/contact";

// 5 messages per 10 minutes per visitor (per server instance).
const limiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

/**
 * Server Action behind the contact form. It's a public endpoint, so every
 * input is validated on the server in processFormSubmission().
 */
export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  return processFormSubmission(formData, {
    schema: contactSchema,
    fields: contactFields,
    enabled: isFormsEnabled(),
    clientKey: await getClientKey(),
    limiter,
    messages: {
      disabled: "The contact form isn't available right now. Please email us.",
      failure:
        "Something went wrong sending your message. Please try again or email us.",
    },
    onValid: async (lead) => {
      // 1. Save first — if this fails, the visitor is asked to try again.
      await saveLead(lead);

      // 2. Then alert the team. A failed email must not lose the lead,
      //    which is already safely stored in Supabase.
      if (!isEmailConfigured()) return;
      try {
        const label =
          interestOptions.find((o) => o.value === lead.interest)?.label ??
          lead.interest;
        await sendEmail({
          to: process.env.LEAD_ALERT_TO!,
          replyTo: lead.email,
          ...buildLeadAlert(lead, label),
        });
      } catch (error) {
        console.error(
          "[contact] lead saved, alert email failed:",
          (error as Error).message,
        );
      }
    },
  });
}
