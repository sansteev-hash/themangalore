"use server";

import { saveWaitlistSignup } from "@/lib/data/submissions";
import { getClientKey } from "@/lib/forms/client-key";
import { isFormsEnabled } from "@/lib/forms/config";
import { processFormSubmission } from "@/lib/forms/process-submission";
import { createRateLimiter } from "@/lib/rate-limit";
import { waitlistSchema } from "@/lib/validations/waitlist";
import { waitlistFields, type WaitlistFormState } from "@/lib/waitlist/types";

// 5 signups per 10 minutes per visitor (per server instance).
const limiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

/** Server Action behind the product waitlist form (a public endpoint). */
export async function joinWaitlist(
  _previousState: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  return processFormSubmission(formData, {
    schema: waitlistSchema,
    fields: waitlistFields,
    enabled: isFormsEnabled(),
    clientKey: await getClientKey(),
    limiter,
    messages: {
      disabled: "The waitlist isn't open yet. Please check back soon.",
      failure: "Something went wrong. Please try again in a moment.",
    },
    onValid: saveWaitlistSignup,
  });
}
