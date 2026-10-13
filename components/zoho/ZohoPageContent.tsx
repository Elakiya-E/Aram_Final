"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  LifeBuoy,
  Mail,
  ShieldCheck,
  Sliders,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   ZOHO PRODUCTS DATA
   ========================================================================= */

const ZOHO_PRODUCTS = [
  {
    id: "crm",
    name: "Zoho CRM",
    badge: "CRM & SALES",
    description:
      "Organize customer information, manage sales activities, and keep your team focused on customer relationships.",
    icon: Users,
    color: "#E42527",
    accentBg: "rgba(228, 37, 39, 0.06)",
    accentBorder: "rgba(228, 37, 39, 0.2)",
    highlights: ["Contact & account hub", "Sales pipeline alignment", "Activity & follow-up tracking"],
  },
  {
    id: "books",
    name: "Zoho Books",
    badge: "FINANCE & ACCOUNTS",
    description:
      "Manage accounting workflows, organize financial records, and support clearer visibility into your business finances.",
    icon: FileSpreadsheet,
    color: "#226DB4",
    accentBg: "rgba(34, 109, 180, 0.06)",
    accentBorder: "rgba(34, 109, 180, 0.2)",
    highlights: ["Invoicing & billing schedules", "Chart of accounts setup", "Cash visibility & reporting"],
  },
  {
    id: "creator",
    name: "Zoho Creator",
    badge: "CUSTOM APPLICATIONS",
    description:
      "Build custom business applications around your organization's specific processes and requirements.",
    icon: Database,
    color: "#089949",
    accentBg: "rgba(8, 153, 73, 0.06)",
    accentBorder: "rgba(8, 153, 73, 0.2)",
    highlights: ["Tailored form & data models", "Deluge automated logic", "Role-based team portals"],
  },
];

/* =========================================================================
   ZOHO SERVICES DATA
   ========================================================================= */

const ZOHO_SERVICES = [
  {
    id: "setup",
    num: "01",
    title: "Setup & Configuration",
    summary: "Set up selected Zoho products to suit your business requirements.",
    detail: "Account initialization, user role permissions, field configuration, and clean initial data setup.",
    icon: Sliders,
    accent: "#6C5CE7",
  },
  {
    id: "customization",
    num: "02",
    title: "Customization",
    summary: "Adapt available settings and features to better fit your workflows.",
    detail: "Custom fields, tailored layouts, automated email triggers, notification hooks, and Deluge scripting.",
    icon: Workflow,
    accent: "#E42527",
  },
  {
    id: "training",
    num: "03",
    title: "Training",
    summary: "Help your team understand and use the configured solutions.",
    detail: "Role-specific walkthroughs, clear reference runbooks, and hands-on guidance so your team works with confidence.",
    icon: Users,
    accent: "#226DB4",
  },
  {
    id: "support",
    num: "04",
    title: "Ongoing Support",
    summary: "Assist with questions, adjustments, and continued use after setup.",
    detail: "Licensing guidance, configuration adjustments, routine troubleshooting, and continuous workflow improvements.",
    icon: LifeBuoy,
    accent: "#089949",
  },
];

/* =========================================================================
   MAIN COMPONENT: CLEAN, SIMPLE, 4-SECTION ZOHO PARTNERSHIP PAGE
   ========================================================================= */

