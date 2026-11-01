// Shared by the server logic and the browser form. Keep this file free of
// heavy imports (like zod) so it doesn't bloat the page's JavaScript.
import type { FormState } from "@/lib/forms/types";

export const contactFields = [
  "name",
  "email",
  "phone",
  "company",
  "interest",
  "message",
] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactFormState = FormState<ContactField>;

/** Length limits, shared by the form and the server so the rules always match. */
export const contactLimits = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  phone: { max: 20 },
  company: { max: 100 },
  message: { min: 10, max: 2000 },
} as const;
