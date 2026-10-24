"use client";

import { useState, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCtaSection({ id = "contact" }: { id?: string }) {
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState("");
  const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configuredEmail) {
      setStatus("The contact form is not connected yet. Set NEXT_PUBLIC_CONTACT_EMAIL to enable direct email dispatch.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nWhat we are looking to solve:\n${formData.get("message")}`,
    );
    window.location.href = `mailto:${configuredEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client with your message drafted.");
  }

  return (
    <section className="final-cta-section section-wrap" id={id}>
      <div className="final-cta-container">
        {/* Ambient Glow */}
        <div className="final-cta-ambient-glow" aria-hidden="true" />

        <div className="final-cta-grid">
          {/* LEFT: Large Focused Statement & Rationale */}
          <div className="final-cta-left">
            <motion.div
              className="section-eyebrow"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-accent-dot" />
              <span>THE NEXT CONVERSATION</span>
            </motion.div>

            <motion.h2
              className="final-cta-title"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Have a business problem <br />
              <span className="serif-accent">worth solving?</span>
            </motion.h2>

            <motion.p
              className="final-cta-desc"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              Tell us what is slowing your team down. We&apos;ll help turn it into a practical technology system.
            </motion.p>

            <div className="final-cta-links">
              <a href="#contact-form" className="button button-primary cta-btn">
                Let&apos;s build it <ArrowUpRight size={15} />
              </a>
              <a href="#work" className="button button-quiet cta-btn">
                View our work <ArrowRight size={14} />
              </a>
            </div>

            <div className="final-cta-assurances">
              <div className="assurance-bullet">
                <ShieldCheck size={16} className="text-[#7c6aee]" />
                <span>No high-pressure sales pitch. Just direct engineering discussion.</span>
              </div>
              <div className="assurance-bullet">
                <Sparkles size={16} className="text-[#059669]" />
                <span>Clear scopes, practical milestones, and measurable outcomes.</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Direct Interactive Contact Form */}
          <div className="final-cta-right" id="contact-form">
            <motion.div
              className="cta-form-card"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="cta-form-head">
                <span className="form-head-title">START A PROJECT</span>
                <span className="form-head-badge"><MessageSquareText size={12} /> Direct Channel</span>
              </div>

              <form className="contact-form" onSubmit={submitForm}>
                <label>
                  <span>Your name</span>
                  <input autoComplete="name" name="name" placeholder="Alex Morgan" required />
                </label>
                <label>
                  <span>Work email</span>
                  <input autoComplete="email" name="email" placeholder="alex@company.com" required type="email" />
                </label>
                <label>
                  <span>What is slowing your team down?</span>
                  <textarea
                    name="message"
                    placeholder="Briefly describe your process bottleneck, disconnected tools, or project goals."
                    required
                    rows={3}
                  />
                </label>
                <button className="button button-primary form-submit" type="submit">
                  Send Inquiry <ArrowUpRight size={15} />
                </button>
                <p aria-live="polite" className="form-note">
                  {status || "Direct conversation with Aram engineering leadership. Response within 24 business hours."}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
