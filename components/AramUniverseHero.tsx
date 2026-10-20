"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ease = [0.22, 1, 0.36, 1] as const;

export type UniverseCapability = {
  id: string;
  label: string;
  shortLabel: string;
  category: string;
  description: string;
  href: string;
  icon: typeof Sparkles;
  color: string;
  glow: string;
  bg: string;
  // Scaled coordinates in 1200 x 560 coordinate space
  x: number;
  y: number;
  pctX: number;
  pctY: number;
  pathD: string;
  delay: string;
  floatClass: string;
};

// Enlarged 1.5x coordinate canvas (1200 x 560), center at (600, 280)
const CAPABILITIES: UniverseCapability[] = [
  {
    id: "ai",
    label: "AI Solutions",
    shortLabel: "AI",
    category: "Intelligent Systems",
    description: "AI assistants, intelligent agents, and custom machine learning workflows.",
    href: "/what-we-do#ai-solutions",
    icon: Sparkles,
    color: "#6C5CE7",
    glow: "rgba(108, 92, 231, 0.32)",
    bg: "rgba(108, 92, 231, 0.08)",
    x: 375,
    y: 100,
    pctX: 31.25,
    pctY: 17.86,
    pathD: "M 600 280 C 510 215, 435 155, 375 100",
    delay: "0s",
    floatClass: "universe-float-1",
  },
  {
    id: "digital",
    label: "Digital Experiences",
    shortLabel: "Digital",
    category: "Web & E-Commerce",
    description: "User-focused digital platforms, modern websites, and interactive apps.",
    href: "/our-work",
    icon: Monitor,
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.28)",
    bg: "rgba(217, 119, 6, 0.08)",
    x: 145,
    y: 280,
    pctX: 12.08,
    pctY: 50.0,
    pathD: "M 600 280 L 145 280",
    delay: "1.2s",
    floatClass: "universe-float-2",
  },
  {
    id: "automation",
    label: "Business Automation",
    shortLabel: "Automation",
    category: "Workflow Orchestration",
    description: "Automated business workflows, system integration, and zero manual data entry.",
    href: "/what-we-do#ai-automation",
    icon: Workflow,
    color: "#16a34a",
    glow: "rgba(22, 163, 74, 0.28)",
    bg: "rgba(22, 163, 74, 0.08)",
    x: 340,
    y: 460,
    pctX: 28.33,
    pctY: 82.14,
    pathD: "M 600 280 C 500 345, 420 405, 340 460",
    delay: "2.4s",
    floatClass: "universe-float-3",
  },
  {
    id: "zoho",
    label: "Zoho Solutions",
    shortLabel: "Zoho",
    category: "Business Applications",
    description: "Zoho One implementation, CRM optimization, and Deluge workflow scripts.",
    href: "/zoho",
    icon: LayoutGrid,
    color: "#ea580c",
    glow: "rgba(234, 88, 12, 0.28)",
    bg: "rgba(234, 88, 12, 0.08)",
    x: 825,
    y: 100,
    pctX: 68.75,
    pctY: 17.86,
    pathD: "M 600 280 C 690 215, 765 155, 825 100",
    delay: "0.6s",
    floatClass: "universe-float-4",
  },
  {
    id: "software",
    label: "Software Development",
    shortLabel: "Software",
    category: "Full-Stack Platforms",
    description: "Websites, web applications, internal tools, and robust cloud APIs.",
    href: "/what-we-do#software-products",
    icon: Code2,
    color: "#2563eb",
    glow: "rgba(37, 99, 235, 0.28)",
    bg: "rgba(37, 99, 235, 0.08)",
    x: 1055,
    y: 280,
    pctX: 87.92,
    pctY: 50.0,
    pathD: "M 600 280 L 1055 280",
    delay: "1.8s",
    floatClass: "universe-float-5",
  },
  {
    id: "data",
    label: "Data & Analytics",
    shortLabel: "Data",
    category: "Decision Intelligence",
    description: "Real-time executive dashboards, automated reporting, and pipeline engineering.",
    href: "/what-we-do#data-analytics",
    icon: BarChart3,
    color: "#0891b2",
    glow: "rgba(8, 145, 178, 0.28)",
    bg: "rgba(8, 145, 178, 0.08)",
    x: 860,
    y: 460,
    pctX: 71.67,
    pctY: 82.14,
    pathD: "M 600 280 C 700 345, 780 405, 860 460",
    delay: "3.0s",
    floatClass: "universe-float-6",
  },
];

