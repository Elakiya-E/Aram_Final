"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

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
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

import type { LucideIcon } from "lucide-react";

export type Capability = {
  id: string;
  num: string;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
  accent: string;
  icon: LucideIcon;
  deliverables: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    id: "ai-solutions",
    num: "01",
    title: "AI Solutions",
    shortLabel: "AI Solutions",
    description:
      "Build intelligent assistants, AI-powered applications, and systems that turn information into useful outcomes.",
    badge: "INTELLIGENT SYSTEMS",
    accent: "#8b5cf6",
    icon: Bot,
    deliverables: [
      "Custom conversational copilots & assistants",
      "Document intelligence & knowledge retrieval (RAG)",
      "Automated decision support & classification",
    ],
  },
  {
    id: "ai-automation",
    num: "02",
    title: "AI & Automation",
    shortLabel: "Automation",
    description:
      "Reduce repetitive work by connecting tools, automating workflows, and simplifying everyday operations.",
    badge: "WORKFLOW ORCHESTRATION",
    accent: "#6366f1",
    icon: Workflow,
    deliverables: [
      "Multi-application triggers & integration flows",
      "Data synchronization across distributed teams",
      "Elimination of manual entry & repetitive tasks",
    ],
  },
  {
    id: "software-products",
    num: "03",
    title: "Software & Digital Products",
    shortLabel: "Digital Products",
    description:
      "Create websites, web applications, mobile apps, portals, and digital platforms built around real business needs.",
    badge: "FULL-STACK ENGINEERING",
    accent: "#3b82f6",
    icon: Layers,
    deliverables: [
      "Modern web applications & responsive portals",
      "Cross-platform iOS & Android mobile apps",
      "Scalable backend architectures & robust APIs",
    ],
  },
  {
    id: "data-analytics",
    num: "04",
    title: "Data & Analytics",
    shortLabel: "Data & Analytics",
    description:
      "Turn scattered data into clear dashboards, useful reports, and actionable business insights.",
    badge: "DECISION INTELLIGENCE",
    accent: "#10b981",
    icon: Database,
    deliverables: [
      "Centralized operational metrics & dashboards",
      "Automated reporting for leadership & teams",
      "Pipeline consolidation from disparate sources",
    ],
  },
  {
    id: "zoho-systems",
    num: "05",
    title: "Zoho & Business Systems",
    shortLabel: "Zoho Systems",
    description:
      "Connect business processes through CRM, business applications, workflow configuration, and system integration.",
    badge: "BUSINESS ECOSYSTEMS",
    accent: "#f59e0b",
    icon: Boxes,
    deliverables: [
      "End-to-end Zoho CRM setup & customization",
      "Zoho Creator custom applications & workflows",
      "Seamless integration with third-party tools & ERP",
    ],
  },
  {
    id: "cloud-services",
    num: "06",
    title: "Cloud & Managed Services",
    shortLabel: "Cloud & Managed",
    description:
      "Support reliable digital operations through deployment, infrastructure setup, maintenance, and ongoing improvements.",
    badge: "INFRASTRUCTURE & RELIABILITY",
    accent: "#ec4899",
    icon: Cloud,
    deliverables: [
      "Cloud architecture, hosting & secure staging",
      "Proactive system monitoring & continuous updates",
      "Performance optimization & incident maintenance",
    ],
  },
];

export const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    description: "Discover your goals and challenges.",
    detail: "Deep dive into real operations, existing pain points, and strategic milestones.",
    icon: Compass,
    accent: "#8b5cf6",
  },
  {
    num: "02",
    title: "Design",
    description: "Plan the right solution and architecture.",
    detail: "Formulate scalable technical blueprints, integration contracts, and UX flows.",
    icon: Cpu,
    accent: "#6366f1",
  },
  {
    num: "03",
    title: "Build",
    description: "Develop, integrate, and test.",
    detail: "Agile execution with transparent milestones, rigorous QA, and rapid feedback.",
    icon: Code2,
    accent: "#3b82f6",
  },
  {
    num: "04",
    title: "Improve",
    description: "Refine the solution as your needs evolve.",
    detail: "Ongoing performance telemetry, system updates, and iterative capability expansion.",
    icon: Sparkles,
    accent: "#10b981",
  },
];

