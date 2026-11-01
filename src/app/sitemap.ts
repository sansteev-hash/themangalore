import type { MetadataRoute } from "next";
import { serviceHref, services } from "@/content/services";
import { siteConfig } from "@/content/site-config";

/** Every public page, for search engines. Service pages are added automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: serviceHref(s.slug), priority: 0.9 })),
    { path: "/training", priority: 0.8 },
    { path: "/products", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
