"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** True when `href` is the current page or one of its sub-pages. */
export function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** A navigation link that highlights itself (and sets aria-current) on its own page. */
export function NavLink({
  href,
  className,
  activeClassName,
  ...props
}: React.ComponentProps<typeof Link> & {
  href: string;
  activeClassName?: string;
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active && activeClassName)}
      {...props}
    />
  );
}
