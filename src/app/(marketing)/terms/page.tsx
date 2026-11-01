import { LegalDocument } from "@/components/sections/legal-document";
import { termsOfUse } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: termsOfUse.title,
  description: termsOfUse.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocument document={termsOfUse} />;
}
