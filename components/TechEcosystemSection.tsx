"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Terminal, Database, Code, Sparkles, Layers } from "lucide-react";

type PartnerLogo = {
  name: string;
  role: string;
  src: string;
};

type TechBadge = {
  name: string;
  category: string;
  icon: typeof Cpu;
  accent: string;
};

const PARTNERS: PartnerLogo[] = [
  { name: "Zoho", role: "Authorized Solution Partner", src: "/partners/zoho-removebg-preview.png" },
  { name: "Microsoft", role: "Cloud & Enterprise Stack", src: "/partners/Microsoft-removebg-preview.png" },
  { name: "AWS", role: "Cloud Infrastructure", src: "/partners/aws-removebg-preview.png" },
  { name: "Google", role: "Workspace & AI Tools", src: "/partners/google-removebg-preview.png" },
  { name: "Tensemi", role: "Technology Partner", src: "/partners/tensemi.png" },
];

const TECH_STACK: TechBadge[] = [
  { name: "AI & LLM Systems", category: "Intelligence", icon: Sparkles, accent: "#7c6aee" },
  { name: "React / Next.js", category: "Frontend Web", icon: Code, accent: "#0284c7" },
  { name: "Node.js", category: "Backend APIs", icon: Terminal, accent: "#16a34a" },
  { name: "Python", category: "AI & Data Scripts", icon: Terminal, accent: "#eab308" },
  { name: "PostgreSQL", category: "Relational DB", icon: Database, accent: "#2563eb" },
  { name: "MongoDB", category: "Document Store", icon: Database, accent: "#059669" },
  { name: "Event Automation", category: "Workflows", icon: Layers, accent: "#dc2626" },
];

export function TechEcosystemSection({ id = "ecosystem" }: { id?: string }) {
  const reducedMotion = useReducedMotion();

  // Double arrays for continuous infinite horizontal scroll
  const loopedPartners = [...PARTNERS, ...PARTNERS];
  const loopedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="tech-ecosystem-section section-wrap" id={id}>
      <div className="section-editorial-header">
        <motion.div
          className="section-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-accent-dot" />
          <span>CONNECTED PLATFORMS</span>
        </motion.div>

        <motion.h2
          className="section-editorial-title"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Technology we <span className="serif-accent">work with.</span>
        </motion.h2>

        <motion.p
          className="section-editorial-sub"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Built to connect with the tools your business already uses.
        </motion.p>
      </div>

      {/* CONTINUOUS MOVING ECOSYSTEM (NOT A BORING GRID) */}
      <div className="ecosystem-streams-container">
        {/* Stream 1: Key Cloud & Suite Partners */}
        <div className="ecosystem-lane-track lane-partners">
          <div className="lane-header">
            <span className="lane-indicator-dot" />
            <span className="lane-title">Enterprise Ecosystem &amp; Cloud Partners</span>
          </div>

          <div className="ecosystem-marquee marquee-left">
            <div className="marquee-rail">
              {loopedPartners.map((p, idx) => (
                <div key={`partner-${p.name}-${idx}`} className="partner-stream-card">
                  <div className="partner-logo-box">
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={160}
                      height={48}
                      className="partner-img"
                    />
                  </div>
                  <div className="partner-role-info">
                    <span className="partner-name">{p.name}</span>
                    <span className="partner-tagline">{p.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stream 2: Engineering & Automation Stack */}
        <div className="ecosystem-lane-track lane-technologies">
          <div className="lane-header">
            <span className="lane-indicator-dot tech-dot" />
            <span className="lane-title">Modern Software &amp; Intelligence Stack</span>
          </div>

          <div className="ecosystem-marquee marquee-right">
            <div className="marquee-rail">
              {loopedTech.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={`tech-${t.name}-${idx}`} className="tech-stream-badge">
                    <span className="tech-badge-icon" style={{ color: t.accent }}>
                      <Icon size={14} />
                    </span>
                    <div className="tech-badge-text">
                      <span className="tech-badge-name">{t.name}</span>
                      <span className="tech-badge-cat">{t.category}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
