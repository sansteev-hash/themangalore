import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
  /**
   * Fade content in as it scrolls into view (CSS only, see `reveal` in
   * globals.css). Turn off for sections with absolutely positioned
   * decoration, since the moving container would become their anchor.
   */
  reveal?: boolean;
};

/**
 * A page section with consistent vertical spacing and a centered container.
 * Add className="dark" for a midnight-navy section.
 */
export function Section({
  className,
  containerClassName,
  reveal = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("bg-background py-16 text-foreground sm:py-24", className)}
      {...props}
    >
      <Container className={cn(reveal && "reveal", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
