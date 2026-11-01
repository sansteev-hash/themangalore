import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { ctaNav, mainNav } from "@/content/navigation";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-primary hover:text-primary"
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={ctaNav.href}
            size="md"
            className="hidden md:inline-flex"
          >
            {ctaNav.title}
          </ButtonLink>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
