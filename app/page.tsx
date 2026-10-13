"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
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
  const [status, setStatus] = useState("");
  const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configuredEmail) {
      setStatus("The contact form is not connected yet. Set NEXT_PUBLIC_CONTACT_EMAIL to enable inquiries.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:${configuredEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your message ready to send.");
  }

  return (
    <form className="contact-form home-contact-form" onSubmit={submitForm}>
      <label>
        <span>Your name</span>
        <input autoComplete="name" name="name" placeholder="Jane Smith" required />
      </label>
      <label>
        <span>Work email</span>
        <input autoComplete="email" name="email" placeholder="jane@company.com" required type="email" />
      </label>
      <label>
        <span>What are you looking to solve?</span>
        <textarea
          name="message"
          placeholder="A little context helps us make our first conversation useful."
          required
          rows={3}
        />
      </label>
      <button className="button button-primary form-submit" type="submit">
        Start a conversation ↗
      </button>
      <p aria-live="polite" className="form-note">
        {status || "No pitch deck. No pressure. Just a good conversation."}
      </p>
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
    href: "/about#portfolio",
  },
  {
    name: "Vaazhai",
    category: "Incubator & Community Platform",
    tag: "ECOSYSTEM",
    badge: "INCUBATOR CORE",
    description: "Ecosystem platform empowering grassroots innovation and institutional initiatives.",
    href: "/about#portfolio",
  },
  {
    name: "Voice of Tenkasi",
    category: "Media & Regional Network",
    tag: "COMMUNITY",
    badge: "REGIONAL MEDIA",
    description: "Digital media and community communication platform amplifying local stories.",
    href: "/about#portfolio",
  },
  {
    name: "Kottravai",
    category: "Culture & Commerce",
    tag: "COMMERCE",
    badge: "DIGITAL SHOWCASE",
    description: "Modern digital showcase celebrating heritage, cultural arts, and direct commerce.",
    href: "/about#portfolio",
  },
];

export default function Home() {
  return (
    <>
      <main id="top">
        {/* 1. HERO SECTION (Restored Animated Aram Intelligence Universe) */}
        <AramUniverseHero />

        {/* 2. BRAND STATEMENT */}
        <section className="home-brand-section section-wrap" id="statement">
          <div className="home-brand-container">
            <Reveal className="home-brand-content">
              <div className="eyebrow home-brand-eyebrow">
                <span className="eyebrow-line" /> THE CONNECTED WAY
              </div>
              <h2 className="home-brand-heading">
                More than software. <span className="serif-accent italic-highlight">A connected way forward.</span>
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
              <Link href="/about#portfolio" className="text-link inline-link">
                View all projects and company history in About <ArrowRight size={13} />
              </Link>
            </small>
          </div>
        </section>

        {/* 6. CLOSING CTA */}
        <section className="home-closing-section section-wrap" id="contact">
          <div className="home-closing-ambient" aria-hidden="true" />
          <div className="home-closing-grid">
            <Reveal className="home-closing-left">
              <div className="eyebrow">
                <span className="eyebrow-line" /> START A CONVERSATION
              </div>
              <h2 className="home-closing-title">
                Have an idea? <br />
                <span className="serif-accent italic-highlight">Let&apos;s make it work.</span>
              </h2>
              <p className="home-closing-desc">
                Start with the problem. We&apos;ll help you find the right way forward.
              </p>

              <div className="home-closing-assurances">
                <div className="home-assurance-item">
                  <ShieldCheck size={16} className="text-[#8b5cf6]" />
                  <span>No pitch deck. No pressure. Just thoughtful technical conversation.</span>
                </div>
                <div className="home-assurance-item">
                  <Sparkles size={16} className="text-[#10b981]" />
                  <span>Direct engineering insights tailored to your operational bottlenecks.</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="home-closing-right" delay={0.12}>
              <div className="home-closing-card">
                <div className="home-closing-card-header">
                  <span className="card-kicker">NEW PROJECT ENQUIRY</span>
                  <span className="card-chip">DIRECT DISPATCH</span>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
