"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Boxes,
  Building2,
  CheckCircle2,
  Compass,
  Cpu,
  Layers,
  MapPin,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Key metrics from portfolio (centralized and easy to update)
const COMPANY_STATS = [
  { value: "22+", label: "Active projects", detail: "Delivered across web, mobile & workflow systems" },
  { value: "30+", label: "Clients supported", detail: "Businesses, NGOs & growing institutions" },
  { value: "12+", label: "Industries served", detail: "Civic, education, retail, non-profit & tech" },
  { value: "2+", label: "Years of operation", detail: "Rooted in Tamil Nadu, serving modern teams" },
];

const VISION_PILLARS = [
  {
    icon: Compass,
    title: "Clarity from complexity",
    description:
      "Turn fragmented information and disconnected systems into clearer, more useful insights.",
    badge: "INSIGHT & VISIBILITY",
    accent: "#8b5cf6",
  },
  {
    icon: Layers,
    title: "Future-ready ecosystems",
    description:
      "Build scalable digital foundations that can adapt as business needs evolve.",
    badge: "SCALABLE ARCHITECTURE",
    accent: "#6366f1",
  },
  {
    icon: Bot,
    title: "Intelligent systems",
    description:
      "Use AI and automation to support smarter decisions and more efficient operations.",
    badge: "AI & WORKFLOWS",
    accent: "#3b82f6",
  },
];

const WHY_ARAM = [
  {
    num: "01",
    title: "End-to-end ownership",
    description:
      "From initial planning and development to deployment and ongoing support, we aim to provide a coordinated delivery experience.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Integrated expertise",
    description:
      "Our capabilities span AI, data, engineering, automation, and digital growth, helping solutions work together rather than in isolation.",
    icon: Workflow,
  },
  {
    num: "03",
    title: "Business-first thinking",
    description:
      "We begin with the problem to solve and the outcome to achieve, then choose technology that fits.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Built for growth",
    description:
      "We prioritize scalable foundations and maintainable systems that can evolve with changing requirements.",
    icon: Boxes,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your business, requirements, existing systems, and goals.",
    detail: "Deep dive into real operational bottlenecks and user needs before writing a line of code.",
  },
  {
    step: "02",
    title: "Design the architecture",
    description: "Plan a scalable, secure solution suited to your needs.",
    detail: "Choose fit-for-purpose stacks, mapping data contracts, integrations, and user flows.",
  },
  {
    step: "03",
    title: "Build collaboratively",
    description: "Develop, test, and refine the solution with feedback.",
    detail: "Agile milestones with regular check-ins, transparent progress, and rapid iterations.",
  },
  {
    step: "04",
    title: "Deploy with confidence",
    description: "Prepare the solution for launch, testing, and handover.",
    detail: "End-to-end testing, security audits, production deployment, and team onboarding.",
  },
  {
    step: "05",
    title: "Support and improve",
    description: "Provide ongoing maintenance, optimization, and enhancements as agreed.",
    detail: "Proactive performance monitoring, system updates, and iterative improvements.",
  },
];

