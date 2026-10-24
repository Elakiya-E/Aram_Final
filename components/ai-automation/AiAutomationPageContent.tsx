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
    statusLabel: "Live Platform",
    problem:
      "Marketing teams face time-consuming manual effort managing multi-channel campaigns and tracking fragmented growth performance.",
    whatItDoes:
      "Automates multi-channel marketing actions, campaign scheduling, and performance monitoring through an AI-assisted management interface.",
    tools: ["Web Platform", "Marketing APIs", "AI Optimization Logic"],
    imageSrc: "/images/Adsyncro.png",
    imageAlt: "Adsyncro AI-powered performance marketing and growth automation platform interface",
    liveUrl: "adsyncro.co.uk",
    linkText: "Visit Platform",
    destinationHref: "/#contact?project=adsyncro",
  },
  {
    id: "jananayagam",
    name: "Jananayagam",
    category: "Civic Tech · Workflow Platform",
    status: "Deployed",
    statusLabel: "Live Platform",
    problem:
      "Public grievance handling was delayed by manual intake, untracked citizen requests, and slow departmental routing.",
    whatItDoes:
      "Automatically triages inbound citizen reports, routes tickets to appropriate handlers, and sends automated resolution tracking updates.",
    tools: ["Next.js", "Node.js", "Webhooks", "Notification Dispatch Pipeline"],
    imageSrc: "/images/jananayagam.png",
    imageAlt: "Jananayagam citizen engagement and civic grievance tracking web platform interface",
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
   HOW WE BUILD — 4 REAL-WORLD DEVELOPMENT PHASES
   Grounded strictly in Aram Analytics delivery workflow
   ========================================================================= */

const BUILD_STEPS = [
  {
    step: "01",
    tag: "DISCOVER",
    title: "Identify Bottlenecks",
    headline: "Uncover manual handoffs & repetitive overhead",
    description:
      "We inspect how information currently moves across your team to identify manual handoffs, repetitive copy-pasting, and operational friction.",
    checkpoint: "Workflow Friction Audit",
    accent: "#6C5CE7",
  },
  {
    step: "02",
    tag: "DESIGN",
    title: "Design Practical Flow",
    headline: "Map data contracts & practical logic",
    description:
      "We define clear data fields, triggers, error handling, and human checkpoints suited to your actual software environment and security requirements.",
    checkpoint: "Integration & Trigger Map",
    accent: "#8b5cf6",
  },
  {
    step: "03",
    tag: "BUILD & TEST",
    title: "Build & Test Integrations",
    headline: "Connect APIs, test edge cases & validate",
    description:
      "We construct the scripts, webhooks, or AI components and test them in sandboxed environments with real sample data before launch.",
    checkpoint: "Sandboxed Validation",
    accent: "#3b82f6",
  },
  {
    step: "04",
    tag: "DEPLOY",
    title: "Deploy & Support",
    headline: "Launch, monitor telemetry & refine",
    description:
      "We roll out the workflow with clear documentation, monitor execution reliability, and make ongoing adjustments as business needs evolve.",
    checkpoint: "Operational Runbook & Support",
    accent: "#10b981",
  },
];

export function AiAutomationPageContent() {
  const [filter, setFilter] = useState<"all" | "deployed" | "prototype">("all");

  const filteredProjects = VERIFIED_PROJECTS.filter((proj) => {
    if (filter === "deployed") return proj.status === "Deployed" || proj.status === "Completed";
    if (filter === "prototype") return proj.status === "Prototype";
    return true;
  });

  return (
    <div className="ai-page-wrapper">
      {/* -----------------------------------------------------------------
          HERO SECTION
          ----------------------------------------------------------------- */}
      <section className="ai-hero-section relative mx-auto w-full max-w-[1320px] px-6" id="top">
        <div className="ai-ambient-glow" aria-hidden="true" />

        <div className="relative z-10 max-w-[820px]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_16px_-4px_rgba(108,92,231,0.12)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7]" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#5946dc]">
                PROVEN IMPLEMENTATIONS &amp; WORKFLOWS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 text-[38px] font-semibold tracking-[-0.035em] text-[#14121a] sm:text-[46px] md:text-[52px] lg:text-[58px] leading-[1.08]">
              AI &amp; Automation in Practice
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.68] text-[#5e586c] sm:text-[17.5px]">
              Explore the AI solutions and automation workflows Aram Analytics has built to address practical business needs.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(108,92,231,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
              >
                <span>View Verified Work</span>
                <ArrowDown size={15} />
              </a>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white px-5 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-2xs transition-all duration-200 hover:border-[#6C5CE7]/40 hover:text-[#5946dc]"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>

          {/* Fact-based Trust Strip */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-neutral-200/70 pt-5 text-[12px] text-[#5e586c]">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#10b981]" />
                <span>Verified company implementations</span>
              </div>
              <span className="text-neutral-300" aria-hidden="true">•</span>
              <div className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#6C5CE7]" />
                <span>Transparent deployment statuses</span>
              </div>
              <span className="text-neutral-300" aria-hidden="true">•</span>
              <div className="inline-flex items-center gap-1.5">
                <Zap size={13} className="text-[#0284c7]" />
                <span>Real workflows over theoretical concepts</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 1: OUR AUTOMATION WORK
          Anchor compatibility: id="work" and id="what-we-build"
          ----------------------------------------------------------------- */}
      <span id="what-we-build" className="sr-only" tabIndex={-1} />
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-16" id="work">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-neutral-200/70">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
                <Workflow size={13} className="text-[#6C5CE7]" />
                <span>SECTION 01 // PORTFOLIO EVIDENCE</span>
              </div>
              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[40px] leading-tight">
                Our Automation Work
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5e586c] max-w-[640px]">
                Real workflows, AI-assisted platforms, and system automations developed to solve specific operational challenges.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2 self-start rounded-xl border border-neutral-200 bg-white p-1 text-[12px] font-medium text-neutral-600 shadow-2xs md:self-end">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-lg px-3 py-1 transition-colors ${
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
                className={`rounded-lg px-3 py-1 transition-colors ${
                  filter === "deployed"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                Deployed / Completed (4)
              </button>
              <button
                type="button"
                onClick={() => setFilter("prototype")}
                className={`rounded-lg px-3 py-1 transition-colors ${
                  filter === "prototype"
                    ? "bg-[#6C5CE7] text-white font-semibold"
                    : "hover:bg-neutral-100 text-neutral-600"
                }`}
              >
                Prototypes (1)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Project Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const isDeployed = project.status === "Deployed";
            const isCompleted = project.status === "Completed";

            return (
              <Reveal key={project.id} delay={idx * 0.06}>
                <article className="ai-work-card h-full flex flex-col justify-between">
                  {/* Top: Screenshot or Architecture Schematic */}
                  {project.imageSrc ? (
                    <div className="relative overflow-hidden bg-neutral-900 border-b border-neutral-100">
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
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt || project.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
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
                            ) : (
                              <Database size={17} />
                            )}
                          </span>
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                            {project.id === "zoho-commercial-ops"
                              ? "WORKFLOW INTEGRATION SCHEMA"
                              : "DATA ENGINE & ALERT PIPELINE"}
                          </span>
                        </div>
                      </div>

                      {/* Schematic Flow Steps */}
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
                          Problem Solved
                        </span>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-neutral-700">
                          {project.problem}
                        </p>
                      </div>

                      {/* What it actually does */}
                      <div className="mt-3.5">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5946dc]">
                          What the Automation Does
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
          SECTION 2: HOW WE BUILD
          Anchor compatibility: id="how-we-build" and id="approach"
          ----------------------------------------------------------------- */}
      <span id="approach" className="sr-only" tabIndex={-1} />
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-20" id="how-we-build">
        <Reveal>
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
              <Cpu size={13} className="text-[#6C5CE7]" />
              <span>SECTION 02 // METHODOLOGY</span>
            </div>

            <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[40px] leading-tight">
              How We Build
            </h2>

            <p className="mt-3 text-[15.5px] leading-[1.68] text-[#5e586c]">
              A grounded development method focused on actual operational bottlenecks and reliable execution.
            </p>
          </div>
        </Reveal>

        {/* 4 Real-World Build Steps */}
        <div className="relative mt-12">
          <div className="build-track-guide" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUILD_STEPS.map((stage, idx) => (
              <Reveal key={stage.step} delay={0.07 * idx}>
                <div className="build-step-card h-full">
                  <div>
                    {/* Top: Step Index & Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <span
                        className="font-mono text-[14px] font-bold"
                        style={{ color: stage.accent }}
                      >
                        {stage.step}
                      </span>
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wide text-neutral-600">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[17px] font-semibold text-[#14121a] leading-snug">
                      {stage.title}
                    </h3>

                    <p className="mt-2 text-[13px] font-medium text-neutral-700 leading-snug">
                      {stage.headline}
                    </p>

                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#5e586c]">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600">
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

      {/* -----------------------------------------------------------------
          SECTION 3: CLOSING CTA
          ----------------------------------------------------------------- */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-20" id="contact">
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
                <span>LET&apos;S WORK TOGETHER</span>
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-white sm:text-[36px] md:text-[42px] leading-tight">
                Have a Workflow Worth Improving?
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c5c1d3] sm:text-[16.5px]">
                Tell us about your operational challenge, and let&apos;s explore a practical solution.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-6 py-3.5 text-[14px] font-semibold text-[#14121a] shadow-[0_6px_20px_-4px_rgba(155,140,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(155,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff]"
                >
                  <span>Discuss Your Project</span>
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
                  <span>Practical engineering discussion · No speculative hype</span>
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
