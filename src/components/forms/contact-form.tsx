"use client";

import { useActionState } from "react";
import Link from "next/link";
import { CircleCheckIcon, LoaderCircleIcon, SendIcon } from "lucide-react";
import { submitContactForm } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactLimits,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact/types";
import { HoneypotField } from "./honeypot-field";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  interestOptions: { value: string; label: string }[];
};

const initialState: ContactFormState = { status: "idle" };

const fieldClass = "h-11 bg-background px-3";

/**
 * Enquiry form. Works without JavaScript (plain form post); with JavaScript
 * it shows pending, error and success states without reloading the page.
 */
export function ContactForm({ interestOptions }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-10 text-center"
      >
        <CircleCheckIcon className="size-12 text-primary" aria-hidden />
        <h2 className="text-2xl font-bold tracking-tight">
          Thank you — message received!
        </h2>
        <p className="text-muted-foreground">
          We&apos;ll review your enquiry and get back to you soon.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;
  const values = state.status === "error" ? state.values : undefined;

  // Accessible error wiring for one field: links the message to the input.
  const errorProps = (field: ContactField) =>
    errors?.[field]
      ? { "aria-invalid": true, "aria-describedby": `${field}-error` }
      : {};

  const errorText = (field: ContactField) =>
    errors?.[field] ? (
      <p id={`${field}-error`} className="text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-2xl border bg-card p-6 sm:p-8"
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Fields marked * are required.
        </p>
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={contactLimits.name.min}
            maxLength={contactLimits.name.max}
            defaultValue={values?.name}
            className={fieldClass}
            {...errorProps("name")}
          />
          {errorText("name")}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={contactLimits.email.max}
            defaultValue={values?.email}
            className={fieldClass}
            {...errorProps("email")}
          />
          {errorText("email")}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={contactLimits.phone.max}
            defaultValue={values?.phone}
            className={fieldClass}
            {...errorProps("phone")}
          />
          {errorText("phone")}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={contactLimits.company.max}
            defaultValue={values?.company}
            className={fieldClass}
            {...errorProps("company")}
          />
          {errorText("company")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="interest">What are you interested in? *</Label>
        <select
          // A <select> only reads defaultValue when it first mounts, so remount
          // it with the submitted choice after an error (inputs don't need this).
          key={values?.interest ?? ""}
          id="interest"
          name="interest"
          required
          defaultValue={values?.interest ?? ""}
          className={cn(
            fieldClass,
            "w-full rounded-lg border border-input text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm",
          )}
          {...errorProps("interest")}
        >
          <option value="" disabled>
            Choose an option
          </option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorText("interest")}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={contactLimits.message.min}
          maxLength={contactLimits.message.max}
          placeholder="Tell us about your project, goals or questions."
          defaultValue={values?.message}
          className="min-h-32 bg-background px-3 py-2.5"
          {...errorProps("message")}
        />
        {errorText("message")}
      </div>

      <HoneypotField />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By sending this form you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            privacy policy
          </Link>
          .
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-11 px-6 text-base"
        >
          {pending ? (
            <>
              <LoaderCircleIcon className="animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              <SendIcon aria-hidden />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
