import {
  CalendarCheckIcon,
  FileTextIcon,
  MessageSquareIcon,
} from "lucide-react";

/** All text on the Contact page. (The enquiry form is added in Milestone 6.) */
export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about what you want to build",
    description:
      "Whether it's an AI agent, a SaaS product, a website, marketing or training — tell us a little about your goals and we'll take it from there.",
  },

  nextSteps: {
    title: "What happens next",
    steps: [
      {
        title: "You get in touch",
        description: "Send us a short message about your idea or challenge.",
        icon: MessageSquareIcon,
      },
      {
        title: "We talk it through",
        description:
          "We'll arrange a call to understand your goals, users and timeline.",
        icon: CalendarCheckIcon,
      },
      {
        title: "You get a clear plan",
        description:
          "We recommend practical next steps and a proposal — with no obligation.",
        icon: FileTextIcon,
      },
    ],
  },
};
