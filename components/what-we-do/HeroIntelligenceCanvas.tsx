"use client";

import { useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { SERVICES_DATA as CAPABILITIES } from "@/content/services";

interface HeroIntelligenceCanvasProps {
  activeHub?: number;
  onHubClick?: (index: number) => void;
}

// 6 capability network nodes mapped onto 600x540 coordinate canvas (Center at 300, 270)
const NETWORK_NODES = [
  {
    index: 0,
    x: 465,
    y: 135,
    pctX: 77.5,
    pctY: 25.0,
    pathD: "M 300 270 Q 380 190, 465 135",
    particleDelay: 0,
  },
  {
    index: 1,
    x: 500,
    y: 270,
    pctX: 83.3,
    pctY: 50.0,
    pathD: "M 300 270 Q 405 285, 500 270",
    particleDelay: 0.55,
  },
  {
    index: 2,
    x: 450,
    y: 405,
    pctX: 75.0,
    pctY: 75.0,
    pathD: "M 300 270 Q 385 350, 450 405",
    particleDelay: 1.1,
  },
  {
    index: 3,
    x: 150,
    y: 405,
    pctX: 25.0,
    pctY: 75.0,
    pathD: "M 300 270 Q 215 350, 150 405",
    particleDelay: 1.65,
  },
  {
    index: 4,
    x: 100,
    y: 270,
    pctX: 16.7,
    pctY: 50.0,
    pathD: "M 300 270 Q 195 285, 100 270",
    particleDelay: 2.2,
  },
  {
    index: 5,
    x: 135,
    y: 135,
    pctX: 22.5,
    pctY: 25.0,
    pathD: "M 300 270 Q 220 190, 135 135",
    particleDelay: 2.75,
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
      className="what-we-do-network"
    >
      {/* Ambient softly blurred lavender and blush glow behind the network */}
      <div
        className="what-we-do-network__ambient-glow"
        aria-hidden="true"
      />

      {/* SVG Canvas: geometric orbits, crosshairs, curved connection lines & glowing pulse particles */}
      <svg
        viewBox="0 0 600 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="what-we-do-network__svg"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(${mouseOffset.x * 4}px, ${mouseOffset.y * 4}px, 0)`,
          transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id="wwd-center-aura"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.32" />
            <stop offset="50%" stopColor="#6C5CE7" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          <filter id="wwd-node-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="wwd-particle-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient aura behind central orb */}
        <circle cx="300" cy="270" r="180" fill="url(#wwd-center-aura)" />

        {/* Concentric dashed geometric orbit rings */}
        <ellipse
          cx="300"
          cy="270"
          rx="108"
          ry="94"
          stroke="rgba(139, 92, 246, 0.22)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <ellipse
          cx="300"
          cy="270"
          rx="164"
          ry="142"
          stroke="rgba(108, 92, 231, 0.18)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <ellipse
          cx="300"
          cy="270"
          rx="224"
          ry="192"
          stroke="rgba(139, 92, 246, 0.16)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <ellipse
          cx="300"
          cy="270"
          rx="280"
          ry="240"
          stroke="rgba(139, 92, 246, 0.08)"
          strokeWidth="1"
        />

        {/* Minimal geometric crosshair markings */}
        <g stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1">
          <line x1="300" y1="20" x2="300" y2="34" />
          <line x1="300" y1="506" x2="300" y2="520" />
          <line x1="20" y1="270" x2="34" y2="270" />
          <line x1="566" y1="270" x2="580" y2="270" />
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
                  strokeWidth="4.5"
                  strokeOpacity="0.5"
                  filter="url(#wwd-node-glow)"
                />
              )}

              {/* Main connection curve */}
              <path
                d={node.pathD}
                stroke={isHighlighted ? cap.accent : "rgba(108, 92, 231, 0.32)"}
                strokeWidth={isHighlighted ? "2.4" : "1.5"}
                strokeDasharray={isHighlighted ? undefined : "3 4"}
                strokeLinecap="round"
                style={{
                  transition: "stroke 0.3s ease, stroke-width 0.3s ease",
                }}
              />

              {/* Animated energy pulses traveling smoothly along path */}
              {!reducedMotion && (
                <>
                  {/* Lead luminous pulse */}
                  <circle r="3.6" fill={cap.accent} opacity="0.95" filter="url(#wwd-particle-glow)">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay}s`}
                    />
                  </circle>
                  <circle r="2" fill="#ffffff" opacity="0.95">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay}s`}
                    />
                  </circle>

                  {/* Follower pulse */}
                  <circle r="2.5" fill={cap.accent} opacity="0.75" filter="url(#wwd-particle-glow)">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay + 1.6}s`}
                    />
                  </circle>
                  <circle r="1.3" fill="#ffffff" opacity="0.85">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      path={node.pathD}
                      begin={`${node.particleDelay + 1.6}s`}
                    />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central Translucent Glass Orb: 144px diameter */}
      <div
        className="what-we-do-network__orb pointer-events-auto"
        style={{
          left: "50%",
          top: "50%",
          transform: reducedMotion
            ? "translate(-50%, -50%)"
            : `translate(calc(-50% + ${mouseOffset.x * 6}px), calc(-50% + ${mouseOffset.y * 6}px))`,
          transition: "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="what-we-do-network__orb-body">
          <div className="what-we-do-network__orb-ring" aria-hidden="true" />
          <div className="what-we-do-network__orb-ambient" aria-hidden="true" />

          <div className="what-we-do-network__orb-content">
            <div className="what-we-do-network__orb-icon-frame">
              <Sparkles size={21} className="what-we-do-network__orb-icon" />
            </div>
            <span className="what-we-do-network__orb-brand">ARAM</span>
            <span className="what-we-do-network__orb-sub">INTELLIGENCE</span>
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
            className="what-we-do-network__node-anchor pointer-events-auto"
            style={{
              left: `${node.pctX}%`,
              top: `${node.pctY}%`,
              transform: reducedMotion
                ? "translate(-50%, -50%)"
                : `translate(calc(-50% + ${mouseOffset.x * 5}px), calc(-50% + ${mouseOffset.y * 5}px))`,
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
              className={`what-we-do-network__node-pill ${isSelected ? "is-selected" : ""} ${
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
                className="what-we-do-network__node-icon-box"
                style={{
                  color: cap.accent,
                  backgroundColor: `${cap.accent}14`,
                }}
              >
                <Icon size={14} />
              </span>

              <span className="what-we-do-network__node-label">{cap.shortLabel}</span>

              <span
                className="what-we-do-network__node-dot"
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
