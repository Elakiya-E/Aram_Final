"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  FileInput,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
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
   VERIFIED COMPANY AUTOMATION PROJECTS DATA
   Grounded strictly in repository evidence, actual deliverables & records
   No fictional deployments, inflated metrics, or invented clients
   ========================================================================= */

type ProjectStatus = "Deployed" | "Completed" | "Prototype";

interface VerifiedAutomationProject {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  problem: string;
  whatItDoes: string;
  tools: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  liveUrl?: string;
  linkText?: string;
  destinationHref: string;
}

const VERIFIED_PROJECTS: VerifiedAutomationProject[] = [
  {
    id: "adsyncro",
    name: "Adsyncro",
    category: "Marketing Automation Platform",
    status: "Deployed",
    statusLabel: "Deployed",
    problem:
      "Marketing teams face time-consuming manual effort managing multi-channel campaigns and tracking fragmented growth performance.",
    whatItDoes:
      "Automates multi-channel marketing actions, campaign scheduling, and performance monitoring through an AI-assisted management interface.",
    tools: ["Web Platform", "Marketing APIs", "AI Optimization Logic"],
    imageSrc: "/images/Adsyncro.png",
    imageAlt: "Adsyncro AI-powered performance marketing and growth automation platform interface",
    imageWidth: 1860,
    imageHeight: 911,
    liveUrl: "adsyncro.co.uk",
    linkText: "Visit Platform",
    destinationHref: "/#contact?project=adsyncro",
  },
  {
    id: "jananayagam",
    name: "Jananayagam",
    category: "Civic Tech · Workflow Platform",
    status: "Deployed",
    statusLabel: "Deployed",
    problem:
      "Public grievance handling was delayed by manual intake, untracked citizen requests, and slow departmental routing.",
    whatItDoes:
      "Automatically triages inbound citizen reports, routes tickets to appropriate handlers, and sends automated resolution tracking updates.",
    tools: ["Next.js", "Node.js", "Webhooks", "Notification Dispatch Pipeline"],
    imageSrc: "/images/jananayagam.png",
    imageAlt: "Jananayagam citizen engagement and civic grievance tracking web platform interface",
    imageWidth: 1907,
    imageHeight: 897,
    liveUrl: "jananayagam.org",
    linkText: "Visit Platform",
    destinationHref: "/#contact?project=jananayagam",
  },
  {
    id: "zoho-commercial-ops",
    name: "Zoho Commercial Operations Automation Engine",
    category: "Business Systems · ERP & CRM Automation",
    status: "Completed",
    statusLabel: "Completed",
    problem:
      "Customer enquiries, inventory tracking, and invoice reconciliation lived in separate applications with repetitive manual handoffs.",
    whatItDoes:
      "Eliminates manual data re-entry by synchronizing customer records, orders, and financial data automatically across CRM and Books.",
    tools: ["Zoho One", "Zoho CRM", "Zoho Books", "Zoho Creator", "Deluge", "Webhooks"],
    linkText: "Explore Zoho Work",
    destinationHref: "/zoho",
  },
  {
    id: "operations-metrics-hub",
    name: "Operations Metrics & Reporting Pipeline",
    category: "Data Automation · Operations Portal",
    status: "Completed",
    statusLabel: "Completed",
    problem:
      "Core operational performance indicators were trapped in disconnected spreadsheets, making weekly planning reactive and error-prone.",
    whatItDoes:
      "Automatically consolidates multi-source operational metrics into a centralized portal with scheduled digests and automated threshold alerts.",
    tools: ["Next.js", "Node.js", "PostgreSQL", "Webhook Event Ingestion"],
    linkText: "View Case Study",
    destinationHref: "/#work",
  },
  {
    id: "deepeyescan",
    name: "DeepEyeScan Clinical Screening Workflow",
    category: "Computer Vision · Healthcare Triage Prototype",
    status: "Prototype",
    statusLabel: "Prototype",
    problem:
      "Clinical eye screening workflows experienced bottlenecks due to manual triage of high-volume ocular imagery.",
    whatItDoes:
      "Uses computer vision classification models to assist specialists in rapidly triaging retinal scans and flagging high-priority clinical cases.",
    tools: ["React", "Computer Vision", "TensorFlow"],
    linkText: "Discuss Prototype",
    destinationHref: "/#contact?project=deepeyescan",
  },
];

