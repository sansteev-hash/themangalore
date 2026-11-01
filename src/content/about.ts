import { CompassIcon, EyeIcon, HeartHandshakeIcon } from "lucide-react";

/** All text on the About page. */
export const aboutContent = {
  hero: {
    eyebrow: "About us",
    title: "An AI-first technology company from Mangalore",
    description:
      "We help businesses use artificial intelligence and modern software to work smarter, serve customers better and grow faster.",
  },

  story: {
    eyebrow: "Who we are",
    title: "Built for the AI era",
    paragraphs: [
      "TheMangalore.in was started with a simple belief: AI should be practical, affordable and useful for every business — not only for large enterprises.",
      "We bring together software engineering, AI and digital marketing in one team. That means one partner can take you from an idea to a working product, and then help you grow it.",
      "We're proud to be based in Mangalore, and we work with clients across India and around the world with the standards of a global technology company.",
    ],
  },

  pillars: [
    {
      title: "Our mission",
      description:
        "To make AI and modern software accessible to every business, so they can build smarter and grow faster.",
      icon: CompassIcon,
    },
    {
      title: "Our vision",
      description:
        "A future where businesses of every size use AI confidently — and where Mangalore is known for world-class technology.",
      icon: EyeIcon,
    },
    {
      title: "How we work",
      description:
        "Honest advice, small and testable milestones, clean code you own, and long-term partnership over one-off projects.",
      icon: HeartHandshakeIcon,
    },
  ],

  values: {
    eyebrow: "What we believe",
    title: "Principles behind every project",
    items: [
      {
        title: "Practical over hype",
        description:
          "We use AI where it delivers real value, and tell you honestly when a simpler solution is better.",
      },
      {
        title: "Quality you can rely on",
        description:
          "Secure, tested and maintainable work built on proven technology.",
      },
      {
        title: "Clear communication",
        description:
          "No jargon. Regular updates and demos so you always know where your project stands.",
      },
      {
        title: "Always learning",
        description:
          "AI changes fast. We keep learning — and teach what we learn through our training programs.",
      },
    ],
  },

  cta: {
    title: "Let's build something smarter together",
    description:
      "Whether you have a clear plan or just an idea, we'd love to hear about it.",
  },
};
