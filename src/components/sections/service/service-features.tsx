import { CheckIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Service } from "@/content/services";

/** "What we deliver" grid plus "Who it's for" list for one service. */
export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="What we deliver"
          title="Built around your goals"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {service.features.map((feature, index) => (
            <li key={feature.title} className="rounded-2xl border bg-card p-6">
              <span className="text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        className="bg-secondary/50"
        containerClassName="grid gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <SectionHeading
          align="left"
          eyebrow="Who it's for"
          title="Is this right for you?"
          description="This service is a great fit if any of these sound familiar."
        />
        <ul className="flex flex-col gap-4">
          {service.audience.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border bg-card p-4">
              <CheckIcon
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
