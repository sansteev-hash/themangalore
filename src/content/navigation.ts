/**
 * Every link in the header, mobile menu and footer comes from here,
 * so they always stay in sync. Add or rename pages in this one file.
 */
export type NavItem = {
  title: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "Training", href: "/training" },
  { title: "Products", href: "/products" },
  { title: "About", href: "/about" },
];

export const ctaNav: NavItem = { title: "Get in touch", href: "/contact" };

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { title: "AI Agents", href: "/services/ai-agents" },
      { title: "SaaS Development", href: "/services/saas-development" },
      { title: "Web Development", href: "/services/web-development" },
      { title: "AI Marketing", href: "/services/ai-marketing" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Training", href: "/training" },
      { title: "Products", href: "/products" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];
