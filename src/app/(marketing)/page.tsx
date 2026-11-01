import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/home/hero";
import { Process } from "@/components/sections/process";
import { TrainingProducts } from "@/components/sections/home/training-products";
import { WhyUs } from "@/components/sections/home/why-us";
import { ServicesGrid } from "@/components/sections/services-grid";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";
import { JsonLd } from "@/components/shared/json-ld";
import { pageMetadata } from "@/lib/seo";
import { websiteSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero />
      <ServicesGrid {...homeContent.services} />
      <WhyUs />
      <Process />
      <TrainingProducts />
      <CtaBand
        {...homeContent.cta}
        secondary={{ title: "Explore services", href: "/services" }}
      />
    </>
  );
}
