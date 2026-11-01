import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { ogContentType, ogImage, ogSize } from "@/lib/og-image";

// A social-share image per service, e.g. when /services/ai-agents is shared on LinkedIn.
export const alt = "TheMangalore.in service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return ogImage({
    eyebrow: "Our services",
    title: service.title,
    description: service.summary,
  });
}
