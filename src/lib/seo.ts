import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const defaultTitle = `${siteConfig.name} — ${siteConfig.tagline}`;

/** Standard social-share image size (Facebook, LinkedIn, WhatsApp, X). */
export const ogSize = { width: 1200, height: 630 };

type PageMetadataInput = {
  /** Short page title, e.g. "About". Leave out on the home page. */
  title?: string;
  description: string;
  /** The page's path, e.g. "/about". Used for the canonical URL. */
  path: string;
  /** True when the route has its own opengraph-image file (e.g. service pages). */
  hasOwnImage?: boolean;
};

/**
 * Builds a page's SEO metadata: title, description, canonical URL and
 * social-sharing (Open Graph / X) tags.
 *
 * Next.js merges metadata shallowly — a page's `openGraph` replaces the
 * layout's entirely — so this always returns the complete set.
 */
export function pageMetadata({
  title,
  description,
  path,
  hasOwnImage = false,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;
  // Setting openGraph here drops the site-wide image from app/opengraph-image.tsx,
  // so it's added back explicitly. Explicit images also override a colocated
  // opengraph-image file, so routes with their own image leave them out.
  // (The key must be absent, not undefined, for the file to apply.)
  const images = hasOwnImage
    ? {}
    : { images: [{ ...ogSize, url: "/opengraph-image", alt: defaultTitle }] };

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: fullTitle,
      description,
      ...images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...images,
    },
  };
}
