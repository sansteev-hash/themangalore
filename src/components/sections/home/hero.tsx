import { ArrowRightIcon } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { homeContent } from "@/content/home";
import { AgentDemoCard } from "./agent-demo-card";

// Entrance animation: subtle fade/slide, switched off for "reduce motion" users.
// Not used on the heading or intro: text that starts invisible is painted
// later, which delays Largest Contentful Paint (a Core Web Vital).
const enter =
  "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both motion-reduce:animate-none";

export function Hero() {
  const hero = homeContent.hero;

  return (
    <Section
      reveal={false}
      className="dark relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28"
      containerClassName="grid items-center gap-14 lg:grid-cols-2"
    >
      {/* Decorative background: grid + blue glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-40 left-1/2 size-160 -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-brand-light/10 blur-3xl" />
      </div>

      {/* "relative" lifts the content above the absolutely positioned background */}
      <div className="relative flex flex-col items-start gap-6">
        <p
          className={`${enter} rounded-full border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-brand-light sm:text-sm`}
        >
          {hero.eyebrow}
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {hero.titleLead}{" "}
          <span className="bg-linear-to-r from-brand-light to-blue-500 bg-clip-text text-transparent">
            {hero.titleHighlight}
          </span>
        </h1>
        <p className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
          {hero.description}
        </p>
        <div className={`${enter} flex flex-wrap gap-3 delay-150`}>
          <ButtonLink href={hero.primaryCta.href}>
            {hero.primaryCta.title}
            <ArrowRightIcon aria-hidden />
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.title}
          </ButtonLink>
        </div>
      </div>

      <AgentDemoCard
        className={`${enter} relative w-full max-w-lg delay-300 lg:justify-self-end`}
      />
    </Section>
  );
}
