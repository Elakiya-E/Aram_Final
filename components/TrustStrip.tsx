"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Zap, Layers, Code2, BarChart3, Sparkles } from "lucide-react";

export function TrustStrip() {
  const reducedMotion = useReducedMotion();

  const techDomains = [
    { label: "AI SYSTEMS", icon: Bot, color: "#7c6aee" },
    { label: "AUTOMATION", icon: Zap, color: "#059669" },
    { label: "ZOHO", icon: Layers, color: "#dc2626" },
    { label: "SOFTWARE", icon: Code2, color: "#d97706" },
    { label: "DATA", icon: BarChart3, color: "#2563eb" },
  ];

  return (
    <div className="trust-strip-wrapper section-wrap">
      <motion.div
        className="trust-strip-bar"
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="trust-strip-core-statement">
          <Sparkles size={14} className="text-[#7c6aee] shrink-0" />
          <span>One technology partner. Connected systems. Measurable progress.</span>
        </div>

        <div className="trust-strip-divider" aria-hidden="true" />

        <div className="trust-strip-domains">
          {techDomains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <span key={domain.label} className="trust-domain-chip">
                {i > 0 && <span className="domain-sep">•</span>}
                <Icon size={12} style={{ color: domain.color }} />
                <span>{domain.label}</span>
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
