import { cacheLife } from "next/cache";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { footerNav, legalNav } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";

/**
 * The year is cached (refreshed daily) so the footer can still be prerendered
 * as static HTML while rolling over to the new year automatically.
 */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  const { street, city, region, country } = siteConfig.location;

  return (
    // "dark" switches every colour inside the footer to the midnight-navy theme.
    <footer className="dark bg-background text-foreground">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm font-medium text-brand-light">
              {siteConfig.tagline}
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              AI-first technology company building agents, software and skills
              for growing businesses.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.value}`}
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <PhoneIcon className="size-4 shrink-0" aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <MailIcon className="size-4 shrink-0" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <address className="flex gap-2 text-sm text-muted-foreground not-italic">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>
                    {street},
                    <br />
                    {city}, {region}, {country}
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
