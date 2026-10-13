"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
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
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    colorBg: "rgba(228, 37, 39, 0.08)",
    colorBorder: "rgba(228, 37, 39, 0.22)",
    pillTags: ["Contact Hub", "Pipeline Alignment", "Follow-up Tracking"],
    highlights: [
      "Contact & account hub",
      "Sales pipeline alignment",
      "Activity & follow-up tracking",
    ],
  },
  {
    id: "books",
    name: "Zoho Books",
    badge: "FINANCE & ACCOUNTS",
    description:
      "Manage accounting workflows, organize financial records, and support clearer visibility into your business finances.",
    icon: FileSpreadsheet,
    color: "#226DB4",
    colorBg: "rgba(34, 109, 180, 0.08)",
    colorBorder: "rgba(34, 109, 180, 0.22)",
    pillTags: ["Invoicing Schedules", "Chart of Accounts", "Cash Visibility"],
    highlights: [
      "Invoicing & billing schedules",
      "Chart of accounts setup",
      "Cash visibility & reporting",
    ],
  },
  {
    id: "creator",
    name: "Zoho Creator",
    badge: "CUSTOM APPLICATIONS",
    description:
      "Build custom business applications around your organization's specific processes and requirements.",
    icon: Database,
    color: "#089949",
    colorBg: "rgba(8, 153, 73, 0.08)",
    colorBorder: "rgba(8, 153, 73, 0.22)",
    pillTags: ["Data Models", "Deluge Scripting", "Team Portals"],
    highlights: [
      "Tailored form & data models",
      "Deluge automated logic",
      "Role-based team portals",
    ],
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
    detail:
      "Account initialization, user role permissions, field configuration, and clean initial data setup.",
    icon: Sliders,
    accent: "#6C5CE7",
  },
  {
    id: "customization",
    num: "02",
    title: "Customization",
    summary: "Adapt available settings and features to better fit your workflows.",
    detail:
      "Custom fields, tailored layouts, automated email triggers, notification hooks, and Deluge scripting.",
    icon: Workflow,
    accent: "#E42527",
  },
  {
    id: "training",
    num: "03",
    title: "Training",
    summary: "Help your team understand and use the configured solutions.",
    detail:
      "Role-specific walkthroughs, clear reference runbooks, and hands-on guidance so your team works with confidence.",
    icon: Users,
    accent: "#226DB4",
  },
  {
    id: "support",
    num: "04",
    title: "Ongoing Support",
    summary: "Assist with questions, adjustments, and continued use after setup.",
    detail:
      "Licensing guidance, configuration adjustments, routine troubleshooting, and continuous workflow improvements.",
    icon: LifeBuoy,
    accent: "#089949",
  },
];

/* =========================================================================
   MAIN COMPONENT: HIGH-IMPACT, BEAUTIFULLY STYLED ZOHO PARTNERSHIP PAGE
   ========================================================================= */

