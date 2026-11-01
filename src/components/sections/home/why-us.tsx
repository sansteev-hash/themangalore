import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/content/home";

export function WhyUs() {
  const { eyebrow, title, description, points } = homeContent.whyUs;

  return (
    <Section
      className="bg-secondary/50"
      containerClassName="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16"
    >
      <SectionHeading
        align="left"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="lg:sticky lg:top-28 lg:self-start"
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {points.map((point) => (
          <li key={point.title} className="rounded-2xl border bg-card p-6">
            <point.icon className="size-6 text-primary" aria-hidden />
            <h3 className="mt-4 font-semibold">{point.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {point.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
