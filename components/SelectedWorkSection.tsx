"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

type CaseStudy = {
  id: string;
  client: string;
  category: string;
  built: string;
  problem: string;
  technology: string[];
  outcome: string;
  accent: string;
};

const PROJECTS: CaseStudy[] = [
  {
    id: "deepeyescan",
    client: "DeepEyeScan",
    category: "AI & COMPUTER VISION",
    built: "AI-powered eye screening platform",
    problem:
      "Clinical eye screening workflows were constrained by manual image triage, causing delays for patients and heavy administrative burdens for optometry teams.",
    technology: ["React", "AI", "Computer Vision", "TensorFlow"],
    outcome:
      "Faster digital screening and accessible eye-assessment workflows that help specialists prioritize critical cases without operational bottlenecks.",
    accent: "#7c6aee",
  },
  {
    id: "zoho-unified",
    client: "Commercial Operations",
    category: "ZOHO SUITE & WORKFLOW INTEGRATION",
    built: "End-to-end Zoho CRM, Books & ERP Automation Engine",
    problem:
      "Customer enquiries, inventory tracking, and invoice reconciliation lived in separate applications with repetitive manual handoffs between sales and fulfillment.",
    technology: ["Zoho One", "Zoho CRM", "Zoho Creator", "Webhooks", "Automation"],
    outcome:
      "Eliminated manual copy-pasting, created unified customer histories, and established automated end-to-end order processing.",
    accent: "#059669",
  },
  {
    id: "data-hub",
    client: "Business Systems Hub",
    category: "CUSTOM SOFTWARE & ANALYTICS",
    built: "Custom Operations Portal & Real-Time Analytics Dashboard",
    problem:
      "Core operational performance indicators were trapped in disconnected spreadsheets, making weekly planning reactive and error-prone.",
    technology: ["Next.js", "Node.js", "PostgreSQL", "Custom Dashboards"],
    outcome:
      "Centralized operational truth with automated alerts, clear departmental visibility, and faster executive decision-making.",
    accent: "#2563eb",
  },
];

export function SelectedWorkSection({ id = "work" }: { id?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="case-study-section section-wrap" id={id}>
      <div className="section-editorial-header">
        <motion.div
          className="section-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-accent-dot" />
          <span>PROVEN DELIVERIES</span>
        </motion.div>

        <motion.h2
          className="section-editorial-title"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Work that speaks <span className="serif-accent">for itself.</span>
        </motion.h2>

        <motion.p
          className="section-editorial-sub"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Selected systems engineered around real operational problems and measured by practical business impact.
        </motion.p>
      </div>

      {/* MINI CASE STUDIES LIST */}
      <div className="case-studies-list">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            className="case-study-card"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Case Study Header */}
            <div className="case-card-header">
              <div className="case-client-badge">
                <span className="client-name">{project.client}</span>
                <span className="case-sep">•</span>
                <span className="client-cat">{project.category}</span>
              </div>
              <a
                href="#contact"
                className="case-discuss-btn"
                aria-label={`Discuss a project like ${project.client}`}
              >
                <span>Discuss similar solution</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Case Study Content Grid */}
            <div className="case-card-grid">
              {/* Built Headline */}
              <div className="case-column-built">
                <span className="column-label">WHAT WAS BUILT</span>
                <h3 className="built-title">{project.built}</h3>
                <div className="tech-tags-list">
                  {project.technology.map((tech) => (
                    <span key={tech} className="tech-badge-item">
                      <Cpu size={10} className="text-[#7c6aee]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Column */}
              <div className="case-column-problem">
                <span className="column-label">
                  <ShieldAlert size={12} className="text-amber-500 inline mr-1" />
                  BUSINESS PROBLEM
                </span>
                <p className="problem-text">{project.problem}</p>
              </div>

              {/* Outcome Column */}
              <div className="case-column-outcome" style={{ borderLeftColor: project.accent }}>
                <span className="column-label">
                  <CheckCircle2 size={12} className="text-emerald-500 inline mr-1" />
                  BUSINESS OUTCOME
                </span>
                <p className="outcome-text">{project.outcome}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
