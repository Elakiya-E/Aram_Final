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
  Code2,
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
    isAnchor: true,
  },
  {
    num: "02",
    subTag: "CROSS-DISCIPLINE",
    title: "Integrated expertise",
    description:
      "Our capabilities span AI, data, engineering, automation, and digital growth, helping solutions work together rather than in isolation.",
    icon: Workflow,
    accent: "#6366f1",
    isAnchor: true,
  },
  {
    num: "03",
    subTag: "OUTCOME-DRIVEN",
    title: "Business-first thinking",
    description:
      "We begin with the problem to solve and the outcome to achieve, then choose technology that fits.",
    icon: Zap,
    accent: "#10b981",
    isAnchor: false,
  },
  {
    num: "04",
    subTag: "EVOLVING SYSTEMS",
    title: "Built for growth",
    description:
      "We prioritize scalable foundations and maintainable systems that can evolve with changing requirements.",
    icon: Boxes,
    accent: "#f59e0b",
    isAnchor: false,
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
    checkpoint: "Requirements Blueprint & Opportunity Map",
  },
  {
    step: "02",
    stageTag: "PHASE 02 · ARCHITECTURE",
    title: "Design the architecture",
    description: "Plan a scalable, secure solution suited to your needs.",
    detail: "Choose fit-for-purpose stacks, mapping data contracts, integrations, and user flows.",
    checkpoint: "System Architecture & Interface Schematics",
  },
  {
    step: "03",
    stageTag: "PHASE 03 · ITERATION",
    title: "Build collaboratively",
    description: "Develop, test, and refine the solution with feedback.",
    detail: "Agile milestones with regular check-ins, transparent progress, and rapid iterations.",
    checkpoint: "Continuous Integration & Team Demos",
  },
  {
    step: "04",
    stageTag: "PHASE 04 · HANDOVER",
    title: "Deploy with confidence",
    description: "Prepare the solution for launch, testing, and handover.",
    detail: "End-to-end testing, security audits, production deployment, and team onboarding.",
    checkpoint: "Zero-Downtime Release & Operational Training",
  },
  {
    step: "05",
    stageTag: "PHASE 05 · LONGEVITY",
    title: "Support and improve",
    description: "Provide ongoing maintenance, optimization, and enhancements as agreed.",
    detail: "Proactive performance monitoring, system updates, and iterative improvements.",
    checkpoint: "Service Health Metrics & Continuous Refinement",
  },
];

// Featured Projects (preserved verbatim)
const FEATURED_PROJECTS = [
  {
    name: "Namma Puducherry",
    category: "Civic & Regional Portal",
    description: "Comprehensive regional digital gateway connecting citizens, tourism, and services.",
    tag: "WEB PLATFORM",
    isFeatured: true,
  },
  {
    name: "Vaazhai",
    category: "Incubator & Community Platform",
    description: "Ecosystem platform empowering grassroots innovation and institutional initiatives.",
    tag: "ECOSYSTEM",
    isFeatured: true,
  },
  {
    name: "Bairavi Foundation",
    category: "NGO & Social Impact",
    description: "Non-profit digital presence facilitating charitable outreach and community support.",
    tag: "IMPACT",
    isFeatured: false,
  },
  {
    name: "Voice of Tenkasi",
    category: "Media & Regional Network",
    description: "Digital media and community communication platform amplifying local stories.",
    tag: "COMMUNITY",
    isFeatured: false,
  },
  {
    name: "Kottravai",
    category: "Culture & Commerce",
    description: "Modern digital showcase celebrating heritage, cultural arts, and direct commerce.",
    tag: "COMMERCE",
    isFeatured: false,
  },
  {
    name: "PrincessWardrobe",
    category: "Boutique E-Commerce",
    description: "End-to-end fashion and lifestyle retail experience built for high-touch customer journeys.",
    tag: "E-COMMERCE",
    isFeatured: false,
  },
  {
    name: "Tensemi",
    category: "Enterprise Technology Brand",
    description: "Corporate digital presence for semiconductor and advanced systems engineering.",
    tag: "ENTERPRISE",
    isFeatured: false,
  },
];