export function ZohoPageContent() {
  return (
    <div className="zoho-page zoho-page-clean">
      {/* -----------------------------------------------------------------
          SECTION 1: HERO
          ----------------------------------------------------------------- */}
      <section className="zoho-hero-clean section-wrap" id="top">
        <div className="zoho-hero-inner">
          <Reveal>
            <div className="zoho-official-badge">
              <Image
                src="/zoho-logo.svg"
                alt="Zoho official logo"
                width={56}
                height={18}
                className="zoho-badge-svg"
                priority
              />
              <span className="zoho-badge-divider" aria-hidden="true" />
              <span className="zoho-badge-text">Official Zoho Partner</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="zoho-hero-title-clean">
              Your business. Better{" "}
              <span className="serif-accent italic-highlight">connected</span>{" "}
              with Zoho.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="zoho-hero-desc-clean">
              As an official Zoho partner, Aram Analytics helps businesses
              configure and customize Zoho solutions to better fit their
              workflows, manage information, and support day-to-day operations.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="zoho-hero-action-row">
            <Link href="/#contact" className="button button-primary">
              Let&apos;s Talk <ArrowUpRight size={15} />
            </Link>
            <a href="#products" className="button button-quiet">
              View Supported Tools <ArrowRight size={14} />
            </a>
          </Reveal>

          {/* Clean Trust Strip from Card: One ecosystem. Built around you. */}
          <Reveal delay={0.24}>
            <div className="zoho-hero-pill-strip">
              <span className="pill-item">
                <Check size={13} className="text-[#6C5CE7]" />
                <span>One ecosystem. Built around you.</span>
              </span>
              <span className="pill-dot" aria-hidden="true">•</span>
              <span className="pill-item">
                <Check size={13} className="text-[#6C5CE7]" />
                <span>Licensing guidance &amp; setup</span>
              </span>
              <span className="pill-dot" aria-hidden="true">•</span>
              <span className="pill-item">
                <Check size={13} className="text-[#6C5CE7]" />
                <span>Ongoing operational support</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 2: ZOHO PRODUCTS
          ----------------------------------------------------------------- */}
      <section className="zoho-section-clean section-wrap" id="products">
        <Reveal className="zoho-heading-clean">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>ZOHO PRODUCTS</span>
          </div>
          <h2>The right tools for the way you work.</h2>
          <p>
            We focus our implementation expertise on the cornerstone Zoho
            applications that drive customer relationships, financial clarity,
            and custom internal processes.
          </p>
        </Reveal>

        <div className="zoho-products-clean-grid">
          {ZOHO_PRODUCTS.map((prod, index) => {
            const Icon = prod.icon;
            return (
              <Reveal
                key={prod.id}
                delay={index * 0.08}
                className="zoho-product-clean-card"
                style={{
                  ["--prod-color" as never]: prod.color,
                  ["--prod-bg" as never]: prod.accentBg,
                  ["--prod-border" as never]: prod.accentBorder,
                }}
              >
                <div className="prod-card-top">
                  <div
                    className="prod-icon-box"
                    style={{
                      color: prod.color,
                      backgroundColor: prod.accentBg,
                      borderColor: prod.accentBorder,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className="prod-badge-tag"
                    style={{
                      color: prod.color,
                      borderColor: prod.accentBorder,
                      backgroundColor: prod.accentBg,
                    }}
                  >
                    {prod.badge}
                  </span>
                </div>

                <h3 className="prod-clean-title">{prod.name}</h3>
                <p className="prod-clean-desc">{prod.description}</p>

                <div className="prod-clean-bullets">
                  {prod.highlights.map((h) => (
                    <div key={h} className="prod-bullet-row">
                      <CheckCircle2
                        size={13}
                        style={{ color: prod.color, flexShrink: 0 }}
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 3: OUR SERVICES
          ----------------------------------------------------------------- */}
      <section className="zoho-section-clean section-wrap" id="services">
        <Reveal className="zoho-heading-clean">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>OUR SERVICES</span>
          </div>
          <h2>Configured around your business.</h2>
          <p>
            From your initial deployment to daily adoption and long-term
            assistance, our services ensure your Zoho system delivers practical
            value without unnecessary complexity.
          </p>
        </Reveal>

        <div className="zoho-services-clean-grid">
          {ZOHO_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                delay={index * 0.07}
                className="zoho-service-clean-card"
              >
                <div className="service-clean-top">
                  <div
                    className="service-clean-icon-wrap"
                    style={{ color: service.accent }}
                  >
                    <Icon size={19} />
                  </div>
                  <span className="service-clean-num">{service.num}</span>
                </div>

                <h3 className="service-clean-title">{service.title}</h3>
                <p className="service-clean-summary">{service.summary}</p>
                <p className="service-clean-detail">{service.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 4: CONTACT CTA
          ----------------------------------------------------------------- */}
      <section className="zoho-section-clean section-wrap" id="contact">
        <Reveal className="zoho-cta-clean-panel">
          <div className="zoho-cta-clean-glow" aria-hidden="true" />

          <div className="zoho-cta-clean-content">
            <div className="eyebrow">
              <Sparkles size={13} className="text-[#b5a4ff]" />
              <span>YOUR ZOHO TEAM, IN YOUR CORNER</span>
            </div>

            <h2 className="zoho-cta-clean-heading">
              Let&apos;s find the right Zoho solution for you.
            </h2>

            <p className="zoho-cta-clean-desc">
              Tell us about your business processes and the challenges you want
              to solve. We&apos;ll discuss which of our supported Zoho solutions
              may fit your needs.
            </p>

            <div className="zoho-cta-clean-actions">
              <Link href="/#contact" className="button button-primary">
                Let&apos;s Talk <ArrowUpRight size={15} />
              </Link>
              <a
                href="mailto:contact@aramanalytics.com?subject=Zoho%20Partner%20Inquiry%20from%20Website"
                className="button button-quiet"
              >
                <Mail size={14} /> Email Us Directly
              </a>
            </div>

            <div className="zoho-cta-clean-foot">
              <span className="foot-note">
                <CheckCircle2 size={13} className="text-[#089949]" />
                Official Zoho Partner · Real guidance with no pressure
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
