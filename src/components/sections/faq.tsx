import { PlusIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqSchema } from "@/lib/structured-data";

type FaqProps = {
  title?: string;
  faqs: { question: string; answer: string }[];
};

/**
 * Frequently asked questions. Uses the browser's built-in <details> element,
 * so it opens/closes with no JavaScript and works with keyboards and screen readers.
 */
export function Faq({ title = "Frequently asked questions", faqs }: FaqProps) {
  return (
    <Section containerClassName="max-w-3xl">
      <JsonLd data={faqSchema(faqs)} />
      <SectionHeading eyebrow="FAQ" title={title} />

      <div className="mt-10 divide-y rounded-2xl border bg-card">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <PlusIcon
                className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="pb-5 text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
