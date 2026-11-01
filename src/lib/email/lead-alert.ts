import type { ContactInput } from "@/lib/validations/contact";

/** Removes line breaks so visitor text can't add extra lines to the subject. */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/**
 * Builds the "new enquiry" email. Plain text only, so whatever a visitor
 * types can never inject HTML or links into the alert.
 */
export function buildLeadAlert(lead: ContactInput, interestLabel: string) {
  const subject = singleLine(
    `New enquiry: ${interestLabel} — ${lead.name}`,
  ).slice(0, 150);

  const text = [
    `New enquiry from the TheMangalore.in contact form`,
    ``,
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    `Phone:    ${lead.phone ?? "—"}`,
    `Company:  ${lead.company ?? "—"}`,
    `Interest: ${interestLabel}`,
    ``,
    `Message:`,
    lead.message,
    ``,
    `Reply to this email to respond directly to ${lead.name}.`,
    `All enquiries are also saved in Supabase (table: leads).`,
  ].join("\n");

  return { subject, text };
}
