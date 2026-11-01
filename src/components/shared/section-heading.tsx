import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use "h1" once per page (the main page title); "h2" everywhere else. */
  as?: "h1" | "h2";
  className?: string;
};

/** Small label + title + supporting text, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-primary uppercase dark:text-brand-light">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "font-heading font-bold tracking-tight text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-lg text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
