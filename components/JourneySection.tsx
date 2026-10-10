"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, Cpu, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

type Stage = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Search;
  color: string;
  microVisualType: "radar" | "blueprint" | "pipeline" | "telemetry";
};

const STAGES: Stage[] = [
  {
    id: "understand",
    number: "01",
    title: "UNDERSTAND",
    subtitle: "Identify core constraints",
    description: "We identify the business problem, users, workflow and desired outcome.",
    icon: Search,
    color: "#7c6aee",
    microVisualType: "radar",
  },
  {
    id: "design",
    number: "02",
    title: "DESIGN",
    subtitle: "Map connected architecture",
    description: "We map the experience, architecture and technology required to solve it.",
    icon: Compass,
    color: "#2563eb",
    microVisualType: "blueprint",
  },
  {
    id: "build",
    number: "03",
    title: "BUILD",
    subtitle: "Develop, automate & integrate",
    description: "We develop, integrate, automate and test the solution with real-world use cases.",
    icon: Cpu,
    color: "#059669",
    microVisualType: "pipeline",
  },
  {
    id: "improve",
    number: "04",
    title: "IMPROVE",
    subtitle: "Monitor & scale continuously",
    description: "We monitor, refine and evolve the system as your business grows.",
    icon: TrendingUp,
    color: "#d97706",
    microVisualType: "telemetry",
  },
];

export function JourneySection({ id = "process" }: { id?: string }) {
  const reducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="journey-section section-wrap" id={id}>
      <div className="section-editorial-header">
        <motion.div
          className="section-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-accent-dot" />
          <span>HOW WE EXECUTE</span>
        </motion.div>

        <motion.h2
          className="section-editorial-title"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          From idea to <span className="serif-accent">working system.</span>
        </motion.h2>

        <motion.p
          className="section-editorial-sub"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          A continuous, collaborative path designed to avoid black boxes and deliver lasting operational clarity.
        </motion.p>
      </div>

      {/* CONTINUOUS JOURNEY TRACK */}
      <div className="journey-track-wrapper">
        {/* Animated Connecting Ribbon */}
        <div className="journey-connecting-ribbon" aria-hidden="true">
          <svg className="ribbon-svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path
              d="M 50 20 L 1150 20"
              stroke="rgba(124, 106, 238, 0.16)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            <motion.path
              d="M 50 20 L 1150 20"
              stroke="url(#journeyGradient)"
              strokeWidth="2.5"
              fill="none"
              initial={{ pathLength: 0.2 }}
              animate={{ pathLength: (activeStage + 1) / 4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <defs>
              <linearGradient id="journeyGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c6aee" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="75%" stopColor="#059669" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4 HORIZONTAL STAGE CARDS */}
        <div className="journey-stages-grid">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isCurrent = activeStage === idx;

            return (
              <motion.div
                key={stage.id}
                className={`journey-stage-step ${isCurrent ? "is-current" : ""}`}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                whileHover={reducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Connector Marker */}
                <div className="stage-marker-pill">
                  <span className="stage-num-badge" style={{ backgroundColor: isCurrent ? stage.color : undefined }}>
                    {stage.number}
                  </span>
                  <span className="stage-step-tag">{idx === 0 ? "Problem" : idx === 1 ? "Design" : idx === 2 ? "Build" : "Improve"}</span>
                  {idx < 3 && <ArrowRight size={12} className="stage-arrow-next" />}
                </div>

                {/* Stage Content Card */}
                <div className="stage-card-body">
                  <div className="stage-top-meta">
                    <span className="stage-icon-wrap" style={{ color: stage.color }}>
                      <Icon size={18} />
                    </span>
                    <span className="stage-title-kicker">{stage.title}</span>
                  </div>

                  <h3 className="stage-main-title">{stage.subtitle}</h3>
                  <p className="stage-desc-text">{stage.description}</p>

                  {/* STAGE-SPECIFIC MICRO-VISUAL */}
                  <div className="stage-micro-visual">
                    {stage.microVisualType === "radar" && (
                      <div className="mv-radar">
                        <div className="mv-radar-sweep" />
                        <span className="mv-radar-dot p1" />
                        <span className="mv-radar-dot p2" />
                        <span className="mv-radar-dot p3" />
                        <span className="mv-caption">User &amp; Workflow Discovery</span>
                      </div>
                    )}

                    {stage.microVisualType === "blueprint" && (
                      <div className="mv-blueprint">
                        <div className="mv-blueprint-nodes">
                          <i /><span /><i /><span /><i />
                        </div>
                        <span className="mv-caption">Architecture &amp; Data Map</span>
                      </div>
                    )}

                    {stage.microVisualType === "pipeline" && (
                      <div className="mv-pipeline">
                        <div className="mv-pipeline-bars">
                          <span className="bar pass"><CheckCircle size={10} /> Integrations</span>
                          <span className="bar pass"><CheckCircle size={10} /> Automation</span>
                          <span className="bar active">Live Testing...</span>
                        </div>
                        <span className="mv-caption">Real-world Test Suite</span>
                      </div>
                    )}

                    {stage.microVisualType === "telemetry" && (
                      <div className="mv-telemetry">
                        <div className="mv-telemetry-wave">
                          <i style={{ height: "45%" }} />
                          <i style={{ height: "75%" }} />
                          <i style={{ height: "60%" }} />
                          <i style={{ height: "90%" }} />
                          <i style={{ height: "70%" }} />
                          <i style={{ height: "95%" }} />
                        </div>
                        <span className="mv-caption">Continuous System Refinement</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