const FEATURED_PROJECTS = [
  {
    name: "Namma Puducherry",
    category: "Civic & Regional Portal",
    description: "Comprehensive regional digital gateway connecting citizens, tourism, and services.",
    tag: "WEB PLATFORM",
  },
  {
    name: "Vaazhai",
    category: "Incubator & Community Platform",
    description: "Ecosystem platform empowering grassroots innovation and institutional initiatives.",
    tag: "ECOSYSTEM",
  },
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
      {/* SECTION 01 · ABOUT HERO */}
      <section className="about-hero-section section-wrap" id="top">
        <div className="about-hero-glow" aria-hidden="true" />
        <div className="about-hero-content">
          <Reveal>
            <div className="eyebrow about-eyebrow">
              <span className="eyebrow-line" /> ABOUT ARAM ANALYTICS
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

          <Reveal delay={0.3}>
            <div className="about-hero-tagline">
              <MapPin size={13} className="text-[#8b5cf6]" />
              <span>Vaazhai Incubator Campus, Puliyangudi, Tamil Nadu</span>
              <span className="bullet-sep">•</span>
              <span>Serving Ambitious Organizations Worldwide</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02 · WHO WE ARE */}
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
            <p>
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

          <Reveal delay={0.12} className="about-who-visual">
            <div className="about-hub-card">
              <div className="about-hub-header">
                <div className="about-hub-badge">
                  <Building2 size={15} />
                  <span>REGIONAL BASE &amp; REACH</span>
                </div>
                <span className="about-hub-dot" />
              </div>

              <div className="about-hub-body">
                <h3>Vaazhai Incubator Campus</h3>
                <p className="about-hub-loc">Puliyangudi, Tenkasi District, Tamil Nadu</p>
                <div className="about-hub-divider" />

                <div className="about-hub-domains">
                  <div className="domain-item">
                    <span className="domain-bullet" />
                    <div>
                      <b>Web &amp; Mobile Platforms</b>
                      <small>Intuitive interfaces engineered for scale</small>
                    </div>
                  </div>
                  <div className="domain-item">
                    <span className="domain-bullet" />
                    <div>
                      <b>AI &amp; Automation Workflows</b>
                      <small>Eliminating repetitive busywork</small>
                    </div>
                  </div>
                  <div className="domain-item">
                    <span className="domain-bullet" />
                    <div>
                      <b>Enterprise &amp; Zoho Solutions</b>
                      <small>Tailored business ecosystems</small>
                    </div>
                  </div>
                  <div className="domain-item">
                    <span className="domain-bullet" />
                    <div>
                      <b>NGOs, Businesses &amp; Institutions</b>
                      <small>Practical solutions for real operators</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 · OUR VISION */}
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
              <Reveal delay={i * 0.09} key={pillar.title} className="about-vision-card">
                <div className="vision-card-top">
                  <span className="vision-icon-wrap" style={{ color: pillar.accent }}>
                    <Icon size={20} />
                  </span>
                  <span className="vision-card-badge">{pillar.badge}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="vision-card-foot">
                  <span className="vision-foot-mark">✳</span>
                  <span>Aram Core Principle</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 04 · WHY ARAM */}
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

        <div className="about-why-grid">
          {WHY_ARAM.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal delay={i * 0.08} key={item.num} className="about-why-card">
                <div className="why-card-head">
                  <span className="why-card-num">{item.num}</span>
                  <span className="why-card-icon">
                    <Icon size={18} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 05 · HOW WE WORK */}
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

        <div className="about-process-timeline">
          <div className="process-timeline-bar" aria-hidden="true" />
          <div className="about-process-grid">
            {PROCESS_STEPS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <Reveal
                  delay={index * 0.07}
                  key={step.step}
                  className={`about-process-card ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="about-process-btn"
                  >
                    <div className="process-step-num">
                      <span>{step.step}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p className="process-step-summary">{step.description}</p>
                    <div className="process-step-detail">
                      <small>{step.detail}</small>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 · OUR EXPERIENCE */}
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

        <div className="about-stats-grid">
          {COMPANY_STATS.map((stat, i) => (
            <Reveal delay={i * 0.08} key={stat.label} className="about-stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
        <div className="about-stats-note">
          <span>✳</span>
          <small>
            Derived from our active portfolio of client deliverables and multi-industry
            collaborations.
          </small>
        </div>
      </section>

      {/* SECTION 07 · SELECTED WORK */}
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

        <div className="about-projects-grid">
          {FEATURED_PROJECTS.map((proj, i) => (
            <Reveal delay={i * 0.06} key={proj.name} className="about-project-card">
              <div className="project-card-top">
                <span className="project-tag">{proj.tag}</span>
                <span className="project-index">0{i + 1}</span>
              </div>
              <h3 className="project-title">{proj.name}</h3>
              <p className="project-category">{proj.category}</p>
              <p className="project-desc">{proj.description}</p>
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

      {/* SECTION 08 · FINAL CTA */}
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
