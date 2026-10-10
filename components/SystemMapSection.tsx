"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Zap, Layers, Code2, BarChart3, ArrowUpRight, Sparkles } from "lucide-react";

type Capability = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Bot;
  color: string;
  bgLight: string;
  // Node coordinates on 1000 x 640 map canvas
  cx: number;
  cy: number;
  // Connector path from center (500, 320) to node
  pathD: string;
};

const CAPABILITIES: Capability[] = [
  {
    id: "ai",
    number: "01",
    title: "AI SOLUTIONS",
    tagline: "Intelligent Assistants & Agents",
    description:
      "AI assistants, AI agents, knowledge systems and intelligent features designed around real business use cases.",
    icon: Bot,
    color: "#7c6aee",
    bgLight: "rgba(124, 106, 238, 0.08)",
    cx: 650,
    cy: 110,
    pathD: "M 500 320 Q 560 200, 650 110",
  },
  {
    id: "automation",
    number: "02",
    title: "AUTOMATION",
    tagline: "End-to-End Workflow Sync",
    description:
      "Connect repetitive processes, approvals and workflows so teams spend less time moving information manually.",
    icon: Zap,
    color: "#059669",
    bgLight: "rgba(5, 150, 105, 0.08)",
    cx: 810,
    cy: 320,
    pathD: "M 500 320 L 810 320",
  },
  {
    id: "zoho",
    number: "03",
    title: "ZOHO SOLUTIONS",
    tagline: "Unified Business Suite",
    description:
      "Configure and connect Zoho applications to create a more unified operating system for your business.",
    icon: Layers,
    color: "#dc2626",
    bgLight: "rgba(220, 38, 38, 0.08)",
    cx: 640,
    cy: 530,
    pathD: "M 500 320 Q 580 440, 640 530",
  },
  {
    id: "software",
    number: "04",
    title: "SOFTWARE & DIGITAL PRODUCTS",
    tagline: "Custom Web & Internal Platforms",
    description:
      "Websites, web applications, internal tools and custom platforms built around your workflow.",
    icon: Code2,
    color: "#d97706",
    bgLight: "rgba(217, 119, 6, 0.08)",
    cx: 340,
    cy: 520,
    pathD: "M 500 320 Q 420 440, 340 520",
  },
  {
    id: "data",
    number: "05",
    title: "DATA & ANALYTICS",
    tagline: "Actionable Insights & Dashboards",
    description:
      "Turn business data into dashboards, insights and systems that help teams make better decisions.",
    icon: BarChart3,
    color: "#2563eb",
    bgLight: "rgba(37, 99, 235, 0.08)",
    cx: 190,
    cy: 320,
    pathD: "M 500 320 L 190 320",
  },
];

