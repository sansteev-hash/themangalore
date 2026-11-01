import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

// Temporary placeholder — replaced by the real home page in Milestone 2.
export default function Home() {
  return (
    <>
      <Section className="flex flex-1 items-center">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            as="h1"
            eyebrow="AI-first technology company"
            title={siteConfig.name}
            description={siteConfig.tagline}
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6",
              )}
            >
              Our services
            </Link>
          </div>
        </div>
      </Section>

      <Section className="dark">
        <SectionHeading
          eyebrow="Design system preview"
          title="Dark sections in one class"
          description='Any Section with className="dark" switches to the midnight-navy theme.'
        />
      </Section>
    </>
  );
}
