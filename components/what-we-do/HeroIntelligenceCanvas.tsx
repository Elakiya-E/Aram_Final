"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { SERVICES_DATA as CAPABILITIES } from "@/content/services";

interface HeroIntelligenceCanvasProps {
  activeHub?: number;
  onHubClick?: (index: number) => void;
}

// 6 capability network nodes mapped onto 600x520 coordinate canvas
const NETWORK_NODES = [
  {
    index: 0,
    x: 435,
    y: 105,
    pctX: 72.5,
    pctY: 20.2,
    pathD: "M 300 250 Q 375 185, 435 105",
    particleDelay: 0,
  },
  {
    index: 1,
    x: 495,
    y: 255,
    pctX: 82.5,
    pctY: 49.0,
    pathD: "M 300 250 Q 405 265, 495 255",
    particleDelay: 0.65,
  },
  {
    index: 2,
    x: 415,
    y: 410,
    pctX: 69.2,
    pctY: 78.8,
    pathD: "M 300 250 Q 365 335, 415 410",
    particleDelay: 1.3,
  },
  {
    index: 3,
    x: 185,
    y: 410,
    pctX: 30.8,
    pctY: 78.8,
    pathD: "M 300 250 Q 235 335, 185 410",
    particleDelay: 1.95,
  },
  {
    index: 4,
    x: 105,
    y: 255,
    pctX: 17.5,
    pctY: 49.0,
    pathD: "M 300 250 Q 195 265, 105 255",
    particleDelay: 2.6,
  },
  {
    index: 5,
    x: 165,
    y: 105,
    pctX: 27.5,
    pctY: 20.2,
    pathD: "M 300 250 Q 225 185, 165 105",
    particleDelay: 3.25,
  },
];

export function HeroIntelligenceCanvas({
  activeHub,
  onHubClick,
}: HeroIntelligenceCanvasProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle pointer-responsive parallax on desktop
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouseOffset({ x, y });
    },
    [reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredNode(null);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="intelligence-network-visual-wrap relative aspect-[600/520] w-full max-w-[620px] select-none"
    >
      {/* Ambient softly blurred lavender and blush glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-[#8b5cf6]/14 via-[#ec4899]/08 to-[#6366f1]/08 blur-3xl"
        aria-hidden="true"
      />

      {/* SVG Canvas for geometric orbits, tick marks, curved connection lines, and animated pulses */}
      <svg
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="intelligence-svg-canvas pointer-events-none absolute inset-0 h-full w-full"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px, 0)`,
          transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id="center-ambient-aura"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#6C5CE7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient aura behind central orb */}
        <circle cx="300" cy="250" r="140" fill="url(#center-ambient-aura)" />

        {/* Concentric dashed geometric orbit rings */}
        <ellipse
          cx="300"
          cy="250"
          rx="145"
          ry="120"
          stroke="rgba(139, 92, 246, 0.14)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <ellipse
          cx="300"
          cy="250"
          rx="215"
          ry="170"
          stroke="rgba(108, 92, 231, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />

        {/* Minimal geometric crosshair markings */}
        <g stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1">
          <line x1="300" y1="42" x2="300" y2="54" />
          <line x1="300" y1="446" x2="300" y2="458" />
          <line x1="60" y1="250" x2="72" y2="250" />
          <line x1="528" y1="250" x2="540" y2="250" />
        </g>

        {/* Curved connection lines radiating to the 6 nodes */}
        {NETWORK_NODES.map((node) => {
          const cap = CAPABILITIES[node.index];
          const isHighlighted =
            hoveredNode === node.index || activeHub === node.index;

          return (
            <g key={`connection-${node.index}`}>
              {/* Glow line when active/hovered */}
              {isHighlighted && (
                <path
                  d={node.pathD}
                  stroke={cap.accent}
                  strokeWidth="3.5"
                  strokeOpacity="0.45"
                  filter="url(#node-glow)"
                />
              )}

              {/* Main connection curve */}
              <path
                d={node.pathD}
                stroke={isHighlighted ? cap.accent : "rgba(108, 92, 231, 0.22)"}
                strokeWidth={isHighlighted ? "2" : "1.25"}
                strokeDasharray={isHighlighted ? undefined : "3 4"}
                style={{
                  transition: "stroke 0.3s ease, stroke-width 0.3s ease",
                }}
              />

              {/* Animated energy pulses traveling smoothly along path */}
              {!reducedMotion && (
                <>
                  <circle r="3" fill={cap.accent} opacity="0.95">
                    <animateMotion
                      dur="3.8s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay}s`}
                    />
                  </circle>
                  <circle r="1.8" fill="#ffffff" opacity="0.9">
                    <animateMotion
                      dur="3.8s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay}s`}
                    />
                  </circle>
                  <circle r="2" fill={cap.accent} opacity="0.5">
                    <animateMotion
                      dur="3.8s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay + 1.9}s`}
                    />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central Translucent Glass Orb */}
      <div
        className="intelligence-center-orb pointer-events-auto"
        style={{
          left: "50%",
          top: "48.08%",
          transform: reducedMotion
            ? "translate(-50%, -50%)"
            : `translate(calc(-50% + ${mouseOffset.x * 9}px), calc(-50% + ${mouseOffset.y * 9}px))`,
          transition: "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="orb-glass-body group">
          <div className="orb-pulse-ring" aria-hidden="true" />
          <div className="orb-inner-ambient" aria-hidden="true" />

          <div className="orb-content">
            <div className="orb-sparkle-frame">
              <Sparkles size={17} className="orb-sparkle-icon" />
            </div>
            <span className="orb-brand">ARAM</span>
            <span className="orb-sub">INTELLIGENCE</span>
          </div>
        </div>
      </div>

      {/* Six Connected Capability Nodes (HTML Capsules for crisp text & accessible interaction) */}
      {NETWORK_NODES.map((node) => {
        const cap = CAPABILITIES[node.index];
        const Icon = cap.icon;
        const isSelected = activeHub === node.index;
        const isHovered = hoveredNode === node.index;

        return (
          <div
            key={cap.id}
            className="intelligence-node-anchor pointer-events-auto"
            style={{
              left: `${node.pctX}%`,
              top: `${node.pctY}%`,
              transform: reducedMotion
                ? "translate(-50%, -50%)"
                : `translate(calc(-50% + ${mouseOffset.x * 6}px), calc(-50% + ${mouseOffset.y * 6}px))`,
              transition: "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                onHubClick?.(node.index);
                const el = document.getElementById("capabilities");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setHoveredNode(node.index)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`intelligence-node-pill ${isSelected ? "is-selected" : ""} ${
                isHovered ? "is-hovered" : ""
              }`}
              style={
                {
                  "--node-accent": cap.accent,
                } as React.CSSProperties
              }
              aria-label={`Explore ${cap.title}`}
            >
              <span
                className="node-icon-box"
                style={{
                  color: cap.accent,
                  backgroundColor: `${cap.accent}14`,
                }}
              >
                <Icon size={13} />
              </span>

              <span className="node-label-text">{cap.shortLabel}</span>

              <span
                className="node-status-dot"
                style={{
                  backgroundColor: cap.accent,
                }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
