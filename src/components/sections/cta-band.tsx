import { ArrowRightIcon } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { ctaNav } from "@/content/navigation";

type CtaBandProps = {
  title: string;
  description?: string;
  primary?: { title: string; href: string };
  secondary?: { title: string; href: string };
  /** Custom content (e.g. a signup form) shown instead of the buttons. */
  children?: React.ReactNode;
};

/** Navy call-to-action band, used at the bottom of most pages. */
export function CtaBand({
  title,
  description,
  primary = ctaNav,
  secondary,
  children,
}: CtaBandProps) {
  return (
    <Section reveal={false} className="dark relative overflow-hidden border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 mx-auto h-80 max-w-3xl rounded-full bg-brand-blue/25 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-pretty text-muted-foreground">
            {description}
          </p>
        )}
        {children ?? (
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={primary.href}>
              {primary.title}
              <ArrowRightIcon aria-hidden />
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline">
                {secondary.title}
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
