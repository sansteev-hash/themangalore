import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
};

/**
 * A page section with consistent vertical spacing and a centered container.
 * Add className="dark" for a midnight-navy section.
 */
export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("bg-background py-16 text-foreground sm:py-24", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
