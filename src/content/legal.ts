import { siteConfig } from "./site-config";

/**
 * Privacy policy and terms of use.
 *
 * IMPORTANT: this is a plain-English starting point that describes what the
 * site does today (contact form + waitlist stored in Supabase, email alerts
 * via Resend, hosting and cookie-free Web Analytics on Vercel, no cookies).
 * Have it reviewed by a legal professional before launch, and update it
 * whenever the site starts collecting new data.
 */
export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const { name, email, url } = siteConfig;

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: `How ${name} collects, uses and protects your personal information.`,
  lastUpdated: "1 November 2026",
  intro: `This policy explains how ${name} ("we", "us") handles personal information when you visit our website or contact us. We are committed to protecting your privacy and handling your data responsibly, in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.`,
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "We only collect personal information that you choose to share with us: the name, email address, phone number, company, area of interest and message you enter in our contact form or send us by email, and the email address you give when joining our product waitlist.",
        "Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type and the pages you request. This is used to keep the site secure and running reliably.",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To respond to your enquiries and provide the services you ask for",
        "To send you information you have requested, such as product or training updates",
        "To keep our website secure and improve how it works",
        "To meet our legal obligations",
      ],
      paragraphs: [
        "We do not sell your personal information, and we do not use it for purposes you would not reasonably expect.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "Our website does not use cookies for advertising or tracking.",
        "We use Vercel Web Analytics to understand how our website is used — for example, which pages are visited, the referring website, and the general type of browser, device and country. It does not use cookies, and it reports anonymous, combined statistics: we cannot use it to identify individual visitors.",
        "If we ever add cookies or other tracking, we will update this policy and ask for your consent where required.",
      ],
    },
    {
      heading: "Sharing your information",
      paragraphs: [
        "We share information only with trusted service providers who help us run our business, and only as needed to provide their services:",
      ],
      list: [
        "Vercel — hosts our website and provides anonymous visitor statistics",
        "Supabase — securely stores contact enquiries and waitlist signups",
        "Resend — delivers email notifications about new enquiries to our team",
      ],
    },
    {
      heading: "Where your information is stored",
      paragraphs: [
        "These providers may store or process information in India or in other countries. We choose reputable providers that protect data with industry-standard security. We may also disclose information when required by law.",
      ],
    },
    {
      heading: "How long we keep your information",
      paragraphs: [
        "We keep personal information only for as long as we need it for the purposes described in this policy, or as required by law. Waitlist emails are kept until our products launch or until you ask us to remove you. After that, information is securely deleted.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You can ask us to access, correct or delete the personal information we hold about you, or withdraw consent you have given. To make a request, contact us using the details below.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reasonable technical and organisational measures to protect your information. No method of transmission over the internet is completely secure, but we work hard to keep your data safe.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The latest version will always be available on this page, with the date it was last updated.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `If you have any questions about this policy or your personal information, email us at ${email}.`,
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  description: `The terms that apply when you use the ${name} website.`,
  lastUpdated: "1 November 2026",
  intro: `These terms apply to your use of ${url.replace(/^https?:\/\//, "")} (the "website"), operated by ${name}. By using the website, you agree to these terms. If you do not agree, please do not use the website.`,
  sections: [
    {
      heading: "Use of the website",
      paragraphs: [
        "You may use this website for lawful purposes only. You must not misuse it — for example, by attempting to gain unauthorised access, introducing malicious code or disrupting its operation.",
      ],
    },
    {
      heading: "Information on this website",
      paragraphs: [
        "We work to keep the information on this website accurate and up to date, but it is provided for general information only. It does not form a contract or offer, and it may change without notice.",
        "Any services we provide to you will be governed by a separate written agreement.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `The content, design, logos and brand on this website belong to ${name} unless stated otherwise. You may not copy, reproduce or reuse them without our written permission.`,
      ],
    },
    {
      heading: "Links to other websites",
      paragraphs: [
        "This website may link to websites run by others. We are not responsible for their content or privacy practices.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, we are not liable for any loss or damage arising from your use of, or inability to use, this website or its content.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts of Mangalore, Karnataka.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The latest version will always be available on this page.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [`Questions about these terms? Email us at ${email}.`],
    },
  ],
};
