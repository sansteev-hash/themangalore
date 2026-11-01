import { BotIcon, CircleCheckIcon, LoaderCircleIcon } from "lucide-react";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

/** Illustration of an AI agent handling a lead. Built in HTML so it stays crisp and light. */
export function AgentDemoCard({ className }: { className?: string }) {
  const { name, steps } = homeContent.hero.agentDemo;

  return (
    <figure
      className={cn(
        "rounded-2xl border bg-card/80 p-5 shadow-2xl shadow-brand-blue/10 backdrop-blur sm:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <BotIcon className="size-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">AI agent</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Live
        </span>
      </div>

      <ol className="mt-6 flex flex-col gap-3">
        {steps.map((step) => (
          <li
            key={step.label}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm",
              step.done
                ? "bg-secondary/60"
                : "border-brand-light/40 bg-brand-blue/10",
            )}
          >
            {step.done ? (
              <CircleCheckIcon
                className="size-4 shrink-0 text-brand-light"
                aria-hidden
              />
            ) : (
              <LoaderCircleIcon
                className="size-4 shrink-0 animate-spin text-brand-light motion-reduce:animate-none"
                aria-hidden
              />
            )}
            <span>{step.label}</span>
          </li>
        ))}
      </ol>

      <figcaption className="sr-only">
        Example of an AI agent automatically handling a new website enquiry.
      </figcaption>
    </figure>
  );
}
