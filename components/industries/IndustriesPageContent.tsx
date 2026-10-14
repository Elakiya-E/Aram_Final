"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Radio,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Zap,
  Sliders,
  Workflow,
  Cpu,
  Layers,
  ArrowRightCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IndustryFocusLens } from "./IndustryFocusLens";

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
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   12 INDUSTRIES DATA (EXACT TITLES & DESCRIPTIONS PRESERVED)
   ========================================================================= */

type IndustryItem = {
  num: string;
  title: string;
  description: string;
  domain: "finance" | "operations" | "systems" | "civic";
  domainLabel: string;
  icon: typeof Landmark;
  color: string;
  colorBg: string;
  colorBorder: string;
  portfolioRef?: {
    name: string;
    note: string;
    href: string;
  };
};

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    num: "01",
    title: "Banking & Financial Services",
    description:
      "Digital solutions for financial workflows, business reporting, data management, and operational efficiency.",
    domain: "finance",
    domainLabel: "Commerce & Finance",
    icon: Landmark,
    color: "#4f46e5",
    colorBg: "rgba(79, 70, 229, 0.07)",
    colorBorder: "rgba(79, 70, 229, 0.22)",
    portfolioRef: {
      name: "Financial Data Hubs",
      note: "Connected audit trails, reconciliations & Zoho Books pipelines",
      href: "/zoho",
    },
  },
  {
    num: "02",
    title: "Healthcare",
    description:
      "Technology for healthcare workflows, digital platforms, information management, and service accessibility.",
    domain: "systems",
    domainLabel: "Infrastructure & Systems",
    icon: HeartPulse,
    color: "#e11d48",
    colorBg: "rgba(225, 29, 72, 0.07)",
    colorBorder: "rgba(225, 29, 72, 0.22)",
    portfolioRef: {
      name: "Patient Workflow Tools",
      note: "HIPAA-conscious data pipelines & appointment architectures",
      href: "/what-we-do",
    },
  },
  {
    num: "03",
    title: "Retail & E-commerce",
    description:
      "Digital storefronts, inventory systems, and business tools designed to support retail operations and online commerce.",
    domain: "finance",
    domainLabel: "Commerce & Finance",
    icon: ShoppingBag,
    color: "#8b5cf6",
    colorBg: "rgba(139, 92, 246, 0.07)",
    colorBorder: "rgba(139, 92, 246, 0.22)",
    portfolioRef: {
      name: "Kottravai & PrincessWardrobe",
      note: "Custom web showcases, high-touch cart flow & catalog systems",
      href: "/about",
    },
  },
  {
    num: "04",
    title: "Manufacturing",
    description:
      "Software and automation solutions for operational workflows, production information, and business visibility.",
    domain: "operations",
    domainLabel: "Operations & Supply",
    icon: Factory,
    color: "#0284c7",
    colorBg: "rgba(2, 132, 199, 0.07)",
    colorBorder: "rgba(2, 132, 199, 0.22)",
    portfolioRef: {
      name: "Tensemi Systems",
      note: "Engineering specifications & real-time telemetry architectures",
      href: "/about",
    },
  },
  {
    num: "05",
    title: "Telecommunications",
    description:
      "Connected digital systems, data visibility, and software solutions for communication-driven operations.",
    domain: "systems",
    domainLabel: "Infrastructure & Systems",
    icon: Radio,
    color: "#7c3aed",
    colorBg: "rgba(124, 58, 237, 0.07)",
    colorBorder: "rgba(124, 58, 237, 0.22)",
    portfolioRef: {
      name: "Voice of Tenkasi",
      note: "High-volume media distribution & community network gateways",
      href: "/about",
    },
  },
  {
    num: "06",
    title: "Energy",
    description:
      "Digital tools for information management, operational monitoring, and data-informed decision-making.",
    domain: "operations",
    domainLabel: "Operations & Supply",
    icon: Zap,
    color: "#d97706",
    colorBg: "rgba(217, 119, 6, 0.07)",
    colorBorder: "rgba(217, 119, 6, 0.22)",
    portfolioRef: {
      name: "Operational Monitoring",
      note: "Sensor data aggregation & predictive facility runbooks",
      href: "/what-we-do",
    },
  },
  {
    num: "07",
    title: "Travel & Tourism",
    description:
      "Booking platforms, digital experiences, and management systems that support travel-related services.",
    domain: "systems",
    domainLabel: "Infrastructure & Systems",
    icon: Compass,
    color: "#0d9488",
    colorBg: "rgba(13, 148, 136, 0.07)",
    colorBorder: "rgba(13, 148, 136, 0.22)",
    portfolioRef: {
      name: "Namma Puducherry",
      note: "Integrated tourist discovery, vendor directory & regional portal",
      href: "/about",
    },
  },
  {
    num: "08",
    title: "Public Sector",
    description:
      "Digital platforms that help public organizations improve access to information and streamline service workflows.",
    domain: "civic",
    domainLabel: "Public & Social Impact",
    icon: Building2,
    color: "#2563eb",
    colorBg: "rgba(37, 99, 235, 0.07)",
    colorBorder: "rgba(37, 99, 235, 0.22)",
    portfolioRef: {
      name: "Civic Gateways",
      note: "Public information accessibility, multilingual portals & compliance",
      href: "/about",
    },
  },
  {
    num: "09",
    title: "Logistics & Supply Chain",
    description:
      "Inventory management, tracking systems, and digital workflows for better operational coordination.",
    domain: "operations",
    domainLabel: "Operations & Supply",
    icon: Truck,
    color: "#ea580c",
    colorBg: "rgba(234, 88, 12, 0.07)",
    colorBorder: "rgba(234, 88, 12, 0.22)",
    portfolioRef: {
      name: "Dispatch & Inventory Sync",
      note: "Stock level thresholds, barcode integrations & route tracking",
      href: "/what-we-do",
    },
  },
  {
    num: "10",
    title: "Education",
    description:
      "Educational websites, learning platforms, and digital tools that support institutions and learners.",
    domain: "civic",
    domainLabel: "Public & Social Impact",
    icon: GraduationCap,
    color: "#059669",
    colorBg: "rgba(5, 150, 105, 0.07)",
    colorBorder: "rgba(5, 150, 105, 0.22)",
    portfolioRef: {
      name: "Vaazhai Campus",
      note: "Academic incubation hubs, community runbooks & learner portals",
      href: "/about",
    },
  },
  {
    num: "11",
    title: "NGOs & Nonprofits",
    description:
      "Digital platforms for outreach, information sharing, program coordination, and community engagement.",
    domain: "civic",
    domainLabel: "Public & Social Impact",
    icon: HeartHandshake,
    color: "#db2777",
    colorBg: "rgba(219, 39, 119, 0.07)",
    colorBorder: "rgba(219, 39, 119, 0.22)",
    portfolioRef: {
      name: "Bairavi Foundation",
      note: "Charitable outreach platforms, donor transparency & program metrics",
      href: "/about",
    },
  },
  {
    num: "12",
    title: "Local Businesses",
    description:
      "Practical digital solutions that help businesses strengthen their online presence and simplify daily operations.",
    domain: "finance",
    domainLabel: "Commerce & Finance",
    icon: Store,
    color: "#6C5CE7",
    colorBg: "rgba(108, 92, 231, 0.07)",
    colorBorder: "rgba(108, 92, 231, 0.22)",
    portfolioRef: {
      name: "Regional Business Core",
      note: "CRM setups, local SEO, online booking & automated client messaging",
      href: "/zoho",
    },
  },
];

