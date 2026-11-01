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
  location: {
    city: "Mangalore",
    region: "Karnataka",
    country: "India",
  },
} as const;
