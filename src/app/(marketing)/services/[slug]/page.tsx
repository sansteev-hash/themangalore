import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { Process } from "@/components/sections/process";
import { RelatedServices } from "@/components/sections/service/related-services";
import { ServiceFeatures } from "@/components/sections/service/service-features";
import { ButtonLink } from "@/components/shared/button-link";
import { ctaNav } from "@/content/navigation";
import { getService, services } from "@/content/services";

// The whole page must be static. This also means an unknown slug is fully
// rendered before anything is sent, so notFound() returns a real 404 status.
export const ensureStatic = "navigation";

// The page is built entirely from the slug, so it intentionally waits for it
// rather than streaming a shared shell (which would turn 404s into 200s).
export const instant = false;

// Build one page per service at build time. Any other slug shows the 404 page.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Services", href: "/services" },
          { title: service.navTitle },
        ]}
        icon={service.icon}
        title={service.title}
        description={service.intro}
      >
        <ButtonLink href={ctaNav.href}>
          Discuss your project
          <ArrowRightIcon aria-hidden />
        </ButtonLink>
      </PageHero>
      <ServiceFeatures service={service} />
      <Process />
      <Faq faqs={service.faqs} />
      <RelatedServices currentSlug={service.slug} />
      <CtaBand
        title={`Let's talk about ${service.navTitle}`}
        description="Share your goals and we'll suggest practical next steps — no jargon, no obligation."
      />
    </>
  );
}
