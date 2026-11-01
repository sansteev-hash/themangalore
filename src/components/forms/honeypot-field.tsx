import { HONEYPOT_FIELD } from "@/lib/forms/types";

/**
 * Spam trap: hidden from people and screen readers, but bots fill it in.
 * Submissions with this field filled are silently ignored on the server.
 */
export function HoneypotField() {
  return (
    <div
      aria-hidden
      className="absolute -left-[9999px] h-px w-px overflow-hidden"
    >
      <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
