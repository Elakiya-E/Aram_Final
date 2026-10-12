"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

interface NetworkNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  accent: string;
  delay: string;
  pathD: string;
}

const HERO_NODES: NetworkNode[] = [
  {
    id: "people",
    label: "People & Teams",
    sub: "Human Operational Context",
    x: 95,
    y: 75,
    accent: "#8b5cf6",
    delay: "0s",
    pathD: "M 250 175 C 190 140, 140 100, 95 75",
  },
  {
    id: "technology",
    label: "Software & AI",
    sub: "Engineered Digital Systems",
    x: 405,
    y: 75,
    accent: "#6366f1",
    delay: "1.2s",
    pathD: "M 250 175 C 310 140, 360 100, 405 75",
  },
  {
    id: "data",
    label: "Data & Insights",
    sub: "Unified Information Pipelines",
    x: 95,
    y: 275,
    accent: "#10b981",
    delay: "2.4s",
    pathD: "M 250 175 C 190 210, 140 250, 95 275",
  },
  {
    id: "outcomes",
    label: "Real Outcomes",
    sub: "Sustainable Business Value",
    x: 405,
    y: 275,
    accent: "#f59e0b",
    delay: "3.6s",
    pathD: "M 250 175 C 310 210, 360 250, 405 275",
  },
];

export function AboutHeroNetworkCanvas() {
  const reducedMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const active = HERO_NODES.find((n) => n.id === activeNode);

  return (
    <div className="about-hero-network-wrap">
      {/* Background blueprint grid & coordinates */}
      <div className="network-blueprint-hud" aria-hidden="true">
        <span className="hud-coord top-left">LAT 9.17°N // LON 77.41°E</span>
        <span className="hud-coord top-right">SYS.ARCH // NOMINAL</span>
        <span className="hud-coord bottom-left">ARAM.NET // VAAZHAI</span>
        <span className="hud-coord bottom-right">CORE 04-DISCIPLINES</span>
      </div>

      {/* SVG Canvas for technical connections, orbital rings & signal pulses */}
      <svg
        className="about-network-svg"
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>

          {HERO_NODES.map((node) => (
            <linearGradient
              key={`grad-${node.id}`}
              id={`lineGrad-${node.id}`}
              x1="250"
              y1="175"
              x2={node.x}
              y2={node.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor={node.accent} stopOpacity="0.9" />
            </linearGradient>
          ))}
        </defs>

        {/* Ambient radial glow */}
        <circle cx="250" cy="175" r="140" fill="url(#hubCenterGlow)" />

        {/* Technical concentric orbital rings */}
        <circle
          cx="250"
          cy="175"
          r="68"
          stroke="rgba(139, 92, 246, 0.22)"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="network-ring-inner"
        />
        <circle
          cx="250"
          cy="175"
          r="115"
          stroke="rgba(139, 92, 246, 0.14)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="network-ring-mid"
        />
        <circle
          cx="250"
          cy="175"
          r="158"
          stroke="rgba(139, 92, 246, 0.08)"
          strokeWidth="1"
          className="network-ring-outer"
        />

        {/* Fine crosshair grid axes */}
        <line
          x1="250"
          y1="25"
          x2="250"
          y2="325"
          stroke="rgba(139, 92, 246, 0.1)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <line
          x1="30"
          y1="175"
          x2="470"
          y2="175"
          stroke="rgba(139, 92, 246, 0.1)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Connection rays from center to satellite nodes */}
        {HERO_NODES.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <g key={`ray-${node.id}`}>
              <path
                d={node.pathD}
                stroke={`url(#lineGrad-${node.id})`}
                strokeWidth={isSelected ? 2 : 1.2}
                strokeDasharray={isSelected ? "none" : "4 5"}
                className={`network-path ${isSelected ? "is-active" : ""}`}
                style={{
                  opacity: isSelected ? 1 : 0.55,
                  filter: isSelected ? `drop-shadow(0 0 6px ${node.accent})` : "none",
                  transition: "all 0.3s ease",
                }}
              />

              {!reducedMotion && (
                <circle r={isSelected ? 3.5 : 2.5} fill={node.accent}>
                  <animateMotion
                    dur={isSelected ? "2.2s" : "3.5s"}
                    begin={node.delay}
                    repeatCount="indefinite"
                    path={node.pathD}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central Aram Intelligence Hub */}
      <div className="network-center-hub">
        <div className="hub-core-pulse" />
        <div className="hub-core-box">
          <Image
            alt="Aram Analytics"
            src={siteLogo}
            width={48}
            height={26}
            className="hub-brand-logo"
            priority
          />
          <span className="hub-core-tag">ARAM CORE</span>
        </div>
      </div>

      {/* 4 Interactive Satellite Nodes */}
      <div className="network-nodes-layer">
        {HERO_NODES.map((node) => {
          const isSelected = activeNode === node.id;
          const leftPct = `${(node.x / 500) * 100}%`;
          const topPct = `${(node.y / 350) * 100}%`;

          return (
            <div
              key={node.id}
              className={`network-node-anchor ${isSelected ? "is-active" : ""}`}
              style={{ left: leftPct, top: topPct }}
            >
              <button
                type="button"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                className="network-node-btn"
                style={{
                  borderColor: isSelected ? node.accent : "rgba(139, 92, 246, 0.2)",
                  boxShadow: isSelected
                    ? `0 8px 24px -4px ${node.accent}44, 0 0 0 1px ${node.accent}`
                    : "0 4px 14px rgba(40, 30, 80, 0.06)",
                }}
              >
                <span className="node-indicator" style={{ backgroundColor: node.accent }} />
                <div className="node-text">
                  <span className="node-title">{node.label}</span>
                  <small className="node-sub">{node.sub}</small>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer telemetry ribbon */}
      <div className="network-hud-footer">
        <span className="hud-status-live">
          <span
            className="live-dot"
            style={{ backgroundColor: active ? active.accent : "#10b981" }}
          />
          {active ? (
            <span className="live-readout">
              ACTIVE NODE // <strong style={{ color: active.accent }}>{active.label}</strong> ({active.sub})
            </span>
          ) : (
            <span className="live-readout">
              ARAM INTELLIGENCE TOPOLOGY // CONNECTING IDEAS, SYSTEMS &amp; OUTCOMES
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
