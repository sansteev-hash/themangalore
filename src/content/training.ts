import {
  BriefcaseIcon,
  Building2Icon,
  GraduationCapIcon,
  LaptopIcon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react";

/** All text on the Training page. */
export const trainingContent = {
  hero: {
    eyebrow: "AI training & education",
    title: "Learn to use AI with confidence",
    description:
      "Practical, hands-on AI programs for business teams, working professionals and students — taught by people who build AI solutions every day.",
    cta: { title: "Enquire about training", href: "/contact" },
  },

  programs: {
    eyebrow: "Programs",
    title: "Training for every stage",
    items: [
      {
        title: "Corporate workshops",
        audience: "For business teams",
        description:
          "Tailored workshops that help your team use AI tools in their daily work and spot automation opportunities in your business.",
        points: [
          "Customised to your industry and tools",
          "On-site or online",
          "Leadership and hands-on tracks",
        ],
        icon: Building2Icon,
      },
      {
        title: "Professional courses",
        audience: "For working professionals",
        description:
          "Structured courses to build job-ready AI skills — from using AI assistants effectively to creating your own AI-powered workflows.",
        points: [
          "Real-world projects",
          "Flexible schedules",
          "Beginner to advanced levels",
        ],
        icon: BriefcaseIcon,
      },
      {
        title: "Student programs",
        audience: "For students & graduates",
        description:
          "Programs that prepare students for an AI-driven job market with practical skills employers are looking for.",
        points: [
          "Hands-on, project-based learning",
          "Career-focused curriculum",
          "Programs for colleges and institutions",
        ],
        icon: GraduationCapIcon,
      },
    ],
  },

  topics: {
    eyebrow: "What you'll learn",
    title: "Topics we cover",
    description:
      "Every program is built from practical modules like these, matched to your goals and experience.",
    items: [
      "AI fundamentals — what it can and can't do",
      "Prompt engineering for better results",
      "AI tools for productivity and content",
      "Automating workflows with AI",
      "Building AI agents and assistants",
      "AI for marketing and sales",
      "Responsible and safe use of AI",
      "Data basics for AI projects",
    ],
  },

  formats: {
    eyebrow: "How we teach",
    title: "Flexible learning formats",
    items: [
      {
        title: "In person",
        description: "Interactive sessions in Mangalore or at your location.",
        icon: MapPinIcon,
      },
      {
        title: "Online",
        description:
          "Live, instructor-led sessions you can join from anywhere.",
        icon: LaptopIcon,
      },
      {
        title: "Small groups",
        description:
          "Focused groups so every participant gets hands-on practice and support.",
        icon: UsersIcon,
      },
    ],
  },

  faqs: [
    {
      question: "Do I need a technical background?",
      answer:
        "No. Most of our programs start from the basics and focus on practical use. Advanced tracks for developers are also available.",
    },
    {
      question: "Can you create a program for our company?",
      answer:
        "Yes. Corporate workshops are tailored to your team, industry and the tools you already use.",
    },
    {
      question: "How do I find out about upcoming batches?",
      answer:
        "Get in touch and tell us what you're interested in — we'll share upcoming programs and help you choose the right one.",
    },
  ],

  cta: {
    title: "Ready to upskill your team — or yourself?",
    description:
      "Tell us who the training is for and what you'd like to achieve. We'll recommend the right program.",
  },
};
