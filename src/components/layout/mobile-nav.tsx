"use client";

import { lazy, Suspense, useRef, useState } from "react";
import { MenuIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";

// The menu panel (and its dialog library) is downloaded only when needed.
// Calling loadSheet() early — on hover, focus or touch — makes it open instantly.
const loadSheet = () => import("./mobile-nav-sheet");
const MobileNavSheet = lazy(loadSheet);

/** Menu button shown below the md breakpoint (phones and small tablets). */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={loadSheet}
        onTouchStart={loadSheet}
        onFocus={loadSheet}
        onClick={() => {
          setRequested(true);
          setOpen(true);
        }}
        className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
      >
        <MenuIcon className="size-5" aria-hidden />
      </button>

      {requested && (
        <Suspense fallback={null}>
          <MobileNavSheet
            open={open}
            onOpenChange={setOpen}
            returnFocusTo={buttonRef}
          />
        </Suspense>
      )}
    </>
  );
}
