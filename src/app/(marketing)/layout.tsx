import { SiteShell } from "@/components/layout/site-shell";

/** Shared header + footer for all public marketing pages. */
export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return <SiteShell>{children}</SiteShell>;
}
