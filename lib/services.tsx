import { SiApple, SiAndroid, SiOpenai } from "react-icons/si";
import { TbServerBolt, TbRobot, TbCode } from "react-icons/tb";
import { TbCube3dSphere } from "react-icons/tb";

export interface Service {
  id: string;
  icon: React.ReactNode;
  iconLg: React.ReactNode;
  title: string;
  short: string;
  description: string;
  features: string[];
  stack: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "ios",
    icon: <SiApple size={20} className="text-white/70" />,
    iconLg: <SiApple size={32} className="text-white/80" />,
    title: "iOS Dev",
    short: "Native & cross-platform apps for App Store.",
    description: "We design and build native iOS apps using Swift and SwiftUI, as well as cross-platform apps with React Native and Flutter. Every app is crafted for performance, accessibility, and a premium App Store experience.",
    features: ["Swift & SwiftUI development", "React Native / Flutter", "App Store submission & ASO", "Push notifications & deep links", "In-app purchases & subscriptions", "CoreML / AI on-device inference"],
    stack: ["Swift", "SwiftUI", "React Native", "Flutter", "Xcode", "TestFlight"],
    cta: "Build my iOS app",
  },
  {
    id: "web",
    icon: <TbCube3dSphere size={24} className="text-white/70" />,
    iconLg: <TbCube3dSphere size={32} className="text-white/80" />,
    title: "Web Development",
    short: "Custom, high-performance websites and web apps tailored to your brand.",
    description: "From marketing sites to full-stack SaaS platforms — we build fast, beautiful, and scalable web products using Next.js, React, and modern cloud infrastructure. Every project is optimised for performance, SEO, and conversion.",
    features: ["Next.js / React SaaS platforms", "Marketing & landing pages", "E-commerce storefronts", "CMS integration (Sanity, Contentful)", "Auth, payments & subscriptions", "SEO & Core Web Vitals optimisation"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Postgres", "Vercel"],
    cta: "Build my website",
  },
  {
    id: "mcp",
    icon: <TbServerBolt size={20} className="text-white/70" />,
    iconLg: <TbServerBolt size={32} className="text-white/80" />,
    title: "MCP Servers",
    short: "Connect AI to tools, databases & APIs via Model Context Protocol.",
    description: "We build production-ready MCP servers that give AI models like Claude deep context of your internal systems. Connect Notion, Slack, databases, APIs, and custom tools — enabling AI to reason with your full business context.",
    features: ["Custom tool & resource registration", "Notion, Slack & DB connectors", "Permission-scoped data access", "Streaming context injection", "Audit logging for AI actions", "Hot-reload tool registration"],
    stack: ["MCP SDK", "TypeScript", "Claude", "Node.js", "PostgreSQL", "REST APIs"],
    cta: "Build my MCP server",
  },
  {
    id: "agents",
    icon: <TbRobot size={24} className="text-white/70" />,
    iconLg: <TbRobot size={32} className="text-white/80" />,
    title: "AI Agents",
    short: "Autonomous agents that research, reason, and act.",
    description: "We build autonomous AI agents that handle complex, multi-step workflows end-to-end. From research and data processing to writing and decision-making — our agents integrate with your existing tools and run reliably in production.",
    features: ["Multi-step reasoning pipelines", "Tool use & web browsing", "Integration with Slack, Notion, email", "Human-in-the-loop escalation", "Scheduled & event-driven triggers", "Monitoring & observability"],
    stack: ["LangChain", "OpenAI", "Claude", "Python", "FastAPI", "Redis"],
    cta: "Build my AI agent",
  },
  {
    id: "android",
    icon: <SiAndroid size={20} className="text-white/70" />,
    iconLg: <SiAndroid size={32} className="text-white/80" />,
    title: "Android Dev",
    short: "Apps for every Android device and screen size.",
    description: "We build native Android apps with Kotlin and Jetpack Compose, and cross-platform apps with Flutter and React Native. From MVP to Play Store launch — we handle everything including testing, CI/CD, and post-launch support.",
    features: ["Kotlin & Jetpack Compose", "React Native / Flutter", "Play Store submission", "Firebase integration", "Push notifications & offline sync", "Material Design 3"],
    stack: ["Kotlin", "Jetpack Compose", "Flutter", "Firebase", "Android Studio", "Gradle"],
    cta: "Build my Android app",
  },
  {
    id: "chatbots",
    icon: <SiOpenai size={20} className="text-white/70" />,
    iconLg: <SiOpenai size={32} className="text-white/80" />,
    title: "AI Chatbots",
    short: "Context-aware bots that convert leads 24/7.",
    description: "We build intelligent chatbots powered by GPT-4 and Claude that handle customer support, lead qualification, product recommendations, and more — integrated directly into your website, app, or internal tools.",
    features: ["GPT-4 / Claude powered", "Custom knowledge base (RAG)", "Lead capture & CRM sync", "Handoff to human agents", "Multi-language support", "Analytics & conversation insights"],
    stack: ["GPT-4", "Claude", "Pinecone", "LangChain", "React", "Node.js"],
    cta: "Build my chatbot",
  },
];
