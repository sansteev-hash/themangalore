/**
 * Master switch for the public forms (contact + waitlist). Keep it off until
 * Supabase is configured, so visitors never send messages that vanish.
 * Turn it on with FORMS_ENABLED=true in .env.local and in Vercel.
 */
export const isFormsEnabled = () => process.env.FORMS_ENABLED === "true";
