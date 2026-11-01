import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

/**
 * Allow search engines on the live site only. Vercel preview deployments
 * (and local builds) are blocked so test versions never appear in Google.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
