import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

type IconCardGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: { title: string; description: string; icon: LucideIcon }[];
  columns?: 3 | 4;
  className?: string;
};

/** A heading followed by a grid of icon cards. Used across inner pages. */
export function IconCardGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  className,
}: IconCardGridProps) {
  return (
    <Section className={className}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <ul
        className={cn(
          "mt-12 grid gap-6 sm:grid-cols-2",
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {items.map((item) => (
          <li key={item.title} className="rounded-2xl border bg-card p-6">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
              <item.icon className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
