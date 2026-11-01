import { CtaBand } from "@/components/sections/cta-band";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedServices } from "@/components/sections/service/related-services";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: aboutContent.hero.description,
  path: "/about",
});

export default function AboutPage() {
  const { hero, story, pillars, values, cta } = aboutContent;

  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "About" }]}
        {...hero}
      />

      <Section containerClassName="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow={story.eyebrow}
          title={story.title}
        />
        <div className="flex flex-col gap-5 text-lg text-muted-foreground">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <IconCardGrid
        title="Mission, vision and approach"
        items={pillars}
        className="bg-secondary/50"
      />

      <Section>
        <SectionHeading eyebrow={values.eyebrow} title={values.title} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((value, index) => (
            <li key={value.title} className="border-t-2 border-primary pt-5">
              <span className="text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <RelatedServices title="What we do" />

      <CtaBand {...cta} />
    </>
  );
}
