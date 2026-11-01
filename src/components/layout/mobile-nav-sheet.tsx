"use client";

import { ButtonLink } from "@/components/shared/button-link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ctaNav, mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import { NavLink } from "./nav-link";

type MobileNavSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Where keyboard focus returns when the menu closes (the menu button). */
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
};

/**
 * The slide-in menu panel. Loaded on demand by MobileNav, so the dialog
 * library isn't downloaded or run until a visitor actually needs the menu.
 */
export default function MobileNavSheet({
  open,
  onOpenChange,
  returnFocusTo,
}: MobileNavSheetProps) {
  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full max-w-xs"
        finalFocus={returnFocusTo}
      >
        <SheetHeader className="border-b">
          <SheetTitle className="text-lg font-bold">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-2">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent"
              activeClassName="bg-accent text-primary"
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <SheetFooter>
          <ButtonLink href={ctaNav.href} onClick={close} className="w-full">
            {ctaNav.title}
          </ButtonLink>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