export function AboutPageContent() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PROCESS_STEPS[activeStep];

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

      {/* CONTINUOUS VISUAL CONDUIT BETWEEN SECTIONS */}
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

      {/* SECTION 03 · OUR VISION: EDITORIAL TRIPTYCH WITH CONNECTED AXIS */}
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

        {/* Continuous Technical Rail Connecting Pillars */}
        <div className="about-vision-rail" aria-hidden="true">
          <div className="rail-line" />
          <div className="rail-nodes">
            <span className="rail-node active">01</span>
            <span className="rail-node">02</span>
            <span className="rail-node">03</span>
          </div>
        </div>

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

      {/* SECTION 04 · WHY ARAM: ASYMMETRIC DIFFERENTIATED PRINCIPLES */}
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

        <div className="about-why-asymmetric-grid">
          {WHY_ARAM.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                delay={i * 0.08}
                key={item.num}
                className={`about-why-card ${item.isAnchor ? "why-anchor-card" : "why-complement-card"}`}
              >
                <div className="why-card-head">
                  <div className="why-num-stack">
                    <span className="why-card-num" style={{ color: item.accent }}>
                      {item.num}
                    </span>
                    <span className="why-card-subtag">{item.subTag}</span>
                  </div>
                  <span
                    className="why-card-icon"
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

                <div className="why-card-foot">
                  <span className="why-foot-line" style={{ backgroundColor: `${item.accent}40` }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 05 · HOW WE WORK: CONTINUOUS VISUAL JOURNEY */}
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

        {/* Continuous Process Milestone Stepper */}
        <div className="about-journey-container">
          {/* Milestone Track Ribbon */}
          <div className="journey-track-ribbon" role="tablist" aria-label="Process Steps">
            {PROCESS_STEPS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.step}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveStep(index)}
                  className={`journey-milestone-btn ${isSelected ? "is-selected" : ""}`}
                >
                  <span className="milestone-pip">{step.step}</span>
                  <div className="milestone-label-wrap">
                    <span className="milestone-name">{step.title}</span>
                    <small className="milestone-sub">{step.stageTag}</small>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Spotlight Card */}
          <div className="journey-spotlight-card">
            <div className="spotlight-stage-badge">
              <span className="stage-live-dot" />
              <span>{currentStep.stageTag}</span>
            </div>

            <div className="spotlight-main-grid">
              <div className="spotlight-left">
                <span className="spotlight-num-hero">{currentStep.step}</span>
                <h3 className="spotlight-title">{currentStep.title}</h3>
                <p className="spotlight-summary">{currentStep.description}</p>
              </div>

              <div className="spotlight-right">
                <div className="spotlight-detail-box">
                  <span className="detail-box-kicker">TECHNICAL EXECUTION</span>
                  <p>{currentStep.detail}</p>
                </div>

                <div className="spotlight-checkpoint">
                  <Check size={14} className="text-[#10b981]" />
                  <span>
                    Validation checkpoint: <strong>{currentStep.checkpoint}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 · OUR EXPERIENCE: REFINED EDITORIAL NUMERALS */}
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
            <Reveal delay={i * 0.08} key={stat.label} className="about-stat-column">
              <div className="stat-numeral-wrap">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-index-tag">0{i + 1}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </Reveal>
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

      {/* SECTION 07 · SELECTED WORK: POLISHED PORTFOLIO SHOWCASE */}
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
            <Link className="button button-quiet" href="/#work">
              View Our Work <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        {/* Curated Architectural Showcase Grid */}
        <div className="about-projects-architectural-grid">
          {FEATURED_PROJECTS.map((proj, i) => (
            <Reveal
              delay={i * 0.06}
              key={proj.name}
              className={`about-project-card ${proj.isFeatured ? "is-featured-project" : ""}`}
            >
              <div className="project-card-top">
                <span className="project-tag">{proj.tag}</span>
                <span className="project-index">0{i + 1}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{proj.name}</h3>
                <p className="project-category">{proj.category}</p>
                <p className="project-desc">{proj.description}</p>
              </div>

              <div className="project-card-foot">
                <Link href="/#work" className="project-explore-link">
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
          <Link className="text-link" href="/#work">
            Browse all concept previews &amp; portfolio work <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </section>

      {/* SECTION 08 · FINAL CTA: REFINED CONCLUSION */}
      <section className="about-section about-cta-section section-wrap" id="contact">
        <div className="about-cta-panel">
          <div className="about-cta-glow" aria-hidden="true" />
          <div className="about-cta-corner-hud top-left" aria-hidden="true">ARAM // ARCHITECTURE OF INTELLIGENCE</div>
          <div className="about-cta-corner-hud top-right" aria-hidden="true">SYS.STATUS // READY</div>

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
