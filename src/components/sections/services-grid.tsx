import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { serviceHref, services } from "@/content/services";

type ServicesGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** Card grid of all services. Reused on the home page and the services overview. */
export function ServicesGrid({
  eyebrow,
  title,
  description,
}: ServicesGridProps) {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li
            key={service.slug}
            className="group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-xl hover:shadow-brand-blue/10 motion-reduce:hover:translate-y-0"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold">
              {/* The ::after overlay makes the whole card clickable */}
              <Link
                href={serviceHref(service.slug)}
                className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
              >
                {service.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.summary}
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <CheckIcon
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  {highlight}
                </li>
              ))}
            </ul>
            <span
              aria-hidden
              className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-primary"
            >
              Learn more
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
