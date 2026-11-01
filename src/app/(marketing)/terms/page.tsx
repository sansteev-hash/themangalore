import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/legal-document";
import { termsOfUse } from "@/content/legal";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: termsOfUse.description,
};

export default function TermsPage() {
  return <LegalDocument document={termsOfUse} />;
}