// Node angles around center (360 degrees / 6 nodes = 60 deg each)
// Starting from top (-90 degrees)
const NODE_ANGLES = [-90, -30, 30, 90, 150, 210];
const RADIUS = 185;
const CENTER_X = 260;
const CENTER_Y = 260;

export function WhatWeDoPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCap = CAPABILITIES[activeIndex];
  const ActiveIcon = activeCap.icon;
  const tablistRef = useRef<HTMLDivElement>(null);

  const selectNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
  }, []);

  const selectPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = (index + 1) % CAPABILITIES.length;
        setActiveIndex(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (index - 1 + CAPABILITIES.length) % CAPABILITIES.length;
        setActiveIndex(prev);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveIndex(index);
      }
    },
    []
  );

  return (
    <div className="what-we-do-page">
      {/* SECTION 01: HERO */}
      <section className="wwd-hero-section section-wrap" id="top">
        <div className="wwd-hero-glow" aria-hidden="true" />

        <div className="wwd-hero-layout">
          <div className="wwd-hero-copy">
            <Reveal>
              <div className="eyebrow wwd-eyebrow">
                <span className="eyebrow-line" /> WHAT WE DO · CAPABILITIES
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="wwd-hero-title">
                We turn complex challenges into{" "}
                <span className="serif-accent italic-highlight">connected solutions.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="wwd-hero-desc">
                We combine AI, automation, software engineering, data, and digital platforms to help
                businesses work smarter, move faster, and grow with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="wwd-hero-actions">
                <a className="button button-primary" href="#capabilities">
                  Explore Our Capabilities <ArrowDown size={15} />
                </a>
                <Link className="button button-quiet" href="/#contact">
                  Let&apos;s Talk <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="wwd-hero-tags">
                <div className="wwd-hero-tag">
                  <span className="wwd-tag-dot" />
                  <span>6 Core Capabilities</span>
                </div>
                <div className="wwd-hero-tag">
                  <span className="wwd-tag-dot" />
                  <span>Interactive Ecosystem</span>
                </div>
                <div className="wwd-hero-tag">
                  <span className="wwd-tag-dot" />
                  <span>End-to-End Ownership</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="wwd-hero-preview">
            <div className="wwd-preview-card">
              <div className="wwd-preview-header">
                <div className="wwd-preview-badge">
                  <Zap size={14} className="text-[#a78bfa]" />
                  <span>CONNECTED PLATFORMS</span>
                </div>
                <span className="wwd-live-pulse" />
              </div>

              <div className="wwd-preview-grid">
                <div className="wwd-preview-mini">
                  <span className="mini-label">INTELLIGENCE</span>
                  <b>AI &amp; Workflows</b>
                </div>
                <div className="wwd-preview-mini">
                  <span className="mini-label">ENGINEERING</span>
                  <b>Digital Products</b>
                </div>
                <div className="wwd-preview-mini">
                  <span className="mini-label">VISIBILITY</span>
                  <b>Data Analytics</b>
                </div>
                <div className="wwd-preview-mini">
                  <span className="mini-label">OPERATIONS</span>
                  <b>Zoho Ecosystem</b>
                </div>
              </div>

              <div className="wwd-preview-foot">
                <small>Integrated multidisciplinary execution</small>
                <span className="wwd-preview-code">ARAM.CORE.v26</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: INTERACTIVE CAPABILITY ECOSYSTEM */}
      <section className="wwd-section section-wrap" id="capabilities">
        <Reveal className="wwd-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 01 / CORE CAPABILITIES
          </div>
          <h2>
            An interactive <span className="serif-accent">technology ecosystem.</span>
          </h2>
          <p>
            Explore our six core practices and how they integrate seamlessly around your business.
            Select any node to view capabilities and key deliverables.
          </p>
        </Reveal>

        {/* Mobile Capability Selector (Visible on small screens) */}
        <div className="wwd-mobile-selector lg:hidden">
          <div
            className="wwd-mobile-pills-bar"
            role="tablist"
            aria-label="Capabilities selector"
          >
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              const isSelected = activeIndex === i;
              return (
                <button
                  key={cap.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(i)}
                  className={`wwd-mobile-pill ${isSelected ? "is-active" : ""}`}
                >
                  <Icon size={14} style={{ color: isSelected ? cap.accent : "currentColor" }} />
                  <span>{cap.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop & Tablet Interactive Ecosystem Stage */}
        <div className="wwd-ecosystem-stage">
          {/* Orbital Visual Canvas */}
          <div className="wwd-orbital-wrap" aria-hidden="false">
            <svg
              className="wwd-orbital-svg"
              viewBox="0 0 520 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric rings */}
              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r="110"
                className="wwd-svg-ring ring-inner"
              />
              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={RADIUS}
                className="wwd-svg-ring ring-main"
              />
              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r="235"
                className="wwd-svg-ring ring-outer"
              />

              {/* Connecting spokes from center to each node */}
              {NODE_ANGLES.map((angleDeg, i) => {
                const rad = (angleDeg * Math.PI) / 180;
                const x = CENTER_X + RADIUS * Math.cos(rad);
                const y = CENTER_Y + RADIUS * Math.sin(rad);
                const isSelected = activeIndex === i;

                return (
                  <line
                    key={`line-${i}`}
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={x}
                    y2={y}
                    className={`wwd-spoke-line ${isSelected ? "is-active" : ""}`}
                    style={{
                      stroke: isSelected ? CAPABILITIES[i].accent : undefined,
                    }}
                  />
                );
              })}
            </svg>

            {/* Central Node (Aram Brand Hub) */}
            <div className="wwd-center-node" aria-hidden="true">
              <div className="wwd-center-halo" />
              <div className="wwd-center-core">
                <Image
                  src={siteLogo}
                  alt="Aram Analytics"
                  width={64}
                  height={22}
                  className="brand-logo"
                  priority
                />
                <span className="wwd-center-label">CORE HUB</span>
              </div>
            </div>

            {/* Orbiting Capability Nodes */}
            <div
              className="wwd-nodes-container"
              role="tablist"
              aria-label="Interactive Capability Nodes"
              ref={tablistRef}
            >
              {CAPABILITIES.map((cap, i) => {
                const angleDeg = NODE_ANGLES[i];
                const rad = (angleDeg * Math.PI) / 180;
                const x = CENTER_X + RADIUS * Math.cos(rad);
                const y = CENTER_Y + RADIUS * Math.sin(rad);
                const isSelected = activeIndex === i;
                const Icon = cap.icon;

                return (
                  <button
                    key={cap.id}
                    role="tab"
                    id={`cap-tab-${cap.id}`}
                    aria-controls={`cap-panel-${cap.id}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveIndex(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className={`wwd-node-btn ${isSelected ? "is-selected" : ""}`}
                    style={
                      {
                        left: `${(x / 520) * 100}%`,
                        top: `${(y / 520) * 100}%`,
                        "--node-accent": cap.accent,
                      } as React.CSSProperties
                    }
                  >
                    <span className="wwd-node-icon-wrap">
                      <Icon size={18} />
                    </span>
                    <span className="wwd-node-label">{cap.shortLabel}</span>
                    <span className="wwd-node-indicator" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Focal Detail Panel */}
          <div
            className="wwd-focal-card"
            id={`cap-panel-${activeCap.id}`}
            role="tabpanel"
            aria-labelledby={`cap-tab-${activeCap.id}`}
          >
            <div
              className="wwd-focal-glow"
              style={{
                background: `radial-gradient(circle at 80% 20%, ${activeCap.accent}22 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />

            <div className="wwd-focal-header">
              <div className="wwd-focal-meta">
                <span className="wwd-focal-num">{activeCap.num} / 06</span>
                <span className="wwd-focal-badge" style={{ color: activeCap.accent }}>
                  {activeCap.badge}
                </span>
              </div>

              {/* Sequential navigation arrows */}
              <div className="wwd-focal-arrows">
                <button
                  type="button"
                  onClick={selectPrev}
                  className="wwd-nav-arrow"
                  aria-label="Previous capability"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={selectNext}
                  className="wwd-nav-arrow"
                  aria-label="Next capability"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="wwd-focal-title-row">
              <span
                className="wwd-focal-icon"
                style={{
                  color: activeCap.accent,
                  backgroundColor: `${activeCap.accent}14`,
                  borderColor: `${activeCap.accent}33`,
                }}
              >
                <ActiveIcon size={24} />
              </span>
              <h3>{activeCap.title}</h3>
            </div>

            <p className="wwd-focal-desc">{activeCap.description}</p>

            <div className="wwd-focal-divider" />

            <div className="wwd-deliverables-wrap">
              <span className="wwd-deliverables-title">WHAT WE DELIVER</span>
              <ul className="wwd-deliverables-list">
                {activeCap.deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={14} style={{ color: activeCap.accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="wwd-focal-actions">
              <Link className="button button-primary" href="/#contact">
                Discuss This Capability <ArrowUpRight size={14} />
              </Link>
              <a className="button button-quiet" href="#approach">
                Our Approach ↓
              </a>
            </div>
          </div>
        </div>

        {/* Quick-Scan Capability Index */}
        <div className="wwd-index-section">
          <div className="wwd-index-head">
            <span className="wwd-index-title">ALL SIX CAPABILITIES AT A GLANCE</span>
            <small>Direct access across our end-to-end engineering practices</small>
          </div>

          <div className="wwd-index-grid">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeIndex === idx;

              return (
                <div
                  key={cap.id}
                  className={`wwd-index-card ${isSelected ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <div className="index-card-top">
                    <span className="index-num">{cap.num}</span>
                    <span className="index-icon" style={{ color: cap.accent }}>
                      <Icon size={16} />
                    </span>
                  </div>
                  <h4>{cap.title}</h4>
                  <p>{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: APPROACH SECTION */}
      <section className="wwd-section section-wrap" id="approach">
        <Reveal className="wwd-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 02 / OUR APPROACH
          </div>
          <h2>
            From problem to <span className="serif-accent">progress.</span>
          </h2>
          <p>
            A clear, dependable progression from your initial challenge to sustainable business
            results.
          </p>
        </Reveal>

        <div className="wwd-approach-timeline">
          <div className="wwd-timeline-flowline" aria-hidden="true" />

          <div className="wwd-approach-grid">
            {APPROACH_STEPS.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <Reveal delay={i * 0.08} key={step.title} className="wwd-step-card">
                  <div className="step-card-header">
                    <div className="step-badge-wrap">
                      <span className="step-num">{step.num}</span>
                    </div>
                    <span
                      className="step-icon-wrap"
                      style={{
                        color: step.accent,
                        backgroundColor: `${step.accent}12`,
                        borderColor: `${step.accent}26`,
                      }}
                    >
                      <StepIcon size={17} />
                    </span>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-main-desc">{step.description}</p>
                  <div className="step-subdetail">
                    <small>{step.detail}</small>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04: CLOSING CTA */}
      <section className="wwd-section wwd-cta-section section-wrap" id="cta">
        <div className="wwd-cta-panel">
          <div className="wwd-cta-glow" aria-hidden="true" />
          <Reveal className="wwd-cta-content">
            <div className="eyebrow wwd-cta-eyebrow">
              <Sparkles size={13} className="text-[#c4b5fd]" />
              <span>LET&apos;S COLLABORATE</span>
            </div>
            <h2>
              Have a challenge <span className="serif-accent italic-highlight">worth solving?</span>
            </h2>
            <p>
              Tell us what you want to improve. We&apos;ll help you explore the right technology and
              the next steps.
            </p>
            <div className="wwd-cta-actions">
              <Link className="button button-primary" href="/#contact">
                Let&apos;s Talk <ArrowUpRight size={15} />
              </Link>
              <a
                className="button button-quiet"
                href="mailto:contact@aramanalytics.com?subject=Inquiry%20via%20What%20We%20Do"
              >
                Send an Email <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
