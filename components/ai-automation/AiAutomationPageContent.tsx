"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  FileCheck2,
  FileText,
  Layers,
  MailCheck,
  MessageSquare,
  Network,
  RotateCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import "./ai-automation.css";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   SCENARIO DATA FOR "FROM INTELLIGENCE TO ACTION" HERO HUD
   ========================================================================= */

interface HeroScenario {
  id: string;
  name: string;
  inputTitle: string;
  inputDesc: string;
  inputIcon: typeof MailCheck;
  inputTag: string;
  coreProcess: string;
  coreMethod: string;
  coreTech: string;
  actionTitle: string;
  actionDesc: string;
  actionIcon: typeof CheckCircle2;
  actionTag: string;
  accentColor: string;
  latency: string;
}

const HERO_SCENARIOS: HeroScenario[] = [
  {
    id: "inquiry",
    name: "Customer Inquiry Flow",
    inputTitle: "Unstructured Email / Webhook",
    inputDesc: "Incoming client request with pricing, scope, and scheduling questions.",
    inputIcon: MessageSquare,
    inputTag: "RAW INPUT",
    coreProcess: "Semantic RAG & Context Matching",
    coreMethod: "Vector retrieval across company docs with strict tone & accuracy guardrails.",
    coreTech: "LLM Orchestration · pgvector",
    actionTitle: "Draft Generated & CRM Synced",
    actionDesc: "Structured reply queued for team review and deal stage automatically advanced.",
    actionIcon: Send,
    actionTag: "BUSINESS ACTION",
    accentColor: "#8b5cf6",
    latency: "380ms",
  },
  {
    id: "document",
    name: "Document & Invoice Pipeline",
    inputTitle: "Vendor Invoice PDF / Receipt",
    inputDesc: "Multi-page unstructured document arriving via email attachment.",
    inputIcon: FileText,
    inputTag: "RAW INPUT",
    coreProcess: "Entity Extraction & Validation",
    coreMethod: "Parse line items, calculate totals against purchase orders, and verify tax compliance.",
    coreTech: "Multi-Modal AI · Schema Parsing",
    actionTitle: "Accounts Payable Entry Logged",
    actionDesc: "Books updated, receipt archived in drive, and approval ping dispatched.",
    actionIcon: FileCheck2,
    actionTag: "BUSINESS ACTION",
    accentColor: "#6366f1",
    latency: "520ms",
  },
  {
    id: "routing",
    name: "Lead Qualification & Routing",
    inputTitle: "Inbound Contact Form Submission",
    inputDesc: "New prospective partner submitting project specs and urgency level.",
    inputIcon: Zap,
    inputTag: "RAW INPUT",
    coreProcess: "Firmographic Enrichment & Scoring",
    coreMethod: "Automated domain lookup, capability matching, and capacity checking.",
    coreTech: "Predictive Classification · Webhooks",
    actionTitle: "Calendar Scheduled & Rep Alerted",
    actionDesc: "Discovery meeting slot confirmed with instant priority Slack notification to team lead.",
    actionIcon: CheckCircle2,
    actionTag: "BUSINESS ACTION",
    accentColor: "#10b981",
    latency: "290ms",
  },
];

/* =========================================================================
   CAPABILITIES DATA (WHAT WE BUILD)
   ========================================================================= */

interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  seoKeyword: string;
  icon: typeof BrainCircuit;
  accentColor: string;
  examples: string[];
  architectureStack: string;
  businessImpact: string;
  pipelineSteps: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: "ai-applications",
    number: "01",
    title: "AI-Powered Applications",
    description:
      "Build AI features and intelligent applications that help people access, process, and use information more effectively.",
    badge: "CUSTOM AI DEVELOPMENT",
    seoKeyword: "Custom AI development",
    icon: Cpu,
    accentColor: "#8b5cf6",
    examples: [
      "Semantic knowledge bases for distributed teams",
      "Automated document summarization & classification tools",
      "Intelligent recommendation & predictive prioritization feeds",
      "Domain-specific search interfaces over internal data",
    ],
    architectureStack: "Next.js · Vector Databases · Semantic Embeddings · Private Inference Endpoints",
    businessImpact: "Transforms fragmented file stores into instantly queryable intelligence, cutting retrieval time by 80%.",
    pipelineSteps: ["Data Ingestion", "Embedding Index", "Semantic Retrieval", "User Interface Action"],
  },
  {
    id: "workflow-automation",
    number: "02",
    title: "Business Workflow Automation",
    description:
      "Connect routine tasks and business processes to reduce manual work and unnecessary handoffs.",
    badge: "INTELLIGENT PROCESS AUTOMATION",
    seoKeyword: "Business workflow automation",
    icon: Workflow,
    accentColor: "#6366f1",
    examples: [
      "Cross-platform lead synchronization between web forms and CRM",
      "Automated invoice processing, tax verification, and ledger posting",
      "Multi-stage approval triggers with Slack or email escalation",
      "Periodic data reconciliation across billing, inventory, and support tools",
    ],
    architectureStack: "Node.js · Webhook Event Buses · Zoho Flow / Make · RESTful API Bridges",
    businessImpact: "Eliminates repetitive data re-entry, avoids human copy-paste errors, and ensures zero dropped tasks.",
    pipelineSteps: ["Event Trigger", "Payload Normalization", "Conditional Routing", "Multi-App Execution"],
  },
  {
    id: "assistants-chatbots",
    number: "03",
    title: "AI Assistants & Chatbots",
    description:
      "Create conversational experiences that help users find information and navigate common queries.",
    badge: "AI CHATBOT DEVELOPMENT",
    seoKeyword: "AI chatbot development",
    icon: MessageSquare,
    accentColor: "#3b82f6",
    examples: [
      "24/7 website concierge answering product & service questions",
      "Internal HR, IT, and policy guidance assistants for staff",
      "Interactive onboarding flows that guide users through setup steps",
      "Smart triage bots that gather initial requirements before human handoff",
    ],
    architectureStack: "RAG Pipeline · Prompt Safeguards · Context Session State · Human Escalation Handlers",
    businessImpact: "Resolves routine user questions immediately, reducing frontline support ticket volume while keeping brand voice consistent.",
    pipelineSteps: ["User Prompt", "Guardrail Check", "Context Retrieval", "Verified Response"],
  },
  {
    id: "ai-integration",
    number: "04",
    title: "AI Integration",
    description:
      "Incorporate suitable AI models and APIs into existing applications and workflows.",
    badge: "LLM INTEGRATION & APIS",
    seoKeyword: "AI integration services & LLM integration",
    icon: Network,
    accentColor: "#10b981",
    examples: [
      "Integrating cutting-edge LLMs (OpenAI, Anthropic, open-weight models) into existing software",
      "Enriching Zoho CRM, Books, and Creator with automated reasoning endpoints",
      "Secure credential vaulting and API proxying with rate limiting",
      "Legacy database connectors that allow modern AI tools to query SQL safely",
    ],
    architectureStack: "API Gateway Proxies · Model Router · Token Budgeting · Secure Secrets Management",
    businessImpact: "Enables legacy business platforms to leverage state-of-the-art AI without expensive whole-system rebuilds.",
    pipelineSteps: ["Legacy API Hook", "Model Gateway", "Schema Validation", "Target System Sync"],
  },
];

/* =========================================================================
   OUR APPROACH (4 STAGES)
   ========================================================================= */

const APPROACH_STAGES = [
  {
    number: "01",
    name: "Discover",
    headline: "Identify bottlenecks & repetitive overhead",
    description:
      "We begin by examining how information moves through your team. We identify manual handoffs, repetitive chores, and data bottlenecks where AI or automation can unlock immediate operational return.",
    checkpoint: "Workflow Bottleneck Audit",
    accent: "#8b5cf6",
  },
  {
    number: "02",
    name: "Design",
    headline: "Architect fit-for-purpose solutions",
    description:
      "We design the complete pipeline: data contracts, integration schemas, model selection, prompt safeguards, and human review steps suited to your operational constraints.",
    checkpoint: "Solution Architecture Schematic",
    accent: "#6366f1",
  },
  {
    number: "03",
    name: "Build",
    headline: "Develop, connect & rigorously test",
    description:
      "We construct the automations and AI integrations with robust error handling, sandboxed validations, and continuous feedback loops so edge cases are cleanly caught.",
    checkpoint: "Sandbox Verification & Benchmark",
    accent: "#3b82f6",
  },
  {
    number: "04",
    name: "Refine",
    headline: "Deploy, monitor & continuously improve",
    description:
      "We roll out the solution with team onboarding, real-time telemetry monitoring for latency and quality, and ongoing tuning to ensure the system keeps pace with your business.",
    checkpoint: "Production Readiness & Monitoring",
    accent: "#10b981",
  },
];

