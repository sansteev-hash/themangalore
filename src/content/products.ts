import { BotIcon, LineChartIcon, PlugIcon, WalletIcon } from "lucide-react";

/** All text on the Products page. */
export const productsContent = {
  hero: {
    eyebrow: "Our products · Coming soon",
    title: "AI-powered software for growing businesses",
    description:
      "Alongside our client work, we're building our own SaaS products — designed to give small and growing businesses the kind of AI tools that used to be available only to large companies.",
  },

  principles: {
    eyebrow: "What we're building",
    title: "Products designed around real business needs",
    description:
      "Our products are shaped by what we learn every day building AI solutions for clients.",
    items: [
      {
        title: "AI at the core",
        description:
          "Assistants and automation built in from the start, not added as an afterthought.",
        icon: BotIcon,
      },
      {
        title: "Simple to start",
        description:
          "Easy setup and a clean experience — no technical team required.",
        icon: PlugIcon,
      },
      {
        title: "Affordable plans",
        description:
          "Pricing that makes sense for small and growing businesses.",
        icon: WalletIcon,
      },
      {
        title: "Clear results",
        description:
          "Dashboards that show the time saved and the growth you're getting.",
        icon: LineChartIcon,
      },
    ],
  },

  waitlist: {
    title: "Be the first to know",
    description:
      "Our first products are in development. Get in touch to join the early-access list and help shape what we build.",
    cta: { title: "Join the waitlist", href: "/contact" },
  },
};
