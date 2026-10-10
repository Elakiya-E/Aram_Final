"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Eye, Brain } from "lucide-react";

type Outcome = {
  num: string;
  title: string;
  action: string;
  description: string;
  before: string;
  after: string;
  icon: typeof Clock;
  accent: string;
};

const OUTCOMES: Outcome[] = [
  {
    num: "01",
    title: "Less manual work.",
    action: "LESS MANUAL WORK",
    description: "Automate repetitive processes and reduce unnecessary handoffs.",
    before: "Teams copying data between CRM, email, spreadsheets and billing platforms by hand.",
    after: "Instant webhook and event-driven automation routing information cleanly to the right person.",
    icon: Clock,
    accent: "#7c6aee",
  },
  {
    num: "02",
    title: "Better visibility.",
    action: "BETTER VISIBILITY",
    description: "Bring scattered information into systems teams can actually understand.",
    before: "Siloed customer history, blind spots in active orders, and weekly status panic.",
    after: "Single operational source of truth with real-time pipeline status and executive clarity.",
    icon: Eye,
    accent: "#2563eb",
  },
  {
    num: "03",
    title: "Faster execution.",
    action: "FASTER EXECUTION",
    description: "Connect tools and workflows so work moves with fewer delays.",
    before: "Approvals stuck in chat threads, missed customer inquiries, and sluggish handoffs.",
    after: "Automated trigger routing and smart alerts ensuring work moves forward without stalling.",
    icon: ShieldCheck,
    accent: "#059669",
  },
  {
    num: "04",
    title: "Smarter decisions.",
    action: "SMARTER DECISIONS",
    description: "Use AI and data to turn information into useful business action.",
    before: "Decisions made on gut feelings or stale reports generated two weeks too late.",
    after: "AI summaries and automated dashboards surfacing high-leverage business patterns instantly.",
    icon: Brain,
    accent: "#d97706",
  },
];

export function OutcomesSection({ id = "outcomes" }: { id?: string }) {
  const reducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="editorial-outcomes-section section-wrap" id={id}>
      <div className="section-editorial-header">
        <motion.div
          className="section-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-accent-dot" />
          <span>MEASURABLE BUSINESS IMPACT</span>
        </motion.div>

        <motion.h2
          className="section-editorial-title"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Technology should <span className="serif-accent">change the work.</span>
        </motion.h2>

        <motion.p
          className="section-editorial-sub"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          We judge technology by whether it removes daily friction, gives people their time back, and makes everyday operations calmer.
        </motion.p>
      </div>

      {/* LARGE EDITORIAL STATEMENTS (NOT GENERIC CARDS) */}
      <div className="editorial-statements-layout">
        {/* Left Side: Statement Navigation List */}
        <div className="statements-list-column">
          {OUTCOMES.map((item, i) => {
            const isSelected = activeIdx === i;
            return (
              <div
                key={item.num}
                className={`editorial-statement-row ${isSelected ? "is-selected" : ""}`}
                onClick={() => setActiveIdx(i)}
                onMouseEnter={() => setActiveIdx(i)}
                role="button"
                tabIndex={0}
              >
                <div className="statement-row-left">
                  <span className="statement-index-tag">{item.num}</span>
                  <div className="statement-titles">
                    <span className="statement-action-label">{item.action}</span>
                    <h3 className="statement-headline">{item.title}</h3>
                  </div>
                </div>
                <div className="statement-row-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Deep Qualitative Operational Reveal */}
        <div className="statements-detail-column">
          <motion.div
            key={activeIdx}
            className="editorial-detail-card"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="detail-card-top">
              <span className="detail-kicker">QUALITATIVE TRANSFORMATION</span>
              <span className="detail-badge" style={{ color: OUTCOMES[activeIdx].accent }}>
                {OUTCOMES[activeIdx].action}
              </span>
            </div>

            <div className="detail-main-text">
              <p className="detail-lead">{OUTCOMES[activeIdx].description}</p>
            </div>

            <div className="detail-comparison-grid">
              <div className="comparison-box before-box">
                <span className="comp-label">BEFORE ARAM</span>
                <p className="comp-text">{OUTCOMES[activeIdx].before}</p>
              </div>

              <div className="comparison-box after-box">
                <span className="comp-label">
                  <CheckCircle2 size={12} className="text-emerald-500" /> WITH CONNECTED SYSTEMS
                </span>
                <p className="comp-text">{OUTCOMES[activeIdx].after}</p>
              </div>
            </div>

            <div className="detail-card-footer">
              <span className="footer-tag">Real operational progress — without inflated statistics.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
