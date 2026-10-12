"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Code2,
  LayoutGrid,
  Monitor,
  Sparkles,
  Workflow,
} from "lucide-react";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

const ease = [0.22, 1, 0.36, 1] as const;

export type UniverseCapability = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: typeof Sparkles;
  color: string;
  glow: string;
  bg: string;
  // Desktop coordinates in 1000 x 460 coordinate space
  x: number;
  y: number;
  pathD: string;
  delay: string;
};

const CAPABILITIES: UniverseCapability[] = [
  {
    id: "ai",
    label: "AI Solutions",
    shortLabel: "AI",
    description: "AI assistants, intelligent applications, and AI-powered business tools.",
    icon: Sparkles,
    color: "#b5a4ff",
    glow: "rgba(181, 164, 255, 0.35)",
    bg: "rgba(181, 164, 255, 0.12)",
    x: 300,
    y: 78,
    pathD: "M 500 230 C 430 180, 360 130, 300 78",
    delay: "0s",
  },
  {
    id: "digital",
    label: "Digital Experiences",
    shortLabel: "Digital",
    description: "User-focused digital products and web experiences.",
    icon: Monitor,
    color: "#facc15",
    glow: "rgba(250, 204, 21, 0.35)",
    bg: "rgba(250, 204, 21, 0.12)",
    x: 155,
    y: 230,
    pathD: "M 500 230 L 155 230",
    delay: "1.2s",
  },
  {
    id: "automation",
    label: "Business Automation",
    shortLabel: "Automation",
    description: "Automated workflows, process integration, and reduced repetitive work.",
    icon: Workflow,
    color: "#4ade80",
    glow: "rgba(74, 222, 128, 0.35)",
    bg: "rgba(74, 222, 128, 0.12)",
    x: 275,
    y: 382,
    pathD: "M 500 230 C 420 280, 350 330, 275 382",
    delay: "2.4s",
  },
  {
    id: "zoho",
    label: "Zoho Solutions",
    shortLabel: "Zoho",
    description: "Zoho implementation, customization, and connected business applications.",
    icon: LayoutGrid,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.35)",
    bg: "rgba(251, 146, 60, 0.12)",
    x: 700,
    y: 78,
    pathD: "M 500 230 C 570 180, 640 130, 700 78",
    delay: "0.6s",
  },
  {
    id: "software",
    label: "Software Development",
    shortLabel: "Software",
    description: "Websites, web applications, internal tools, and custom platforms.",
    icon: Code2,
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.35)",
    bg: "rgba(96, 165, 250, 0.12)",
    x: 845,
    y: 230,
    pathD: "M 500 230 L 845 230",
    delay: "1.8s",
  },
  {
    id: "data",
    label: "Data & Analytics",
    shortLabel: "Data",
    description: "Business dashboards, reporting, and actionable insights.",
    icon: BarChart3,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.35)",
    bg: "rgba(56, 189, 248, 0.12)",
    x: 725,
    y: 382,
    pathD: "M 500 230 C 580 280, 650 330, 725 382",
    delay: "3.0s",
  },
];

