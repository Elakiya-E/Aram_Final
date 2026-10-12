"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Workflow,
  Layers,
  Database,
  Boxes,
  Cloud,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";
import type { Capability } from "./WhatWeDoPageContent";

interface CapabilityMetaphorProps {
  activeId: string;
  accent: string;
  capabilities: Capability[];
  activeCap: Capability;
  activeIndex: number;
  onSelectCap: (index: number) => void;
}

export function CapabilityMetaphorVisual({
  capabilities,
  activeCap,
  activeIndex,
  onSelectCap,
}: CapabilityMetaphorProps) {
  const ActiveIcon = activeCap.icon;

  const handlePrev = () => {
    onSelectCap((activeIndex - 1 + capabilities.length) % capabilities.length);
  };

  const handleNext = () => {
    onSelectCap((activeIndex + 1) % capabilities.length);
  };

  // 6 Satellite node positions around center (320, 190) in 640x380 SVG
  const nodePositions = [
    { x: 120, y: 70 },   // 01: AI Solutions (Top-Left)
    { x: 520, y: 70 },   // 02: AI & Automation (Top-Right)
    { x: 75, y: 190 },   // 03: Software & Products (Mid-Left)
    { x: 565, y: 190 },  // 04: Data & Analytics (Mid-Right)
    { x: 120, y: 310 },  // 05: Zoho Systems (Bottom-Left)
    { x: 520, y: 310 },  // 06: Cloud Services (Bottom-Right)
  ];

  const activePos = nodePositions[activeIndex] || nodePositions[0];

  return (
    <div className="metaphor-visual-stage">
      {/* Dynamic ambient backdrop aura */}
      <div
        className="metaphor-ambient-glow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeCap.accent}24 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Futuristic Connected Screen Window */}
      <div className="metaphor-screen-frame">
        {/* Terminal Header */}
        <div className="metaphor-screen-header">
          <div className="metaphor-status-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div
            className="metaphor-mode-badge"
            style={{ color: activeCap.accent, borderColor: `${activeCap.accent}44` }}
          >
            <span className="status-ping" style={{ backgroundColor: activeCap.accent }} />
            <span>ARAM.ECOSYSTEM // {activeCap.id.toUpperCase().replace("-", "_")}</span>
          </div>

          <div className="metaphor-header-right">
            <span className="live-status-pill">ALL 6 DISCIPLINES ONLINE</span>
          </div>
        </div>

        {/* Interactive Dual-Pane Stage: Ecosystem Diagram + Active Capability Spotlight */}
        <div className="ecosystem-dual-stage">
          {/* Left/Center Pane: Interconnected 6-Node Ecosystem Diagram */}
          <div className="ecosystem-canvas-wrap">
            <svg
              className="ecosystem-svg-network"
              viewBox="0 0 640 380"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="activeBeamGrad" x1="320" y1="190" x2={activePos.x} y2={activePos.y} gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor={activeCap.accent} stopOpacity="1" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Concentric Ambient Orbit Rings */}
              <circle cx="320" cy="190" r="70" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="320" cy="190" r="140" stroke="rgba(139, 92, 246, 0.18)" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="320" cy="190" r="210" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="0.8" />

              {/* Perimeter Mesh Connecting Adjacent Nodes */}
              <path
                d="M 120 70 L 520 70 L 565 190 L 520 310 L 120 310 L 75 190 Z"
                stroke="rgba(139, 92, 246, 0.18)"
                strokeWidth="1.2"
                strokeDasharray="5 4"
              />

              {/* Radial Spokes from Center Hub to All 6 Nodes */}
              {nodePositions.map((pos, idx) => {
                const isSelected = activeIndex === idx;
                const cap = capabilities[idx];
                return (
                  <g key={`spoke-${cap.id}`}>
                    <line
                      x1="320"
                      y1="190"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isSelected ? "url(#activeBeamGrad)" : "rgba(139, 92, 246, 0.25)"}
                      strokeWidth={isSelected ? "2.5" : "1.2"}
                      strokeDasharray={isSelected ? "none" : "4 3"}
                    />
                    {/* Glowing beacon at connection point */}
                    {isSelected && (
                      <circle
                        cx={(320 + pos.x) / 2}
                        cy={(190 + pos.y) / 2}
                        r="4"
                        fill={activeCap.accent}
                        filter="url(#glowFilter)"
                      />
                    )}
                  </g>
                );
              })}

              {/* Active Pulse Ring around the Selected Node */}
              <circle
                cx={activePos.x}
                cy={activePos.y}
                r="38"
                stroke={activeCap.accent}
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.85"
                className="active-node-orbit-ring"
              />
            </svg>

            {/* Central Aram Intelligence Core Hub */}
            <div className="ecosystem-center-core">
              <div className="center-core-glow" style={{ borderColor: activeCap.accent }} />
              <Image
                src={siteLogo}
                alt="Aram Analytics"
                width={70}
                height={22}
                className="center-core-logo"
                priority
              />
              <span className="center-core-tag">ARAM CORE</span>
            </div>

            {/* 6 Interactive Satellite Node Buttons placed directly on coordinates */}
            <div className="ecosystem-nodes-layer">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isSelected = activeIndex === idx;
                const pos = nodePositions[idx];
                // Convert SVG 640x380 coordinates into percentage positions
                const leftPercent = (pos.x / 640) * 100;
                const topPercent = (pos.y / 380) * 100;

                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => onSelectCap(idx)}
                    className={`eco-node-btn ${isSelected ? "is-active" : ""}`}
                    style={
                      {
                        left: `${leftPercent}%`,
                        top: `${topPercent}%`,
                        "--node-accent": cap.accent,
                      } as React.CSSProperties
                    }
                    aria-label={`Select ${cap.title}`}
                  >
                    <span className="eco-node-pip">
                      <Icon size={16} style={{ color: isSelected ? "#ffffff" : cap.accent }} />
                    </span>
                    <span className="eco-node-meta">
                      <span className="eco-node-num">{cap.num}</span>
                      <span className="eco-node-title">{cap.shortLabel}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Pane: Active Capability Spotlight Window */}
          <div className="ecosystem-spotlight-pane">
            <div className="spotlight-header">
              <div className="spotlight-index-row">
                <span className="spotlight-tag">{activeCap.num} OF 06</span>
                <span
                  className="spotlight-badge-pill"
                  style={{ color: activeCap.accent, backgroundColor: `${activeCap.accent}14` }}
                >
                  {activeCap.badge}
                </span>
              </div>

              {/* Prev / Next capability flipper */}
              <div className="spotlight-nav-arrows">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="spotlight-arrow-btn"
                  aria-label="Previous capability"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="spotlight-arrow-btn"
                  aria-label="Next capability"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCap.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="spotlight-body"
              >
                <div className="spotlight-title-row">
                  <span
                    className="spotlight-icon-frame"
                    style={{
                      color: activeCap.accent,
                      backgroundColor: `${activeCap.accent}14`,
                      borderColor: `${activeCap.accent}33`,
                    }}
                  >
                    <ActiveIcon size={24} />
                  </span>
                  <div>
                    <h3 className="spotlight-title">{activeCap.title}</h3>
                    <small className="spotlight-sub">Aram Core Practice</small>
                  </div>
                </div>

                {/* Exact Approved Description Verbatim */}
                <p className="spotlight-approved-desc">{activeCap.description}</p>

                {/* Deliverables Checklist */}
                <div className="spotlight-deliverables">
                  <span className="spotlight-deliverables-title">WHAT WE DELIVER</span>
                  <ul className="spotlight-deliverables-list">
                    {activeCap.deliverables.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} style={{ color: activeCap.accent }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="spotlight-action-row">
                  <Link className="button button-primary spotlight-cta" href="/#contact">
                    Discuss {activeCap.shortLabel} <ArrowUpRight size={15} />
                  </Link>
                  <a className="button button-quiet" href="#all-capabilities">
                    View All 6 Cards ↓
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Window Footer Status Bar */}
        <div className="metaphor-screen-foot">
          <div className="system-signature">
            <Sparkles size={13} className="text-[#8b5cf6]" />
            <span>INTELLIGENCE IN MOTION · 6 PRACTICES SYNCHRONIZED</span>
          </div>
          <span className="system-version">SYSTEM_STATE: ALL_CAPABILITIES_CONNECTED</span>
        </div>
      </div>
    </div>
  );
}
