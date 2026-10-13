"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function BusinessFlowHero() {
  const reducedMotion = useReducedMotion();
  const [outcomeTick, setOutcomeTick] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setOutcomeTick((i) => i + 1), 3800);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="hero-section hero-section-flow section-wrap" id="top">
      <div className="hero-flow-container">
        {/* LEFT SIDE: Copy, CTAs, and Supporting Capabilities */}
        <div className="hero-flow-left">
          <motion.div
            className="hero-flow-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5, ease }}
          >
            <span className="dot" aria-hidden="true" />
            <span className="eyebrow eyebrow-flow">
              ARAM ANALYTICS · CONNECTED SYSTEMS
            </span>
          </motion.div>

          <div className="hero-flow-head">
            <motion.h1
              className="hero-flow-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.65, ease }}
            >
              <span className="hft-line hft-line-1">Technology that</span>
              <span className="hft-line hft-line-2">
                <span className="serif-accent italic-highlight">moves business forward.</span>
              </span>
            </motion.h1>

            <motion.div
              className="hero-flow-meta"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6, ease }}
            >
              <p>
                We connect AI, software, data, and automation to turn complex business challenges into practical digital solutions.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hero-flow-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55, ease }}
          >
            <a className="button button-primary hero-btn" href="#contact">
              Let&apos;s build together ↗
            </a>
            <a className="button button-quiet hero-btn" href="#work">
              Explore our work ↓
            </a>
          </motion.div>

          {/* Supporting capability labels */}
          <motion.div
            className="hero-supporting-capabilities"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55, ease }}
          >
            <span className="hero-supporting-kicker">Core Domains</span>
            <div className="hero-supporting-pills">
              <span className="hero-cap-pill">AI &amp; Automation</span>
              <span className="hero-cap-sep">•</span>
              <span className="hero-cap-pill">Software</span>
              <span className="hero-cap-sep">•</span>
              <span className="hero-cap-pill">Data &amp; Intelligence</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Dedicated Visual Stage with Separated Intelligence Engine & Outcome */}
        <div
          className="hero-flow-stage"
          aria-label="Aram Intelligence Engine connecting technology inputs to business outcomes"
        >
          {/* Subtle Ambient Lavender Background (No floating bubbles, no background nodes) */}
          <div className="hero-flow-bg" aria-hidden="true">
            <div className="hero-flow-glow" />
            <div className="hero-flow-mesh" />
          </div>

          {/* Guaranteed non-overlapping 3-column / grid composition */}
          <div className="hero-flow-stage-canvas">
            {/* 1. ARAM INTELLIGENCE ENGINE */}
            <motion.div
              className="flow-core-wrap"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease }}
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

                  <div className="flow-core-pills">
                    <span className="core-pill">AI</span>
                    <span className="core-pill">Automation</span>
                    <span className="core-pill">Software</span>
                    <span className="core-pill">Data</span>
                  </div>

                  <div className="flow-core-status">
                    <span className="flow-core-dot" />
                    <span>LIVE SYSTEM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. DIRECTIONAL FLOW BRIDGE */}
            <div className="flow-stage-bridge" aria-hidden="true">
              <div className="flow-bridge-track">
                <span className="flow-bridge-pulse" />
              </div>
              <div className="flow-bridge-arrow">
                <ArrowRight size={14} />
              </div>
            </div>

            {/* 3. BUSINESS OUTCOME CARD */}
            <motion.div
              className="flow-outcome"
              initial={reducedMotion ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease }}
            >
              <div className="flow-outcome-inner">
                <div className="flow-outcome-head">
                  <span className="flow-outcome-kicker">Business Outcome</span>
                  <span className="flow-outcome-arrow">
                    <Sparkles size={13} strokeWidth={2} />
                  </span>
                </div>
                <div className="flow-outcome-title">Work that moves itself forward.</div>
                <ul className="flow-outcome-list">
                  <li>
                    <i><Check size={11} strokeWidth={2.4} /></i> Faster workflows
                  </li>
                  <li>
                    <i><Check size={11} strokeWidth={2.4} /></i> Better decisions
                  </li>
                  <li>
                    <i><Check size={11} strokeWidth={2.4} /></i> Less manual work
                  </li>
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
                      <b>
                        {outcomeTick % 3 === 0
                          ? "+38%"
                          : outcomeTick % 3 === 1
                          ? "−2.4h"
                          : "99.4%"}
                      </b>
                      {outcomeTick % 3 === 0
                        ? " throughput"
                        : outcomeTick % 3 === 1
                        ? " / day saved"
                        : " uptime kept"}
                    </motion.span>
                  </AnimatePresence>
                  <span className="flow-outcome-chip">
                    <i /> LIVE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
