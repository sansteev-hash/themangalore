import {
  BotIcon,
  CodeXmlIcon,
  LayersIcon,
  MegaphoneIcon,
  type LucideIcon,
} from "lucide-react";

/**
 * The single list of services. The home page, footer and (from Milestone 3)
 * the service detail pages all read from here.
 */
export type Service = {
  slug: string;
  /** Full name, used in headings. */
  title: string;
  /** Short name, used in menus and the footer. */
  navTitle: string;
  summary: string;
  highlights: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ai-agents",
    title: "AI Agent Development",
    navTitle: "AI Agents",
    summary:
      "Custom AI agents that answer customers, qualify leads and take repetitive work off your team — around the clock.",
    highlights: [
      "Customer support & sales assistants",
      "Workflow & back-office automation",
      "Connected to the tools you already use",
    ],
    icon: BotIcon,
  },
  {
    slug: "saas-development",
    title: "Custom SaaS Development",
    navTitle: "SaaS Development",
    summary:
      "Secure, scalable cloud software designed around how your business works — from first MVP to full product.",
    highlights: [
      "MVPs and product launches",
      "Dashboards, portals & internal tools",
      "Subscriptions & multi-tenant apps",
    ],
    icon: LayersIcon,
  },
  {
    slug: "web-development",
    title: "Websites & Web Apps",
    navTitle: "Web Development",
    summary:
      "Fast, search-friendly websites and web applications that look premium on every screen size.",
    highlights: [
      "Business & marketing websites",
      "E-commerce & booking experiences",
      "Performance and SEO built in",
    ],
    icon: CodeXmlIcon,
  },
  {
    slug: "ai-marketing",
    title: "AI-Powered Digital Marketing",
    navTitle: "AI Marketing",
    summary:
      "Data-driven campaigns, content and automation that turn online attention into paying customers.",
    highlights: [
      "SEO & content strategy",
      "Paid ads & social campaigns",
      "Marketing automation & analytics",
    ],
    icon: MegaphoneIcon,
  },
];

export const serviceHref = (slug: string) => `/services/${slug}`;