export function SystemMapSection({ id = "services" }: { id?: string }) {
  const reducedMotion = useReducedMotion();
  const [hoveredCap, setHoveredCap] = useState<Capability | null>(null);

  const activeCapability = hoveredCap || CAPABILITIES[0];

  return (
    <section className="system-map-section section-wrap" id={id}>
      {/* SECTION HEADER */}
      <div className="section-editorial-header">
        <motion.div
          className="section-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-accent-dot" />
          <span>WHAT ARAM ACTUALLY BUILDS</span>
        </motion.div>

        <motion.h2
          className="section-editorial-title"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Built around your <span className="serif-accent">business.</span>
        </motion.h2>

        <motion.p
          className="section-editorial-sub"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          From intelligent workflows to complete digital products, we build technology around the problems your team actually needs to solve.
        </motion.p>
      </div>

      {/* ASYMMETRIC SYSTEM MAP STAGE */}
      <div className="system-map-stage-wrapper">
        <div className="system-map-canvas" role="region" aria-label="Interactive Aram System Map">
          {/* Background Ambient SVG and Dynamic Glow */}
          <svg
            className="system-map-svg-grid"
            viewBox="0 0 1000 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="mapCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6aee" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#7c6aee" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Orbit concentric guides */}
            <circle cx="500" cy="320" r="160" stroke="#7c6aee" strokeWidth="1" strokeDasharray="3 6" opacity="0.25" />
            <circle cx="500" cy="320" r="280" stroke="#7c6aee" strokeWidth="1" strokeDasharray="4 8" opacity="0.15" />
            <circle cx="500" cy="320" r="320" fill="url(#mapCoreGlow)" />

            {/* Connection lines from central core (500, 320) to all 5 capability nodes */}
            {CAPABILITIES.map((cap) => {
              const isActive = activeCapability.id === cap.id;
              return (
                <g key={`path-${cap.id}`}>
                  <path
                    d={cap.pathD}
                    stroke={isActive ? cap.color : "rgba(35, 25, 60, 0.14)"}
                    strokeWidth={isActive ? 3 : 1.8}
                    strokeDasharray={isActive ? "0" : "5 5"}
                    fill="none"
                    className="system-map-branch-path"
                  />
                  {isActive && !reducedMotion && (
                    <circle r="4" fill={cap.color}>
                      <animateMotion dur="2.2s" repeatCount="indefinite" path={cap.pathD} />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* CENTRAL ELEMENT: ARAM Connected Technology */}
          <motion.div
            className={`system-core-hub ${hoveredCap ? "is-focused" : ""}`}
            animate={{
              scale: hoveredCap ? 1.04 : 1,
              boxShadow: hoveredCap
                ? `0 20px 60px -16px ${activeCapability.color}40, 0 0 0 2px ${activeCapability.color}50`
                : "0 20px 50px -18px rgba(35, 25, 60, 0.12), 0 0 0 1px rgba(124, 106, 238, 0.2)",
            }}
            transition={{ duration: 0.35 }}
          >
            <div className="system-core-halo" aria-hidden="true" />
            <div className="system-core-inner">
              <span className="core-badge-top">SYSTEM ARCHITECTURE</span>
              <div className="core-title-group">
                <span className="core-brand-name">ARAM</span>
                <span className="core-tagline">Connected Technology</span>
              </div>
              <div className="core-live-status">
                <span className="core-pulse-beacon" style={{ backgroundColor: activeCapability.color }} />
                <span>{activeCapability.title} ACTIVE</span>
              </div>
            </div>
          </motion.div>

          {/* 5 SATELLITE CAPABILITY NODES */}
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            const isActive = activeCapability.id === cap.id;

            return (
              <motion.div
                key={cap.id}
                className={`map-satellite-node map-node-${cap.id} ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setHoveredCap(cap)}
                onMouseLeave={() => setHoveredCap(null)}
                onClick={() => setHoveredCap(cap)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cap.title}`}
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="satellite-node-card"
                  style={{
                    borderColor: isActive ? cap.color : undefined,
                    boxShadow: isActive ? `0 16px 40px -12px ${cap.color}35` : undefined,
                  }}
                >
                  <div className="satellite-head">
                    <span className="satellite-num">{cap.number}</span>
                    <span className="satellite-icon-chip" style={{ color: cap.color, background: cap.bgLight }}>
                      <Icon size={16} />
                    </span>
                  </div>
                  <div className="satellite-body">
                    <h3 className="satellite-title">{cap.title}</h3>
                    <p className="satellite-desc">{cap.description}</p>
                  </div>
                  <div className="satellite-foot">
                    <span className="satellite-tagline">{cap.tagline}</span>
                    <ArrowUpRight size={14} className="satellite-arrow" style={{ color: cap.color }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE & TABLET ACCESSIBLE LIST (Stacked System Deck) */}
        <div className="system-deck-mobile">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={`mob-${cap.id}`} className="system-mobile-card">
                <div className="mobile-card-top">
                  <span className="mobile-num">{cap.number}</span>
                  <span className="mobile-icon" style={{ color: cap.color, background: cap.bgLight }}>
                    <Icon size={16} />
                  </span>
                </div>
                <h3 className="mobile-title">{cap.title}</h3>
                <p className="mobile-desc">{cap.description}</p>
                <div className="mobile-foot">
                  <span className="mobile-tag">{cap.tagline}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
