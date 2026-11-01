import { CtaBand } from "@/components/sections/cta-band";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { PageHero } from "@/components/sections/page-hero";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { productsContent } from "@/content/products";
import { isFormsEnabled } from "@/lib/forms/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description: productsContent.hero.description,
  path: "/products",
});

export default function ProductsPage() {
  const { hero, principles, waitlist } = productsContent;
  const formsEnabled = isFormsEnabled();

  return (
    <>
      <PageHero
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Products" }]}
        {...hero}
      />
      <IconCardGrid {...principles} columns={4} />
      {/* While forms are switched off, the waitlist falls back to the contact page. */}
      <CtaBand
        title={waitlist.title}
        description={
          formsEnabled ? waitlist.formDescription : waitlist.description
        }
        primary={waitlist.cta}
      >
        {formsEnabled ? <WaitlistForm /> : undefined}
      </CtaBand>
    </>
  );
}
