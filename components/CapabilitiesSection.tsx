"use client";

import { ArrowUpRight, Blocks, Bot, BarChart3, Workflow, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap = {
  zoho: Blocks,
  automation: Workflow,
  ai: Bot,
  data: BarChart3,
  software: Code2,
} as const;

type AccentKey = "zoho" | "automation" | "ai" | "data" | "software";

const categoryAccents: Record<AccentKey, { label: string; className: string }> = {
  zoho: {
    label: "PLATFORM",
    className: "accent-zoho",
  },
  automation: {
    label: "WORKFLOW",
    className: "accent-automation",
  },
  ai: {
    label: "INTELLIGENCE",
    className: "accent-ai",
  },
  data: {
    label: "INSIGHTS",
    className: "accent-data",
  },
  software: {
    label: "ENGINEERING",
    className: "accent-software",
  },
};

const capabilities = [
  {
    key: "zoho" as AccentKey,
    number: "01",
    title: "Zoho Solutions",
    description:
      "Connected business tools and workflows designed around how your teams work.",
    icon: "zoho" as const,
  },
  {
    key: "automation" as AccentKey,
    number: "02",
    title: "Automation",
    description:
      "Give repetitive work to well-designed flows, and give your people their time back.",
    icon: "automation" as const,
  },
  {
    key: "ai" as AccentKey,
    number: "03",
    title: "Practical AI",
    description:
      "Useful intelligence woven into everyday work, with people firmly in the loop.",
    icon: "ai" as const,
  },
  {
    key: "data" as AccentKey,
    number: "04",
    title: "Data & Analytics",
    description:
      "Bring your numbers together and surface what actually deserves your attention.",
    icon: "data" as const,
  },
  {
    key: "software" as AccentKey,
    number: "05",
    title: "Software, thoughtfully built",
    description:
      "When off-the-shelf falls short, we build the right thing around your real process.",
    icon: "software" as const,
  },
];

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function CapCard({
  index,
  capability,
  layoutClass,
}: {
  index: number;
  capability: (typeof capabilities)[number];
  layoutClass: string;
}) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[capability.icon];
  const accent = categoryAccents[capability.key];

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className={`cap-card-v2 ${accent.className} ${layoutClass} group/card`}
    >
      <div aria-hidden="true" className="cap-card-v2-decoration">
        <div className="cap-card-v2-glow" />
        <div className="cap-card-v2-grid" />
      </div>

      <div className="cap-card-v2-inner">
        <div className="cap-card-v2-header">
          <span className="cap-card-v2-number">{capability.number}</span>
          <ArrowUpRight
            className="cap-card-v2-arrow"
            size={16}
            strokeWidth={1.8}
          />
        </div>

        <div className="cap-card-v2-icon-wrap">
          <div className="cap-card-v2-icon">
            <Icon size={20} strokeWidth={1.7} />
          </div>
        </div>

        <div className="cap-card-v2-body">
          <h3 className="cap-card-v2-title">{capability.title}</h3>
          <p className="cap-card-v2-desc">{capability.description}</p>
        </div>

        <div className="cap-card-v2-footer">
          <span className="cap-card-v2-label">{accent.label}</span>
          <a
            href="#contact"
            aria-label={`Explore ${capability.title}`}
            className="cap-card-v2-cta"
          >
            <span>Explore</span>
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>

      <a
        href="#contact"
        aria-label={`Discuss ${capability.title}`}
        className="cap-card-v2-hit"
      />
    </motion.article>
  );
}

type Props = {
  id?: string;
};

export function CapabilitiesSection({ id }: Props) {
  return (
    <section id={id} className="cap-section-v2 section-wrap">
      <div className="cap-heading-v2">
        <Reveal>
          <div className="eyebrow">
            <span className="eyebrow-line" /> WHAT WE BUILD
          </div>
        </Reveal>
        <div className="cap-heading-v2-grid">
          <Reveal delay={0.07}>
            <h2 className="cap-heading-v2-title">
              Practical technology
              <br />
              for real
              <span className="serif-accent"> business problems.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="cap-heading-v2-desc">
              From your first app to a fully connected operation — we make
              technology feel a little more human, and a lot more useful.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="cap-grid-v2">
        <CapCard
          index={0}
          capability={capabilities[0]}
          layoutClass="cap-card-wide cap-position-a"
        />
        <CapCard
          index={1}
          capability={capabilities[1]}
          layoutClass="cap-card-wide cap-position-b"
        />
        <CapCard
          index={2}
          capability={capabilities[2]}
          layoutClass="cap-card-compact cap-position-c"
        />
        <CapCard
          index={3}
          capability={capabilities[3]}
          layoutClass="cap-card-compact cap-position-d"
        />
        <CapCard
          index={4}
          capability={capabilities[4]}
          layoutClass="cap-card-compact cap-position-e"
        />
      </div>
    </section>
  );
}
