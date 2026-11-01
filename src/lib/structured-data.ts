import type { Breadcrumb } from "@/components/sections/page-hero";
import type { Service } from "@/content/services";
import { siteConfig } from "@/content/site-config";

/**
 * schema.org structured data builders. Test output with Google's
 * Rich Results Test (https://search.google.com/test/rich-results).
 */
const { url, name, description, email, location } = siteConfig;

const organizationId = `${url}/#organization`;

/** The company itself — shown on every page via the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name,
    url,
    logo: `${url}/icon/large`,
    description,
    email,
    slogan: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
  };
}

/** The website — helps search engines show the site name in results. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    publisher: { "@id": organizationId },
  };
}

/** Breadcrumb trail matching the visible breadcrumbs in PageHero. */
export function breadcrumbSchema(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.title,
      ...(crumb.href && {
        item: `${url}${crumb.href === "/" ? "" : crumb.href}`,
      }),
    })),
  };
}

/** One service offered by the company. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.navTitle,
    description: service.intro,
    url: `${url}/services/${service.slug}`,
    provider: { "@id": organizationId },
    areaServed: "Worldwide",
  };
}

/** Frequently asked questions shown on the page. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
