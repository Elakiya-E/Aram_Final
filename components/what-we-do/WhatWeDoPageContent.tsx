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
import { useState, useCallback, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { HeroIntelligenceCanvas } from "./HeroIntelligenceCanvas";
import { CapabilityMetaphorVisual } from "./CapabilityMetaphorVisual";
import { ProcessPathway } from "./ProcessPathway";
import {
  SERVICES_DATA,
  WORKFLOW_AUDIT_OFFER,
  type ServiceCapability,
} from "@/content/services";

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

export type Capability = ServiceCapability;
export const CAPABILITIES = SERVICES_DATA;

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

  // Synchronize active capability when navigating from MegaMenu links (e.g. /what-we-do#ai-automation)
  useEffect(() => {
    if (typeof window === "undefined") return;
    function syncHash() {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = CAPABILITIES.findIndex((c) => c.id === hash);
        if (found !== -1) {
          setActiveIndex(found);
        }
      }
    }
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
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

        {/* Mobile touch-friendly pill bar */}
        <div className="wwd-mobile-tab-bar lg:hidden" role="tablist">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            const isSelected = activeIndex === i;
            return (
              <button
                key={cap.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(i)}
                className={`mobile-tab-pill ${isSelected ? "is-selected" : ""}`}
                style={{ "--tab-accent": cap.accent } as React.CSSProperties}
              >
                <Icon size={14} style={{ color: isSelected ? cap.accent : "currentColor" }} />
                <span>{cap.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Capability Explorer Layout */}
        <div className="capability-explorer-layout">
          {/* Left Column: Curated Capability Selector List */}
          <div
            className="explorer-nav-list"
            role="tablist"
            aria-label="Capabilities"
          >
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              const isSelected = activeIndex === i;

              return (
                <button
                  key={cap.id}
                  role="tab"
                  id={`tab-${cap.id}`}
                  aria-controls={`panel-${cap.id}`}
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`explorer-nav-item ${isSelected ? "is-active" : ""}`}
                  style={{ "--item-accent": cap.accent } as React.CSSProperties}
                >
                  <div className="item-num-wrap">
                    <span className="item-num">{cap.num}</span>
                  </div>

                  <div className="item-content-wrap">
                    <div className="item-title-row">
                      <span className="item-icon" style={{ color: cap.accent }}>
                        <Icon size={16} />
                      </span>
                      <h4>{cap.title}</h4>
                    </div>

                    {/* Collapsible micro-summary on active */}
                    <div className="item-summary-preview">
                      <small>{cap.badge}</small>
                    </div>
                  </div>

                  <span className="item-active-chevron">
                    <MoveRight size={14} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Central Visual: Dynamic Capability Metaphor Visual */}
          <div className="explorer-center-stage">
            <CapabilityMetaphorVisual
              activeId={activeCap.id}
              accent={activeCap.accent}
            />
          </div>

          {/* Right Column: Detailed Capability Description & Deliverables */}
          <div
            className="explorer-detail-panel"
            id={`panel-${activeCap.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCap.id}`}
          >
            <div className="detail-panel-header">
              <div className="detail-badge-row">
                <span className="detail-index-tag">{activeCap.num} OF 06</span>
                <span className="detail-badge-pill" style={{ color: activeCap.accent }}>
                  {activeCap.badge}
                </span>
              </div>

              {/* Sequential controls */}
              <div className="detail-arrows">
                <button
                  type="button"
                  onClick={selectPrev}
                  className="detail-arrow-btn"
                  aria-label="Previous capability"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={selectNext}
                  className="detail-arrow-btn"
                  aria-label="Next capability"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="detail-title-row">
              <span
                className="detail-icon-frame"
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

            {/* Synchronized Hero Card Core Hook */}
            <div
              className="detail-hero-card-hook"
              style={{
                borderColor: `${activeCap.accent}33`,
                background: `linear-gradient(135deg, ${activeCap.accent}0d 0%, transparent 100%)`,
              }}
            >
              <div className="detail-hero-hook-header">
                <span
                  className="detail-hero-hook-dot"
                  style={{ backgroundColor: activeCap.accent }}
                />
                <span
                  className="detail-hero-hook-badge"
                  style={{ color: activeCap.accent }}
                >
                  HERO SERVICE HIGHLIGHT
                </span>
              </div>
              <p className="detail-hero-hook-desc">
                &ldquo;{activeCap.heroCardDescription}&rdquo;
              </p>
            </div>

            {/* Approved exact description */}
            <p className="detail-approved-description">{activeCap.description}</p>

            <div className="detail-divider" />

            {/* Deliverables Checklist */}
            <div className="detail-deliverables-section">
              <span className="deliverables-title">WHAT WE DELIVER</span>
              <ul className="deliverables-list">
                {activeCap.deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={14} style={{ color: activeCap.accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-action-footer">
              <Link className="button button-primary" href="/#contact">
                Discuss This Capability <ArrowUpRight size={15} />
              </Link>
              <a className="button button-quiet" href="#process">
                Our Process Pathway ↓
              </a>
            </div>
          </div>
        </div>

        {/* Quick-Scan Capability Matrix (All six accessible at a glance) */}
        <div className="wwd-scan-matrix">
          <div className="matrix-header">
            <span className="matrix-title">COMPREHENSIVE CAPABILITIES INDEX</span>
            <small>Direct access across our multi-disciplinary technology ecosystem</small>
          </div>

          <div className="matrix-grid">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeIndex === idx;

              return (
                <div
                  key={cap.id}
                  className={`matrix-card ${isSelected ? "is-selected" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <div className="matrix-card-top">
                    <span className="matrix-num">{cap.num}</span>
                    <span className="matrix-icon" style={{ color: cap.accent }}>
                      <Icon size={16} />
                    </span>
                  </div>
                  <h4>{cap.title}</h4>
                  <span className="matrix-hero-phrase">&ldquo;{cap.heroCardDescription}&rdquo;</span>
                  <p>{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Synchronized Workflow Audit Callout Offer from Homepage Hero Card */}
        <div className="wwd-audit-callout-card">
          <div className="audit-callout-glow" aria-hidden="true" />
          <div className="audit-callout-inner">
            <div className="audit-callout-left">
              <span className="audit-callout-kicker">
                <Sparkles size={13} className="text-[#8b5cf6]" />
                {WORKFLOW_AUDIT_OFFER.kicker}
              </span>
              <h3 className="audit-callout-title">{WORKFLOW_AUDIT_OFFER.title}</h3>
              <p className="audit-callout-desc">{WORKFLOW_AUDIT_OFFER.description}</p>
            </div>
            <div className="audit-callout-right">
              <Link href={WORKFLOW_AUDIT_OFFER.href} className="button button-primary audit-callout-btn">
                {WORKFLOW_AUDIT_OFFER.ctaText} <ArrowUpRight size={15} />
              </Link>
            </div>
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
