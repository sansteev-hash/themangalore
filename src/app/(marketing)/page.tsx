import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/home/hero";
import { Process } from "@/components/sections/home/process";
import { TrainingProducts } from "@/components/sections/home/training-products";
import { WhyUs } from "@/components/sections/home/why-us";
import { ServicesGrid } from "@/components/sections/services-grid";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
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
