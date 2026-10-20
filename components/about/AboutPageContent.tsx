"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Boxes,
  CheckCircle2,
  Compass,
  Layers,
  MapPin,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AboutHeroNetworkCanvas } from "./AboutHeroNetworkCanvas";
import { AboutSystemsBlueprint } from "./AboutSystemsBlueprint";

const ease = [0.22, 1, 0.36, 1] as const;

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
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Key metrics from portfolio (preserved verbatim)
const COMPANY_STATS = [
  { value: "22+", label: "Active projects", detail: "Delivered across web, mobile & workflow systems" },
  { value: "30+", label: "Clients supported", detail: "Businesses, NGOs & growing institutions" },
  { value: "12+", label: "Industries served", detail: "Civic, education, retail, non-profit & tech" },
  { value: "2+", label: "Years of operation", detail: "Rooted in Tamil Nadu, serving modern teams" },
];

// Vision Pillars (preserved verbatim)
const VISION_PILLARS = [
  {
    num: "01",
    tag: "INSIGHT & VISIBILITY",
    title: "Clarity from complexity",
    description:
      "Turn fragmented information and disconnected systems into clearer, more useful insights.",
    badge: "INSIGHT & VISIBILITY",
    accent: "#8b5cf6",
    icon: Compass,
    principleNote: "Unified Data Architecture",
  },
  {
    num: "02",
    tag: "SCALABLE ARCHITECTURE",
    title: "Future-ready ecosystems",
    description:
      "Build scalable digital foundations that can adapt as business needs evolve.",
    badge: "SCALABLE ARCHITECTURE",
    accent: "#6366f1",
    icon: Layers,
    principleNote: "Modular Foundations",
  },
  {
    num: "03",
    tag: "AI & WORKFLOWS",
    title: "Intelligent systems",
    description:
      "Use AI and automation to support smarter decisions and more efficient operations.",
    badge: "AI & WORKFLOWS",
    accent: "#3b82f6",
    icon: Bot,
    principleNote: "Human-in-the-Loop AI",
  },
];

// Why Aram Principles (preserved verbatim)
const WHY_ARAM = [
  {
    num: "01",
    subTag: "DELIVERY & LIFECYCLE",
    title: "End-to-end ownership",
    description:
      "From initial planning and development to deployment and ongoing support, we aim to provide a coordinated delivery experience.",
    icon: ShieldCheck,
    accent: "#8b5cf6",
  },
  {
    num: "02",
    subTag: "CROSS-DISCIPLINE",
    title: "Integrated expertise",
    description:
      "Our capabilities span AI, data, engineering, automation, and digital growth, helping solutions work together rather than in isolation.",
    icon: Workflow,
    accent: "#6366f1",
  },
  {
    num: "03",
    subTag: "OUTCOME-DRIVEN",
    title: "Business-first thinking",
    description:
      "We begin with the problem to solve and the outcome to achieve, then choose technology that fits.",
    icon: Zap,
    accent: "#10b981",
  },
  {
    num: "04",
    subTag: "EVOLVING SYSTEMS",
    title: "Built for growth",
    description:
      "We prioritize scalable foundations and maintainable systems that can evolve with changing requirements.",
    icon: Boxes,
    accent: "#f59e0b",
  },
];

// How We Work Process Steps (preserved verbatim)
const PROCESS_STEPS = [
  {
    step: "01",
    stageTag: "PHASE 01 · UNDERSTAND",
    title: "Discover",
    description: "Understand your business, requirements, existing systems, and goals.",
    detail: "Deep dive into real operational bottlenecks and user needs before writing a line of code.",
    checkpoint: "Requirements Blueprint",
  },
  {
    step: "02",
    stageTag: "PHASE 02 · ARCHITECTURE",
    title: "Design the architecture",
    description: "Plan a scalable, secure solution suited to your needs.",
    detail: "Choose fit-for-purpose stacks, mapping data contracts, integrations, and user flows.",
    checkpoint: "System Architecture Schematics",
  },
  {
    step: "03",
    stageTag: "PHASE 03 · ITERATION",
    title: "Build collaboratively",
    description: "Develop, test, and refine the solution with feedback.",
    detail: "Agile milestones with regular check-ins, transparent progress, and rapid iterations.",
    checkpoint: "Continuous Integration & Demos",
  },
  {
    step: "04",
    stageTag: "PHASE 04 · HANDOVER",
    title: "Deploy with confidence",
    description: "Prepare the solution for launch, testing, and handover.",
    detail: "End-to-end testing, security audits, production deployment, and team onboarding.",
    checkpoint: "Zero-Downtime Release",
  },
  {
    step: "05",
    stageTag: "PHASE 05 · LONGEVITY",
    title: "Support and improve",
    description: "Provide ongoing maintenance, optimization, and enhancements as agreed.",
    detail: "Proactive performance monitoring, system updates, and iterative improvements.",
    checkpoint: "Continuous Refinement",
  },
];

