"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  MessageSquareText,
  MoveUpRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site";
import siteLogo from "./logo3-Picsart-AiImageEnhancer-removebg-preview.png";
import { PartnersSection } from "@/components/PartnersSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { BusinessFlowHero } from "@/components/BusinessFlowHero";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
  onMouseMove,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease }}
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
    <form className="contact-form" onSubmit={submitForm}>
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
        <textarea name="message" placeholder="A little context helps us make our first conversation useful." required rows={3} />
      </label>
      <button className="button button-primary form-submit" type="submit">Start a conversation <ArrowUpRight size={16} /></button>
      <p aria-live="polite" className="form-note">{status || "No pitch deck. No pressure. Just a good conversation."}</p>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <main id="top">
        <BusinessFlowHero />

        <CapabilitiesSection id="services" />

        <section className="automation-section section-wrap">
          <Reveal className="automation-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> FROM FIRST CLICK TO FOLLOW-THROUGH</div>
            <h2>Great work happens<br />when the <span className="serif-accent">busywork doesn’t.</span></h2>
            <p>Imagine the right information reaching the right person, in the right place — automatically. That’s the kind of calm a thoughtful workflow can bring.</p>
            <a className="text-link" href="#contact">Let’s find your first win <ArrowUpRight size={14} /></a>
          </Reveal>
          <Reveal className="automation-board" delay={0.1}>
            <div className="board-top"><span><span className="status-dot" /> SAMPLE AUTOMATION</span><span>Lead-to-CRM handoff <ChevronDown size={13} /></span></div>
            <div className="automation-flow">
              <div className="automation-step">
                <div className="automation-icon trigger-icon"><Zap size={18} /></div>
                <span className="step-kicker">01 / TRIGGER</span><b>New enquiry</b><small>A lead fills out your form</small>
              </div>
              <div className="step-link"><span /></div>
              <div className="automation-step">
                <div className="automation-icon ai-icon"><Bot size={18} /></div>
                <span className="step-kicker">02 / INTELLIGENCE</span><b>Qualify &amp; enrich</b><small>AI adds useful context</small>
              </div>
              <div className="step-link"><span /></div>
              <div className="automation-step">
                <div className="automation-icon crm-icon">Z</div>
                <span className="step-kicker">03 / ZOHO CRM</span><b>Update &amp; route</b><small>The right owner is assigned</small>
              </div>
              <div className="step-link"><span /></div>
              <div className="automation-step">
                <div className="automation-icon notify-icon"><MessageSquareText size={17} /></div>
                <span className="step-kicker">04 / NOTIFY</span><b>Team is ready</b><small>Follow up while it’s fresh</small>
              </div>
            </div>
            <div className="board-foot"><span><CircleHelp size={13} /> Your workflow will be designed around your team.</span><span>Built for real work <span className="foot-spark">✳</span></span></div>
          </Reveal>
        </section>

        <PartnersSection id="partners" />

        <section className="work-section section-wrap" id="work">
          <Reveal>
            <div className="section-heading work-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> THE WORK, IN THE REAL WORLD</div>
                <h2>Better days at <span className="serif-accent">work.</span></h2>
              </div>
              <p>Every business is different. The right solution starts by understanding what your people actually need.</p>
            </div>
          </Reveal>
          <div className="case-grid">
            {siteContent.caseStudies.map((study, index) => (
              <Reveal className={`case-card case-card-${index + 1}`} delay={index * 0.09} key={study.label}>
                <div className={`case-visual case-visual-${index + 1}`}>
                  {index === 0 ? (
                    <div className="case-dashboard">
                      <div className="dash-sidebar"><span className="dash-logo">Z</span><i /><i /><i /><i /></div>
                      <div className="dash-main"><div className="dash-title"><span>Overview</span><i>•••</i></div><div className="dash-stats"><i /><i /><i /></div><div className="dash-chart"><span /><i /><i /><i /><i /><i /><i /><i /></div><div className="dash-bottom"><i /><i /></div></div>
                    </div>
                  ) : (
                    <div className="case-phone">
                      <div className="phone-speaker" />
                      <div className="phone-screen"><span className="phone-greeting">Good morning, team</span><i /><b>Today, at a glance</b><div className="phone-stat-row"><i /><i /></div><div className="phone-task"><span>✓</span> New lead assigned</div><div className="phone-task"><span>↗</span> Follow-up scheduled</div></div>
                    </div>
                  )}
                  <span className="case-visual-tag">{study.visualLabel}</span>
                </div>
                <div className="case-info">
                  <div><span className="case-category">{study.category}</span><h3>{study.title}</h3><p>{study.description}</p></div>
                  <a aria-label={`Discuss ${study.title}`} className="round-arrow" href="#contact"><ArrowUpRight size={16} /></a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="work-note"><span>↗</span> These are concept previews, not client case studies. Real project stories can be added here.</p>
        </section>

        <section className="process-section section-wrap" id="process">
          <Reveal>
            <div className="process-heading">
              <div className="eyebrow"><span className="eyebrow-line" /> A GOOD WAY TO GET THERE</div>
              <h2>Thoughtful from<br />the <span className="serif-accent">first hello.</span></h2>
              <p>No black boxes. No big reveal at the end. Just good collaboration, clear steps, and a team that has your back.</p>
            </div>
          </Reveal>
          <div className="timeline">
            {siteContent.process.map((step, index) => (
              <Reveal className="timeline-step" delay={index * 0.08} key={step.title}>
                <div className="timeline-marker"><span>0{index + 1}</span><i /></div>
                <div className="timeline-content"><span className="step-kicker">{step.kicker}</span><h3>{step.title}</h3><p>{step.description}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="zoho-section section-wrap" id="zoho">
          <Reveal className="zoho-panel">
            <div className="zoho-glow" />
            <div className="zoho-panel-content">
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR ZOHO TEAM, IN YOUR CORNER</div>
              <h2>Make more of<br /><span className="zoho-word">Zoho</span><span className="serif-accent">.</span></h2>
              <p>Choose the right apps, connect them around the way you work, and get a real person to call when you need a hand.</p>
              <div className="zoho-benefits"><span><Check size={14} /> Licensing guidance</span><span><Check size={14} /> Setup &amp; migration</span><span><Check size={14} /> Ongoing support</span></div>
              <a className="button button-primary" href="#contact">Get a Zoho quote <ArrowUpRight size={15} /></a>
            </div>
            <div aria-hidden="true" className="zoho-orb-wrap">
              <div className="zoho-orb"><span>Z</span><i /><i /><i /><i /></div>
              <div className="zoho-orb-label">One ecosystem.<br /><b>Built around you.</b></div>
            </div>
            <span className="zoho-panel-mark">Z</span>
          </Reveal>
          <div className="zoho-footnote"><span>Curious about Zoho?</span><a href="#contact">Let’s talk through your options <ArrowRight size={13} /></a></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-aurora" />
          <Reveal className="contact-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> THE NEXT STEP IS A CONVERSATION</div>
            <h2>Let’s make<br />work <span className="serif-accent">work better.</span></h2>
            <p>Tell us what feels harder than it should. We’ll listen, ask a few good questions, and figure out what might help.</p>
            <div className="contact-assurance"><span className="assurance-icon"><MoveUpRight size={15} /></span><span>Real people. Thoughtful answers.<br /><b>And no pressure to say yes.</b></span></div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.12}><ContactForm /></Reveal>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <div className="footer-main">
          <a aria-label="Aram Analytics home" className="wordmark footer-wordmark" href="#top">
            <Image
              alt="Aram Analytics"
              className="brand-logo"
              height={28}
              src={siteLogo}
            />
          </a>
          <p>Thoughtful technology.<br />Better business.</p>
          <a className="footer-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Aram Analytics. All rights reserved.</span><span>Made for people doing good work <span className="footer-heart">✳</span></span><span className="footer-placeholder">Replace with your legal business details.</span></div>
      </footer>
    </>
  );
}

