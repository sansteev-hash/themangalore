import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";

// Temporary placeholder — replaced by the real home page in Milestone 2.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        AI-first technology company
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        {siteConfig.tagline}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button size="lg">Primary</Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
      </div>
    </main>
  );
}
