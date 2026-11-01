import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/shared/section";
import type { LegalDocument as LegalDocumentData } from "@/content/legal";

/** Renders a privacy policy / terms document with readable long-form typography. */
export function LegalDocument({ document }: { document: LegalDocumentData }) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: document.title }]}
        title={document.title}
        description={`Last updated: ${document.lastUpdated}`}
      />
      <Section containerClassName="max-w-3xl">
        <article className="flex flex-col gap-10 text-muted-foreground">
          <p className="text-lg">{document.intro}</p>
          {document.sections.map((section, index) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-foreground">
                {index + 1}. {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-primary">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </Section>
    </>
  );
}
