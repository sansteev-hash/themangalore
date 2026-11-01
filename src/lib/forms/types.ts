// Shared by server logic and browser forms. Keep this file free of heavy
// imports (like zod) so it doesn't bloat the page's JavaScript.

/** What a form shows after a submission attempt. */
export type FormState<Field extends string> =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<Field, string>>;
      /** Echoed back so the form can keep what the visitor typed. */
      values?: Partial<Record<Field, string>>;
    };

/** Name of the hidden "honeypot" field. Real visitors never fill it in. */
export const HONEYPOT_FIELD = "website";
