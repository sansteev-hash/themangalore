import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Process } from "@/components/sections/process";
import { ServicesGrid } from "@/components/sections/services-grid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI agent development, custom SaaS, websites and web apps, and AI-powered digital marketing — delivered by one AI-first team in Mangalore, India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Services" }]}
        eyebrow="Our services"
        title="Everything you need to build smarter and grow faster"
        description="From intelligent AI agents to high-performance websites and marketing, we design, build and grow digital products with AI at the core."
      />
      <ServicesGrid
        eyebrow="What we do"
        title="Choose where to start"
        description="Each service works on its own — or together, as one connected solution."
      />
      <Process />
      <CtaBand
        title="Not sure which service you need?"
        description="Tell us about your goals and we'll recommend the right starting point."
      />
    </>
  );
}