export function AramUniverseHero() {
  const reducedMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeCapability = CAPABILITIES.find((c) => c.id === activeNode);

  return (
    <section
      aria-label="The Aram Intelligence Universe"
      className={`universe-hero-section ${inter.className}`}
      id="top"
    >
      {/* 1. LAYERED RICH ATMOSPHERIC BACKGROUND */}
      <div className="universe-backdrop" aria-hidden="true">
        {/* Softly moving multi-hue ambient glow orbs */}
        <div className="universe-ambient-glow universe-glow-core" />
        <div className="universe-ambient-glow universe-glow-blush" />
        <div className="universe-ambient-glow universe-glow-blue" />
        <div className="universe-ambient-glow universe-glow-lavender" />
        <div className="universe-ambient-glow universe-glow-warm" />

        {/* Fine technical grid with radial natural fade */}
        <div className="universe-grid-texture" />

        {/* Ambient SVG Cosmos: subtle outer rings, wave currents, star sparkles */}
        <svg
          className="universe-bg-cosmos"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer celestial orbital ellipses */}
          <ellipse
            cx="720"
            cy="360"
            rx="680"
            ry="330"
            stroke="rgba(108, 92, 231, 0.04)"
            strokeWidth="1"
            strokeDasharray="6 14"
          />
          <ellipse
            cx="720"
            cy="360"
            rx="840"
            ry="400"
            stroke="rgba(139, 92, 246, 0.03)"
            strokeWidth="1"
            strokeDasharray="8 20"
          />

          {/* Faint flowing wave currents near perimeter */}
          <path
            d="M -40 160 C 260 110, 480 220, 760 140 S 1180 210, 1480 150"
            stroke="rgba(108, 92, 231, 0.035)"
            strokeWidth="1.25"
          />
          <path
            d="M -40 560 C 300 600, 540 500, 820 570 S 1140 500, 1480 550"
            stroke="rgba(139, 92, 246, 0.03)"
            strokeWidth="1.25"
          />

          {/* Subtle star-like sparkles & geometric dots */}
          <g className="universe-stars-group">
            <circle cx="160" cy="110" r="1.5" fill="#8b5cf6" className="star-twinkle-1" />
            <circle cx="280" cy="70" r="1.2" fill="#c4b5fd" className="star-twinkle-2" />
            <circle cx="1240" cy="120" r="1.5" fill="#8b5cf6" className="star-twinkle-3" />
            <circle cx="1350" cy="220" r="1.2" fill="#ec4899" className="star-twinkle-1" />
            <circle cx="110" cy="480" r="1.2" fill="#60a5fa" className="star-twinkle-2" />
            <circle cx="1320" cy="510" r="1.4" fill="#a78bfa" className="star-twinkle-3" />
            <circle cx="680" cy="45" r="1.5" fill="#8b5cf6" className="star-twinkle-2" />
            <circle cx="760" cy="45" r="1.2" fill="#c4b5fd" className="star-twinkle-1" />
          </g>
        </svg>
      </div>

      <div className="universe-hero-container">
        {/* 2. MAXIMIZED INTELLIGENCE NETWORK STAGE (1.5x LARGER) */}
        <div className="universe-stage-wrap">
          <motion.div
            className="universe-stage"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease }}
          >
            {/* SVG Layer: Enlarged Orbits, Connector Lines, Traveling Pulses */}
            <svg
              aria-hidden="true"
              className="universe-svg-canvas"
              viewBox="0 0 1200 560"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Radial glow for central hub */}
                <radialGradient id="hubRadialGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.4" />
                  <stop offset="45%" stopColor="#ddd6fe" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
                </radialGradient>

                {/* Ambient glow filter for active connections */}
                <filter id="activeConnectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Linear gradient connectors for each node */}
                {CAPABILITIES.map((cap) => (
                  <linearGradient
                    key={`grad-${cap.id}`}
                    id={`connectorGrad-${cap.id}`}
                    x1="600"
                    y1="280"
                    x2={cap.x}
                    y2={cap.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                    <stop offset="65%" stopColor={cap.color} stopOpacity="0.75" />
                    <stop offset="100%" stopColor={cap.color} stopOpacity="1" />
                  </linearGradient>
                ))}
              </defs>

              {/* Central Soft Ambient Glow Aura */}
              <circle
                cx="600"
                cy="280"
                r="220"
                fill="url(#hubRadialGlow)"
                className="universe-svg-glow"
              />

              {/* Concentric Orbital Rings (Enlarged and Harmonized) */}
              {/* Ring 0 - Core Halo Ring */}
              <circle
                cx="600"
                cy="280"
                r="125"
                fill="none"
                stroke="rgba(108, 92, 231, 0.18)"
                strokeWidth="1.25"
                strokeDasharray="3 6"
                className="universe-ring universe-ring-core"
              />

              {/* Ring 1 - Inner Orbit (Passes Comets) */}
              <circle
                cx="600"
                cy="280"
                r="215"
                fill="none"
                stroke="rgba(108, 92, 231, 0.12)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="universe-ring universe-ring-1"
              />

              {/* Ring 2 - Mid-Inner Orbit (Passes near AI & Zoho) */}
              <circle
                cx="600"
                cy="280"
                r="310"
                fill="none"
                stroke="rgba(108, 92, 231, 0.14)"
                strokeWidth="1"
                className="universe-ring universe-ring-2"
              />

              {/* Ring 3 - Mid-Outer Orbit (Passes near Automation & Data) */}
              <circle
                cx="600"
                cy="280"
                r="360"
                fill="none"
                stroke="rgba(108, 92, 231, 0.1)"
                strokeWidth="1"
                strokeDasharray="5 10"
                className="universe-ring universe-ring-3"
              />

              {/* Ring 4 - Outer Constellation Ellipse (Passes through Digital & Software) */}
              <ellipse
                cx="600"
                cy="280"
                rx="455"
                ry="220"
                fill="none"
                stroke="rgba(108, 92, 231, 0.11)"
                strokeWidth="1.25"
                strokeDasharray="8 14"
                className="universe-ring universe-ring-4"
              />

              {/* Ring 5 - Outer Boundary Horizon */}
              <circle
                cx="600"
                cy="280"
                r="540"
                fill="none"
                stroke="rgba(108, 92, 231, 0.06)"
                strokeWidth="1"
                strokeDasharray="3 14"
                className="universe-ring universe-ring-5"
              />

              {/* Traveling Highlights / Comets around Orbital Paths */}
              {!reducedMotion && (
                <>
                  {/* Comet traveling on Inner Orbit */}
                  <circle r="3.5" fill="#8b5cf6" opacity="0.85">
                    <animateMotion
                      dur="18s"
                      repeatCount="indefinite"
                      path="M 600 65 A 215 215 0 1 1 599.9 65 Z"
                    />
                  </circle>
                  {/* Micro-sparkle traveling on Outer Ellipse */}
                  <circle r="3" fill="#6C5CE7" opacity="0.6">
                    <animateMotion
                      dur="28s"
                      repeatCount="indefinite"
                      path="M 145 280 A 455 220 0 1 1 1055 280 A 455 220 0 1 1 145 280 Z"
                    />
                  </circle>
                </>
              )}

              {/* Dynamic Connector Rays from Central Hub (600, 280) to Nodes */}
              {CAPABILITIES.map((cap) => {
                const isActive = activeNode === cap.id;
                return (
                  <g key={`ray-group-${cap.id}`}>
                    {/* Active glow stroke */}
                    {isActive && (
                      <path
                        d={cap.pathD}
                        fill="none"
                        stroke={cap.color}
                        strokeWidth="3.5"
                        strokeOpacity="0.45"
                        filter="url(#activeConnectorGlow)"
                      />
                    )}

                    {/* Underlying Connector Path */}
                    <path
                      d={cap.pathD}
                      fill="none"
                      stroke={isActive ? cap.color : `url(#connectorGrad-${cap.id})`}
                      strokeWidth={isActive ? "2.2" : "1.2"}
                      strokeDasharray={isActive ? undefined : "4 6"}
                      className={`universe-connector-line ${isActive ? "is-active" : ""}`}
                      style={{
                        opacity: isActive ? 1 : 0.45,
                        transition: "all 0.3s ease",
                      }}
                    />

                    {/* Traveling Signal Pulse Particles */}
                    {!reducedMotion && (
                      <>
                        <circle r={isActive ? "3.6" : "2.6"} fill={cap.color}>
                          <animateMotion
                            dur={isActive ? "2s" : "3.6s"}
                            begin={cap.delay}
                            repeatCount="indefinite"
                            path={cap.pathD}
                          />
                        </circle>
                        <circle r="1.8" fill="#ffffff" opacity="0.9">
                          <animateMotion
                            dur={isActive ? "2s" : "3.6s"}
                            begin={cap.delay}
                            repeatCount="indefinite"
                            path={cap.pathD}
                          />
                        </circle>
                        <circle r="2" fill={cap.color} opacity="0.45">
                          <animateMotion
                            dur={isActive ? "2s" : "3.6s"}
                            begin={`${parseFloat(cap.delay) + 1.8}s`}
                            repeatCount="indefinite"
                            path={cap.pathD}
                          />
                        </circle>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* 3. ENLARGED CENTRAL INTELLIGENCE CORE WITH LAYERED GLASS RINGS */}
            <div className="universe-center-hub-anchor">
              {/* Outer decorative rotating dashed glass ring */}
              <div className="orb-ring-outer-rotate" aria-hidden="true" />
              {/* Middle glass halo ring */}
              <div className="orb-ring-mid-glass" aria-hidden="true" />

              <motion.div
                className={`universe-center-hub ${activeNode ? "hub-connected" : ""}`}
                initial={reducedMotion ? false : { scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                transition={{ delay: 0.2, duration: 0.65, ease }}
                style={{
                  borderColor: activeCapability
                    ? activeCapability.color
                    : "rgba(108, 92, 231, 0.28)",
                  boxShadow: activeCapability
                    ? `0 14px 44px -8px ${activeCapability.glow}, 0 0 45px ${activeCapability.glow}, 0 0 0 2px ${activeCapability.color}, inset 0 2px 4px rgba(255,255,255,0.95)`
                    : "0 14px 40px -8px rgba(108, 92, 231, 0.2), 0 0 35px rgba(139, 92, 246, 0.12), inset 0 2px 4px rgba(255,255,255,0.95)",
                }}
              >
                <div className="hub-inner">
                  {/* Beacon indicator */}
                  <div className="hub-signal-beacon">
                    <span
                      className="beacon-dot"
                      style={{
                        background: activeCapability ? activeCapability.color : "#10b981",
                        boxShadow: activeCapability
                          ? `0 0 8px ${activeCapability.color}`
                          : "0 0 8px rgba(16, 185, 129, 0.45)",
                      }}
                    />
                    <span className="beacon-label">INTELLIGENCE CORE</span>
                  </div>

                  {/* High-Resolution Sharp Aram Analytics Logo */}
                  <div className="hub-logo-wrap">
                    <Image
                      alt="Aram Analytics"
                      className="hub-brand-logo"
                      height={46}
                      priority
                      src={siteLogo}
                    />
                  </div>

                  {/* Connected Status Strip */}
                  <div className="hub-status-strip">
                    <span className="status-live-dot" />
                    <span className="status-text">CONNECTED SYSTEM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4. EXPANDED CAPABILITY NODES (Positioned along orbital paths in 1200x560 space) */}
            <div className="universe-nodes-layer">
              {CAPABILITIES.map((cap, index) => {
                const isActive = activeNode === cap.id;
                const IconComponent = cap.icon;

                return (
                  <div
                    key={cap.id}
                    className={`universe-node-anchor universe-node-${cap.id} ${cap.floatClass}`}
                    style={{
                      left: `${cap.pctX}%`,
                      top: `${cap.pctY}%`,
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
                        delay: 0.3 + index * 0.08,
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
                            : "rgba(108, 92, 231, 0.16)",
                          boxShadow: isActive
                            ? `0 10px 28px -6px ${cap.glow}, 0 0 0 2px ${cap.color}, 0 0 20px ${cap.glow}, inset 0 1px 0 rgba(255,255,255,0.95)`
                            : "0 6px 18px -4px rgba(45, 30, 85, 0.08), 0 1px 4px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
                        }}
                      >
                        <div
                          className="node-icon-box"
                          style={{
                            color: cap.color,
                            backgroundColor: cap.bg,
                            borderColor: isActive
                              ? cap.color
                              : "rgba(108, 92, 231, 0.14)",
                          }}
                        >
                          <IconComponent size={16} strokeWidth={2} />
                        </div>
                        <span className="node-title">{cap.label}</span>
                        <span
                          className="node-glow-pip"
                          style={{ backgroundColor: cap.color }}
                        />
                      </button>

                      {/* Node Hover Tooltip Card */}
                      <div
                        className={`universe-node-tooltip ${
                          isActive ? "tooltip-visible" : ""
                        }`}
                        style={{
                          borderColor: cap.color,
                        }}
                      >
                        <span
                          className="node-tooltip-kicker"
                          style={{ color: cap.color }}
                        >
                          {cap.category}
                        </span>
                        <p>{cap.description}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 5. CONNECTED INTELLIGENCE READOUT STRIP */}
        <div className="universe-readout-strip" aria-live="polite">
          <div
            className={`readout-pill ${activeCapability ? "readout-active" : ""}`}
            style={{
              borderColor: activeCapability
                ? activeCapability.color
                : "rgba(108, 92, 231, 0.16)",
            }}
          >
            <span
              className="readout-pulse"
              style={{
                backgroundColor: activeCapability
                  ? activeCapability.color
                  : "#6C5CE7",
              }}
            />
            {activeCapability ? (
              <div className="readout-active-content">
                <span className="readout-text">
                  <strong style={{ color: activeCapability.color }}>
                    {activeCapability.label}:
                  </strong>{" "}
                  {activeCapability.description}
                </span>
                <Link
                  href={activeCapability.href}
                  className="readout-explore-link"
                  style={{ color: activeCapability.color }}
                >
                  <span>Explore</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            ) : (
              <span className="readout-text readout-idle">
                Hover or tap any capability node to explore connected intelligence
              </span>
            )}
          </div>
        </div>

        {/* Mobile & Tablet Interactive Capability Touch Constellation Grid */}
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
                      : "rgba(108, 92, 231, 0.14)",
                    backgroundColor: isActive
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.9)",
                    boxShadow: isActive
                      ? `0 8px 24px -6px ${cap.glow}, 0 0 0 1.5px ${cap.color}`
                      : "0 2px 8px -2px rgba(45, 30, 85, 0.05)",
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

        {/* 6. TYPOGRAPHY & CALLS TO ACTION */}
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
            We connect AI, software, data, and automation to turn complex business challenges into practical digital solutions.
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
              Let&apos;s build together <ArrowUpRight size={16} />
            </a>
            <a
              className="button button-quiet universe-cta-quiet"
              href="/our-work"
            >
              Explore our work <ArrowDown size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