// 7 Approved Featured Projects (preserved verbatim)
// Symmetrically structured: Tier 1 (2 flagships) + Tier 2 (3 regional) + Tier 3 (2 commerce/enterprise)
const FLAGSHIP_PROJECTS = [
  {
    name: "Namma Puducherry",
    category: "Civic & Regional Portal",
    description: "Comprehensive regional digital gateway connecting citizens, tourism, and services.",
    tag: "WEB PLATFORM",
    badge: "REGIONAL GATEWAY",
  },
  {
    name: "Vaazhai",
    category: "Incubator & Community Platform",
    description: "Ecosystem platform empowering grassroots innovation and institutional initiatives.",
    tag: "ECOSYSTEM",
    badge: "INCUBATOR CORE",
  },
];

const COMMUNITY_PROJECTS = [
  {
    name: "Bairavi Foundation",
    category: "NGO & Social Impact",
    description: "Non-profit digital presence facilitating charitable outreach and community support.",
    tag: "IMPACT",
  },
  {
    name: "Voice of Tenkasi",
    category: "Media & Regional Network",
    description: "Digital media and community communication platform amplifying local stories.",
    tag: "COMMUNITY",
  },
  {
    name: "Kottravai",
    category: "Culture & Commerce",
    description: "Modern digital showcase celebrating heritage, cultural arts, and direct commerce.",
    tag: "COMMERCE",
  },
];

const COMMERCE_PROJECTS = [
  {
    name: "PrincessWardrobe",
    category: "Boutique E-Commerce",
    description: "End-to-end fashion and lifestyle retail experience built for high-touch customer journeys.",
    tag: "E-COMMERCE",
  },
  {
    name: "Tensemi",
    category: "Enterprise Technology Brand",
    description: "Corporate digital presence for semiconductor and advanced systems engineering.",
    tag: "ENTERPRISE",
  },
];