export function AramUniverseHero() {
  const reducedMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeCapability = CAPABILITIES.find((c) => c.id === activeNode);

  return (
    <section
      aria-label="The Aram Intelligence Universe"
      className="universe-hero-section"
      id="top"
    >
      {/* Immersive Dark Canvas Background */}
      <div className="universe-backdrop" aria-hidden="true">
        <div className="universe-ambient-glow universe-glow-core" />
        <div className="universe-ambient-glow universe-glow-left" />
        <div className="universe-ambient-glow universe-glow-right" />
        <div className="universe-grid-texture" />
      </div>

      <div className="universe-hero-container">
        {/* UPPER PORTION: The Aram Intelligence Universe Orbital System */}
        <div className="universe-stage-wrap">
          <motion.div
            className="universe-stage"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease }}
          >
            {/* SVG Layer: Orbital Rings, Concentric Waves, Connector Lines, Traveling Signal Dots */}
            <svg
              aria-hidden="true"
              className="universe-svg-canvas"
              viewBox="0 0 1000 460"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Radial Glow Filters */}
                <radialGradient id="hubRadialGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                </radialGradient>

                {/* Gradients for each capability connector */}
                {CAPABILITIES.map((cap) => (
                  <linearGradient
                    key={`grad-${cap.id}`}
                    id={`connectorGrad-${cap.id}`}
                    x1="500"
                    y1="230"
                    x2={cap.x}
                    y2={cap.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
                    <stop offset="60%" stopColor={cap.color} stopOpacity="0.75" />
                    <stop offset="100%" stopColor={cap.color} stopOpacity="0.95" />
                  </linearGradient>
                ))}
              </defs>

              {/* Central Soft Ambient Glow */}
              <circle
                cx="500"
                cy="230"
                r="180"
                fill="url(#hubRadialGlow)"
                className="universe-svg-glow"
              />

              {/* Concentric Orbital Rings */}
              {/* Ring 0 - Core Halo Ring */}
              <circle
                cx="500"
                cy="230"
                r="92"
                fill="none"
                stroke="rgba(181, 164, 255, 0.28)"
                strokeWidth="1"
                strokeDasharray="3 6"
                className="universe-ring universe-ring-core"
              />

              {/* Ring 1 - Inner Orbit */}
              <circle
                cx="500"
                cy="230"
                r="165"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="universe-ring universe-ring-1"
              />

              {/* Ring 2 - Mid Inner Orbit (Passes through AI & Zoho) */}
              <circle
                cx="500"
                cy="230"
                r="250"
                fill="none"
                stroke="rgba(181, 164, 255, 0.16)"
                strokeWidth="1"
                className="universe-ring universe-ring-2"
              />

              {/* Ring 3 - Mid Outer Orbit (Passes through Automation & Data) */}
              <circle
                cx="500"
                cy="230"
                r="278"
                fill="none"
                stroke="rgba(255, 255, 255, 0.07)"
                strokeWidth="1"
                strokeDasharray="5 10"
                className="universe-ring universe-ring-3"
              />

              {/* Ring 4 - Outer Constellation Orbit (Passes through Digital & Software) */}
              <circle
                cx="500"
                cy="230"
                r="345"
                fill="none"
                stroke="rgba(181, 164, 255, 0.12)"
                strokeWidth="1"
                strokeDasharray="8 14"
                className="universe-ring universe-ring-4"
              />

              {/* Ring 5 - Faint Cosmic Boundary */}
              <circle
                cx="500"
                cy="230"
                r="425"
                fill="none"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
                strokeDasharray="2 12"
                className="universe-ring universe-ring-5"
              />

              {/* Dynamic Connector Rays connecting Central Hub (500, 230) to each Node */}
              {CAPABILITIES.map((cap) => {
                const isActive = activeNode === cap.id;
                return (
                  <g key={`ray-group-${cap.id}`}>
                    {/* Underlying Connector Path */}
                    <path
                      d={cap.pathD}
                      fill="none"
                      stroke={`url(#connectorGrad-${cap.id})`}
                      strokeWidth={isActive ? "2.2" : "1.2"}
                      strokeDasharray={isActive ? "0" : "4 6"}
                      className={`universe-connector-line ${isActive ? "is-active" : ""}`}
                      style={{
                        opacity: isActive ? 1 : 0.45,
                        filter: isActive
                          ? `drop-shadow(0 0 8px ${cap.color})`
                          : "none",
                        transition: "all 0.35s ease",
                      }}
                    />

                    {/* Traveling Signal Pulse Dot */}
                    {!reducedMotion && (
                      <circle r={isActive ? "3.6" : "2.6"} fill={cap.color}>
                        <animateMotion
                          dur={isActive ? "2.2s" : "3.8s"}
                          begin={cap.delay}
                          repeatCount="indefinite"
                          path={cap.pathD}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Brand Element (Aram Analytics Hub) - Exactly Centered */}
            <div className="universe-center-hub-anchor">
              <motion.div
                className={`universe-center-hub ${activeNode ? "hub-connected" : ""}`}
                initial={reducedMotion ? false : { scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                transition={{ delay: 0.2, duration: 0.65, ease }}
                style={{
                  borderColor: activeCapability
                    ? activeCapability.color
                    : "rgba(181, 164, 255, 0.32)",
                  boxShadow: activeCapability
                    ? `0 0 50px -10px ${activeCapability.glow}, 0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.2)`
                    : "0 0 40px -15px rgba(139, 92, 246, 0.35), 0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <div className="hub-inner">
                  {/* Orbital Beacon Dot */}
                  <div className="hub-signal-beacon">
                    <span
                      className="beacon-dot"
                      style={{
                        background: activeCapability ? activeCapability.color : "#53c085",
                        boxShadow: activeCapability
                          ? `0 0 8px ${activeCapability.color}`
                          : "0 0 8px #53c085",
                      }}
                    />
                    <span className="beacon-label">INTELLIGENCE CORE</span>
                  </div>

                  {/* Actual Aram Analytics Logo Asset */}
                  <div className="hub-logo-wrap">
                    <Image
                      alt="Aram Analytics"
                      className="hub-brand-logo"
                      height={38}
                      priority
                      src={siteLogo}
                    />
                  </div>

                  {/* Status Indicator */}
                  <div className="hub-status-strip">
                    <span className="status-live-dot" />
                    <span className="status-text">CONNECTED SYSTEM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Desktop Capability Nodes (Positioned along orbital paths in 1000x460 space) */}
            <div className="universe-nodes-layer">
              {CAPABILITIES.map((cap, index) => {
                const isActive = activeNode === cap.id;
                const IconComponent = cap.icon;

                // Relative percentages inside 1000x460 container
                const leftPercent = `${(cap.x / 1000) * 100}%`;
                const topPercent = `${(cap.y / 460) * 100}%`;

                return (
                  <div
                    key={cap.id}
                    className={`universe-node-anchor universe-node-${cap.id}`}
                    style={{
                      left: leftPercent,
                      top: topPercent,
                    }}
                  >
                    <motion.div
                      className={`universe-node ${isActive ? "is-active" : ""}`}
                      initial={
                        reducedMotion
                          ? false
                          : { opacity: 0, scale: 0.85, y: 15 }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.35 + index * 0.08,
                        duration: 0.55,
                        ease,
                      }}
                    >
                      <button
                        type="button"
                        aria-label={`${cap.label}: ${cap.description}`}
                        aria-expanded={isActive}
                        className="universe-node-button"
                        onClick={() =>
                          setActiveNode(activeNode === cap.id ? null : cap.id)
                        }
                        onMouseEnter={() => setActiveNode(cap.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        onFocus={() => setActiveNode(cap.id)}
                        onBlur={() => setActiveNode(null)}
                        style={{
                          borderColor: isActive
                            ? cap.color
                            : "rgba(255, 255, 255, 0.12)",
                          boxShadow: isActive
                            ? `0 12px 30px -8px ${cap.glow}, 0 0 0 1px ${cap.color}, inset 0 1px 0 rgba(255,255,255,0.2)`
                            : "0 10px 24px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <div
                          className="node-icon-box"
                          style={{
                            color: cap.color,
                            backgroundColor: cap.bg,
                            borderColor: isActive
                              ? cap.color
                              : "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <IconComponent size={15} strokeWidth={2} />
                        </div>
                        <span className="node-title">{cap.label}</span>
                      </button>

                      {/* Node Hover/Focus Description Tooltip */}
                      <div
                        className={`universe-node-tooltip ${
                          isActive ? "tooltip-visible" : ""
                        }`}
                        style={{
                          borderColor: cap.color,
                        }}
                      >
                        <p>{cap.description}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Interactive Capability Constellation Grid */}
        <div className="universe-mobile-constellation">
          <div className="mobile-constellation-head">
            <span className="mobile-constellation-kicker">
              ARAM INTELLIGENCE NETWORK
            </span>
            <p className="mobile-constellation-hint">
              Tap a capability to explore connected intelligence
            </p>
          </div>
          <div className="universe-mobile-grid">
            {CAPABILITIES.map((cap) => {
              const isActive = activeNode === cap.id;
              const IconComponent = cap.icon;
              return (
                <button
                  key={`mobile-${cap.id}`}
                  type="button"
                  className={`universe-mobile-card ${isActive ? "is-active" : ""}`}
                  onClick={() =>
                    setActiveNode(activeNode === cap.id ? null : cap.id)
                  }
                  style={{
                    borderColor: isActive
                      ? cap.color
                      : "rgba(255, 255, 255, 0.08)",
                    backgroundColor: isActive
                      ? "rgba(25, 23, 36, 0.95)"
                      : "rgba(18, 17, 26, 0.75)",
                    boxShadow: isActive
                      ? `0 8px 24px -8px ${cap.glow}, 0 0 0 1px ${cap.color}`
                      : "none",
                  }}
                >
                  <div
                    className="mobile-card-icon"
                    style={{
                      color: cap.color,
                      backgroundColor: cap.bg,
                    }}
                  >
                    <IconComponent size={16} strokeWidth={2} />
                  </div>
                  <div className="mobile-card-text">
                    <span className="mobile-card-label">{cap.label}</span>
                    <span className="mobile-card-desc">{cap.description}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Connected Intelligence Readout Pill */}
        <div className="universe-readout-strip" aria-live="polite">
          <div className="readout-pill">
            <span
              className="readout-pulse"
              style={{
                backgroundColor: activeCapability
                  ? activeCapability.color
                  : "#a78bfa",
              }}
            />
            {activeCapability ? (
              <span className="readout-text">
                <strong style={{ color: activeCapability.color }}>
                  {activeCapability.label}:
                </strong>{" "}
                {activeCapability.description}
              </span>
            ) : (
              <span className="readout-text readout-idle">
                Hover or tap any capability node to trace connected intelligence
              </span>
            )}
          </div>
        </div>

        {/* LOWER PORTION: Bold Oversized Headline, Supporting Text, and CTAs */}
        <div className="universe-content-wrap">
          <motion.div
            className="universe-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease }}
          >
            <span className="eyebrow-accent-dot" />
            <span className="eyebrow-text">THE ARAM INTELLIGENCE UNIVERSE</span>
          </motion.div>

          <motion.h1
            className="universe-headline"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
          >
            Intelligence,{" "}
            <span className="universe-headline-accent">Connected.</span>
          </motion.h1>

          <motion.p
            className="universe-supporting-text"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.65, ease }}
          >
            AI, automation, software and data working together to move your business forward.
          </motion.p>

          <motion.div
            className="universe-cta-group"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease }}
          >
            <a
              className="button button-primary universe-cta-primary"
              href="#contact"
            >
              Start a Project <ArrowUpRight size={16} />
            </a>
            <a
              className="button button-quiet universe-cta-quiet"
              href="#work"
            >
              Explore Our Work <ArrowDown size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
