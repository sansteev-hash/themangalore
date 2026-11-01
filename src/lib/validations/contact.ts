import { z } from "zod";
import { services } from "@/content/services";
import { contactLimits } from "@/lib/contact/types";

/** Choices for "What are you interested in?" — services come from services.ts. */
export const interestOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.navTitle })),
  { value: "training", label: "AI Training" },
  { value: "products", label: "Our products / waitlist" },
  { value: "other", label: "Something else" },
];

const interestValues = interestOptions.map((o) => o.value) as [
  string,
  ...string[],
];

const optionalText = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be ${max} characters or fewer.`)
    .optional()
    .transform((value) => value || undefined);

/** Server-side rules for the contact form. Never trust browser checks alone. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(contactLimits.name.min, "Please enter your name.")
    .max(contactLimits.name.max, "Please use a shorter name."),
  email: z
    .string()
    .trim()
    .max(contactLimits.email.max, "Please use a shorter email address.")
    .pipe(z.email("Please enter a valid email address.")),
  phone: optionalText(contactLimits.phone.max, "Phone number").pipe(
    z
      .string()
      .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number.")
      .optional(),
  ),
  company: optionalText(contactLimits.company.max, "Company name"),
  interest: z.enum(interestValues, {
    error: "Please choose what you're interested in.",
  }),
  message: z
    .string()
    .trim()
    .min(
      contactLimits.message.min,
      `Please tell us a little more (at least ${contactLimits.message.min} characters).`,
    )
    .max(
      contactLimits.message.max,
      `Please keep your message under ${contactLimits.message.max} characters.`,
    ),
});

export type ContactInput = z.infer<typeof contactSchema>;
