import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { trainingContent } from "@/content/training";

export const metadata: Metadata = {
  title: "AI Training",
  description: trainingContent.hero.description,
};

export default function TrainingPage() {
  const { hero, programs, topics, formats, faqs, cta } = trainingContent;

  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Training" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      >
        <ButtonLink href={hero.cta.href}>
          {hero.cta.title}
          <ArrowRightIcon aria-hidden />
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow={programs.eyebrow} title={programs.title} />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.items.map((program) => (
            <li
              key={program.title}
              className="flex flex-col rounded-2xl border bg-card p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <program.icon className="size-6" aria-hidden />
              </span>
              <p className="mt-6 text-sm font-semibold text-primary">
                {program.audience}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{program.title}</h3>
              <p className="mt-3 text-muted-foreground">
                {program.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3 border-t pt-6 text-sm">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHeading
          eyebrow={topics.eyebrow}
          title={topics.title}
          description={topics.description}
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {topics.items.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-3 rounded-xl border bg-card p-4"
            >
              <CheckIcon className="size-5 shrink-0 text-primary" aria-hidden />
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <IconCardGrid
        eyebrow={formats.eyebrow}
        title={formats.title}
        items={formats.items}
      />

      <Faq faqs={faqs} />

      <CtaBand
        {...cta}
        primary={{ title: "Enquire about training", href: "/contact" }}
      />
    </>
  );
}
