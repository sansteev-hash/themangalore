/**
 * The contact form stays switched off until submissions are stored and
 * delivered (Milestone 7), so live visitors never send messages that vanish.
 * Turn it on with CONTACT_FORM_ENABLED=true in .env.local (or in Vercel).
 */
export const isContactFormEnabled = () =>
  process.env.CONTACT_FORM_ENABLED === "true";
