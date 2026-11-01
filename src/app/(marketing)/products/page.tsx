import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { PageHero } from "@/components/sections/page-hero";
import { productsContent } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description: productsContent.hero.description,
};

// The waitlist links to the contact page for now; a dedicated signup form
// backed by Supabase replaces it in Milestone 7.
export default function ProductsPage() {
  const { hero, principles, waitlist } = productsContent;

  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Products" }]}
        {...hero}
      />
      <IconCardGrid {...principles} columns={4} />
      <CtaBand
        title={waitlist.title}
        description={waitlist.description}
        primary={waitlist.cta}
      />
    </>
  );
}
