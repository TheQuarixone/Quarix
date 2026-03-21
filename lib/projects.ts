export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  label: string;
  stack: string[];
  description: string;
  overview: string;
  features: string[];
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "nexaai",
    title: "NexaAI Dashboard",
    category: "AI SaaS",
    type: "Web App",
    label: "AI",
    stack: ["Next.js", "OpenAI", "PostgreSQL"],
    description: "A full-stack AI analytics SaaS platform with real-time data processing and custom AI agent integrations.",
    overview: "NexaAI Dashboard is an enterprise-grade SaaS platform built for teams that rely on AI-driven analytics. It provides real-time data pipelines, custom AI agent configuration, and an intuitive dashboard experience that scales from startups to large organisations.",
    features: ["Real-time AI analytics engine", "Custom agent builder & deployment", "Multi-tenant architecture", "Role-based access control", "API-first integration layer"],
    year: "2024",
  },
  {
    id: "fittrack",
    title: "FitTrack Pro",
    category: "iOS App",
    type: "Mobile",
    label: "iOS",
    stack: ["Swift", "CoreML", "HealthKit"],
    description: "A health & fitness tracking iOS app with AI-powered workout recommendations and real-time progress analytics.",
    overview: "FitTrack Pro is a native iOS fitness companion that uses CoreML to deliver personalised workout plans. It syncs seamlessly with Apple Health, tracks over 100 exercise types, and uses on-device AI to adapt training intensity based on recovery scores.",
    features: ["AI-powered workout personalisation", "Apple Health & Watch integration", "On-device ML inference", "Live workout coaching", "Progress analytics & streaks"],
    year: "2024",
  },
  {
    id: "shopbot",
    title: "ShopBot AI",
    category: "AI Chatbot",
    type: "LLM",
    label: "BOT",
    stack: ["GPT-4", "React", "Node.js"],
    description: "An intelligent e-commerce chatbot that handles support, product recommendations, and order tracking 24/7.",
    overview: "ShopBot AI is a production-grade conversational AI deployed across multiple e-commerce storefronts. It handles thousands of support queries daily, delivers context-aware product recommendations, and resolves order issues autonomously — reducing support costs by 60%.",
    features: ["GPT-4 powered conversations", "Product search & recommendations", "Order status & tracking", "Escalation to human agents", "Multi-language support"],
    year: "2024",
  },
  {
    id: "deliverease",
    title: "DeliverEase",
    category: "Android",
    type: "Mobile",
    label: "APK",
    stack: ["Kotlin", "Firebase", "Google Maps"],
    description: "A real-time delivery tracking Android app with live GPS, push notifications, and driver management panel.",
    overview: "DeliverEase powers last-mile delivery for regional logistics companies across Southeast Asia. The app provides live GPS tracking, intelligent route optimisation, and a real-time driver management dashboard — reducing average delivery time by 35%.",
    features: ["Live GPS with 2-second updates", "Route optimisation engine", "Push notifications & ETA alerts", "Driver management dashboard", "Offline-capable data sync"],
    year: "2025",
  },
  {
    id: "contextbridge",
    title: "ContextBridge",
    category: "MCP Server",
    type: "API",
    label: "MCP",
    stack: ["MCP", "TypeScript", "Claude"],
    description: "A custom MCP server that connects Claude to internal databases, Notion, and Slack for contextual AI workflows.",
    overview: "ContextBridge is a production MCP server built to give Claude deep context of a client's internal knowledge base. It connects to Notion, Slack, PostgreSQL, and custom APIs — enabling Claude to answer business-specific queries with full organisational context.",
    features: ["Notion, Slack & DB connectors", "Streaming context injection", "Permission-scoped data access", "Audit logging for AI actions", "Hot-reload tool registration"],
    year: "2025",
  },
  {
    id: "luminary",
    title: "Luminary Studio",
    category: "Website",
    type: "Branding",
    label: "WEB",
    stack: ["Next.js", "Framer Motion", "Sanity"],
    description: "A premium creative agency website with immersive scroll animations, 3D elements, and a custom CMS.",
    overview: "Luminary Studio is an award-winning website built for a London-based creative agency. It features cinematic scroll animations, WebGL-powered 3D elements, and a fully custom Sanity CMS — delivering a best-in-class digital presence that converts visitors into clients.",
    features: ["Cinematic scroll animations", "WebGL 3D hero experience", "Custom Sanity CMS", "Sub-second load times", "Accessible & responsive design"],
    year: "2025",
  },
];
