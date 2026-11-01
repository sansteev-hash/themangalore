import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sizes = {
  md: "h-9 px-4",
  lg: "h-11 px-6 text-base",
};

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: keyof typeof sizes;
};

/** A link that looks like a button. Use it whenever a "button" goes to another page. */
export function ButtonLink({
  variant = "default",
  size = "lg",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size: "lg" }),
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
