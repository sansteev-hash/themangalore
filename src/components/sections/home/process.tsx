import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/content/home";

export function Process() {
  const { eyebrow, title, steps } = homeContent.process;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-5" aria-hidden />
              </span>
              {/* Connector line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden h-px flex-1 bg-linear-to-r from-brand-light to-transparent lg:block"
                />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
