import {
  GlobeIcon,
  GraduationCapIcon,
  HammerIcon,
  PenToolIcon,
  RocketIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

/** All text on the home page. Edit wording here, not in the components. */
export const homeContent = {
  hero: {
    eyebrow: "AI-first technology company · Mangalore, India",
    titleLead: "Build Smarter.",
    titleHighlight: "Grow Faster.",
    description:
      "We help businesses put AI to work — with custom AI agents, SaaS products, high-performance websites, AI-powered marketing and hands-on AI training.",
    primaryCta: { title: "Start a project", href: "/contact" },
    secondaryCta: { title: "Explore services", href: "/services" },
    agentDemo: {
      name: "Lead Assistant",
      steps: [
        { label: "New enquiry received from website", done: true },
        { label: "Request understood: website + SEO", done: true },
        { label: "Lead qualified and added to CRM", done: true },
        { label: "Sending a personalised follow-up…", done: false },
      ],
    },
  },

  services: {
    eyebrow: "What we do",
    title: "AI, software and growth — under one roof",
    description:
      "One team to design, build and grow your digital products, with AI at the core of everything we deliver.",
  },

  whyUs: {
    eyebrow: "Why TheMangalore.in",
    title: "A technology partner built for the AI era",
    description:
      "We combine modern engineering with practical AI so you get results you can measure — not just experiments.",
    points: [
      {
        title: "AI-first by default",
        description:
          "Every solution is designed to use AI where it adds real value — saving time, cutting costs and opening new opportunities.",
        icon: SparklesIcon,
      },
      {
        title: "Fast, focused delivery",
        description:
          "We ship in small, working milestones so you see progress early and can change direction without waste.",
        icon: ZapIcon,
      },
      {
        title: "Secure and reliable",
        description:
          "Modern, proven technology with security best practices built in from day one — not bolted on later.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Local team, global standards",
        description:
          "Based in Mangalore and working with clients everywhere, with the quality of a global technology startup.",
        icon: GlobeIcon,
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    title: "From idea to impact in four steps",
    steps: [
      {
        title: "Discover",
        description:
          "We learn your goals, users and processes, and find where AI and software can make the biggest difference.",
        icon: SearchIcon,
      },
      {
        title: "Design",
        description:
          "We plan the solution and design a clear, modern experience — agreed with you before we build.",
        icon: PenToolIcon,
      },
      {
        title: "Build",
        description:
          "We develop in short, testable milestones with regular demos, so there are no surprises.",
        icon: HammerIcon,
      },
      {
        title: "Grow",
        description:
          "We launch, measure and keep improving — with marketing and support to help you scale.",
        icon: TrendingUpIcon,
      },
    ],
  },

  training: {
    title: "AI Training & Education",
    description:
      "Practical, hands-on AI programs that help people use AI tools confidently and build with them.",
    points: [
      "Workshops for business teams",
      "Courses for working professionals",
      "Programs for students",
    ],
    cta: { title: "Explore training", href: "/training" },
    icon: GraduationCapIcon,
  },

  products: {
    badge: "Coming soon",
    title: "Our SaaS Products",
    description:
      "We're building our own AI-powered software products for growing businesses. Be the first to know when they launch.",
    cta: { title: "Join the waitlist", href: "/products" },
    icon: RocketIcon,
  },

  cta: {
    title: "Ready to build smarter?",
    description:
      "Tell us what you want to build or improve. We'll come back with practical next steps — no jargon, no obligation.",
  },
};
