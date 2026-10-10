"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Shield, Compass, Sparkles, RefreshCw } from "lucide-react";

type Principle = {
  num: string;
  title: string;
  statement: string;
  detail: string;
  icon: typeof Compass;
  tag: string;
};

const PRINCIPLES: Principle[] = [
  {
    num: "01",
    title: "BUSINESS FIRST",
    statement: "We start with the problem, not the technology.",
    detail:
      "Too many technology projects begin with a tool looking for a problem. We start by unpacking your team's actual friction points, daily work handoffs, and operational bottlenecks before writing a line of code or configuring an application.",
    icon: Compass,
    tag: "Problem-Driven Discovery",
  },
  {
    num: "02",
    title: "CONNECTED BY DESIGN",
    statement: "AI, automation, software and data work together instead of becoming isolated tools.",
    detail:
      "A great tool that doesn't speak to your CRM, database, or everyday team chat becomes another operational island. We architect technology so every layer feeds and reinforces the next.",
    icon: Sparkles,
    tag: "Unified Architecture",
  },
  {
    num: "03",
    title: "BUILT FOR REAL USE",
    statement: "We design solutions around actual users, workflows and operational needs.",
    detail:
      "Software only succeeds if your team enjoys using it every single day. We prioritize intuitive interactions, clear notifications, and sensible defaults so adoption happens naturally.",
    icon: Shield,
    tag: "Human-Centered Design",
  },
  {
    num: "04",
    title: "EVOLVES WITH YOU",
    statement: "The systems we build can be improved, integrated and extended as your business changes.",
    detail:
      "Your company isn't static. Neither should your technology be. Everything we build is modular, clean, and extensible so you never get trapped in brittle proprietary dead-ends.",
    icon: RefreshCw,
    tag: "Long-Term Scalability",
  },
];

export function WhyAramSection({ id = "about" }: { id?: string }) {
  const reducedMotion = useReducedMotion();
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section className="why-aram-section section-wrap" id={id}>
      <div className="why-aram-layout">
        {/* LEFT COLUMN: Sticky Editorial Narrative */}
        <div className="why-aram-left-sticky">
          <motion.div
            className="section-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-accent-dot" />
            <span>HOW WE ARE DIFFERENT</span>
          </motion.div>

          <h2 className="why-aram-headline">
            Not just another <br />
            <span className="serif-accent">technology vendor.</span>
          </h2>

          <p className="why-aram-subtext">
            We don’t sell off-the-shelf hype or leave you with disconnected tools. We act as an integrated engineering and systems partner focused on durable operational clarity.
          </p>

          <div className="why-aram-summary-card">
            <div className="summary-card-header">
              <span className="summary-pill">OUR COMMITMENT</span>
            </div>
            <p className="summary-text">
              “Every system we deliver must pay for itself in saved hours, fewer mistakes, and calmer business days.”
            </p>
            <div className="summary-meta">
              <span className="meta-mark">A</span>
              <div>
                <b>Aram Analytics</b>
                <small>Connected Technology Team</small>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Interactive Reveal with Large Editorial Numbers */}
        <div className="why-aram-right-vertical">
          <div className="principles-vertical-list">
            {PRINCIPLES.map((item, idx) => {
              const Icon = item.icon;
              const isOpen = activePrinciple === idx;

              return (
                <motion.div
                  key={item.num}
                  className={`principle-editorial-item ${isOpen ? "is-expanded" : ""}`}
                  onClick={() => setActivePrinciple(idx)}
                  whileHover={reducedMotion ? {} : { x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="principle-item-header">
                    <span className="principle-giant-num">{item.num}</span>
                    <div className="principle-header-titles">
                      <span className="principle-kicker-tag">{item.tag}</span>
                      <h3 className="principle-item-title">{item.title}</h3>
                    </div>
                  </div>

                  <div className="principle-statement-banner">
                    <p className="principle-statement-text">{item.statement}</p>
                  </div>

                  {isOpen && (
                    <motion.div
                      className="principle-expanded-content"
                      initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="principle-detail-paragraph">{item.detail}</p>
                      <div className="principle-check-row">
                        <Check size={14} className="text-[#7c6aee]" />
                        <span>Built into every engagement from day one.</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
