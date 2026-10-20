"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  MessagesSquare,
  Lightbulb,
  Target,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { AramUniverseHero } from "@/components/AramUniverseHero";
import { Footer } from "@/components/Footer";

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
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof typeof errors];
        return next;
      });
    }
  }

  function validate() {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid work email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share what you would like to build or improve.";
    } else if (formData.message.trim().length < 8) {
      errs.message = "Please provide a little more context (at least 8 characters).";
    }
    return errs;
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (!configuredEmail) {
        setStatusMessage({
          type: "info",
          text: "The contact form is not connected yet. Set NEXT_PUBLIC_CONTACT_EMAIL to enable inquiries.",
        });
        setIsSubmitting(false);
        return;
      }

      const subject = encodeURIComponent(
        `Project Enquiry: ${formData.name}${formData.company ? ` (${formData.company})` : ""}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Work Email: ${formData.email}\n` +
        `Company: ${formData.company ? formData.company : "Not specified"}\n\n` +
        `What would you like to build or improve:\n` +
        `${formData.message}`
      );

      window.location.href = `mailto:${configuredEmail}?subject=${subject}&body=${body}`;

      setStatusMessage({
        type: "success",
        text: "Your email app is opening with your project enquiry ready to send.",
      });
    } catch {
      setStatusMessage({
        type: "error",
        text: "There was a problem preparing your message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="studio-form" onSubmit={submitForm} noValidate>
      <div className="studio-form-fields">
        {/* Name */}
        <div className="studio-field-group">
          <label htmlFor="studio-name" className="studio-field-label">
            <span>Name</span>
            <span className="studio-field-required" aria-hidden="true">*</span>
          </label>
          <input
            id="studio-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            className={`studio-input ${errors.name ? "studio-input-error" : ""}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "studio-name-err" : undefined}
            required
          />
          {errors.name && (
            <p id="studio-name-err" className="studio-error-text" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Work email */}
        <div className="studio-field-group">
          <label htmlFor="studio-email" className="studio-field-label">
            <span>Work email</span>
            <span className="studio-field-required" aria-hidden="true">*</span>
          </label>
          <input
            id="studio-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`studio-input ${errors.email ? "studio-input-error" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "studio-email-err" : undefined}
            required
          />
          {errors.email && (
            <p id="studio-email-err" className="studio-error-text" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company or organization */}
        <div className="studio-field-group">
          <div className="studio-field-label-row">
            <label htmlFor="studio-company" className="studio-field-label">
              <span>Company or organization</span>
            </label>
            <span className="studio-field-optional">optional</span>
          </div>
          <input
            id="studio-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc. or organization"
            value={formData.company}
            onChange={handleChange}
            className="studio-input"
          />
        </div>

        {/* What would you like to build or improve? */}
        <div className="studio-field-group">
          <label htmlFor="studio-message" className="studio-field-label">
            <span>What would you like to build or improve?</span>
            <span className="studio-field-required" aria-hidden="true">*</span>
          </label>
          <textarea
            id="studio-message"
            name="message"
            rows={4}
            placeholder="Share your goals, operational challenges, or the project scope you envision..."
            value={formData.message}
            onChange={handleChange}
            className={`studio-textarea ${errors.message ? "studio-input-error" : ""}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "studio-message-err" : undefined}
            required
          />
          {errors.message && (
            <p id="studio-message-err" className="studio-error-text" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button & Subtext */}
      <div className="studio-form-actions">
        <button
          type="submit"
          disabled={isSubmitting}
          className="studio-submit-button"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="studio-spinner" aria-hidden="true" />
              <span>Preparing enquiry...</span>
            </>
          ) : (
            <>
              <span>Tell us about your project</span>
              <span className="studio-btn-arrow" aria-hidden="true">↗</span>
            </>
          )}
        </button>

        <p className="studio-form-subtext">
          Your first conversation starts with understanding your goals.
        </p>

        {statusMessage && (
          <div
            className={`studio-status-box studio-status-${statusMessage.type}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage.type === "success" && (
              <CheckCircle2 size={16} className="studio-status-icon text-mint" />
            )}
            {statusMessage.type === "info" && (
              <Sparkles size={16} className="studio-status-icon text-lavender" />
            )}
            {statusMessage.type === "error" && (
              <AlertCircle size={16} className="studio-status-icon text-red" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}
      </div>
    </form>
  );
}

// 4 Interactive Typographic Capabilities
const CAPABILITIES_LIST = [
  {
    num: "01",
    title: "AI & Intelligent Systems",
    summary: "Make information more useful.",
    href: "/what-we-do#ai-solutions",
  },
  {
    num: "02",
    title: "Automation & Integration",
    summary: "Make everyday work flow better.",
    href: "/what-we-do#ai-automation",
  },
  {
    num: "03",
    title: "Software & Digital Products",
    summary: "Turn ideas into useful experiences.",
    href: "/what-we-do#software-products",
  },
  {
    num: "04",
    title: "Data & Business Intelligence",
    summary: "Turn data into clearer decisions.",
    href: "/what-we-do#data-analytics",
  },
];

// 4 Connected Approach Steps
const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    description: "We map your current processes, identify operational bottlenecks, and define the practical opportunity.",
  },
  {
    num: "02",
    title: "Design",
    description: "We blueprint the connected solution—selecting the right architecture, tools, and integrations.",
  },
  {
    num: "03",
    title: "Build",
    description: "We engineer and connect AI, software, and automation into a resilient, production-ready system.",
  },
  {
    num: "04",
    title: "Improve",
    description: "We monitor performance, refine user adoption, and iterate as your business needs expand.",
  },
];

// Approved Real Portfolio Deliverables (preserved from active records)
const SELECTED_PROJECTS = [
  {
    name: "Namma Puducherry",
    category: "Civic & Regional Portal",
    tag: "WEB PLATFORM",
    badge: "REGIONAL GATEWAY",
    description: "Comprehensive regional digital gateway connecting citizens, tourism, and services.",
    href: "/our-work",
  },
  {
    name: "Vaazhai",
    category: "Incubator & Community Platform",
    tag: "ECOSYSTEM",
    badge: "INCUBATOR CORE",
    description: "Ecosystem platform empowering grassroots innovation and institutional initiatives.",
    href: "/our-work",
  },
  {
    name: "Voice of Tenkasi",
    category: "Media & Regional Network",
    tag: "COMMUNITY",
    badge: "REGIONAL MEDIA",
    description: "Digital media and community communication platform amplifying local stories.",
    href: "/our-work",
  },
  {
    name: "Kottravai",
    category: "Culture & Commerce",
    tag: "COMMERCE",
    badge: "DIGITAL SHOWCASE",
    description: "Modern digital showcase celebrating heritage, cultural arts, and direct commerce.",
    href: "/our-work",
  },
];

export default function Home() {
  const reducedMotion = useReducedMotion();
  return (
    <>
      <main id="top">
        {/* 1. HERO SECTION (Restored Animated Aram Intelligence Universe) */}
        <AramUniverseHero />

        {/* 2. BRAND STATEMENT (THE CONNECTED WAY) */}
        <section className="home-brand-section section-wrap" id="statement">
          <div className="home-brand-container">
            <Reveal className="home-brand-content">
              <div className="home-brand-eyebrow">
                <span className="home-brand-eyebrow-node" aria-hidden="true" />
                <span className="home-brand-eyebrow-text">THE CONNECTED WAY</span>
                <span className="home-brand-eyebrow-stem" aria-hidden="true" />
              </div>
              <h2 className="home-brand-heading">
                <span className="home-brand-heading-lead">More than software.</span>{" "}
                <span className="home-brand-heading-accent-wrap">
                  <span className="home-brand-heading-accent">A connected way forward.</span>
                  <span className="home-brand-heading-glow" aria-hidden="true" />
                </span>
              </h2>
              <p className="home-brand-desc">
                Every business has challenges. We bring the right technology together to simplify operations, connect systems, and create room for growth.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3. CAPABILITIES (Typographic Interactive List) */}
        <section className="home-capabilities-section section-wrap" id="services">
          {/* Smooth navigation anchor for Zoho without cluttering hero */}
          <span id="zoho" className="sr-only" tabIndex={-1} />

          <Reveal className="home-section-header">
            <div className="eyebrow">
              <span className="eyebrow-line" /> WHAT WE DO
            </div>
            <h2 className="home-section-title">
              One team. <span className="serif-accent">Multiple possibilities.</span>
            </h2>
          </Reveal>

          <div className="home-capabilities-list" role="list">
            {CAPABILITIES_LIST.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <Link
                  href={item.href}
                  className="home-capability-row group"
                  role="listitem"
                  aria-label={`${item.title} — ${item.summary}`}
                >
                  <div className="home-capability-main">
                    <span className="home-capability-num">{item.num}</span>
                    <h3 className="home-capability-title">{item.title}</h3>
                  </div>

                  <div className="home-capability-sub">
                    <span className="home-capability-emdash" aria-hidden="true">—</span>
                    <span className="home-capability-desc">{item.summary}</span>
                  </div>

                  <div className="home-capability-action" aria-hidden="true">
                    <span className="home-capability-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="home-capabilities-footer-bridge">
            <p>
              Looking for Zoho solutions, cloud infrastructure, or managed services?{" "}
              <Link href="/what-we-do" className="text-link inline-link">
                Explore all capabilities on What We Do <ArrowUpRight size={13} />
              </Link>
            </p>
          </Reveal>
        </section>

        {/* 4. APPROACH (Continuous Visual Connection) */}
        <section className="home-approach-section section-wrap" id="process">
          <Reveal className="home-section-header">
            <div className="eyebrow">
              <span className="eyebrow-line" /> OUR METHOD
            </div>
            <h2 className="home-section-title">
              From a challenge <span className="serif-accent">to a working solution.</span>
            </h2>
          </Reveal>

          <div className="home-approach-track-wrap">
            {/* Continuous horizontal guide line on desktop */}
            <div className="home-approach-continuous-line" aria-hidden="true" />

            <div className="home-approach-steps-grid">
              {APPROACH_STEPS.map((step, idx) => (
                <Reveal key={step.num} delay={idx * 0.08} className="home-approach-step-card">
                  <div className="home-approach-node">
                    <span className="home-approach-node-dot" />
                    <span className="home-approach-node-num">{step.num}</span>
                  </div>
                  <h3 className="home-approach-step-title">{step.title}</h3>
                  <p className="home-approach-step-desc">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SELECTED WORK (Real Approved Portfolio Deliverables) */}
        <section className="home-work-section section-wrap" id="work">
          <Reveal className="home-section-header home-work-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> SELECTED DELIVERIES
              </div>
              <h2 className="home-section-title">
                Ideas, <span className="serif-accent">made real.</span>
              </h2>
            </div>
            <p className="home-section-desc">
              A selection of digital platforms, applications, and technology solutions built for different needs.
            </p>
          </Reveal>

          <div className="home-work-grid">
            {SELECTED_PROJECTS.map((project, idx) => (
              <Reveal key={project.name} delay={idx * 0.08} className="home-work-card">
                <div className="home-work-card-top">
                  <span className="home-work-tag">{project.tag}</span>
                  <span className="home-work-badge">{project.badge}</span>
                </div>
                <div className="home-work-card-body">
                  <span className="home-work-category">{project.category}</span>
                  <h3 className="home-work-title">{project.name}</h3>
                  <p className="home-work-description">{project.description}</p>
                </div>
                <div className="home-work-card-foot">
                  <Link href={project.href} className="home-work-link">
                    <span>Explore in Portfolio</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="home-work-footer-note">
            <span className="foot-star">✳</span>
            <small>
              Looking for more background?{" "}
              <Link href="/our-work" className="text-link inline-link">
                View all projects in our dedicated portfolio <ArrowRight size={13} />
              </Link>
            </small>
          </div>
        </section>

        {/* 6. THE PROJECT STUDIO (CONTACT & PROJECT ENQUIRY) */}
        <section className="project-studio-section" id="contact">
          <div className="project-studio-ambient" aria-hidden="true" />
          
          <div className="studio-container section-wrap">
            {/* Unique Visual Detail: Animated Journey Strip (IDEA → STRATEGY → BUILD → IMPACT) */}
            <motion.div
              className="studio-journey-strip"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease }}
            >
              <div className="studio-journey-eyebrow">
                <span className="studio-pulse-dot" aria-hidden="true" />
                <span className="studio-eyebrow-text">THE PROJECT STUDIO</span>
              </div>

              <div className="studio-journey-pathway" aria-label="Project lifecycle methodology">
                <div className="studio-journey-step">
                  <span className="studio-journey-step-num">01</span>
                  <span className="studio-journey-step-name">IDEA</span>
                </div>
                <div className="studio-journey-connector" aria-hidden="true">
                  <span className="studio-journey-line" />
                  <span className="studio-journey-arrow">→</span>
                </div>
                <div className="studio-journey-step">
                  <span className="studio-journey-step-num">02</span>
                  <span className="studio-journey-step-name">STRATEGY</span>
                </div>
                <div className="studio-journey-connector" aria-hidden="true">
                  <span className="studio-journey-line" />
                  <span className="studio-journey-arrow">→</span>
                </div>
                <div className="studio-journey-step">
                  <span className="studio-journey-step-num">03</span>
                  <span className="studio-journey-step-name">BUILD</span>
                </div>
                <div className="studio-journey-connector" aria-hidden="true">
                  <span className="studio-journey-line" />
                  <span className="studio-journey-arrow">→</span>
                </div>
                <div className="studio-journey-step studio-journey-step-accent">
                  <span className="studio-journey-step-num">04</span>
                  <span className="studio-journey-step-name">IMPACT</span>
                </div>
              </div>
            </motion.div>

            {/* Asymmetric Two-Column Composition */}
            <div className="studio-grid">
              {/* Left Column: Editorial Introduction */}
              <Reveal className="studio-editorial-col">
                <h2 className="studio-headline">
                  Have a challenge? <br />
                  <span className="studio-headline-italic">Let&apos;s build what&apos;s next.</span>
                </h2>

                <p className="studio-description">
                  From ambitious ideas to everyday operational challenges, let&apos;s explore how technology can move your business forward.
                </p>

                <div className="studio-collaboration-points">
                  <div className="studio-collab-item">
                    <div className="studio-collab-icon-wrap" aria-hidden="true">
                      <MessagesSquare size={17} strokeWidth={1.8} className="studio-collab-icon" />
                    </div>
                    <div className="studio-collab-text">
                      <strong className="studio-collab-title">Real conversations</strong>
                      <span className="studio-collab-sep">—</span>
                      <span className="studio-collab-desc">Start with your goals, not a sales pitch.</span>
                    </div>
                  </div>

                  <div className="studio-collab-item">
                    <div className="studio-collab-icon-wrap" aria-hidden="true">
                      <Lightbulb size={17} strokeWidth={1.8} className="studio-collab-icon" />
                    </div>
                    <div className="studio-collab-text">
                      <strong className="studio-collab-title">Practical thinking</strong>
                      <span className="studio-collab-sep">—</span>
                      <span className="studio-collab-desc">Explore solutions that fit your actual needs.</span>
                    </div>
                  </div>

                  <div className="studio-collab-item">
                    <div className="studio-collab-icon-wrap studio-collab-icon-wrap-mint" aria-hidden="true">
                      <Target size={17} strokeWidth={1.8} className="studio-collab-icon studio-icon-mint" />
                    </div>
                    <div className="studio-collab-text">
                      <strong className="studio-collab-title">Built for impact</strong>
                      <span className="studio-collab-sep">—</span>
                      <span className="studio-collab-desc">Focus on useful outcomes and long-term value.</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right Column: Project Enquiry Interface */}
              <Reveal className="studio-interface-col" delay={0.12}>
                <div className="studio-enquiry-surface">
                  <div className="studio-enquiry-accent-bar" aria-hidden="true" />
                  <div className="studio-enquiry-header">
                    <div className="studio-enquiry-title-group">
                      <h3 className="studio-enquiry-kicker">LET&apos;S START SOMETHING</h3>
                      <span className="studio-enquiry-badge">PROJECT ENQUIRY</span>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
