import Link from "next/link";
import { ChevronRightIcon, type LucideIcon } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { breadcrumbSchema } from "@/lib/structured-data";

export type Breadcrumb = { title: string; href?: string };

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  /** Trail shown above the title. The last item is the current page (no href). */
  breadcrumbs?: Breadcrumb[];
  /** Optional buttons shown under the description. */
  children?: React.ReactNode;
};

/** Compact navy header used at the top of every inner page. */
export function PageHero({
  title,
  description,
  eyebrow,
  icon: Icon,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <Section
      reveal={false}
      className="dark relative overflow-hidden py-14 sm:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-32 right-0 size-120 rounded-full bg-brand-blue/20 blur-3xl" />
      </div>

      <div className="relative flex max-w-3xl flex-col items-start gap-5">
        {breadcrumbs && <JsonLd data={breadcrumbSchema(breadcrumbs)} />}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.title} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRightIcon className="size-3.5" aria-hidden />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {crumb.title}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground">
                      {crumb.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {Icon && (
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Icon className="size-7" aria-hidden />
          </span>
        )}

        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-brand-light uppercase">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-pretty text-muted-foreground sm:text-xl">
            {description}
          </p>
        )}

        {children && (
          <div className="flex flex-wrap gap-3 pt-2">{children}</div>
        )}
      </div>
    </Section>
  );
}
