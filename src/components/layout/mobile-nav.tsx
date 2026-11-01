"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ctaNav, mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";
import { NavLink } from "./nav-link";

/** Slide-in menu shown below the md breakpoint (phones and small tablets). */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon-lg" aria-label="Open menu" />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
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
          <Link
            href={ctaNav.href}
            onClick={close}
            className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
          >
            {ctaNav.title}
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
