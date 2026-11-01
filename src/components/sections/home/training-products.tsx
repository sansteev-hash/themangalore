import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { homeContent } from "@/content/home";

export function TrainingProducts() {
  const { training, products } = homeContent;

  return (
    <Section
      className="pt-0 sm:pt-0"
      containerClassName="grid gap-6 lg:grid-cols-2"
    >
      <article className="flex flex-col rounded-3xl border bg-accent p-8 sm:p-10">
        <training.icon className="size-10 text-primary" aria-hidden />
        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          {training.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{training.description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {training.points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm">
              <CheckIcon className="size-4 shrink-0 text-primary" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
        <ButtonLink href={training.cta.href} className="mt-8 self-start">
          {training.cta.title}
          <ArrowRightIcon aria-hidden />
        </ButtonLink>
      </article>

      <article className="dark relative flex flex-col overflow-hidden rounded-3xl bg-background p-8 text-foreground sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand-blue/30 blur-3xl"
        />
        <div className="relative flex items-center justify-between">
          <products.icon className="size-10 text-brand-light" aria-hidden />
          <span className="rounded-full border border-brand-light/40 px-3 py-1 text-xs font-medium text-brand-light">
            {products.badge}
          </span>
        </div>
        <h2 className="relative mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          {products.title}
        </h2>
        <p className="relative mt-3 mb-8 text-muted-foreground">
          {products.description}
        </p>
        <ButtonLink
          href={products.cta.href}
          variant="outline"
          className="relative mt-auto self-start"
        >
          {products.cta.title}
        </ButtonLink>
      </article>
    </Section>
  );
}
