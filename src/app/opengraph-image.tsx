import { siteConfig } from "@/content/site-config";
import { ogContentType, ogImage, ogSize } from "@/lib/og-image";

// Default social-share image for every page that doesn't define its own.
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return ogImage({
    eyebrow: "AI-first technology company",
    title: siteConfig.tagline,
    description:
      "AI agents, custom SaaS, websites, AI-powered marketing and AI training.",
  });
}