export function AboutPageContent() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="about-page">
      {/* SECTION 01 · ABOUT HERO: THE ARCHITECTURE OF INTELLIGENCE */}
      <section className="about-hero-section section-wrap" id="top">
        <div className="about-hero-ambient-glow" aria-hidden="true" />

        <div className="about-hero-editorial-grid">
          {/* Left Column: Editorial Manifesto & Call to Actions */}
          <div className="about-hero-copy-col">
            <Reveal>
              <div className="eyebrow about-eyebrow">
                <span className="eyebrow-line" /> THE ARCHITECTURE OF INTELLIGENCE · ABOUT US
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="about-hero-title">
                Technology that connects{" "}
                <span className="serif-accent italic-highlight">ideas, systems,</span> and outcomes.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="about-hero-desc">
                Aram Analytics brings together software engineering, AI, automation, data, and
                digital platforms to help businesses turn complex challenges into practical technology
                solutions.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="about-hero-actions">
                <a className="button button-primary" href="#approach">
                  Explore Our Approach <ArrowDown size={15} />
                </a>
                <Link className="button button-quiet" href="/#contact">
                  Let&apos;s Build Together <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="about-hero-tagline">
                <MapPin size={13} className="text-[#8b5cf6] shrink-0" />
                <span className="tagline-loc">Vaazhai Incubator Campus, Puliyangudi, Tamil Nadu</span>
                <span className="bullet-sep">•</span>
                <span className="tagline-reach">Serving Ambitious Organizations Worldwide</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Custom Animated Intelligence-Network Graphic */}
          <Reveal delay={0.2} className="about-hero-visual-col">
            <AboutHeroNetworkCanvas />
          </Reveal>
        </div>
      </section>

      {/* CONTINUOUS VISUAL CONDUIT */}
      <div className="about-section-conduit" aria-hidden="true">
        <span className="conduit-line" />
        <span className="conduit-beacon" />
      </div>

      {/* SECTION 02 · WHO WE ARE: CONNECTED DIGITAL SYSTEMS */}
      <section className="about-section section-wrap" id="who-we-are">
        <div className="about-grid-duo">
          <Reveal className="about-who-text">
            <div className="eyebrow">
              <span className="eyebrow-line" /> 01 / WHO WE ARE
            </div>
            <h2>
              A technology partner built around{" "}
              <span className="serif-accent">your business.</span>
            </h2>
            <p className="about-lead">
              Aram Analytics is a multidisciplinary technology partner based at Vaazhai Incubator
              Campus, Puliyangudi, Tamil Nadu. We build digital products and systems, including web
              platforms, mobile applications, AI-driven automation, and enterprise solutions for
              businesses, NGOs, and institutions.
            </p>
            <p className="about-body">
              Our focus is on connecting technology with real operational needs — helping
              organizations improve workflows, bring information together, and build digital
              capabilities that can grow with them.
            </p>

            <div className="about-values-strip">
              <div className="about-value-pill">
                <CheckCircle2 size={14} className="text-[#8b5cf6]" />
                <span>Operational Needs First</span>
              </div>
              <div className="about-value-pill">
                <CheckCircle2 size={14} className="text-[#8b5cf6]" />
                <span>Connected Information</span>
              </div>
              <div className="about-value-pill">
                <CheckCircle2 size={14} className="text-[#8b5cf6]" />
                <span>Scalable Growth</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="about-who-visual">
            <AboutSystemsBlueprint />
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 · OUR VISION: INTEGRATED EDITORIAL TRIPTYCH */}
      <section className="about-section section-wrap" id="vision">
        <Reveal className="about-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 02 / OUR VISION
          </div>
          <h2>
            Building the future of <span className="serif-accent">intelligent business.</span>
          </h2>
          <p>
            We believe technology works best when it makes business simpler, decisions clearer, and
            systems more connected.
          </p>
        </Reveal>

        <div className="about-vision-grid">
          {VISION_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal delay={i * 0.1} key={pillar.title} className="about-vision-card">
                <div className="vision-card-accent-bar" style={{ backgroundColor: pillar.accent }} />

                <div className="vision-card-top">
                  <div className="vision-num-pill">
                    <span className="pillar-num">{pillar.num}</span>
                    <span className="pillar-tag">{pillar.tag}</span>
                  </div>
                  <span
                    className="vision-icon-wrap"
                    style={{ color: pillar.accent, borderColor: `${pillar.accent}33` }}
                  >
                    <Icon size={20} />
                  </span>
                </div>

                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>

                <div className="vision-card-foot">
                  <span className="vision-foot-mark" style={{ color: pillar.accent }}>✳</span>
                  <span className="vision-foot-text">{pillar.principleNote}</span>
                  <span className="vision-foot-badge">CORE PILLAR</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 04 · WHY ARAM: BALANCED 2x2 ARCHITECTURAL GRID */}
      <section className="about-section section-wrap" id="approach">
        <Reveal className="about-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 03 / WHY ARAM ANALYTICS
          </div>
          <h2>
            One connected team. A <span className="serif-accent">business-first</span> approach.
          </h2>
          <p>
            We work as an integrated extension of your team, turning high-level goals into resilient
            working systems.
          </p>
        </Reveal>

        <div className="about-why-grid-2x2">
          {WHY_ARAM.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal delay={i * 0.08} key={item.num} className="about-why-card-item">
                <div className="why-card-top-bar">
                  <div className="why-num-cluster">
                    <span className="why-num-text" style={{ color: item.accent }}>
                      {item.num}
                    </span>
                    <span className="why-subtag-pill">{item.subTag}</span>
                  </div>
                  <span
                    className="why-icon-box"
                    style={{
                      color: item.accent,
                      backgroundColor: `${item.accent}14`,
                      borderColor: `${item.accent}2a`,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="why-card-bottom-line">
                  <span className="why-accent-line" style={{ backgroundColor: `${item.accent}55` }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 05 · HOW WE WORK: CONTINUOUS 5-STEP JOURNEY */}
      <section className="about-section section-wrap" id="process">
        <Reveal className="about-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 04 / HOW WE WORK
          </div>
          <h2>
            From the first conversation to{" "}
            <span className="serif-accent">continuous improvement.</span>
          </h2>
          <p>
            Our process is structured to keep requirements, development, and delivery aligned at
            every step.
          </p>
        </Reveal>

        {/* Continuous Milestone Flow */}
        <div className="about-process-journey">
          <div className="process-journey-track">
            {PROCESS_STEPS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`process-milestone-step ${isSelected ? "is-active" : ""}`}
                >
                  <div className="milestone-pip-row">
                    <span className="milestone-step-pip">{step.step}</span>
                    <span className="milestone-line-seg" />
                  </div>

                  <div className="milestone-card-body">
                    <span className="milestone-stage-tag">{step.stageTag}</span>
                    <h3 className="milestone-card-title">{step.title}</h3>
                    <p className="milestone-card-desc">{step.description}</p>
                    <div className="milestone-card-detail">
                      <small>{step.detail}</small>
                    </div>
                    <div className="milestone-checkpoint-badge">
                      <Check size={12} className="text-[#10b981] shrink-0" />
                      <span>{step.checkpoint}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 · OUR EXPERIENCE: EDITORIAL NUMERALS STRIP */}
      <section className="about-section section-wrap" id="experience">
        <Reveal className="about-heading-center">
          <div className="eyebrow">
            <span className="eyebrow-line" /> 05 / OUR EXPERIENCE
          </div>
          <h2>
            Experience across <span className="serif-accent">projects and industries.</span>
          </h2>
          <p>
            Practical delivery track record supporting modern teams, NGOs, and scaling digital
            products.
          </p>
        </Reveal>

        <div className="about-stats-editorial-strip">
          {COMPANY_STATS.map((stat, i) => (
            <div key={stat.label} className="about-stat-column">
              <div className="stat-numeral-wrap">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-index-tag">0{i + 1}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="about-stats-note">
          <span className="note-star">✳</span>
          <small>
            Derived from our active portfolio of client deliverables and multi-industry
            collaborations.
          </small>
        </div>
      </section>

      {/* SECTION 07 · SELECTED WORK: BALANCED 3-TIER ARCHITECTURAL SHOWCASE */}
      <section className="about-section section-wrap" id="portfolio">
        <Reveal className="about-work-header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> 06 / SELECTED WORK
            </div>
            <h2>
              Ideas turned into <span className="serif-accent">digital experiences.</span>
            </h2>
          </div>
          <div className="about-work-cta-wrap">
            <p>
              From websites and e-commerce platforms to portals and specialized digital products,
              our portfolio includes work across different sectors.
            </p>
            <Link className="button button-quiet" href="/our-work">
              View Our Work <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        {/* Tier 1: 2 Flagship Platforms */}
        <div className="projects-tier-flagships">
          {FLAGSHIP_PROJECTS.map((proj, i) => (
            <Reveal delay={i * 0.08} key={proj.name} className="project-card-flagship">
              <div className="project-card-top">
                <span className="project-tag-pill">{proj.tag}</span>
                <span className="project-tier-badge">{proj.badge}</span>
              </div>
              <h3 className="project-card-title">{proj.name}</h3>
              <p className="project-category-text">{proj.category}</p>
              <p className="project-description-text">{proj.description}</p>
              <div className="project-card-foot">
                <Link href="/our-work" className="project-explore-link">
                  <span>Explore in Portfolio</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tier 2: 3 Community & Impact Platforms */}
        <div className="projects-tier-community">
          {COMMUNITY_PROJECTS.map((proj, i) => (
            <Reveal delay={0.16 + i * 0.06} key={proj.name} className="project-card-standard">
              <div className="project-card-top">
                <span className="project-tag-pill">{proj.tag}</span>
                <span className="project-index-num">0{i + 3}</span>
              </div>
              <h3 className="project-card-title">{proj.name}</h3>
              <p className="project-category-text">{proj.category}</p>
              <p className="project-description-text">{proj.description}</p>
              <div className="project-card-foot">
                <Link href="/our-work" className="project-explore-link">
                  <span>Explore in Portfolio</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tier 3: 2 Commerce & Enterprise Systems */}
        <div className="projects-tier-commerce">
          {COMMERCE_PROJECTS.map((proj, i) => (
            <Reveal delay={0.34 + i * 0.06} key={proj.name} className="project-card-standard">
              <div className="project-card-top">
                <span className="project-tag-pill">{proj.tag}</span>
                <span className="project-index-num">0{i + 6}</span>
              </div>
              <h3 className="project-card-title">{proj.name}</h3>
              <p className="project-category-text">{proj.category}</p>
              <p className="project-description-text">{proj.description}</p>
              <div className="project-card-foot">
                <Link href="/our-work" className="project-explore-link">
                  <span>Explore in Portfolio</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="about-work-foot">
          <p>
            Explore selected projects to see how our capabilities translate into real digital
            products.
          </p>
          <Link className="text-link" href="/our-work">
            Browse all concept previews &amp; portfolio work <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </section>

      {/* SECTION 08 · FINAL CTA: REFINED CONCLUSION */}
      <section className="about-section about-cta-section section-wrap" id="contact">
        <div className="about-cta-panel">
          <div className="about-cta-glow" aria-hidden="true" />

          <Reveal className="about-cta-content">
            <div className="eyebrow about-cta-eyebrow">
              <Sparkles size={13} className="text-[#b5a4ff]" />
              <span>LET&apos;S BUILD TOGETHER</span>
            </div>

            <h2>
              Let&apos;s build something <span className="serif-accent italic-highlight">meaningful.</span>
            </h2>

            <p>
              Whether you are launching a new digital product, connecting existing systems, or
              exploring AI and automation, Aram Analytics can work with you to define the next step.
              Let&apos;s discuss your project.
            </p>

            <div className="about-cta-actions">
              <Link className="button button-primary" href="/#contact">
                Start a Project <ArrowUpRight size={15} />
              </Link>
              <a
                className="button button-quiet"
                href="mailto:contact@aramanalytics.com?subject=Project%20Enquiry%20from%20Website"
              >
                Contact Us <MoveRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
