/**
 * Central brand & site settings.
 * Change company-wide details here — every page reads from this file.
 */
export const siteConfig = {
  name: "TheMangalore.in",
  tagline: "Build Smarter. Grow Faster.",
  description:
    "TheMangalore.in is an AI-first technology company in Mangalore, India, building AI agents, custom SaaS, websites, AI-powered marketing and AI training programs.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  // TODO: replace with the real contact address before launch.
  email: "hello@themangalore.in",
  phone: {
    /** International format, used for tap-to-call links and search engines. */
    value: "+916366507370",
    /** How it's shown on the page. */
    display: "+91 63665 07370",
  },
  location: {
    street: "Kelle Court, 3rd Floor, Hampankette",
    city: "Mangalore",
    region: "Karnataka",
    country: "India",
  },
} as const;
