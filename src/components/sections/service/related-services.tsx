import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { serviceHref, services } from "@/content/services";

/** Links to every service except the current one. */
export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const others = services.filter((s) => s.slug !== currentSlug);

  return (
    <Section className="pt-0 sm:pt-0">
      <SectionHeading title="Explore our other services" />
      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {others.map((service) => (
          <li key={service.slug}>
            <Link
              href={serviceHref(service.slug)}
              className="group flex h-full items-center gap-4 rounded-2xl border bg-card p-5 transition-colors outline-none hover:border-brand-light focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <service.icon className="size-5" aria-hidden />
              </span>
              <span className="flex-1 font-medium">{service.title}</span>
              <ArrowRightIcon
                className="size-4 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
