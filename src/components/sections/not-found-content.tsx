import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { ctaNav, mainNav } from "@/content/navigation";

/** Friendly 404 message with links back into the site. */
export function NotFoundContent() {
  return (
    <Section className="flex flex-1 items-center py-24 sm:py-32">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="bg-linear-to-r from-brand-blue to-brand-light bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have moved, or the address might be mistyped.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href={ctaNav.href} variant="outline">
            {ctaNav.title}
          </ButtonLink>
        </div>

        <nav aria-label="Popular pages" className="mt-12 w-full">
          <p className="text-sm font-semibold">Popular pages</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-brand-light"
                >
                  {item.title}
                  <ArrowRightIcon
                    className="size-4 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  );
}
