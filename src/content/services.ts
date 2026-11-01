import {
  BotIcon,
  CodeXmlIcon,
  LayersIcon,
  MegaphoneIcon,
  type LucideIcon,
} from "lucide-react";

/**
 * The single list of services. The home page, footer, services overview and
 * each service detail page (/services/[slug]) all read from here.
 * To add a service, add an object to the list — its page is created automatically.
 */
export type Service = {
  slug: string;
  /** Full name, used in headings. */
  title: string;
  /** Short name, used in menus and the footer. */
  navTitle: string;
  /** One or two sentences for cards and search results. */
  summary: string;
  highlights: string[];
  icon: LucideIcon;
  /** Longer introduction at the top of the service page. */
  intro: string;
  features: { title: string; description: string }[];
  audience: string[];
  faqs: { question: string; answer: string }[];
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
    intro:
      "We design and build AI agents that understand your business, talk to your customers and complete real tasks — so your team can focus on the work that needs a human.",
    features: [
      {
        title: "Customer support agents",
        description:
          "Answer common questions instantly on your website, WhatsApp or email, and hand over to your team when needed.",
      },
      {
        title: "Sales & lead qualification",
        description:
          "Engage every enquiry, ask the right questions and send qualified leads straight to your CRM.",
      },
      {
        title: "Workflow automation",
        description:
          "Automate repetitive back-office tasks like data entry, document processing, scheduling and reporting.",
      },
      {
        title: "Knowledge assistants",
        description:
          "Give your team an assistant that answers questions from your own documents, policies and data.",
      },
    ],
    audience: [
      "Businesses receiving more enquiries than the team can answer quickly",
      "Teams spending hours on repetitive, rule-based tasks",
      "Companies that want to offer 24/7 customer service",
      "Organisations with knowledge spread across many documents",
    ],
    faqs: [
      {
        question: "Will an AI agent replace my team?",
        answer:
          "No — agents take care of repetitive, high-volume work so your people can focus on complex conversations and decisions. Agents are designed to hand over to a human whenever needed.",
      },
      {
        question: "Can the agent work with our existing tools?",
        answer:
          "Yes. We connect agents to the systems you already use, such as your website, CRM, email, spreadsheets or helpdesk, so they fit into your current way of working.",
      },
      {
        question: "How do you keep our data safe?",
        answer:
          "We follow security best practices: agents only access the data they need, secrets are never exposed, and we agree data-handling rules with you before anything goes live.",
      },
    ],
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
    intro:
      "From a first MVP to a full product, we build cloud software that's secure, scalable and designed around the way your users actually work — with AI built in where it adds value.",
    features: [
      {
        title: "MVP development",
        description:
          "Turn your idea into a working product quickly, so you can test it with real users and learn fast.",
      },
      {
        title: "Dashboards & portals",
        description:
          "Customer portals, admin dashboards and internal tools that replace spreadsheets and manual processes.",
      },
      {
        title: "Subscriptions & multi-tenancy",
        description:
          "User accounts, roles, subscription billing and separate workspaces for each of your customers.",
      },
      {
        title: "AI-powered features",
        description:
          "Smart search, summaries, recommendations and assistants built directly into your product.",
      },
    ],
    audience: [
      "Founders validating a new software product idea",
      "Businesses outgrowing spreadsheets and manual processes",
      "Companies that want to turn their expertise into a subscription product",
      "Teams modernising an older application",
    ],
    faqs: [
      {
        question: "Do you build the whole product or just part of it?",
        answer:
          "Either. We can take a product from idea to launch, or join at any stage — design, development, AI features or scaling an existing app.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. The code, designs and data belong to you, and we use a clear project structure so any developer can maintain it in future.",
      },
      {
        question: "Can you support the product after launch?",
        answer:
          "Yes. We offer ongoing support, monitoring and improvements so your product keeps growing with your users.",
      },
    ],
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
    intro:
      "We build modern websites and web applications that load fast, rank well on search engines and turn visitors into customers — on every device.",
    features: [
      {
        title: "Business & marketing websites",
        description:
          "Premium, responsive websites that clearly explain what you do and make it easy for customers to get in touch.",
      },
      {
        title: "E-commerce & bookings",
        description:
          "Online stores, booking systems and payment flows that are simple for customers and easy for you to manage.",
      },
      {
        title: "Web applications",
        description:
          "Interactive tools, calculators, member areas and custom features built for your business.",
      },
      {
        title: "Performance & SEO",
        description:
          "Fast loading, accessible and search-engine-friendly from day one, so more people find you.",
      },
    ],
    audience: [
      "New businesses that need a professional online presence",
      "Companies whose current website is slow, dated or hard to update",
      "Shops and service providers ready to sell or take bookings online",
      "Teams that need a custom web tool for customers or staff",
    ],
    faqs: [
      {
        question: "Will my website work well on mobile phones?",
        answer:
          "Yes. Every site we build is designed mobile-first and tested on phones, tablets and desktops.",
      },
      {
        question: "Can I update the content myself?",
        answer:
          "Yes. We can set up an easy way for your team to edit text and images, or handle updates for you — whichever suits you best.",
      },
      {
        question: "Do you help with search engine optimisation (SEO)?",
        answer:
          "Yes. Technical SEO — speed, structure, metadata and more — is built into every site, and our AI marketing team can help with content and ongoing growth.",
      },
    ],
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
    intro:
      "We combine marketing expertise with AI tools to reach the right people, create content faster and measure what really drives growth.",
    features: [
      {
        title: "SEO & content",
        description:
          "Keyword research, content planning and AI-assisted writing that helps you rank and build trust.",
      },
      {
        title: "Paid advertising",
        description:
          "Targeted Google, Meta and LinkedIn campaigns, continuously optimised to make every rupee count.",
      },
      {
        title: "Social media",
        description:
          "Consistent, on-brand social content and campaigns that grow your audience and engagement.",
      },
      {
        title: "Automation & analytics",
        description:
          "Email and lead-nurturing automation, plus clear dashboards that show what's working.",
      },
    ],
    audience: [
      "Businesses that want more leads from their website",
      "Brands posting on social media without clear results",
      "Teams that want to use AI to produce content faster",
      "Companies that need clearer reporting on marketing spend",
    ],
    faqs: [
      {
        question: "How does AI improve marketing?",
        answer:
          "AI helps us research audiences, produce and test content faster, and spot patterns in your data — while people stay in charge of strategy, brand and quality.",
      },
      {
        question: "Which channels do you work with?",
        answer:
          "Search (SEO and Google Ads), social media, email and your website. We recommend a mix based on your goals and budget.",
      },
      {
        question: "How will I know it's working?",
        answer:
          "We agree clear goals at the start and share simple, regular reports on leads, traffic and return on spend.",
      },
    ],
  },
];

export const serviceHref = (slug: string) => `/services/${slug}`;

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
