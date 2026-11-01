import "server-only";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import type { ContactInput } from "@/lib/validations/contact";
import type { WaitlistInput } from "@/lib/validations/waitlist";

/** Stores a contact-form enquiry. Throws if it can't be saved. */
export async function saveLead(lead: ContactInput) {
  const { error } = await createSupabaseAdminClient()
    .from("leads")
    .insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone ?? null,
      company: lead.company ?? null,
      interest: lead.interest,
      message: lead.message,
    });

  if (error) throw new Error(`Could not save lead: ${error.message}`);
}

/**
 * Adds an email to the product waitlist. Signing up twice is treated as
 * success, so the form never reveals whether an address is already listed.
 */
export async function saveWaitlistSignup(signup: WaitlistInput) {
  const { error } = await createSupabaseAdminClient()
    .from("waitlist")
    .upsert(
      { email: signup.email },
      { onConflict: "email", ignoreDuplicates: true },
    );

  if (error)
    throw new Error(`Could not save waitlist signup: ${error.message}`);
}
