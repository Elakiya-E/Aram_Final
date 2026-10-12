"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  Cpu,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Milestone,
} from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const PROCESS_STAGES = [
  {
    step: "01",
    phase: "PHASE 01 · DISCOVERY & AUDIT",
    title: "Understand",
    description: "Discover your goals and challenges.",
    deliverables: [
      "Operational bottleneck assessment",
      "Current technology & data mapping",
      "Key stakeholder requirements alignment",
    ],
    metric: "100% Problem Clarity",
    icon: Compass,
    accent: "#8b5cf6",
  },
  {
    step: "02",
    phase: "PHASE 02 · ARCHITECTURAL BLUEPRINT",
    title: "Design",
    description: "Plan the right solution and architecture.",
    deliverables: [
      "Scalable system & database schemas",
      "Data contracts & integration endpoints",
      "Interactive UX & user journey flows",
    ],
    metric: "Future-Proof Foundation",
    icon: Cpu,
    accent: "#6366f1",
  },
  {
    step: "03",
    phase: "PHASE 03 · COLLABORATIVE BUILD",
    title: "Build",
    description: "Develop, integrate, and test.",
    deliverables: [
      "Agile 2-week milestone delivery",
      "Rigorous end-to-end QA & security testing",
      "Automated CI/CD staging & production rollout",
    ],
    metric: "Zero-Downtime Launch",
    icon: Code2,
    accent: "#3b82f6",
  },
  {
    step: "04",
    phase: "PHASE 04 · ITERATION & SCALE",
    title: "Improve",
    description: "Refine the solution as your needs evolve.",
    deliverables: [
      "Telemetry & performance optimization",
      "Continuous system enhancements",
      "Long-term capability expansion",
    ],
    metric: "Continuous Business Value",
    icon: Sparkles,
    accent: "#10b981",
  },
];

export function ProcessPathway() {
  const [activeStage, setActiveStage] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <div className="process-pathway-root">
      {/* Interactive Pathway Progress Bar */}
      <div className="pathway-track-container" aria-hidden="true">
        <svg className="pathway-track-svg" viewBox="0 0 1000 60" fill="none">
          {/* Base track */}
          <line
            x1="50"
            y1="30"
            x2="950"
            y2="30"
            stroke="var(--line)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Active progress flow line */}
          <line
            x1="50"
            y1="30"
            x2={50 + (activeStage / 3) * 900}
            y2="30"
            stroke="url(#processGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Traveling Signal Particle */}
          {!reducedMotion && (
            <circle
              cx={50 + (activeStage / 3) * 900}
              cy="30"
              r="6"
              fill="#8b5cf6"
              filter="drop-shadow(0 0 8px #8b5cf6)"
            />
          )}

          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="33%" stopColor="#6366f1" />
              <stop offset="66%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Milestone Pin Headers */}
        <div className="pathway-pins-row">
          {PROCESS_STAGES.map((stage, idx) => {
            const isPassed = idx <= activeStage;
            const isCurrent = idx === activeStage;
            const Icon = stage.icon;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`pathway-pin-btn ${isCurrent ? "is-current" : ""} ${isPassed ? "is-passed" : ""}`}
                aria-label={`Jump to stage ${stage.step}: ${stage.title}`}
              >
                <span
                  className="pin-marker"
                  style={{
                    borderColor: isCurrent ? stage.accent : isPassed ? stage.accent : undefined,
                    color: isCurrent ? "#ffffff" : isPassed ? stage.accent : undefined,
                    backgroundColor: isCurrent ? stage.accent : undefined,
                  }}
                >
                  <Icon size={16} />
                </span>
                <span className="pin-step-label">{stage.step}</span>
                <span className="pin-title-label">{stage.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pathway Stages Grid */}
      <div className="pathway-stages-deck">
        {PROCESS_STAGES.map((stage, index) => {
          const isSelected = activeStage === index;
          const Icon = stage.icon;

          return (
            <motion.div
              key={stage.step}
              className={`pathway-stage-block ${isSelected ? "is-selected" : ""}`}
              onClick={() => setActiveStage(index)}
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
            >
              <div className="stage-top-meta">
                <span className="stage-phase-tag" style={{ color: stage.accent }}>
                  {stage.phase}
                </span>
                <span className="stage-step-num">{stage.step}</span>
              </div>

              <div className="stage-title-row">
                <span
                  className="stage-icon-pill"
                  style={{
                    color: stage.accent,
                    backgroundColor: `${stage.accent}14`,
                    borderColor: `${stage.accent}28`,
                  }}
                >
                  <Icon size={18} />
                </span>
                <h3 className="stage-title">{stage.title}</h3>
              </div>

              {/* Exact approved description */}
              <p className="stage-approved-desc">{stage.description}</p>

              {/* Progressive Deliverables */}
              <div className="stage-deliverables">
                <span className="deliverables-heading">DELIVERABLES</span>
                <ul>
                  {stage.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={13} style={{ color: stage.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric Outcome Footer */}
              <div className="stage-outcome-footer">
                <span className="outcome-dot" style={{ backgroundColor: stage.accent }} />
                <span>{stage.metric}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
