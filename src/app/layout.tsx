import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import { JsonLd } from "@/components/shared/json-ld";
import { defaultTitle } from "@/lib/seo";
import { organizationSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  // Fallback for pages without their own pageMetadata() (e.g. 404).
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}
