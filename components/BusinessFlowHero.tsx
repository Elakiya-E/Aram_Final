"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BarChart3,
  Workflow,
  Code2,
  Check,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FlowKey = "ai" | "data" | "workflow" | "software" | "core" | "outcome";

export function BusinessFlowHero() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<FlowKey | null>(null);
  const [outcomeTick, setOutcomeTick] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 45, damping: 22, mass: 0.5 });

  const haloX = useTransform(sx, (v) => `${v * 0.35}px`);
  const haloY = useTransform(sy, (v) => `${v * 0.35}px`);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setOutcomeTick((i) => i + 1), 4000);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(((e.clientX - cx) / rect.width) * 18);
    my.set(((e.clientY - cy) / rect.height) * 14);
  }

  function onMouseLeave() {
    if (reducedMotion) return;
    mx.set(0);
    my.set(0);
  }

  const activeCls = (k: FlowKey) => (hovered === k || hovered === "core" ? "is-active" : "");

  const connectorVariants = useMemo(
    () => ({
      hidden: reducedMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 },
      show: (custom: number) => ({
        pathLength: 1,
        opacity: 0.7,
        transition: { delay: 0.6 + custom * 0.08, duration: 0.85, ease },
      }),
    }),
    [reducedMotion],
  );

  const nodeVariants = useMemo(
    () => ({
      hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
      show: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.7 + custom * 0.07, duration: 0.55, ease },
      }),
    }),
    [reducedMotion],
  );

  const coreVariants = useMemo(
    () => ({
      hidden: reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.55, duration: 0.65, ease },
      },
    }),
    [reducedMotion],
  );

  const outcomeVariants = useMemo(
    () => ({
      hidden: reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 },
      show: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.95, duration: 0.6, ease },
      },
    }),
    [reducedMotion],
  );

  // SVG paths in 1000x560 coordinate space
  // AI: (420, 99) -> (420, 195)
  // DATA: (170, 280) -> (235, 280)
  // SVG paths in 1000x560 coordinate space
  // AI: (330, 95) -> (330, 198)
  // DATA: (115, 280) -> (150, 280)
  // WORKFLOW: (230, 438) -> (270, 362)
  // SOFTWARE: (430, 438) -> (390, 362)
  // Engine -> Outcome: (510, 280) -> (685, 280)
  const particlePaths = [
    { dur: 3.8, begin: "0s", color: "#C3A5E9", d: "M 330 95 L 330 198" },
    { dur: 3.6, begin: "0.8s", color: "#90D0AE", d: "M 115 280 L 150 280" },
    { dur: 4.2, begin: "1.6s", color: "#6FA5DA", d: "M 230 438 C 230 405, 255 385, 270 362" },
    { dur: 4.4, begin: "2.4s", color: "#E0B98E", d: "M 430 438 C 430 405, 405 385, 390 362" },
  ];

  return (
    <section className="hero-section hero-section-flow section-wrap">
      <div className="hero-flow-container">
        {/* LEFT SIDE: Text & CTAs */}
        <div className="hero-flow-left">
          <motion.div
            className="hero-flow-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5, ease }}
          >
            <span className="dot" aria-hidden="true" />
            <div className="eyebrow eyebrow-flow">
              AI <span className="sep">•</span> AUTOMATION <span className="sep">•</span> SOFTWARE <span className="sep">•</span> DATA
            </div>
          </motion.div>

          <div className="hero-flow-head">
            <motion.h1
              className="hero-flow-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.7, ease }}
            >
              <span className="hft-line hft-line-1">Technology that</span>
              <span className="hft-line hft-line-2">
                <span className="hft-accent">moves</span> business.
              </span>
            </motion.h1>

            <motion.div
              className="hero-flow-meta"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.6, ease }}
            >
              <p>
                Aram connects AI, automation, software and data to build smarter systems for the way your business actually works.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hero-flow-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.55, ease }}
          >
            <a className="button button-primary hero-btn" href="#contact">
              Start a Project <ArrowUpRight size={15} />
            </a>
            <a className="button button-quiet hero-btn" href="#work">
              Explore Our Work <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Dedicated Visual Container with Independent Engine & Outcome */}
        <div
          className="hero-flow-stage"
          ref={wrapRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          aria-label="Aram Intelligence Engine connecting technology inputs to business outcomes"
          role="img"
        >
          {/* Background Glow (z-index: 0) */}
          <div className="hero-flow-bg" aria-hidden="true">
            <motion.div className="hero-flow-glow" style={{ x: haloX, y: haloY }} />
            <div className="hero-flow-mesh" />
            <div className="hero-flow-curves">
              <svg viewBox="0 0 1000 560" preserveAspectRatio="none" fill="none">
                <circle cx="330" cy="280" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
                <circle cx="330" cy="280" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.18" />
              </svg>
            </div>
            <div className="hero-flow-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* Connection Lines (z-index: 1) */}
          <svg
            aria-hidden="true"
            className="flow-net-svg"
            viewBox="0 0 1000 560"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="flowPathAi" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#C3A5E9" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9B8CFF" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="flowPathData" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#90D0AE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9B8CFF" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="flowPathWf" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#6FA5DA" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9B8CFF" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="flowPathSoft" x1="1" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#E0B98E" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9B8CFF" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="flowPathOut" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#9B8CFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#53C085" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* AI -> Engine */}
            <motion.path
              custom={0}
              variants={connectorVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-path ${activeCls("ai")}`}
              d="M 330 95 L 330 198"
              stroke="url(#flowPathAi)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* DATA -> Engine */}
            <motion.path
              custom={1}
              variants={connectorVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-path ${activeCls("data")}`}
              d="M 115 280 L 150 280"
              stroke="url(#flowPathData)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* WORKFLOW -> Engine */}
            <motion.path
              custom={2}
              variants={connectorVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-path ${activeCls("workflow")}`}
              d="M 230 438 C 230 405, 255 385, 270 362"
              stroke="url(#flowPathWf)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* SOFTWARE -> Engine */}
            <motion.path
              custom={3}
              variants={connectorVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-path ${activeCls("software")}`}
              d="M 430 438 C 430 405, 405 385, 390 362"
              stroke="url(#flowPathSoft)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* ARAM INTELLIGENCE ENGINE -> BUSINESS OUTCOME (Horizontal Stream) */}
            <motion.path
              custom={4}
              variants={connectorVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-path flow-path-out ${activeCls("outcome")}`}
              d="M 510 280 L 685 280"
              stroke="url(#flowPathOut)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Animated particles */}
            {!reducedMotion && (
              <>
                {particlePaths.map((p, i) => (
                  <circle key={i} r="3" fill={p.color}>
                    <animateMotion dur={`${p.dur}s`} begin={p.begin} repeatCount="indefinite" path={p.d} />
                  </circle>
                ))}
                <circle r="3.2" fill="#53C085">
                  <animateMotion dur="2.8s" begin="0.2s" repeatCount="indefinite" path="M 510 280 L 685 280" />
                </circle>
              </>
            )}
          </svg>

          {/* Aram Intelligence Engine (z-index: 3) */}
          <motion.div
            className={`flow-core-wrap ${activeCls("core")}`}
            variants={coreVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onMouseEnter={() => !reducedMotion && setHovered("core")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flow-core-parallax">
              <div aria-hidden="true" className="flow-core-halo" />
              <div className="flow-core-inner">
                <div className="flow-core-brand">
                  <span className="flow-core-mark">A</span>
                  <div className="flow-core-titles">
                    <span className="flow-core-kicker">ARAM</span>
                    <span className="flow-core-name">INTELLIGENCE</span>
                    <span className="flow-core-sub">ENGINE</span>
                  </div>
                </div>
                <div className="flow-core-lines" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="flow-core-status">
                  <span className="flow-core-dot" />
                  <span>LIVE SYSTEM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Outcome Card (z-index: 4) */}
          <motion.div
            className={`flow-outcome ${activeCls("outcome")}`}
            variants={outcomeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onMouseEnter={() => !reducedMotion && setHovered("outcome")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flow-outcome-inner">
              <div className="flow-outcome-head">
                <span className="flow-outcome-kicker">Business Outcome</span>
                <span className="flow-outcome-arrow"><Sparkles size={13} strokeWidth={2} /></span>
              </div>
              <div className="flow-outcome-title">Work that moves itself forward.</div>
              <ul className="flow-outcome-list">
                <li><i><Check size={11} strokeWidth={2.4} /></i> Faster workflows</li>
                <li><i><Check size={11} strokeWidth={2.4} /></i> Better decisions</li>
                <li><i><Check size={11} strokeWidth={2.4} /></i> Less manual work</li>
              </ul>
              <div className="flow-outcome-foot">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={outcomeTick % 3}
                    initial={reducedMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <b>{outcomeTick % 3 === 0 ? "+38%" : outcomeTick % 3 === 1 ? "−2.4h" : "99.4%"}</b>
                    {outcomeTick % 3 === 0 ? " throughput" : outcomeTick % 3 === 1 ? " / day saved" : " uptime kept"}
                  </motion.span>
                </AnimatePresence>
                <span className="flow-outcome-chip"><i /> LIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Technology Nodes (z-index: 2) */}
          <div className="flow-nodes-wrapper">
            {/* Node 1: AI */}
            <motion.div
              custom={0}
              variants={nodeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-node flow-node-ai ${activeCls("ai")}`}
              onMouseEnter={() => !reducedMotion && setHovered("ai")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flow-node-inner">
                <span className="flow-node-mark"><Bot size={14} strokeWidth={2} /></span>
                <span className="flow-node-label">AI</span>
              </div>
            </motion.div>

            {/* Node 2: DATA */}
            <motion.div
              custom={1}
              variants={nodeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-node flow-node-data ${activeCls("data")}`}
              onMouseEnter={() => !reducedMotion && setHovered("data")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flow-node-inner">
                <span className="flow-node-mark"><BarChart3 size={14} strokeWidth={2} /></span>
                <span className="flow-node-label">DATA</span>
              </div>
            </motion.div>

            {/* Node 3: WORKFLOW */}
            <motion.div
              custom={2}
              variants={nodeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-node flow-node-workflow ${activeCls("workflow")}`}
              onMouseEnter={() => !reducedMotion && setHovered("workflow")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flow-node-inner">
                <span className="flow-node-mark"><Workflow size={14} strokeWidth={2} /></span>
                <span className="flow-node-label">WORKFLOW</span>
              </div>
            </motion.div>

            {/* Node 4: SOFTWARE */}
            <motion.div
              custom={3}
              variants={nodeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flow-node flow-node-software ${activeCls("software")}`}
              onMouseEnter={() => !reducedMotion && setHovered("software")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flow-node-inner">
                <span className="flow-node-mark"><Code2 size={14} strokeWidth={2} /></span>
                <span className="flow-node-label">SOFTWARE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
