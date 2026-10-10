"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Zap,
  BarChart3,
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroReimagined() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Smooth 3D tilt interaction for visual container
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 45, damping: 22, mass: 0.5 });
  const haloX = useTransform(sx, (v) => `${v * 0.4}px`);
  const haloY = useTransform(sy, (v) => `${v * 0.4}px`);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(((e.clientX - cx) / rect.width) * 16);
    my.set(((e.clientY - cy) / rect.height) * 12);
  }

  function onMouseLeave() {
    if (reducedMotion) return;
    mx.set(0);
    my.set(0);
  }

  const floatingComponents = [
    { id: "ai", label: "AI", icon: Bot, color: "#7c6aee", bg: "rgba(124, 106, 238, 0.08)" },
    { id: "auto", label: "Automation", icon: Zap, color: "#059669", bg: "rgba(5, 150, 105, 0.08)" },
    { id: "software", label: "Software", icon: Code2, color: "#d97706", bg: "rgba(217, 119, 6, 0.08)" },
    { id: "data", label: "Data", icon: BarChart3, color: "#2563eb", bg: "rgba(37, 99, 235, 0.08)" },
    { id: "zoho", label: "Zoho", icon: Layers, color: "#dc2626", bg: "rgba(220, 38, 38, 0.08)" },
  ];

  return (
    <section className="hero-section hero-section-reimagined section-wrap">
      <div className="hero-reimagined-grid">
        {/* LEFT COLUMN: Original Editorial Message */}
        <div className="hero-editorial-left">
          <motion.div
            className="hero-eyebrow-pill"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5, ease }}
          >
            <span className="eyebrow-pulse-dot" aria-hidden="true" />
            <span className="eyebrow-text">
              AI <span className="sep">•</span> AUTOMATION <span className="sep">•</span> SOFTWARE <span className="sep">•</span> DATA
            </span>
          </motion.div>

          <div className="hero-editorial-header">
            <motion.h1
              className="hero-reimagined-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.65, ease }}
            >
              <span className="hrt-line hrt-line-1">Technology that</span>
              <span className="hrt-line hrt-line-2">
                <span className="serif-accent italic-highlight">moves</span> business.
              </span>
            </motion.h1>

            <motion.p
              className="hero-reimagined-desc"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6, ease }}
            >
              Aram connects AI, automation, software and data to build smarter systems for the way your business actually works.
            </motion.p>
          </div>

          <motion.div
            className="hero-reimagined-ctas"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55, ease }}
          >
            <a className="button button-primary hero-main-btn" href="#contact">
              Start a Project <ArrowUpRight size={16} />
            </a>
            <a className="button button-quiet hero-secondary-btn" href="#work">
              Explore Our Work <ArrowDown size={15} />
            </a>
          </motion.div>

          {/* Connected components pill bar */}
          <motion.div
            className="hero-tech-pills-bar"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease }}
          >
            <span className="pills-bar-title">Connected in one operating system:</span>
            <div className="pills-flex">
              {floatingComponents.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.id}
                    className={`tech-pill-badge ${activeNode === c.id ? "is-hovered" : ""}`}
                    onMouseEnter={() => setActiveNode(c.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    style={{ borderColor: activeNode === c.id ? c.color : undefined }}
                  >
                    <Icon size={12} style={{ color: c.color }} />
                    <span>{c.label}</span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Business Transformation Visual Stage */}
        <div
          className="hero-stage-visual"
          ref={wrapRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          aria-label="Aram Intelligence Engine transforming business needs into working results"
          role="img"
        >
          {/* Ambient Lavender Glow */}
          <div className="hero-stage-halo" aria-hidden="true">
            <motion.div className="hero-glow-blob" style={{ x: haloX, y: haloY }} />
            <div className="hero-mesh-grid" />
          </div>

          {/* SVG Connection Network (1000 x 560 coordinate space) */}
          <svg
            aria-hidden="true"
            className="hero-flow-svg-canvas"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradientFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c6aee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Need -> Engine Connection */}
            <path
              d="M 195 280 L 255 280"
              stroke="url(#gradientFlow)"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Top Node (AI) -> Engine */}
            <path
              d="M 430 92 L 430 188"
              stroke="#7c6aee"
              strokeWidth="1.6"
              strokeDasharray="3 4"
              opacity="0.6"
              fill="none"
            />

            {/* Engine -> Automation Output -> Result */}
            <path
              d="M 605 280 L 690 280"
              stroke="url(#gradientFlow)"
              strokeWidth="2.4"
              fill="none"
            />

            {/* Animated particles */}
            {!reducedMotion && (
              <>
                <circle r="3.2" fill="#7c6aee">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M 195 280 L 255 280" />
                </circle>
                <circle r="3" fill="#6366f1">
                  <animateMotion dur="3.2s" begin="0.5s" repeatCount="indefinite" path="M 430 92 L 430 188" />
                </circle>
                <circle r="3.4" fill="#10b981">
                  <animateMotion dur="2.4s" begin="0.2s" repeatCount="indefinite" path="M 605 280 L 690 280" />
                </circle>
              </>
            )}
          </svg>

          {/* STEP 1: BUSINESS NEED CARD */}
          <motion.div
            className="flow-card-node flow-step-need"
            initial={reducedMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease }}
          >
            <div className="flow-card-inner">
              <div className="flow-card-kicker">
                <span className="kicker-pill need-pill">01 • INPUT</span>
              </div>
              <div className="flow-card-heading">BUSINESS NEED</div>
              <p className="flow-card-text">
                Disconnected tools, manual approvals, and siloed data slowing execution.
              </p>
              <div className="flow-tag-indicator">
                <span className="dot-red" /> Unstructured processes
              </div>
            </div>
          </motion.div>

          {/* STEP 2: CENTRAL ARAM INTELLIGENCE ENGINE */}
          <motion.div
            className="flow-card-node flow-step-engine"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.65, ease }}
          >
            <div className="engine-card-inner">
              <div className="engine-glow-ring" aria-hidden="true" />
              <div className="engine-brand-row">
                <div className="engine-monogram">A</div>
                <div className="engine-titles">
                  <span className="engine-kicker">ARAM</span>
                  <span className="engine-title">INTELLIGENCE</span>
                  <span className="engine-sub">ENGINE</span>
                </div>
              </div>

              {/* Connected components chips inside engine */}
              <div className="engine-layers-grid">
                <div className="engine-layer-badge">
                  <Bot size={11} className="text-[#7c6aee]" /> AI Models
                </div>
                <div className="engine-layer-badge">
                  <Zap size={11} className="text-[#059669]" /> Automation
                </div>
                <div className="engine-layer-badge">
                  <Layers size={11} className="text-[#dc2626]" /> Zoho Suite
                </div>
                <div className="engine-layer-badge">
                  <BarChart3 size={11} className="text-[#2563eb]" /> Data Pipelines
                </div>
              </div>

              {/* Status Indicator */}
              <div className="engine-status-bar">
                <span className="status-live-dot" />
                <span className="status-live-text">SYSTEMS CONNECTED</span>
              </div>
            </div>
          </motion.div>

          {/* STEP 3: BUSINESS RESULT CARD */}
          <motion.div
            className="flow-card-node flow-step-result"
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease }}
          >
            <div className="flow-card-inner result-card-inner">
              <div className="flow-card-kicker">
                <span className="kicker-pill result-pill">02 • OUTCOME</span>
                <Sparkles size={13} className="text-emerald-500" />
              </div>
              <div className="flow-card-heading">BUSINESS RESULT</div>
              <div className="result-headline">Work that moves itself forward.</div>
              <ul className="result-checks-list">
                <li>
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Automated workflows</span>
                </li>
                <li>
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Real-time visibility</span>
                </li>
                <li>
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Less manual busywork</span>
                </li>
              </ul>
              <div className="result-chip-footer">
                <span className="chip-active-dot" />
                <span>PRACTICAL IMPLEMENTATION</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Technology Labels orbiting the engine */}
          <div className="floating-orbit-labels">
            {/* Top Node: AI */}
            <div className="orbit-pill orbit-ai">
              <Bot size={12} className="text-[#7c6aee]" />
              <span>AI</span>
            </div>
            {/* Left Node: Zoho */}
            <div className="orbit-pill orbit-zoho">
              <Layers size={12} className="text-[#dc2626]" />
              <span>Zoho</span>
            </div>
            {/* Bottom-Left: Data */}
            <div className="orbit-pill orbit-data">
              <BarChart3 size={12} className="text-[#2563eb]" />
              <span>Data</span>
            </div>
            {/* Bottom-Right: Software */}
            <div className="orbit-pill orbit-software">
              <Code2 size={12} className="text-[#d97706]" />
              <span>Software</span>
            </div>
            {/* Bottom-Center: Automation */}
            <div className="orbit-pill orbit-automation">
              <Zap size={12} className="text-[#059669]" />
              <span>Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
