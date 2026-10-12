import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Workflow,
  Layers,
  Database,
  Boxes,
  Cloud,
} from "lucide-react";

export type ServiceIconName =
  | "Bot"
  | "Workflow"
  | "Layers"
  | "Database"
  | "Boxes"
  | "Cloud"
  | "Blocks";

export interface ServiceCapability {
  id: string;
  num: string;
  // Official Full Capability Title
  title: string;
  // Short label for tab pills and compact markers
  shortLabel: string;
  // Title shown in the Hero Card (MegaMenu & Mobile Drawer)
  heroCardTitle: string;
  // Concise hook phrase shown in the Hero Card
  heroCardDescription: string;
  // Full approved description on the What We Do page
  description: string;
  // Badge category pill
  badge: string;
  // Hex accent color
  accent: string;
  // Lucide Icon Component
  icon: LucideIcon;
  // String identifier for serializable icon mapping
  iconName: ServiceIconName;
  // Deliverables checklist (combining What We Do and hero card details)
  deliverables: string[];
  // Target link to the service on What We Do page
  href: string;
}

/**
 * Shared source of truth for Aram Analytics core services across:
 * - Homepage Hero "What We Do" MegaMenu card & Mobile Drawer
 * - Dedicated /what-we-do page interactive capability explorer & matrix
 */
export const SERVICES_DATA: ServiceCapability[] = [
  {
    id: "ai-solutions",
    num: "01",
    title: "AI Solutions & Intelligent Agents",
    shortLabel: "AI Solutions",
    heroCardTitle: "AI & Intelligent Agents",
    heroCardDescription:
      "Useful intelligence woven into everyday work, with people firmly in the loop.",
    description:
      "Build intelligent assistants, AI-powered applications, and systems that turn information into useful outcomes.",
    badge: "INTELLIGENT SYSTEMS",
    accent: "#8b5cf6",
    icon: Bot,
    iconName: "Bot",
    deliverables: [
      "Custom conversational copilots & intelligent agents",
      "Document intelligence & knowledge retrieval (RAG)",
      "Automated decision support, classification & predictive scoring",
    ],
    href: "/what-we-do#ai-solutions",
  },
  {
    id: "ai-automation",
    num: "02",
    title: "Automation & Workflows",
    shortLabel: "Automation",
    heroCardTitle: "Automation & Workflows",
    heroCardDescription:
      "Well-designed flows that handle the repetitive work, so your team doesn't have to.",
    description:
      "Reduce repetitive work by connecting tools, automating workflows, and simplifying everyday operations.",
    badge: "PROCESS ORCHESTRATION",
    accent: "#6366f1",
    icon: Workflow,
    iconName: "Workflow",
    deliverables: [
      "Multi-application triggers & integration flows",
      "Scheduled data synchronization across distributed teams",
      "Elimination of manual entry & repetitive operational tasks",
    ],
    href: "/what-we-do#ai-automation",
  },
  {
    id: "software-products",
    num: "03",
    title: "Software & Digital Products",
    shortLabel: "Software & Products",
    heroCardTitle: "Software & Digital Products",
    heroCardDescription:
      "Websites, web applications, and digital platforms built around real business needs.",
    description:
      "Create websites, web applications, mobile apps, portals, and digital platforms built around real business needs.",
    badge: "FULL-STACK PLATFORMS",
    accent: "#3b82f6",
    icon: Layers,
    iconName: "Layers",
    deliverables: [
      "Modern web applications & responsive client portals",
      "User-focused digital products & cross-platform mobile apps",
      "Scalable backend architectures, internal tools & robust APIs",
    ],
    href: "/what-we-do#software-products",
  },
  {
    id: "data-analytics",
    num: "04",
    title: "Data Engineering & Analytics",
    shortLabel: "Data & Analytics",
    heroCardTitle: "Data Engineering & Analytics",
    heroCardDescription:
      "Bring your numbers together and surface what actually deserves your attention.",
    description:
      "Turn scattered data into clear dashboards, useful reports, and actionable business insights.",
    badge: "DECISION INTELLIGENCE",
    accent: "#10b981",
    icon: Database,
    iconName: "Database",
    deliverables: [
      "Centralized operational metrics & interactive BI dashboards",
      "Automated executive and team reporting for key metrics",
      "Data engineering & pipeline consolidation from disparate sources",
    ],
    href: "/what-we-do#data-analytics",
  },
  {
    id: "zoho-systems",
    num: "05",
    title: "Zoho & CRM Solutions",
    shortLabel: "Zoho Systems",
    heroCardTitle: "Zoho & CRM Solutions",
    heroCardDescription:
      "A connected Zoho ecosystem, chosen and shaped around how your business really works.",
    description:
      "Connect business processes through CRM, business applications, workflow configuration, and system integration.",
    badge: "BUSINESS ECOSYSTEMS",
    accent: "#f59e0b",
    icon: Boxes,
    iconName: "Boxes",
    deliverables: [
      "End-to-end Zoho One & CRM setup and deep customization",
      "Zoho Creator custom applications, Deluge scripts & workflows",
      "Seamless integration with third-party tools, ERP & finance systems",
    ],
    href: "/what-we-do#zoho-systems",
  },
  {
    id: "cloud-services",
    num: "06",
    title: "Cloud & Integrations",
    shortLabel: "Cloud & Integrations",
    heroCardTitle: "Cloud & Integrations",
    heroCardDescription:
      "Connect the tools you already use into one calm, coordinated system.",
    description:
      "Support reliable digital operations through deployment, infrastructure setup, maintenance, and ongoing improvements.",
    badge: "INFRASTRUCTURE & RELIABILITY",
    accent: "#ec4899",
    icon: Cloud,
    iconName: "Cloud",
    deliverables: [
      "Tool integration & API bridges into one coordinated system",
      "Cloud architecture, hosting, deployment & secure staging",
      "Proactive system monitoring, maintenance & performance optimization",
    ],
    href: "/what-we-do#cloud-services",
  },
];

/**
 * Shared audit callout offer displayed in both:
 * - Homepage Hero MegaMenu dropdown card
 * - Dedicated /what-we-do page
 */
export const WORKFLOW_AUDIT_OFFER = {
  kicker: "WORKFLOW AUDIT",
  title: "Not sure where to start?",
  description:
    "Book a free 30-min workflow audit. We'll map one small, real win with you.",
  ctaText: "Book the audit",
  href: "/#contact",
};