const DOMAIN_FILTERS = [
  { id: "all", label: "All Sectors (12)" },
  { id: "finance", label: "Finance & Commerce (3)" },
  { id: "operations", label: "Operations & Supply (3)" },
  { id: "systems", label: "Infrastructure & Systems (3)" },
  { id: "civic", label: "Public & Social Impact (3)" },
] as const;

export function IndustriesPageContent() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const filteredIndustries =
    selectedFilter === "all"
      ? INDUSTRIES_DATA
      : INDUSTRIES_DATA.filter((item) => item.domain === selectedFilter);

  return (
    <div className="relative min-h-screen w-full bg-[#fbfaff] text-[#14121a] antialiased">
      {/* Ambient background atmosphere (restrained lavender glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[640px] w-full max-w-[1300px] -translate-x-1/2 overflow-hidden opacity-55"
      >
        <div className="absolute -top-32 left-1/4 h-[440px] w-[500px] rounded-full bg-gradient-to-br from-[#6C5CE7]/14 via-[#b5a4ff]/10 to-transparent blur-[90px]" />
        <div className="absolute top-12 right-1/4 h-[380px] w-[460px] rounded-full bg-gradient-to-bl from-[#6366f1]/12 via-[#6C5CE7]/08 to-transparent blur-[80px]" />
      </div>

      {/* -----------------------------------------------------------------
          SECTION 1: HERO (STRONG TYPOGRAPHIC WITH ABSTRACT SPECTRUM LENS)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
        id="top"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typographic Manifesto */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C5CE7]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_18px_-4px_rgba(108,92,231,0.12)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#5946dc]">
                  Industries in Focus
                </span>
                <span className="h-3 w-px bg-neutral-300" aria-hidden="true" />
                <span className="text-[11px] font-medium text-neutral-500">
                  Cross-Discipline Technology
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[38px] font-semibold tracking-[-0.035em] text-[#14121a] sm:text-[46px] md:text-[54px] lg:text-[58px] leading-[1.08]">
                Technology Solutions for Every Industry
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.68] text-[#5e586c] sm:text-[17.5px]">
                We help businesses, institutions, and organizations simplify
                operations, connect systems, and grow with tailored software, AI,
                automation, and data solutions.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/what-we-do"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#5946dc] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(108,92,231,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="#industries-showcase"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/80 px-5 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-[#6C5CE7]/40 hover:bg-white hover:text-[#5946dc]"
                >
                  <span>View 12 Industries</span>
                  <ArrowDown
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <CheckCircle2 size={13} className="text-[#6C5CE7]" />
                  <span>12 Sector Domains</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <CheckCircle2 size={13} className="text-[#6C5CE7]" />
                  <span>Pragmatic Systems Engineering</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-[#4a4555] shadow-xs">
                  <CheckCircle2 size={13} className="text-[#6C5CE7]" />
                  <span>End-to-End Ownership</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Abstract Sector Matrix Component */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <IndustryFocusLens />
            </Reveal>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 2: INTRODUCTION (BUILT AROUND YOUR INDUSTRY)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24"
        id="introduction"
      >
        <div className="rounded-3xl border border-neutral-200/90 bg-gradient-to-br from-white via-white to-[#faf8fe] p-8 shadow-[0_12px_36px_-15px_rgba(45,30,85,0.06)] md:p-12 lg:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#6C5CE7]">
                  <span className="h-0.5 w-5 bg-[#6C5CE7]" aria-hidden="true" />
                  <span>TAILORED ARCHITECTURES</span>
                </div>
                <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[40px] leading-tight">
                  Built Around Your Industry. Designed for Your Goals.
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5e586c] sm:text-[16.5px]">
                  Every industry has unique challenges. Aram Analytics brings
                  together software development, intelligent automation, and
                  data-driven solutions to help organizations improve workflows and
                  build scalable digital experiences.
                </p>
              </Reveal>
            </div>

            {/* 4 Architectural Strategy Points */}
            <div className="lg:col-span-5">
              <div className="space-y-3.5">
                <Reveal delay={0.08}>
                  <div className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-xs">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6C5CE7]/10 text-[#6C5CE7]">
                      <Cpu size={16} />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-semibold text-[#14121a]">
                        Industry-specific technology solutions
                      </h3>
                      <p className="mt-0.5 text-[12px] text-[#5e586c]">
                        Tailored data models and logic mapped directly to sector regulations.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-xs">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0284c7]/10 text-[#0284c7]">
                      <Layers size={16} />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-semibold text-[#14121a]">
                        Business software solutions
                      </h3>
                      <p className="mt-0.5 text-[12px] text-[#5e586c]">
                        High-performance web, mobile, and internal administrative tooling.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-xs">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/10 text-[#7c3aed]">
                      <Workflow size={16} />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-semibold text-[#14121a]">
                        AI and automation services
                      </h3>
                      <p className="mt-0.5 text-[12px] text-[#5e586c]">
                        Eliminating repetitive data handoffs across fragmented tools.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 3: 12 INDUSTRIES WE SERVE (EDITORIAL “INDUSTRIES IN FOCUS”)
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:py-24"
        id="industries-showcase"
      >
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#6C5CE7]">
                <span className="h-0.5 w-5 bg-[#6C5CE7]" aria-hidden="true" />
                <span>INDUSTRIES WE SERVE</span>
              </div>
              <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[38px] md:text-[42px] leading-tight">
                Industries We Serve
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[#5e586c]">
                Discover how Aram Analytics delivers targeted software,
                automation, and system architectures across key operational domains.
              </p>
            </div>

            {/* Total Count Pill */}
            <div className="flex items-center gap-2 self-start rounded-full border border-neutral-200/90 bg-white px-4 py-2 text-[12px] font-semibold text-neutral-600 shadow-xs md:self-end">
              <span className="font-mono text-[13px] font-bold text-[#5946dc]">
                12
              </span>
              <span>Confirmed Sectors</span>
            </div>
          </div>
        </Reveal>

        {/* Domain Filter Pills */}
        <Reveal delay={0.06}>
          <div className="mt-8 flex flex-wrap gap-2 border-b border-neutral-200/70 pb-5">
            {DOMAIN_FILTERS.map((f) => {
              const active = selectedFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFilter(f.id)}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#14121a] text-white shadow-xs"
                      : "border border-neutral-200/80 bg-white text-[#5e586c] hover:border-neutral-300 hover:text-[#14121a]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Visually Varied Editorial Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredIndustries.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndustry === item.num;

            return (
              <Reveal
                key={item.num}
                delay={index * 0.05}
                className="industries-card-hover group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-[0_8px_24px_-12px_rgba(45,30,85,0.05)] md:p-8"
                style={{
                  borderColor: isHovered ? item.colorBorder : undefined,
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndustry(item.num)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  {/* Card Header: Number + Icon Squircle + Directional Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="industry-icon-glow flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300"
                        style={{
                          backgroundColor: item.colorBg,
                          borderColor: item.colorBorder,
                          color: item.color,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[13px] font-bold tracking-wider text-neutral-400">
                        {item.num}.
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider uppercase"
                        style={{
                          backgroundColor: item.colorBg,
                          color: item.color,
                          border: `1px solid ${item.colorBorder}`,
                        }}
                      >
                        {item.domainLabel}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="industry-arrow-reveal text-neutral-700"
                      />
                    </div>
                  </div>

                  {/* Industry Title */}
                  <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-[#14121a] group-hover:text-[#5946dc] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-[#5e586c]">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Link & Portfolio Reference */}
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  {item.portfolioRef ? (
                    <Link
                      href={item.portfolioRef.href}
                      className="group/link flex items-center justify-between text-[11.5px] text-[#716b7c] hover:text-[#5946dc] transition-colors duration-150"
                    >
                      <span className="truncate font-medium">
                        Reference:{" "}
                        <strong className="text-[#14121a] font-semibold">
                          {item.portfolioRef.name}
                        </strong>
                      </span>
                      <ArrowRight
                        size={12}
                        className="shrink-0 transition-transform duration-150 group-hover/link:translate-x-1 text-[#6C5CE7]"
                      />
                    </Link>
                  ) : (
                    <Link
                      href="/#contact"
                      className="group/link flex items-center justify-between text-[11.5px] text-[#716b7c] hover:text-[#5946dc] transition-colors duration-150"
                    >
                      <span className="font-medium">
                        Consult on {item.title}
                      </span>
                      <ArrowRight
                        size={12}
                        className="shrink-0 transition-transform duration-150 group-hover/link:translate-x-1 text-[#6C5CE7]"
                      />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 4: CLOSING CTA
          ----------------------------------------------------------------- */}
      <section
        className="relative mx-auto w-full max-w-[1240px] px-6 pt-10 pb-24 md:pb-32"
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
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-radial from-[#6366f1]/20 to-transparent blur-3xl"
            />

            <div className="relative z-10 max-w-[700px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#b5a4ff]">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>YOUR INDUSTRY. YOUR CHALLENGES. OUR SOLUTIONS.</span>
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-white sm:text-[36px] md:text-[42px] leading-tight">
                Your Industry. Your Challenges. Our Solutions.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c5c1d3] sm:text-[16.5px]">
                Tell us what your organization needs. We&apos;ll help you explore
                the right technology for your goals.
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

                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-4 text-[12px] text-[#a49fba]">
                <CheckCircle2 size={14} className="text-[#10b981]" />
                <span>
                  No pitch decks · No pressure · Pragmatic engineering discussion
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
