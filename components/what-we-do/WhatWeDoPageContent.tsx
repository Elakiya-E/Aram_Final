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
  Layers,
  Sparkles,
  Workflow,
  Database,
  Radio,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { HeroIntelligenceCanvas } from "./HeroIntelligenceCanvas";
import { CapabilityMetaphorVisual } from "./CapabilityMetaphorVisual";
import { ProcessPathway } from "./ProcessPathway";

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
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

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
    shortLabel: "AI & Automation",
    description:
      "Reduce repetitive work by connecting tools, automating workflows, and simplifying everyday operations.",
    badge: "PROCESS ORCHESTRATION",
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
    shortLabel: "Software & Digital Products",
    description:
      "Create websites, web applications, mobile apps, portals, and digital platforms built around real business needs.",
    badge: "FULL-STACK PLATFORMS",
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
    shortLabel: "Zoho & Business Systems",
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
    shortLabel: "Cloud & Managed Services",
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

export function WhatWeDoPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCap = CAPABILITIES[activeIndex];
  const ActiveIcon = activeCap.icon;
  const explorerRef = useRef<HTMLDivElement>(null);

  const selectNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
  }, []);

  const selectPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  }, []);

  const handleHeroHubClick = useCallback((index: number) => {
    setActiveIndex(index);
    explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="what-we-do-page">
      {/* SECTION 01: SIGNATURE HERO EXPERIENCE — ARAM INTELLIGENCE IN MOTION */}
      <section className="wwd-hero-section section-wrap" id="top">
        {/* Animated intelligence network canvas */}
        <HeroIntelligenceCanvas
          activeHub={activeIndex}
          onHubClick={handleHeroHubClick}
        />

        <div className="wwd-hero-inner">
          <Reveal>
            <div className="eyebrow wwd-eyebrow">
              <span className="eyebrow-line" /> ARAM INTELLIGENCE IN MOTION · CAPABILITIES
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

          {/* Six subtle interactive capability markers in Hero */}
          <Reveal delay={0.32}>
            <div className="wwd-hero-markers">
              {CAPABILITIES.map((cap, i) => {
                const Icon = cap.icon;
                const isSelected = activeIndex === i;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`hero-marker-pill ${isSelected ? "is-selected" : ""}`}
                    style={{ "--marker-accent": cap.accent } as React.CSSProperties}
                  >
                    <span className="marker-dot" style={{ backgroundColor: cap.accent }} />
                    <Icon size={13} />
                    <span>{cap.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Refined scroll indicator */}
          <Reveal delay={0.4}>
            <div className="wwd-scroll-indicator">
              <a href="#capabilities" className="scroll-indicator-link">
                <span className="scroll-indicator-line">
                  <span className="scroll-indicator-dot" />
                </span>
                <span className="scroll-indicator-text">
                  Scroll to explore intelligence network
                </span>
                <ArrowDown size={13} className="text-[#8b5cf6]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTINUOUS VISUAL CONDUIT BETWEEN SECTIONS */}
      <div className="wwd-network-conduit" aria-hidden="true">
        <span className="conduit-line" />
        <span className="conduit-pulse" />
      </div>

      {/* SECTION 02: BESPOKE INTERACTIVE CAPABILITY EXPLORER */}
      <section className="wwd-section section-wrap" id="capabilities" ref={explorerRef}>
        <Reveal className="wwd-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 01 / CORE CAPABILITIES
          </div>
          <h2>
            An interconnected <span className="serif-accent">capability explorer.</span>
          </h2>
          <p>
            Explore our six core practices and observe how they respond dynamically in our connected
            technology framework. Hover or select any discipline to activate its visual metaphor.
          </p>
        </Reveal>

        {/* Interactive Capability Selector Bar */}
        <div className="wwd-capability-tabs" role="tablist" aria-label="Capabilities Navigation">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            const isSelected = activeIndex === i;
            return (
              <button
                key={cap.id}
                role="tab"
                id={`tab-${cap.id}`}
                aria-selected={isSelected}
                onClick={() => setActiveIndex(i)}
                className={`capability-tab-btn ${isSelected ? "is-selected" : ""}`}
                style={{ "--tab-accent": cap.accent } as React.CSSProperties}
              >
                <span className="tab-num">{cap.num}</span>
                <Icon size={15} style={{ color: isSelected ? cap.accent : "currentColor" }} />
                <span className="tab-label">{cap.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Feature 01: The Interconnected Aram Intelligence Ecosystem Display Card */}
        <div className="wwd-ecosystem-card-container">
          <CapabilityMetaphorVisual
            activeId={activeCap.id}
            accent={activeCap.accent}
            capabilities={CAPABILITIES}
            activeCap={activeCap}
            activeIndex={activeIndex}
            onSelectCap={setActiveIndex}
          />
        </div>

        {/* Feature 02: Full 6-Card Comprehensive Capabilities Deck */}
        <div className="wwd-all-cards-section" id="all-capabilities">
          <div className="all-cards-header">
            <div>
              <span className="all-cards-eyebrow">COMPREHENSIVE CAPABILITIES INDEX</span>
              <h3 className="all-cards-title">All Six Core Practices</h3>
            </div>
            <p className="all-cards-sub">
              Every practice operates independently or interconnects seamlessly to deliver end-to-end digital solutions.
            </p>
          </div>

          <div className="all-cards-grid">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeIndex === idx;

              return (
                <div
                  key={cap.id}
                  className={`full-cap-card ${isSelected ? "is-active" : ""}`}
                  style={{ "--card-accent": cap.accent } as React.CSSProperties}
                >
                  <div className="full-card-top">
                    <span className="full-card-num">{cap.num}</span>
                    <span className="full-card-badge" style={{ color: cap.accent }}>
                      {cap.badge}
                    </span>
                  </div>

                  <div className="full-card-title-row">
                    <span
                      className="full-card-icon"
                      style={{
                        color: cap.accent,
                        backgroundColor: `${cap.accent}14`,
                        borderColor: `${cap.accent}2a`,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <h4>{cap.title}</h4>
                  </div>

                  {/* Approved exact description verbatim */}
                  <p className="full-card-description">{cap.description}</p>

                  {/* Deliverables Checklist */}
                  <div className="full-card-deliverables">
                    <span className="full-card-deliv-title">KEY DELIVERABLES</span>
                    <ul>
                      {cap.deliverables.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={13} style={{ color: cap.accent }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="full-card-footer">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(idx);
                        explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="full-card-inspect-btn"
                    >
                      Inspect in Ecosystem ↑
                    </button>
                    <Link className="full-card-talk-link" href="/#contact">
                      Let&apos;s Talk <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTINUOUS VISUAL CONDUIT FROM SERVICES TO PROCESS */}
      <div className="wwd-network-conduit" aria-hidden="true">
        <span className="conduit-line" />
        <span className="conduit-pulse" />
      </div>

      {/* SECTION 03: CONTINUOUS PROCESS PATHWAY */}
      <section className="wwd-section section-wrap" id="process">
        <Reveal className="wwd-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 02 / OUR APPROACH
          </div>
          <h2>
            From problem to <span className="serif-accent">progress.</span>
          </h2>
          <p>
            A continuous visual pathway from initial discovery to sustained operational
            resilience. As each stage progresses, our team verifies and validates outcomes.
          </p>
        </Reveal>

        <ProcessPathway />
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
