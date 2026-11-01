"use client";

import { useActionState } from "react";
import { CircleCheckIcon, LoaderCircleIcon } from "lucide-react";
import { joinWaitlist } from "@/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { WaitlistFormState } from "@/lib/waitlist/types";
import { HoneypotField } from "./honeypot-field";

const initialState: WaitlistFormState = { status: "idle" };

/** One-field email signup for product launch updates. */
export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="flex items-center justify-center gap-2 rounded-xl border border-brand-light/40 bg-brand-blue/10 px-5 py-4 font-medium"
      >
        <CircleCheckIcon className="size-5 text-brand-light" aria-hidden />
        You&apos;re on the list — we&apos;ll email you when we launch.
      </p>
    );
  }

  const error = state.status === "error" ? state : undefined;
  const emailError = error?.fieldErrors?.email ?? error?.message;

  return (
    <form action={formAction} className="relative w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@company.com"
          defaultValue={error?.values?.email}
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? "waitlist-error" : undefined}
          className="h-11 flex-1 bg-background px-3"
        />
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-11 px-6 text-base"
        >
          {pending && <LoaderCircleIcon className="animate-spin" aria-hidden />}
          {pending ? "Joining…" : "Join the waitlist"}
        </Button>
      </div>
      {emailError && (
        <p
          id="waitlist-error"
          role="alert"
          className="mt-2 text-left text-sm text-destructive"
        >
          {emailError}
        </p>
      )}
      <HoneypotField />
    </form>
  );
}