/* =========================================================================
   MAIN COMPONENT: AI & AUTOMATION SERVICES
   ========================================================================= */

export function AiAutomationPageContent() {
  const reducedMotion = useReducedMotion();
  const [activeScenarioId, setActiveScenarioId] = useState<string>("inquiry");
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>("ai-applications");

  const activeScenario =
    HERO_SCENARIOS.find((s) => s.id === activeScenarioId) || HERO_SCENARIOS[0];
  const selectedCapability =
    CAPABILITIES.find((c) => c.id === selectedCapabilityId) || CAPABILITIES[0];

  return (
    <div className="relative min-h-screen w-full bg-[#fbfaff] text-[#14121a] antialiased">
      {/* SECTION 1: HERO */}
      <section className="ai-hero-section relative mx-auto w-full max-w-[1240px] px-6" id="top">
        <div className="ai-ambient-glow" aria-hidden="true" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Manifesto */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_16px_-4px_rgba(108,92,231,0.12)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#5946dc]">
                  From Intelligence to Action
                </span>
                <span className="h-3 w-px bg-neutral-300" aria-hidden="true" />
                <span className="text-[11px] font-medium text-neutral-500">
                  AI &amp; Automation Services
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-[38px] font-semibold tracking-[-0.035em] text-[#14121a] sm:text-[46px] md:text-[52px] lg:text-[56px] leading-[1.08]">
                Less busywork.{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] via-[#8b5cf6] to-[#5946dc] bg-clip-text font-serif italic text-transparent">
                  More intelligent work.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[560px] text-[16px] leading-[1.68] text-[#5e586c] sm:text-[17px]">
                We build AI-powered solutions and business workflow automation that help
                teams reduce repetitive tasks, access useful information, and move work
                forward.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#what-we-build"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(108,92,231,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  <span>Explore AI Solutions</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/80 px-5 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-[#6C5CE7]/40 hover:bg-white hover:text-[#5946dc]"
                >
                  <span>Discuss Your Idea</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Micro Trust Pills */}
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-neutral-200/70 pt-5 text-[11.5px] text-[#5e586c]">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#10b981]" />
                  <span>Practical Business Reality</span>
                </div>
                <span className="text-neutral-300">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#6C5CE7]" />
                  <span>Security &amp; Data Guardrails</span>
                </div>
                <span className="text-neutral-300">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <Zap size={13} className="text-[#f59e0b]" />
                  <span>Measurable Efficiency</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Custom "From Intelligence to Action" Visual HUD */}
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="ai-hud-card">
                {/* HUD Header Bar */}
                <div className="ai-hud-bar">
                  <div className="flex items-center gap-2">
                    <span className="ai-hud-status-dot" />
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-neutral-600">
                      SYS.ARCH // INTELLIGENCE PIPELINE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                    <span className="rounded-sm bg-neutral-100 px-1.5 py-0.5 text-neutral-600">
                      LATENCY: {activeScenario.latency}
                    </span>
                    <span className="text-[#10b981] font-semibold">NOMINAL</span>
                  </div>
                </div>

                {/* Scenario Switcher Tabs */}
                <div className="border-b border-neutral-100 bg-neutral-50/60 p-2 sm:p-2.5">
                  <div className="grid grid-cols-3 gap-1.5">
                    {HERO_SCENARIOS.map((scenario) => {
                      const isCurrent = scenario.id === activeScenarioId;
                      return (
                        <button
                          key={scenario.id}
                          type="button"
                          onClick={() => setActiveScenarioId(scenario.id)}
                          className={`rounded-lg px-2 py-2 text-center text-[11px] font-semibold transition-all duration-200 ${
                            isCurrent
                              ? "bg-white text-[#5946dc] shadow-xs ring-1 ring-[#6C5CE7]/20"
                              : "text-[#5e586c] hover:bg-white/60 hover:text-[#14121a]"
                          }`}
                        >
                          <span className="block truncate">{scenario.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pipeline Flow Visualization Area */}
                <div className="p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenario.id}
                      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease }}
                      className="space-y-4"
                    >
                      {/* Step 1: Input / Raw Information */}
                      <div className="relative rounded-xl border border-neutral-200/80 bg-white p-3.5 shadow-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6C5CE7]/10 text-[#6C5CE7]">
                              <activeScenario.inputIcon size={13} />
                            </span>
                            <span className="text-[12px] font-bold text-[#14121a]">
                              {activeScenario.inputTitle}
                            </span>
                          </div>
                          <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[9px] font-bold text-neutral-500 uppercase tracking-wide">
                            {activeScenario.inputTag}
                          </span>
                        </div>
                        <p className="mt-2 text-[11.5px] leading-relaxed text-[#5e586c]">
                          {activeScenario.inputDesc}
                        </p>
                      </div>

                      {/* Connector Vector Arrow with Pulse Dot */}
                      <div className="relative flex items-center justify-center py-0.5">
                        <div className="h-5 w-px bg-gradient-to-b from-[#6C5CE7]/40 to-[#8b5cf6]/60" />
                        <span className="absolute flex h-2.5 w-2.5 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8b5cf6] opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
                        </span>
                      </div>

                      {/* Step 2: Intelligent Core (Reasoning & Orchestration) */}
                      <div className="relative overflow-hidden rounded-xl border border-[#6C5CE7]/30 bg-gradient-to-br from-[#faf8ff] via-white to-[#f5f3ff] p-4 shadow-sm">
                        <div className="flex items-center justify-between pb-2 border-b border-[#6C5CE7]/15">
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] text-white shadow-xs">
                              <BrainCircuit size={13} />
                            </span>
                            <span className="text-[12.5px] font-bold text-[#14121a]">
                              {activeScenario.coreProcess}
                            </span>
                          </div>
                          <span className="rounded-full bg-[#6C5CE7]/12 px-2 py-0.5 font-mono text-[9px] font-bold text-[#5946dc] uppercase tracking-wide">
                            ARAM INTELLIGENCE ENGINE
                          </span>
                        </div>
                        <p className="mt-2 text-[12px] leading-relaxed text-[#5e586c]">
                          {activeScenario.coreMethod}
                        </p>
                        <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] text-[#5946dc]">
                          <span className="h-1 w-1 rounded-full bg-[#5946dc]" />
                          <span>{activeScenario.coreTech}</span>
                        </div>
                      </div>

                      {/* Connector Vector Arrow with Pulse Dot */}
                      <div className="relative flex items-center justify-center py-0.5">
                        <div className="h-5 w-px bg-gradient-to-b from-[#8b5cf6]/60 to-[#10b981]/60" />
                        <span className="absolute flex h-2.5 w-2.5 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                        </span>
                      </div>

                      {/* Step 3: Actionable Business Outcome */}
                      <div className="relative rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-3.5 shadow-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#10b981]/15 text-[#10b981]">
                              <activeScenario.actionIcon size={13} />
                            </span>
                            <span className="text-[12px] font-bold text-[#14121a]">
                              {activeScenario.actionTitle}
                            </span>
                          </div>
                          <span className="rounded-full bg-[#10b981]/15 px-2 py-0.5 font-mono text-[9px] font-bold text-[#059669] uppercase tracking-wide">
                            {activeScenario.actionTag}
                          </span>
                        </div>
                        <p className="mt-2 text-[11.5px] leading-relaxed text-[#2d2938]">
                          {activeScenario.actionDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* HUD Footer Telemetry */}
                <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50/50 px-4 py-2.5 text-[10.5px] text-[#716b7c]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    <span>Real-world business workflows</span>
                  </span>
                  <a
                    href="#what-we-build"
                    className="font-medium text-[#5946dc] hover:underline"
                  >
                    View 4 Core Capabilities ↓
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (MAKE INTELLIGENCE USEFUL) */}
      <section className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-20" id="philosophy">
        <Reveal>
          <div className="mx-auto max-w-[780px] text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
              <Sparkles size={13} className="text-[#6C5CE7]" />
              <span>01 / PURPOSE-DRIVEN INTELLIGENCE</span>
            </div>

            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[40px] md:text-[46px] leading-tight">
              Make intelligence useful.
            </h2>

            <p className="mt-5 text-[16px] leading-[1.72] text-[#5e586c] sm:text-[17.5px]">
              AI is most valuable when it solves a real problem. We connect AI
              capabilities with practical workflows to help businesses handle
              information, simplify routine processes, and support better decisions.
            </p>
          </div>
        </Reveal>

        {/* 3 Editorial Value Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#6C5CE7]/30 hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7]">
                <Database size={19} />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-[#14121a]">
                Grounded in Real Business Context
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                Rather than generic hallucinations, our AI solutions are anchored to
                your domain rules, operational data, and existing tool ecosystem.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#6C5CE7]/30 hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6]">
                <ShieldCheck size={19} />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-[#14121a]">
                Human-in-the-Loop Safeguards
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                We build clear review boundaries, confidence scoring, and escalation
                checks so your team always retains full operational control.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#6C5CE7]/30 hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981]">
                <Zap size={19} />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-[#14121a]">
                Direct Operational ROI
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                We prioritize high-friction bottlenecks that shave hours off manual
                workflows, eliminate repetitive data entry, and speed turnaround times.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD (FROM SMART ANSWERS TO AUTOMATED ACTION) */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24"
        id="what-we-build"
      >
        <Reveal>
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
              <Workflow size={13} className="text-[#6C5CE7]" />
              <span>02 / WHAT WE BUILD</span>
            </div>

            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[40px] md:text-[46px] leading-tight">
              From smart answers to automated action.
            </h2>

            <p className="mt-4 text-[15.5px] leading-[1.68] text-[#5e586c] sm:text-[16.5px]">
              Explore how custom AI development, AI solutions for businesses, and
              intelligent process automation transform day-to-day operations.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric Interactive Layout: Left Selector, Right Blueprint Readout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Interactive Capability List */}
          <div className="space-y-3 lg:col-span-6" role="tablist" aria-label="What we build capabilities">
            {CAPABILITIES.map((cap) => {
              const isSelected = cap.id === selectedCapabilityId;
              const Icon = cap.icon;

              return (
                <button
                  key={cap.id}
                  id={`tab-${cap.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${cap.id}`}
                  type="button"
                  onClick={() => setSelectedCapabilityId(cap.id)}
                  className={`capability-item group relative flex w-full flex-col rounded-2xl border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? "is-selected border-[#6C5CE7]/40 bg-white ring-1 ring-[#6C5CE7]/20 shadow-sm"
                      : "border-neutral-200/80 bg-white/70 hover:border-neutral-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: `${cap.accentColor}18`,
                          color: cap.accentColor,
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="font-mono text-[11px] font-bold text-neutral-400">
                        {cap.number}
                      </span>
                      <span className="text-[16px] font-semibold text-[#14121a] group-hover:text-[#5946dc] transition-colors">
                        {cap.title}
                      </span>
                    </div>

                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-colors"
                      style={{
                        backgroundColor: isSelected ? `${cap.accentColor}15` : "#f3f4f6",
                        color: isSelected ? cap.accentColor : "#6b7280",
                      }}
                    >
                      {cap.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#5e586c] pl-12">
                    {cap.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Capability Blueprint Readout */}
          <div className="lg:col-span-6" id={`panel-${selectedCapability.id}`} role="tabpanel" aria-labelledby={`tab-${selectedCapability.id}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCapability.id}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-3xl border border-[#6C5CE7]/25 bg-white p-6 shadow-md md:p-8"
              >
                {/* Header of Active Capability */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: selectedCapability.accentColor }}
                    />
                    <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-neutral-400">
                      CAPABILITY BLUEPRINT // {selectedCapability.number}
                    </span>
                  </div>
                  <span
                    className="rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${selectedCapability.accentColor}12`,
                      color: selectedCapability.accentColor,
                    }}
                  >
                    {selectedCapability.seoKeyword}
                  </span>
                </div>

                <h3 className="mt-5 text-[22px] font-semibold text-[#14121a] tracking-tight">
                  {selectedCapability.title}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-[#5e586c]">
                  {selectedCapability.description}
                </p>

                {/* Real-World Use Cases */}
                <div className="mt-6">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-400">
                    Typical Implementation Scope
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {selectedCapability.examples.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#2d2938]">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: selectedCapability.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pipeline Flow Steps */}
                <div className="mt-6 rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4">
                  <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-400">
                    Execution Architecture
                  </h4>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {selectedCapability.pipelineSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-neutral-200/70 bg-white p-2.5 text-center shadow-2xs"
                      >
                        <span className="font-mono text-[9px] font-bold text-neutral-400 block">
                          STEP 0{idx + 1}
                        </span>
                        <span className="text-[11.5px] font-semibold text-[#14121a] mt-0.5 block leading-tight">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact Readout */}
                <div className="mt-6 rounded-xl border border-[#6C5CE7]/15 bg-[#6C5CE7]/[0.03] p-4 text-[12.5px] text-[#2d2938]">
                  <strong className="text-[#5946dc] block font-semibold mb-1">
                    Operational Return:
                  </strong>
                  <span>{selectedCapability.businessImpact}</span>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                  <span className="text-[12px] text-neutral-500">
                    Stack: {selectedCapability.architectureStack}
                  </span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#5946dc] hover:underline"
                  >
                    <span>Discuss this solution</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH (CONTINUOUS ANIMATED WORKFLOW) */}
      <section className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24" id="approach">
        <Reveal>
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
              <RotateCw size={13} className="text-[#6C5CE7]" />
              <span>03 / OUR APPROACH</span>
            </div>

            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[40px] md:text-[46px] leading-tight">
              Start with the problem. Automate with purpose.
            </h2>

            <p className="mt-4 text-[15.5px] leading-[1.68] text-[#5e586c] sm:text-[16.5px]">
              We identify repetitive tasks and information bottlenecks, design an
              appropriate solution, develop and test it, and refine it against your
              requirements.
            </p>
          </div>
        </Reveal>

        {/* Continuous Process Pipeline Track */}
        <div className="relative mt-14">
          <div className="approach-track-line" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STAGES.map((stage, idx) => (
              <Reveal key={stage.number} delay={0.08 * idx}>
                <div className="relative h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:shadow-md">
                  {/* Step Number & Connector Marker */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span
                      className="font-mono text-[14px] font-bold"
                      style={{ color: stage.accent }}
                    >
                      {stage.number}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wide text-neutral-600">
                      {stage.name}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[16.5px] font-semibold text-[#14121a] leading-snug">
                    {stage.headline}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#5e586c]">
                    {stage.description}
                  </p>

                  <div className="mt-5 border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
                      <CheckCircle2 size={12} className="text-[#10b981]" />
                      <span>{stage.checkpoint}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING CTA */}
      <section className="relative mx-auto w-full max-w-[1240px] px-6 py-12 md:py-20" id="contact">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#6C5CE7]/25 bg-gradient-to-br from-[#13111c] via-[#1a1727] to-[#12101b] p-8 text-white shadow-[0_20px_50px_-15px_rgba(40,25,80,0.35)] md:p-12 lg:p-14">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#8b5cf6]/25 to-transparent blur-3xl"
            />

            <div className="relative z-10 max-w-[700px]">
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-widest uppercase text-[#b5a4ff]">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>LET&apos;S AUTOMATE SMARTER</span>
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-white sm:text-[36px] md:text-[42px] leading-tight">
                What should your business stop doing manually?
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c5c1d3] sm:text-[16.5px]">
                Tell us about a repetitive task or a workflow challenge. Let&apos;s
                explore whether AI or automation is the right fit.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-6 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-[0_6px_20px_-4px_rgba(155,140,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(155,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff]"
                >
                  <span>Let&apos;s Automate Smarter</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  <span>Explore What We Do</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Internal Links & Trust Footnote */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11.5px] text-[#a49fba]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#10b981]" />
                  <span>No speculative hype · Practical engineering discussion</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/#work" className="hover:text-white transition-colors">
                    Our Work →
                  </Link>
                  <span>•</span>
                  <Link href="/zoho" className="hover:text-white transition-colors">
                    Zoho Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
