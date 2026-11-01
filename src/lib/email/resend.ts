import "server-only";

type Email = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

/** True when the email alert settings are present. */
export const isEmailConfigured = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.LEAD_ALERT_TO);

/**
 * Sends a plain-text email through Resend's REST API (no SDK needed).
 * https://resend.com/docs/api-reference/emails/send-email
 */
export async function sendEmail({ to, subject, text, replyTo }: Email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Until the domain is verified in Resend, use onboarding@resend.dev
      // (it can only send to the email address you signed up with).
      from:
        process.env.LEAD_ALERT_FROM ??
        "TheMangalore.in <onboarding@resend.dev>",
      to: [to],
      subject,
      text,
      ...(replyTo && { reply_to: replyTo }),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    // Resend explains the problem (e.g. unverified domain) in the body.
    const body = (await response.json().catch(() => null)) as {
      name?: string;
      message?: string;
    } | null;
    throw new Error(
      `Resend responded with ${response.status}: ${body?.name ?? "unknown"} — ${body?.message ?? "no details"}`,
    );
  }
}
