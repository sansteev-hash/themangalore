import { z } from "zod";

/** Server-side rules for the product waitlist signup. */
export const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254, "Please use a shorter email address.")
    .pipe(z.email("Please enter a valid email address.")),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
