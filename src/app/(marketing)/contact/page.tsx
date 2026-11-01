import { MailIcon, MapPinIcon } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedServices } from "@/components/sections/service/related-services";
import { Section } from "@/components/shared/section";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about AI agents, SaaS development, websites, AI marketing or AI training.`,
  path: "/contact",
});

// The enquiry form will be added to the left column in Milestone 6.
export default function ContactPage() {
  const { hero, nextSteps } = contactContent;
  const { city, region, country } = siteConfig.location;

  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Contact" }]}
        {...hero}
      />

      <Section containerClassName="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Reach us</h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-2xl border bg-card p-6 transition-colors outline-none hover:border-brand-light focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <MailIcon className="size-6" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-muted-foreground">
                Email us
              </span>
              <span className="font-semibold group-hover:text-primary">
                {siteConfig.email}
              </span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border bg-card p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <MapPinIcon className="size-6" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-muted-foreground">
                Based in
              </span>
              <span className="font-semibold">
                {city}, {region}, {country}
              </span>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {nextSteps.title}
          </h2>
          <ol className="mt-6 flex flex-col gap-6">
            {nextSteps.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <RelatedServices title="Explore what we do" className="bg-secondary/50" />
    </>
  );
}