export function ZohoPageContent() {
  const [activeHubProduct, setActiveHubProduct] = useState<string>("crm");

  return (
    <div className="relative min-h-screen w-full bg-[#fbfaff] text-[#14121a] antialiased">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[640px] w-full max-w-[1280px] -translate-x-1/2 overflow-hidden opacity-60"
      >
        <div className="absolute -top-32 left-1/4 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-[#6C5CE7]/15 via-[#b5a4ff]/10 to-transparent blur-[90px]" />
        <div className="absolute top-12 right-1/4 h-[380px] w-[440px] rounded-full bg-gradient-to-bl from-[#226DB4]/12 via-[#6C5CE7]/10 to-transparent blur-[80px]" />
      </div>

      {/* -----------------------------------------------------------------
          SECTION 1: HERO (SPLIT EDITORIAL WITH OPERATIONS BLUEPRINT HUB)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
        id="top"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#6C5CE7]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_20px_-4px_rgba(108,92,231,0.12)] backdrop-blur-md">
                <Image
                  src="/zoho-logo.svg"
                  alt="Zoho logo"
                  width={62}
                  height={20}
                  className="h-4.5 w-auto object-contain"
                  priority
                />
                <span className="h-3.5 w-px bg-neutral-300" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#5946dc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#089949] ring-2 ring-[#089949]/20" />
                  Official Zoho Partner
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[38px] font-semibold tracking-[-0.035em] text-[#14121a] sm:text-[46px] md:text-[54px] lg:text-[58px] leading-[1.08]">
                Your business. Better{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] via-[#7d6df0] to-[#5946dc] bg-clip-text font-serif italic text-transparent">
                  connected
                </span>{" "}
                with Zoho.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.68] text-[#5e586c] sm:text-[17px]">
                As an official Zoho partner, Aram Analytics helps businesses
                configure and customize Zoho solutions to better fit their
                workflows, manage information, and support day-to-day operations.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(108,92,231,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/80 px-5 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-[#6C5CE7]/40 hover:bg-white hover:text-[#5946dc]"
                >
                  <span>View Supported Tools</span>
                  <ArrowDown
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>

            {/* Trust highlights row (Clean Trust Strip from Zoho card) */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <Check size={13} className="text-[#6C5CE7]" />
                  <span>One ecosystem. Built around you.</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <Check size={13} className="text-[#6C5CE7]" />
                  <span>Licensing guidance &amp; setup</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <Check size={13} className="text-[#6C5CE7]" />
                  <span>Ongoing operational support</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Enterprise Operations Blueprint Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-gradient-to-b from-white via-white to-[#f7f5fd] p-6 shadow-[0_20px_50px_-20px_rgba(45,30,85,0.12),0_1px_3px_rgba(0,0,0,0.03)] md:p-8">
                {/* Ambient Card Corner Flare */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br from-[#6C5CE7]/20 to-transparent blur-3xl"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#6C5CE7]" />
                      <span className="text-[11px] font-bold tracking-wider uppercase text-[#14121a]">
                        Aram × Zoho Ecosystem
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#089949]/10 px-2 py-0.5 text-[10.5px] font-semibold text-[#089949]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#089949]" />
                      Verified
                    </span>
                  </div>

                  <p className="mt-3 text-[12.5px] leading-relaxed text-[#5e586c]">
                    Unified data, coordinated workflows, and single-source
                    visibility tailored to your operating model.
                  </p>

                  {/* 3 Solution Quick Nodes */}
                  <div className="mt-5 space-y-3">
                    {/* Zoho CRM Node */}
                    <div
                      onClick={() => setActiveHubProduct("crm")}
                      className={`group flex cursor-pointer items-start gap-3.5 rounded-2xl border p-3.5 transition-all duration-200 ${
                        activeHubProduct === "crm"
                          ? "border-[#E42527]/30 bg-[#E42527]/[0.03] shadow-xs"
                          : "border-neutral-200/70 bg-white/70 hover:border-neutral-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E42527]/20 bg-[#E42527]/10 text-[#E42527]">
                        <Users size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[13.5px] font-bold text-[#14121a]">
                            Zoho CRM
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E42527]">
                            Sales &amp; Pipeline
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11.5px] text-[#5e586c]">
                          Customer data hub, lead scoring, deals, and team follow-ups.
                        </p>
                      </div>
                    </div>

                    {/* Zoho Books Node */}
                    <div
                      onClick={() => setActiveHubProduct("books")}
                      className={`group flex cursor-pointer items-start gap-3.5 rounded-2xl border p-3.5 transition-all duration-200 ${
                        activeHubProduct === "books"
                          ? "border-[#226DB4]/30 bg-[#226DB4]/[0.03] shadow-xs"
                          : "border-neutral-200/70 bg-white/70 hover:border-neutral-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#226DB4]/20 bg-[#226DB4]/10 text-[#226DB4]">
                        <FileSpreadsheet size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[13.5px] font-bold text-[#14121a]">
                            Zoho Books
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#226DB4]">
                            Finance &amp; Ledger
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11.5px] text-[#5e586c]">
                          Invoicing schedules, expenses, audit trails, and financial visibility.
                        </p>
                      </div>
                    </div>

                    {/* Zoho Creator Node */}
                    <div
                      onClick={() => setActiveHubProduct("creator")}
                      className={`group flex cursor-pointer items-start gap-3.5 rounded-2xl border p-3.5 transition-all duration-200 ${
                        activeHubProduct === "creator"
                          ? "border-[#089949]/30 bg-[#089949]/[0.03] shadow-xs"
                          : "border-neutral-200/70 bg-white/70 hover:border-neutral-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#089949]/20 bg-[#089949]/10 text-[#089949]">
                        <Database size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[13.5px] font-bold text-[#14121a]">
                            Zoho Creator
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#089949]">
                            Custom Apps
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11.5px] text-[#5e586c]">
                          Form architectures, Deluge automations, and custom team portals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Blueprint Footnote */}
                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-3.5 text-[11px] text-[#716b7c]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#6C5CE7]" />
                      Role-based security &amp; data governance
                    </span>
                    <a
                      href="#services"
                      className="font-semibold text-[#5946dc] hover:underline"
                    >
                      See services →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 2: ZOHO PRODUCTS (3 CORNERSTONE APPS)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24"
        id="products"
      >
        <Reveal>
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#6C5CE7]">
              <span className="h-0.5 w-5 bg-[#6C5CE7]" aria-hidden="true" />
              <span>ZOHO PRODUCTS</span>
            </div>
            <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[38px] md:text-[42px] leading-tight">
              The right tools for the way you work.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-[#5e586c]">
              We focus our implementation expertise on the cornerstone Zoho
              applications that drive customer relationships, financial clarity,
              and custom internal processes.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ZOHO_PRODUCTS.map((prod, index) => {
            const Icon = prod.icon;
            return (
              <Reveal
                key={prod.id}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-[0_10px_30px_-15px_rgba(45,30,85,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/35 hover:shadow-[0_20px_40px_-15px_rgba(108,92,231,0.12)] md:p-8"
              >
                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: prod.colorBg,
                        borderColor: prod.colorBorder,
                        color: prod.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase"
                      style={{
                        color: prod.color,
                        borderColor: prod.colorBorder,
                        backgroundColor: prod.colorBg,
                      }}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.02em] text-[#14121a]">
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.62] text-[#5e586c]">
                    {prod.description}
                  </p>

                  {/* Feature Pill Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {prod.pillTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-neutral-200/70 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-[#4a4555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Checklist */}
                  <div className="mt-6 space-y-2.5 border-t border-neutral-100 pt-5">
                    {prod.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2.5 text-[12.5px] font-medium text-[#2d2938]"
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: prod.color }}
                          className="shrink-0"
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-100 pt-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors duration-150 hover:underline"
                    style={{ color: prod.color }}
                  >
                    <span>Configure {prod.name}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 3: OUR SERVICES (4 STRUCTURED PROCESS TILES)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24"
        id="services"
      >
        <Reveal>
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#6C5CE7]">
              <span className="h-0.5 w-5 bg-[#6C5CE7]" aria-hidden="true" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[38px] md:text-[42px] leading-tight">
              Configured around your business.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-[#5e586c]">
              From your initial deployment to daily adoption and long-term
              assistance, our services ensure your Zoho system delivers practical
              value without unnecessary complexity.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ZOHO_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                delay={index * 0.07}
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(45,30,85,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:shadow-[0_16px_36px_-12px_rgba(108,92,231,0.12)]"
              >
                <div>
                  {/* Card top */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100/90 transition-colors duration-200 group-hover:bg-[#6C5CE7]/10"
                      style={{ color: service.accent }}
                    >
                      <Icon size={19} />
                    </div>
                    <span className="font-mono text-[12px] font-bold tracking-wider text-[#7c3aed]">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.015em] text-[#14121a]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[13px] font-medium leading-snug text-[#2d2938]">
                    {service.summary}
                  </p>

                  <p className="mt-2 text-[12px] leading-[1.62] text-[#5e586c]">
                    {service.detail}
                  </p>
                </div>

                <div className="mt-6 border-t border-neutral-100 pt-3">
                  <div className="h-1 w-8 rounded-full bg-neutral-200 transition-all duration-300 group-hover:w-full group-hover:bg-[#6C5CE7]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 4: CONTACT CTA PANEL (EXECUTIVE STATEMENT CARD)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 pt-12 pb-24 md:pb-32"
        id="contact"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#6C5CE7]/25 bg-gradient-to-br from-[#13111c] via-[#1a1727] to-[#12101b] p-8 text-white shadow-[0_25px_60px_-15px_rgba(40,25,80,0.35)] md:p-12 lg:p-14">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-radial from-[#6C5CE7]/30 to-transparent blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-radial from-[#226DB4]/20 to-transparent blur-3xl"
            />

            <div className="relative z-10 max-w-[700px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#b5a4ff]">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>YOUR ZOHO TEAM, IN YOUR CORNER</span>
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-white sm:text-[36px] md:text-[42px] leading-tight">
                Let&apos;s find the right Zoho solution for you.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c5c1d3] sm:text-[16px]">
                Tell us about your business processes and the challenges you want
                to solve. We&apos;ll discuss which of our supported Zoho solutions
                may fit your needs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-6 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-[0_8px_24px_-6px_rgba(155,140,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(155,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff]"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="mailto:contact@aramanalytics.com?subject=Zoho%20Partner%20Inquiry%20from%20Website"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  <Mail size={15} />
                  <span>Email Us Directly</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-4 text-[12px] text-[#a49fba]">
                <CheckCircle2 size={14} className="text-[#089949]" />
                <span>Official Zoho Partner · Real guidance with no pressure · Confidential discussion</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
