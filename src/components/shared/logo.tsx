import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text wordmark. Swap the contents for an SVG/Image once the final logo is ready —
 * every place that shows the logo uses this component.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TheMangalore.in — home"
      className={cn(
        "rounded-md text-xl font-bold tracking-tight text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      TheMangalore
      <span className="text-primary dark:text-brand-light">.in</span>
    </Link>
  );
}
