// Shared by the server logic and the browser form. Keep this file free of
// heavy imports (like zod) so it doesn't bloat the page's JavaScript.

export type ContactField =
  "name" | "email" | "phone" | "company" | "interest" | "message";

/** What the form shows after a submission attempt. */
export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
      /** Echoed back so the form can keep what the visitor typed. */
      values?: Partial<Record<ContactField, string>>;
    };

/** Length limits, shared by the form and the server so the rules always match. */
export const contactLimits = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  phone: { max: 20 },
  company: { max: 100 },
  message: { min: 10, max: 2000 },
} as const;

/** Name of the hidden "honeypot" field. Real visitors never fill it in. */
export const HONEYPOT_FIELD = "website";