/* =========================================================================
   THE ARAM APPROACH — 4 PRACTICAL STAGES
   "Start with the problem. Find the right solution."
   ========================================================================= */

interface ApproachStage {
  step: string;
  name: string;
  description: string;
  highlight?: boolean;
}

const ARAM_APPROACH_STAGES: ApproachStage[] = [
  {
    step: "01",
    name: "Understand",
    description: "Learn how the current process works and identify the real challenge.",
    highlight: true,
  },
  {
    step: "02",
    name: "Plan",
    description: "Determine the simplest practical approach before introducing automation.",
  },
  {
    step: "03",
    name: "Build",
    description: "Develop and integrate the solution around the business workflow.",
  },
  {
    step: "04",
    name: "Validate",
    description: "Test the result and verify that the solution works as intended.",
  },
];

export function AiAutomationPageContent() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [filter, setFilter] = useState<"all" | "deployed" | "completed" | "prototype">("all");
  const reducedMotion = useReducedMotion();

  const filteredProjects = VERIFIED_PROJECTS.filter((proj) => {
    if (filter === "deployed") return proj.status === "Deployed";
    if (filter === "completed") return proj.status === "Completed";
    if (filter === "prototype") return proj.status === "Prototype";
    return true;
  });

  return (
    <div className="ai-page-wrapper">
      {/* -----------------------------------------------------------------
          HERO SECTION — ASYMMETRIC LAYOUT
          Text on Left | Distinctive Connected Workflow Visualization on Right
          ----------------------------------------------------------------- */}
      <section className="ai-hero-section relative mx-auto w-full max-w-[1320px] px-6" id="top">
        <div className="ai-ambient-glow" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Asymmetric Hero Typography & Direction */}
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/25 bg-white/95 px-3.5 py-1.5 shadow-[0_2px_12px_-3px_rgba(108,92,231,0.12)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6C5CE7] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6C5CE7]" />
                </span>
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#5946dc]">
                  INTELLIGENCE IN ACTION
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 text-[38px] font-bold tracking-[-0.035em] text-[#14121a] sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.08]">
                Less manual work.
                <br />
                <span className="text-[#5946dc]">
                  More meaningful progress.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[620px] text-[16.5px] leading-[1.68] text-[#4f495d] sm:text-[18px]">
                Every business has work that takes too much time. We explore how AI and automation can simplify repetitive tasks, connect disconnected tools, and help teams focus on work that matters.
              </p>
            </Reveal>

            {/* Central Creative Direction Principle */}
            <Reveal delay={0.16}>
              <div className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-[#6C5CE7]/15 bg-[#6C5CE7]/[0.05] px-4 py-2.5 text-[13.5px] font-medium text-[#44386b]">
                <Sparkles size={15} className="text-[#6C5CE7] shrink-0" />
                <span>
                  <strong>Our guiding idea:</strong> Technology should move work forward, not create more work.
                </span>
              </div>
            </Reveal>

            {/* Hero CTAs */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(108,92,231,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  <span>Explore Our Automation Work</span>
                  <ArrowDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white px-5 py-3.5 text-[14px] font-semibold text-[#14121a] shadow-2xs transition-all duration-200 hover:border-[#6C5CE7]/40 hover:text-[#5946dc] hover:-translate-y-0.5"
                >
                  <span>Discuss a Workflow</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Grounded Trust Anchors */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-neutral-200/80 pt-5 text-[12px] text-[#5e586c]">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#10b981]" />
                  <span>Practical operational workflows</span>
                </div>
                <span className="text-neutral-300" aria-hidden="true">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#6C5CE7]" />
                  <span>Verified company implementations</span>
                </div>
                <span className="text-neutral-300" aria-hidden="true">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <Zap size={13} className="text-[#0284c7]" />
                  <span>Zero unnecessary software overhead</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Distinctive Workflow Visualization (INPUT → AUTOMATION → OUTCOME) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <Reveal delay={0.14}>
              <div className="workflow-viz-card">
                {/* Visual Header */}
                <div className="workflow-viz-header">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6C5CE7]/10 text-[#6C5CE7]">
                      <Workflow size={13} />
                    </span>
                    <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#5946dc]">
                      OPERATIONAL SEQUENCE
                    </span>
                  </div>

                  <span className="rounded-full border border-neutral-200/80 bg-neutral-100/90 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                    Illustrative operational workflow
                  </span>
                </div>

                {/* The 3-Step Flow: INPUT → AUTOMATION → OUTCOME */}
                <div className="workflow-viz-body">
                  {/* Step 1: INPUT */}
                  <div className="workflow-node workflow-node-input">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="workflow-node-icon bg-amber-500/10 text-amber-600 border border-amber-500/20">
                          <FileInput size={15} />
                        </span>
                        <div>
                          <span className="workflow-node-step text-amber-600">01 // INPUT</span>
                          <h4 className="workflow-node-title">Fragmented Requests &amp; Data</h4>
                        </div>
                      </div>
                      <span className="workflow-chip">Raw Intake</span>
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-[#5e586c]">
                      Customer inquiries, form submissions, or disparate document uploads across disconnected channels.
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="workflow-badge">Inbound Email</span>
                      <span className="workflow-badge">Web Form</span>
                      <span className="workflow-badge">Raw Files</span>
                    </div>
                  </div>

                  {/* Flow Connector 1 */}
                  <div className="workflow-connector">
                    <div className="workflow-connector-line">
                      <span className="workflow-pulse-dot" />
                    </div>
                    <div className="workflow-connector-label">
                      <span>Automated Ingestion &amp; Parsing</span>
                      <ArrowDown size={11} className="text-[#6C5CE7]" />
                    </div>
                  </div>

                  {/* Step 2: AUTOMATION */}
                  <div className="workflow-node workflow-node-engine">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="workflow-node-icon bg-[#6C5CE7]/10 text-[#6C5CE7] border border-[#6C5CE7]/25">
                          <Cpu size={15} />
                        </span>
                        <div>
                          <span className="workflow-node-step text-[#6C5CE7]">02 // AUTOMATION</span>
                          <h4 className="workflow-node-title">Validation, Triage &amp; Routing</h4>
                        </div>
                      </div>
                      <span className="workflow-status-live">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        Active Flow
                      </span>
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-[#5e586c]">
                      Extract structured data, verify against business rules, and trigger API dispatch without manual copy-paste.
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="workflow-badge workflow-badge-accent">Data Validation</span>
                      <span className="workflow-badge workflow-badge-accent">Logic Rules</span>
                      <span className="workflow-badge workflow-badge-accent">Webhook Sync</span>
                    </div>
                  </div>

                  {/* Flow Connector 2 */}
                  <div className="workflow-connector">
                    <div className="workflow-connector-line">
                      <span className="workflow-pulse-dot" style={{ animationDelay: "1s" }} />
                    </div>
                    <div className="workflow-connector-label">
                      <span>Instant Sync &amp; Dispatch</span>
                      <ArrowDown size={11} className="text-[#10b981]" />
                    </div>
                  </div>

                  {/* Step 3: OUTCOME */}
                  <div className="workflow-node workflow-node-outcome">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="workflow-node-icon bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/25">
                          <CheckCircle2 size={15} />
                        </span>
                        <div>
                          <span className="workflow-node-step text-[#10b981]">03 // OUTCOME</span>
                          <h4 className="workflow-node-title">Synchronized Records &amp; Progress</h4>
                        </div>
                      </div>
                      <span className="workflow-chip text-[#059669] bg-emerald-50 border-emerald-200">
                        Zero Re-entry
                      </span>
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-[#5e586c]">
                      Records updated across CRM and Books, team notified in real-time, and clean operational audit trail logged.
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="workflow-badge">CRM Updated</span>
                      <span className="workflow-badge">Books Reconciled</span>
                      <span className="workflow-badge">Team Notified</span>
                    </div>
                  </div>
                </div>

                {/* Card Disclaimer / Grounded Note */}
                <div className="workflow-viz-footer">
                  <span className="text-[10.5px] leading-tight text-neutral-500">
                    * Illustrative operational model. Real client workflows are custom-scoped to existing software.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION: THE ARAM APPROACH
          "Start with the problem. Find the right solution."
          Clean, connected process timeline: 01 Understand -> 02 Plan -> 03 Build -> 04 Validate
          ----------------------------------------------------------------- */}
      <span id="approach" className="sr-only" tabIndex={-1} />
      <span id="the-aram-approach" className="sr-only" tabIndex={-1} />
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-16" id="process">
        <Reveal>
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[#5946dc]">
              <Sparkles size={13} className="text-[#6C5CE7]" />
              <span>THE ARAM APPROACH</span>
            </div>

            <h2 className="mt-2.5 text-[28px] font-bold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[40px] leading-tight">
              Start with the problem. Find the right solution.
            </h2>

            <p className="mt-3 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#5e586c]">
              Every workflow is different. We first understand how your business operates, identify where technology can help, and develop solutions that fit your actual needs.
            </p>
          </div>
        </Reveal>

        {/* Refined Process Timeline (Horizontal Sequence on Desktop, Vertical on Mobile) */}
        <div className="mt-10 lg:mt-12">
          {/* Desktop Horizontal Connected Timeline */}
          <div className="timeline-desktop-view process-timeline-container">
            {/* Connected Horizontal Line with Subtle Reveal Animation */}
            <div className="process-timeline-track" aria-hidden="true">
              <motion.div
                className="process-timeline-line"
                initial={reducedMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, ease }}
                style={{ originX: 0 }}
              />
            </div>

            {/* 4 Stages Horizontal Sequence */}
            <div className="timeline-stages-grid relative z-10">
              {ARAM_APPROACH_STAGES.map((stage, idx) => {
                const isSelected = activeStep === idx;

                return (
                  <Reveal key={stage.step} delay={0.08 * idx}>
                    <div
                      className={`timeline-step-card ${isSelected ? "timeline-step-selected" : ""}`}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Stage ${stage.step}: ${stage.name}`}
                    >
                      {/* Node Marker aligned on the connecting line */}
                      <div className="timeline-node-wrapper">
                        <div
                          className={`timeline-node-marker ${
                            isSelected ? "timeline-node-marker-active" : ""
                          }`}
                        >
                          <span
                            className={`timeline-node-dot ${
                              isSelected ? "bg-[#6C5CE7] scale-125" : "bg-neutral-300"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Step Number + Title */}
                      <div className="mt-4">
                        <span
                          className={`timeline-step-num font-mono ${
                            isSelected ? "text-[#5946dc]" : "text-neutral-400"
                          }`}
                        >
                          {stage.step}
                        </span>

                        <h3 className="timeline-step-title mt-1 text-[18px] lg:text-[19px] font-semibold text-[#14121a]">
                          {stage.name}
                        </h3>

                        <p className="timeline-step-desc mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                          {stage.description}
                        </p>
                      </div>

                      {/* Subtle Active Accent Indicator Bar */}
                      <div
                        className={`timeline-step-indicator ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Connected Timeline */}
          <div className="timeline-mobile-view relative pl-6">
            {/* Vertical Connecting Line */}
            <div className="mobile-timeline-vertical-line" aria-hidden="true">
              <motion.div
                className="mobile-timeline-vertical-progress"
                initial={reducedMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease }}
                style={{ originY: 0 }}
              />
            </div>

            <div className="space-y-6">
              {ARAM_APPROACH_STAGES.map((stage, idx) => (
                <Reveal key={stage.step} delay={0.07 * idx}>
                  <div className="mobile-timeline-item relative">
                    {/* Aligned Node Marker */}
                    <div className="mobile-timeline-node">
                      <span className="h-2 w-2 rounded-full bg-[#6C5CE7]" />
                    </div>

                    <div className="mobile-timeline-card">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[12px] font-bold text-[#5946dc]">
                          {stage.step} —
                        </span>
                        <h3 className="text-[16.5px] font-semibold text-[#14121a]">
                          {stage.name}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[#5e586c]">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION: SHOW THE WORK, NOT THE BUZZWORDS
          Actual verified automation project showcase
          Image-led showcase using only AI & automation projects Aram has actually developed
          ----------------------------------------------------------------- */}
      <span id="what-we-build" className="sr-only" tabIndex={-1} />
      <span id="automation-work" className="sr-only" tabIndex={-1} />
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-16" id="work">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-neutral-200/80">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
                <Layers size={13} className="text-[#6C5CE7]" />
                <span>VERIFIED DELIVERABLES</span>
              </div>
              <h2 className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[40px] leading-tight">
                Our Automation Work
              </h2>
              <p className="mt-2 text-[15.5px] leading-relaxed text-[#5e586c] max-w-[660px]">
                Real workflows, AI-assisted platforms, and system automations developed to solve specific operational challenges.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 self-start rounded-xl border border-neutral-200 bg-white p-1 text-[12px] font-medium text-neutral-600 shadow-2xs md:self-end">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  filter === "all"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                All Work ({VERIFIED_PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("deployed")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  filter === "deployed"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                Deployed (2)
              </button>
              <button
                type="button"
                onClick={() => setFilter("completed")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  filter === "completed"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                Completed (2)
              </button>
              <button
                type="button"
                onClick={() => setFilter("prototype")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  filter === "prototype"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                Prototype (1)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Project Showcase Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const isDeployed = project.status === "Deployed";
            const isCompleted = project.status === "Completed";
            const isFullWidthCard = filter === "all" && project.id === "deepeyescan";

            return (
              <Reveal
                key={project.id}
                delay={idx * 0.06}
                className={isFullWidthCard ? "lg:col-span-2" : ""}
              >
                <article className="ai-work-card h-full flex flex-col justify-between">
                  {/* Top: Real Screenshot or Real Architecture Schematic */}
                  {project.imageSrc ? (
                    <div className="relative overflow-hidden bg-[#faf9fd] border-b border-neutral-100">
                      <div className="browser-chrome">
                        <div className="browser-dots">
                          <span className="browser-dot" />
                          <span className="browser-dot" />
                          <span className="browser-dot" />
                        </div>
                        {project.liveUrl && (
                          <span className="browser-url-pill flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                            {project.liveUrl}
                          </span>
                        )}
                      </div>
                      <div className="portfolio-screenshot-viewport relative w-full overflow-hidden bg-[#faf9fd]">
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt || project.name}
                          width={project.imageWidth || 1860}
                          height={project.imageHeight || 900}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-auto block object-contain object-top transition-transform duration-500 hover:scale-[1.015]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#faf8fe] via-white to-[#f4f1fa] border-b border-neutral-100 p-6 sm:p-7">
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6C5CE7]/10 text-[#6C5CE7]">
                            {project.id === "zoho-commercial-ops" ? (
                              <Workflow size={17} />
                            ) : project.id === "operations-metrics-hub" ? (
                              <Database size={17} />
                            ) : (
                              <Cpu size={17} />
                            )}
                          </span>
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                            {project.id === "zoho-commercial-ops"
                              ? "OPERATIONAL WORKFLOW SCHEMA"
                              : project.id === "operations-metrics-hub"
                              ? "DATA ENGINE & DIGEST PIPELINE"
                              : "CLINICAL TRIAGE PROTOTYPE"}
                          </span>
                        </div>
                      </div>

                      {/* Schematic Real Flow Steps */}
                      {project.id === "zoho-commercial-ops" ? (
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#6C5CE7]">
                              Trigger
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Lead / Order Intake
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#8b5cf6]">
                              Logic
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Deluge Automation
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#10b981]">
                              Outcome
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              CRM &amp; Books Sync
                            </span>
                          </div>
                        </div>
                      ) : project.id === "operations-metrics-hub" ? (
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#0284c7]">
                              Sources
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Disparate Datasets
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#6C5CE7]">
                              Pipeline
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Consolidation Script
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#10b981]">
                              Outcome
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Automated Digest
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#8b5cf6]">
                              Input
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Ocular Scans
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#7c3aed]">
                              Triage
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Vision Classification
                            </span>
                          </div>
                          <div className="rounded-xl border border-neutral-200/80 bg-white p-3 text-center shadow-2xs">
                            <span className="block text-[10px] font-bold uppercase text-[#d97706]">
                              Status
                            </span>
                            <span className="mt-1 block text-[11.5px] font-semibold text-neutral-800">
                              Lab Prototype
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Body: Problem, What it does, Tech, Status */}
                  <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      {/* Status + Category Header */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wide">
                          {project.category}
                        </span>

                        <span
                          className={`status-pill ${
                            isDeployed
                              ? "status-pill-deployed"
                              : isCompleted
                              ? "status-pill-completed"
                              : "status-pill-prototype"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isDeployed
                                ? "bg-[#10b981]"
                                : isCompleted
                                ? "bg-[#2563eb]"
                                : "bg-[#7c3aed]"
                            }`}
                          />
                          {project.statusLabel}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.015em] text-[#14121a]">
                        {project.name}
                      </h3>

                      {/* Problem Statement */}
                      <div className="mt-4 rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                          Problem Addressed
                        </span>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-neutral-700">
                          {project.problem}
                        </p>
                      </div>

                      {/* What it actually does */}
                      <div className="mt-3.5">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5946dc]">
                          What the Workflow Does
                        </span>
                        <p className="mt-1 text-[14px] leading-relaxed text-neutral-700">
                          {project.whatItDoes}
                        </p>
                      </div>
                    </div>

                    {/* Bottom: Verified Tools & Link */}
                    <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={project.destinationHref}
                        className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#5946dc] hover:text-[#4332bf] transition-colors self-start sm:self-auto shrink-0"
                      >
                        <span>{project.linkText || "View Details"}</span>
                        {project.liveUrl ? (
                          <ExternalLink size={13} />
                        ) : (
                          <ArrowRight size={13} />
                        )}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION: CLOSING — INVITE A REAL PROBLEM
          "What could your team stop doing manually?"
          ----------------------------------------------------------------- */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-18" id="contact">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#6C5CE7]/25 bg-gradient-to-br from-[#13111c] via-[#1a1727] to-[#12101b] p-8 text-white shadow-[0_20px_50px_-15px_rgba(40,25,80,0.35)] md:p-12 lg:p-14">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#8b5cf6]/25 to-transparent blur-3xl"
            />

            <div className="relative z-10 max-w-[720px]">
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-widest uppercase text-[#b5a4ff]">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>START WITH A REAL WORKFLOW</span>
              </div>

              <h2 className="mt-3 text-[30px] font-bold tracking-[-0.035em] text-white sm:text-[38px] md:text-[44px] leading-tight">
                What could your team stop doing manually?
              </h2>

              <p className="mt-4 text-[15.5px] leading-relaxed text-[#c5c1d3] sm:text-[17px]">
                Tell us about a repetitive task, a disconnected system, or a workflow that slows your team down. Let&apos;s explore whether a practical automation solution makes sense.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-6 py-3.5 text-[14px] font-semibold text-[#14121a] shadow-[0_6px_20px_-4px_rgba(155,140,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(155,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff]"
                >
                  <span>Let&apos;s Discuss Your Workflow</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Verified Trust Footnote & Quick Links */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11.5px] text-[#a49fba]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#10b981]" />
                  <span>Practical engineering exploration · No speculative claims or hype</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/our-work" className="hover:text-white transition-colors">
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
