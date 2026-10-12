"use client";

import { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

interface NetworkNode {
  id: string;
  label: string;
  sub: string;
  accent: string;
  boxX: number;
  boxY: number;
  width: number;
  height: number;
  pathD: string;
  dotDuration: string;
  dotDelay: string;
}

const NODES: NetworkNode[] = [
  {
    id: "people",
    label: "People & Teams",
    sub: "Human Operational Context",
    accent: "#8b5cf6",
    boxX: 18,
    boxY: 36,
    width: 156,
    height: 48,
    pathD: "M 260 175 C 190 140, 140 90, 96 84",
    dotDuration: "2.8s",
    dotDelay: "0s",
  },
  {
    id: "technology",
    label: "Software & AI",
    sub: "Engineered Digital Systems",
    accent: "#6366f1",
    boxX: 346,
    boxY: 36,
    width: 156,
    height: 48,
    pathD: "M 260 175 C 330 140, 380 90, 424 84",
    dotDuration: "3.2s",
    dotDelay: "0.8s",
  },
  {
    id: "data",
    label: "Data & Insights",
    sub: "Unified Pipelines",
    accent: "#10b981",
    boxX: 18,
    boxY: 266,
    width: 156,
    height: 48,
    pathD: "M 260 175 C 190 210, 140 260, 96 266",
    dotDuration: "3.0s",
    dotDelay: "1.6s",
  },
  {
    id: "outcomes",
    label: "Real Outcomes",
    sub: "Measurable Value",
    accent: "#f59e0b",
    boxX: 346,
    boxY: 266,
    width: 156,
    height: 48,
    pathD: "M 260 175 C 330 210, 380 260, 424 266",
    dotDuration: "3.4s",
    dotDelay: "2.4s",
  },
];

export function AboutHeroNetworkCanvas() {
  const reducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = NODES.find((n) => n.id === activeId);

  return (
    <div className="about-hero-network-wrap">
      {/* HUD Coordinate Framing */}
      <div className="network-blueprint-hud" aria-hidden="true">
        <span className="hud-coord top-left">LAT 9.17°N // LON 77.41°E</span>
        <span className="hud-coord top-right">SYS.ARCH // NOMINAL</span>
      </div>

      <svg
        className="about-network-svg"
        viewBox="0 0 520 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="nodeCardGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#281e50" floodOpacity="0.08" />
          </filter>

          <radialGradient id="networkHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>

          {NODES.map((node) => (
            <linearGradient
              key={`grad-${node.id}`}
              id={`lineGrad-${node.id}`}
              x1="260"
              y1="175"
              x2={node.boxX + node.width / 2}
              y2={node.boxY + node.height / 2}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor={node.accent} stopOpacity="0.85" />
            </linearGradient>
          ))}
        </defs>

        {/* Ambient background glow */}
        <circle cx="260" cy="175" r="145" fill="url(#networkHubGlow)" />

        {/* Orbital rings */}
        <circle
          cx="260"
          cy="175"
          r="72"
          stroke="rgba(139, 92, 246, 0.22)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="network-ring-inner"
        />
        <circle
          cx="260"
          cy="175"
          r="128"
          stroke="rgba(139, 92, 246, 0.14)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="network-ring-mid"
        />

        {/* Grid Crosshairs */}
        <line
          x1="260"
          y1="24"
          x2="260"
          y2="326"
          stroke="rgba(139, 92, 246, 0.12)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <line
          x1="24"
          y1="175"
          x2="496"
          y2="175"
          stroke="rgba(139, 92, 246, 0.12)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* Connecting ray paths & traveling signal particles */}
        {NODES.map((node) => {
          const isSelected = activeId === node.id;
          return (
            <g key={`path-${node.id}`}>
              <path
                d={node.pathD}
                stroke={`url(#lineGrad-${node.id})`}
                strokeWidth={isSelected ? 2 : 1.2}
                strokeDasharray={isSelected ? "none" : "4 5"}
                opacity={isSelected ? 1 : 0.6}
              />
              {!reducedMotion && (
                <circle r={isSelected ? 3.5 : 2.5} fill={node.accent}>
                  <animateMotion
                    dur={node.dotDuration}
                    begin={node.dotDelay}
                    repeatCount="indefinite"
                    path={node.pathD}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 4 Vector Node Cards (Self-contained, perfectly scaled) */}
        {NODES.map((node) => {
          const isSelected = activeId === node.id;
          return (
            <g
              key={node.id}
              className="network-svg-node"
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === node.id ? null : node.id)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={node.boxX}
                y={node.boxY}
                width={node.width}
                height={node.height}
                rx={12}
                fill={isSelected ? "#faf8ff" : "#ffffff"}
                stroke={isSelected ? node.accent : "rgba(139, 92, 246, 0.22)"}
                strokeWidth={isSelected ? 2 : 1.2}
                filter="url(#nodeCardGlow)"
              />
              <circle
                cx={node.boxX + 16}
                cy={node.boxY + node.height / 2}
                r={4.5}
                fill={node.accent}
              />
              <text
                x={node.boxX + 28}
                y={node.boxY + 20}
                fontSize="11.5"
                fontWeight="700"
                fill="#14121a"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {node.label}
              </text>
              <text
                x={node.boxX + 28}
                y={node.boxY + 35}
                fontSize="9"
                fontWeight="500"
                fill="#5e586c"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Central Aram Core Hub */}
      <div className="network-center-hub">
        <div className="hub-core-pulse" />
        <div className="hub-core-box">
          <Image
            alt="Aram Analytics"
            src={siteLogo}
            width={46}
            height={24}
            className="hub-brand-logo"
            priority
          />
          <span className="hub-core-tag">ARAM CORE</span>
        </div>
      </div>

      {/* Telemetry Strip */}
      <div className="network-hud-footer">
        <span className="hud-status-live">
          <span
            className="live-dot"
            style={{ backgroundColor: active ? active.accent : "#10b981" }}
          />
          {active ? (
            <span className="live-readout">
              NODE // <strong style={{ color: active.accent }}>{active.label}</strong> — {active.sub}
            </span>
          ) : (
            <span className="live-readout">
              ARAM INTELLIGENCE // CONNECTING IDEAS, SYSTEMS &amp; OUTCOMES
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
