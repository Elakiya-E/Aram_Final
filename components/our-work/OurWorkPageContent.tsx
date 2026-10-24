"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./our-work.css";

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
   PROJECT PORTFOLIO DATA (THE 8 REAL UPLOADED WEBSITE DELIVERABLES)
   ========================================================================= */

type CategoryKey = "all" | "websites" | "civic-edtech" | "business" | "ai" | "engineering";

interface ProjectItem {
  number: string;
  id: string;
  name: string;
  categoryKeys: CategoryKey[];
  categoryLabel: string;
  description: string;
  seoKeywords: string;
  keyFeatures?: string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  browserUrl: string;
  destinationUrl?: string;
  linkText?: string;
  isFeatured?: boolean;
}

const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    id: "kottravai",
    name: "Kottravai",
    categoryKeys: ["websites"],
    categoryLabel: "E-commerce & Sustainable Products",
    description:
      "An e-commerce experience showcasing sustainable products, handmade jewellery, coconut-shell creations, and curated gift hampers.",
    seoKeywords:
      "sustainable products online, handmade jewellery, coconut-shell products, gift hampers",
    keyFeatures: [
      "E-commerce Storefront",
      "Sustainable Crafts",
      "Catalog Management",
      "Curated Gift Hampers",
    ],
    imageSrc: "/images/kottravai.png",
    imageAlt:
      "Kottravai e-commerce website showcasing sustainable handmade jewellery, coconut-shell creations, and curated gift hampers",
    imageWidth: 1871,
    imageHeight: 890,
    browserUrl: "kottravai.in",
    destinationUrl: "/#contact?project=kottravai",
    linkText: "Explore Project",
    isFeatured: true,
  },
  {
    number: "02",
    id: "adsyncro",
    name: "Adsyncro",
    categoryKeys: ["ai", "business"],
    categoryLabel: "AI & Marketing Technology",
    description:
      "An AI-powered marketing and growth automation platform designed to help businesses improve marketing workflows and manage growth activities.",
    seoKeywords:
      "AI-powered marketing, marketing automation platform, digital marketing technology",
    keyFeatures: [
      "Marketing Workflows",
      "Growth Automation",
      "AI Campaign Optimization",
      "Performance Analytics",
    ],
    imageSrc: "/images/Adsyncro.png",
    imageAlt:
      "Adsyncro AI-powered performance marketing and growth automation platform website interface",
    imageWidth: 1860,
    imageHeight: 911,
    browserUrl: "adsyncro.co.uk",
    destinationUrl: "/ai-automation",
    linkText: "Explore AI Solution",
    isFeatured: false,
  },
  {
    number: "03",
    id: "sankalpa-counseling",
    name: "Sankalpa Counseling",
    categoryKeys: ["websites"],
    categoryLabel: "Healthcare & Wellness Website",
    description:
      "A counseling website presenting therapy services, emotional wellbeing resources, and consultation information in a calm, welcoming digital experience.",
    seoKeywords:
      "counseling website development, therapy website design, wellness digital platforms",
    keyFeatures: [
      "Therapy Services",
      "Consultation Booking",
      "Wellbeing Resources",
      "Patient Experience",
    ],
    imageSrc: "/images/sankalpa.png",
    imageAlt:
      "Sankalpa Counseling therapy services and emotional wellbeing consultation platform",
    imageWidth: 1860,
    imageHeight: 911,
    browserUrl: "sankalpacounseling.com",
    destinationUrl: "/#contact?project=sankalpa",
    linkText: "Explore Website",
    isFeatured: false,
  },
  {
    number: "04",
    id: "tensemi",
    name: "Tensemi",
    categoryKeys: ["engineering", "ai"],
    categoryLabel: "Semiconductor & Electronics",
    description:
      "A technology website presenting semiconductor design, PCB development, and electronics engineering capabilities.",
    seoKeywords:
      "semiconductor website, PCB development, electronics engineering",
    keyFeatures: [
      "Semiconductor Design",
      "PCB Development",
      "Electronics Engineering",
      "Technical Specs",
    ],
    imageSrc: "/images/Tensemi.png",
    imageAlt:
      "Tensemi semiconductor design, PCB development, and electronics engineering platform",
    imageWidth: 1836,
    imageHeight: 912,
    browserUrl: "tensemi.com",
    destinationUrl: "/#contact?project=tensemi",
    linkText: "Explore Engineering Site",
    isFeatured: false,
  },
  {
    number: "05",
    id: "prime-power-solutions",
    name: "Prime Power Solutions LLC",
    categoryKeys: ["engineering", "business"],
    categoryLabel: "Engineering & Infrastructure",
    description:
      "A corporate website showcasing underground pipeline works, infrastructure services, and engineering capabilities.",
    seoKeywords:
      "pipeline infrastructure, engineering company website, underground pipeline services",
    keyFeatures: [
      "Pipeline Infrastructure",
      "Engineering Services",
      "Project Portfolio",
      "Corporate Inquiries",
    ],
    imageSrc: "/images/Primepower.png",
    imageAlt:
      "Prime Power Solutions LLC underground pipeline infrastructure and engineering works corporate website",
    imageWidth: 1851,
    imageHeight: 907,
    browserUrl: "prime-powers.com",
    destinationUrl: "/#contact?project=prime-power",
    linkText: "Explore Infrastructure Site",
    isFeatured: false,
  },
  {
    number: "06",
    id: "ananthan-ayyasamy",
    name: "Ananthan Ayyasamy",
    categoryKeys: ["business"],
    categoryLabel: "Personal Brand & Social Impact",
    description:
      "A personal profile website highlighting initiatives, community impact, and a vision connecting global opportunities with local development.",
    seoKeywords:
      "personal portfolio website, leadership profile, community initiatives",
    keyFeatures: [
      "Leadership Profile",
      "Community Impact",
      "Global Opportunities",
      "Social Development",
    ],
    imageSrc: "/images/aanathan.png",
    imageAlt:
      "Ananthan Ayyasamy personal leadership profile, community impact, and global initiatives website",
    imageWidth: 1821,
    imageHeight: 892,
    browserUrl: "ananthanayyasamy.com",
    destinationUrl: "/#contact?project=ananthan-ayyasamy",
    linkText: "Explore Profile",
    isFeatured: false,
  },
  {
    number: "07",
    id: "jananayagam",
    name: "Jananayagam",
    categoryKeys: ["civic-edtech", "websites", "ai", "business"],
    categoryLabel: "Civic Tech · Web Application",
    description:
      "A citizen-focused digital platform designed to help people report civic issues, track grievances, and stay connected with local community development.",
    seoKeywords:
      "citizen engagement platform, civic tech, grievance tracking, public issue reporting",
    keyFeatures: [
      "Issue reporting",
      "Grievance tracking",
      "Citizen engagement",
      "AI-assisted support",
    ],
    imageSrc: "/images/jananayagam.png",
    imageAlt:
      "Jananayagam citizen engagement and civic grievance tracking web platform interface",
    imageWidth: 1907,
    imageHeight: 897,
    browserUrl: "jananayagam.org",
    destinationUrl: "/#contact?project=jananayagam",
    linkText: "Explore Platform",
    isFeatured: false,
  },
  {
    number: "08",
    id: "eduvalues",
    name: "EduValues",
    categoryKeys: ["civic-edtech", "websites", "business"],
    categoryLabel: "EdTech · Digital Learning",
    description:
      "An interactive educational platform designed to make learning engaging through digital experiences, interactive content, and student-focused learning activities.",
    seoKeywords:
      "interactive learning platform, EdTech digital learning, student-focused educational activities, digital content",
    keyFeatures: [
      "Interactive learning experiences",
      "Educational content",
      "Engaging user interfaces",
      "Digital learning resources",
    ],
    imageSrc: "/images/eduvalues.jpeg",
    imageAlt:
      "EduValues interactive educational learning experiences and digital resources platform",
    imageWidth: 1600,
    imageHeight: 802,
    browserUrl: "eduvalues.in",
    destinationUrl: "/#contact?project=eduvalues",
    linkText: "Explore Learning Platform",
    isFeatured: false,
  },
];

/* =========================================================================
   COMPACT CATEGORY FILTER TABS
   ========================================================================= */

const FILTER_TABS: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "websites", label: "Websites & E-commerce" },
  { key: "civic-edtech", label: "Civic & EdTech" },
  { key: "business", label: "Business Platforms" },
  { key: "ai", label: "AI & Technology" },
  { key: "engineering", label: "Engineering & Infrastructure" },
];

/* =========================================================================
   MAIN COMPONENT: DIGITAL EXPERIENCES IN ACTION PORTFOLIO
   ========================================================================= */

export function OurWorkPageContent() {
  const reducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);

  const filteredProjects =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.categoryKeys.includes(activeFilter));

  const isAllFilter = activeFilter === "all";
  const featuredProject = PORTFOLIO_PROJECTS[0]; // Kottravai
  const gridProjects = isAllFilter
    ? filteredProjects.filter((p) => !p.isFeatured)
    : filteredProjects;

  const activeHeroProject = PORTFOLIO_PROJECTS[activeHeroIndex] || PORTFOLIO_PROJECTS[0];

  return (
    <div className="relative min-h-screen w-full bg-[#fbfaff] text-[#14121a] antialiased">
      {/* SECTION 1: HERO — ASYMMETRIC PROJECT SHOWCASE */}
      <section
        className="work-hero-section relative mx-auto w-full max-w-[1320px] px-6"
        id="top"
      >
        <div className="work-ambient-glow" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left side — Project introduction */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/20 bg-white/95 px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase text-[#5946dc] shadow-[0_2px_10px_-2px_rgba(108,92,231,0.08)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7]" />
                <span>SELECTED WORK / OUR PORTFOLIO</span>
              </div>
            </Reveal>

            {/* Main headline: Bold modern typography with restrained lavender accent */}
            <Reveal delay={0.06}>
              <h1 className="mt-4 text-[38px] font-bold tracking-[-0.035em] text-[#14121a] sm:text-[46px] md:text-[50px] lg:text-[52px] xl:text-[56px] leading-[1.08]">
                Ideas made real.
                <span className="block mt-1 font-medium text-[#5946dc] tracking-tight">
                  Digital experiences that work.
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.12}>
              <p className="mt-4.5 text-[15.5px] leading-[1.68] text-[#5e586c] sm:text-[17px] max-w-[500px]">
                Explore websites, e-commerce experiences, digital platforms, and technology solutions built for businesses and organizations.
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("projects");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#14121a] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_6px_20px_-4px_rgba(20,18,26,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#231e34] hover:shadow-[0_10px_24px_-4px_rgba(20,18,26,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  <span>Explore Our Projects</span>
                  <ArrowDown
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </a>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/90 px-5 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-2xs backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6C5CE7]/40 hover:bg-white hover:text-[#5946dc]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Compact portfolio indicator */}
            <Reveal delay={0.24}>
              <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-[12.5px] text-[#5e586c]">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-[#10b981]" />
                  <span className="font-semibold text-[#14121a]">
                    {PORTFOLIO_PROJECTS.length} Featured Projects
                  </span>
                </div>
                <span className="text-neutral-300" aria-hidden="true">•</span>
                <div className="flex items-center gap-1.5 font-medium text-[#5e586c]">
                  <span>Websites</span>
                  <span className="text-neutral-300">·</span>
                  <span>Digital Platforms</span>
                  <span className="text-neutral-300">·</span>
                  <span>Civic &amp; EdTech</span>
                  <span className="text-neutral-300">·</span>
                  <span>AI &amp; Technology</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right side — Visual project showcase */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="flex flex-col">
                {/* Switcher selector header featuring all 6 projects + prev/next controls */}
                <div className="mb-2.5 flex items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-neutral-500">
                    <Sparkles size={12} className="text-[#6C5CE7]" />
                    <span>Project Showcase</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      0{activeHeroIndex + 1} / 0{PORTFOLIO_PROJECTS.length}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveHeroIndex(
                            (prev) =>
                              (prev - 1 + PORTFOLIO_PROJECTS.length) %
                              PORTFOLIO_PROJECTS.length
                          )
                        }
                        aria-label="Previous project"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 hover:border-[#6C5CE7]/40 hover:text-[#5946dc] transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveHeroIndex(
                            (prev) => (prev + 1) % PORTFOLIO_PROJECTS.length
                          )
                        }
                        aria-label="Next project"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 hover:border-[#6C5CE7]/40 hover:text-[#5946dc] transition-colors cursor-pointer"
                      >
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project selector pills for all 6 projects */}
                <div
                  className="portfolio-hero-pills mb-4"
                  role="tablist"
                  aria-label="Portfolio showcase projects"
                >
                  {PORTFOLIO_PROJECTS.map((proj, idx) => {
                    const isActive = activeHeroIndex === idx;
                    return (
                      <button
                        key={proj.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveHeroIndex(idx)}
                        className={`portfolio-hero-pill-btn ${isActive ? "is-active" : ""}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-[#b5a4ff]" : "bg-neutral-300"
                          }`}
                        />
                        <span>{proj.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Main Featured Browser Showcase (Clean & Unobstructed) */}
                <div className="portfolio-hero-showcase relative w-full">
                  {/* Ambient lavender backdrop glow */}
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#6C5CE7]/10 via-[#8b5cf6]/06 to-transparent blur-2xl"
                    aria-hidden="true"
                  />

                  {/* Main Featured Browser Card */}
                  <div className="portfolio-hero-main-card">
                    {/* Browser Chrome Header */}
                    <div className="portfolio-browser-chrome flex items-center justify-between px-3.5 py-2.5 bg-[#fcfbfe] border-b border-neutral-200/80">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>

                      {/* URL address bar */}
                      <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 font-mono text-[11px] text-neutral-600 border border-neutral-200/70 shadow-2xs">
                        <Lock size={10} className="text-emerald-600" />
                        <span>https://{activeHeroProject.browserUrl}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700 border border-emerald-200/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live Client Site</span>
                        </span>
                      </div>
                    </div>

                    {/* Dedicated Screenshot Viewport beneath Toolbar */}
                    <div className="portfolio-hero-viewport relative w-full overflow-hidden bg-[#f8f7fc] group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeHeroProject.id}
                          initial={reducedMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.22, ease }}
                          className="w-full flex items-start justify-center"
                        >
                          <Image
                            src={activeHeroProject.imageSrc}
                            alt={activeHeroProject.imageAlt}
                            width={activeHeroProject.imageWidth}
                            height={activeHeroProject.imageHeight}
                            priority
                            sizes="(max-width: 768px) 100vw, 55vw"
                            className="portfolio-hero-img block w-full h-auto max-w-full object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Dedicated Project Title & Details Bar (Beneath Viewport, NOT overlapping image!) */}
                    <div className="portfolio-hero-title-bar px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-t border-neutral-200/70 flex items-center justify-between">
                      <div className="min-w-0 pr-3">
                        <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#6C5CE7] block truncate">
                          {activeHeroProject.categoryLabel}
                        </span>
                        <span className="text-[15px] sm:text-[17px] font-bold text-[#14121a] tracking-tight truncate block">
                          {activeHeroProject.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                          href={activeHeroProject.destinationUrl || "/#contact"}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#6C5CE7]/10 hover:bg-[#6C5CE7]/15 px-3 py-1.5 text-[11.5px] font-semibold text-[#5946dc] transition-all"
                        >
                          <span>Explore</span>
                          <ArrowUpRight size={13} />
                        </Link>
                        <a
                          href="#projects"
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById("projects");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="inline-flex items-center gap-1 rounded-lg border border-neutral-200/80 bg-white hover:bg-neutral-50 px-2.5 py-1.5 text-[11.5px] font-medium text-neutral-600 transition-all"
                        >
                          <span>Case Details</span>
                          <ArrowDown size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY & DELIVERY PRINCIPLES */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-8 md:py-12" id="philosophy">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
              <Sparkles size={13} className="text-[#6C5CE7]" />
              <span>DELIVERY COMMITMENT</span>
            </div>

            <h2 className="mt-2.5 text-[28px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[36px] md:text-[38px] leading-tight">
              Thoughtful design. Practical engineering.
            </h2>

            <p className="mt-3.5 text-[15px] leading-[1.7] text-[#5e586c] sm:text-[16.5px]">
              Every client collaboration is grounded in genuine business constraints, user-first
              clarity, and reliable architecture built to perform.
            </p>
          </div>
        </Reveal>

        {/* 3 Delivery Tenets */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7]">
                <Users size={19} />
              </div>
              <h3 className="mt-4 text-[16.5px] font-semibold text-[#14121a]">
                Audience-Centered Design
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                Crafting intuitive digital experiences that feel clear, fast, and easy to navigate
                for real people.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6]">
                <Layers size={19} />
              </div>
              <h3 className="mt-4 text-[16.5px] font-semibold text-[#14121a]">
                Fit-for-Purpose Architecture
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                From high-conversion e-commerce storefronts to deep tech engineering platforms,
                we choose the right tools for the objective.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981]">
                <ShieldCheck size={19} />
              </div>
              <h3 className="mt-4 text-[16.5px] font-semibold text-[#14121a]">
                End-to-End Production
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5e586c]">
                Full-cycle execution spanning concept strategy, technical development,
                SEO foundations, and live deployment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORK GALLERY */}
      <section
        className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-18"
        id="projects"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-neutral-200/70">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
                <Workflow size={13} className="text-[#6C5CE7]" />
                <span>PROJECT GALLERY</span>
              </div>

              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-[#14121a] sm:text-[38px] md:text-[42px] leading-tight">
                Selected Work &amp; Case Studies
              </h2>

              <p className="mt-2 text-[15px] leading-relaxed text-[#5e586c]">
                Real website deployments delivered by Aram Analytics across diverse industries.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="portfolio-filter-bar" role="tablist" aria-label="Project category filter">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.key;
                const count =
                  tab.key === "all"
                    ? PORTFOLIO_PROJECTS.length
                    : PORTFOLIO_PROJECTS.filter((p) => p.categoryKeys.includes(tab.key)).length;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`portfolio-filter-btn ${isActive ? "is-active" : ""}`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            FEATURED PROJECT 01 (Kottravai) — EXPANSIVE SHOWCASE
            ========================================================================= */}
        {isAllFilter && (
          <div className="mt-10">
            <Reveal>
              <article className="portfolio-featured-card group overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Large Screenshot Half (7 columns) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200/70 overflow-hidden bg-neutral-50/60 p-4 sm:p-6">
                    <div className="portfolio-browser-frame shadow-sm">
                      {/* Browser Chrome Header */}
                      <div className="portfolio-browser-chrome">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        </div>
                        <div className="rounded-full bg-white px-3 py-0.5 font-mono text-[11px] text-neutral-600 border border-neutral-200/60 shadow-2xs">
                          {featuredProject.browserUrl}
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Screenshot Image Viewport */}
                      <div className="portfolio-screenshot-wrapper">
                        <Image
                          src={featuredProject.imageSrc}
                          alt={featuredProject.imageAlt}
                          width={featuredProject.imageWidth}
                          height={featuredProject.imageHeight}
                          priority
                          sizes="(max-width: 768px) 100vw, 55vw"
                          className="portfolio-screenshot-img block w-full h-auto max-w-full object-contain object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details Half (5 columns) */}
                  <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="portfolio-num-badge">
                          PROJECT {featuredProject.number}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-semibold text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>Delivered Website</span>
                        </span>
                      </div>

                      <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#6C5CE7] block mb-1.5">
                        {featuredProject.categoryLabel}
                      </span>

                      <h3 className="text-[26px] sm:text-[30px] font-bold tracking-tight text-[#14121a]">
                        {featuredProject.name}
                      </h3>

                      <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#5e586c]">
                        {featuredProject.description}
                      </p>

                      {featuredProject.keyFeatures && featuredProject.keyFeatures.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {featuredProject.keyFeatures.map((feat) => (
                            <span
                              key={feat}
                              className="inline-flex items-center rounded-md bg-[#6C5CE7]/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-[#5946dc] border border-[#6C5CE7]/15"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 rounded-xl border border-neutral-200/70 bg-[#fbfaff] p-3.5 text-[12px] text-neutral-600">
                        <span className="font-semibold text-neutral-800 block mb-1">
                          Platform Focus
                        </span>
                        <span>{featuredProject.seoKeywords}</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-neutral-200/60 flex items-center justify-between">
                      <Link
                        href={featuredProject.destinationUrl || "/#contact"}
                        className="group/link inline-flex items-center gap-2 font-semibold text-[13.5px] text-[#5946dc] hover:text-[#4332bc] transition-colors"
                      >
                        <span>{featuredProject.linkText || "Explore Project"} ↗</span>
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>

                      <span className="text-[11px] font-mono text-neutral-400">
                        Featured Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        )}

        {/* =========================================================================
            CURATED BALANCED GALLERY GRID (REMAINING PROJECTS)
            ========================================================================= */}
        <div className="mt-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout={!reducedMotion}
              className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8"
            >
              {gridProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout={!reducedMotion}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease }}
                  className="portfolio-grid-card group"
                >
                  <div>
                    {/* Visual Screenshot Frame */}
                    <div className="p-4 sm:p-5 bg-neutral-50/60 border-b border-neutral-200/70">
                      <div className="portfolio-browser-frame shadow-2xs">
                        {/* Browser Chrome Header */}
                        <div className="portfolio-browser-chrome">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-400/80" />
                            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                          </div>
                          <div className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[10.5px] text-neutral-600 border border-neutral-200/60">
                            {project.browserUrl}
                          </div>
                          <div className="w-6" />
                        </div>

                        {/* Screenshot Viewport */}
                        <div className="portfolio-screenshot-wrapper">
                          <Image
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            width={project.imageWidth}
                            height={project.imageHeight}
                            sizes="(max-width: 768px) 100vw, 45vw"
                            className="portfolio-screenshot-img block w-full h-auto max-w-full object-contain object-top"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="portfolio-num-badge">
                          PROJECT {project.number}
                        </span>

                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6C5CE7]">
                          {project.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-[21px] font-bold tracking-tight text-[#14121a]">
                        {project.name}
                      </h3>

                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5e586c]">
                        {project.description}
                      </p>

                      {project.keyFeatures && project.keyFeatures.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {project.keyFeatures.map((feat) => (
                            <span
                              key={feat}
                              className="inline-flex items-center rounded-md bg-[#6C5CE7]/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-[#5946dc] border border-[#6C5CE7]/15"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Link Footer */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={project.destinationUrl || "/#contact"}
                        className="group/btn inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5946dc] hover:text-[#4332bc] transition-colors"
                      >
                        <span>{project.linkText || "Explore Project"} ↗</span>
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </Link>

                      <span className="text-[11px] font-mono text-neutral-400">
                        Aram Analytics
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4: CLOSING PROJECT INTAKE CTA */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-12 md:py-20" id="contact">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#6C5CE7]/25 bg-gradient-to-br from-[#13111c] via-[#1a1727] to-[#12101b] p-8 text-white shadow-[0_20px_50px_-15px_rgba(40,25,80,0.35)] md:p-12 lg:p-14">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#8b5cf6]/25 to-transparent blur-3xl"
            />

            <div className="relative z-10 max-w-[700px]">
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-widest uppercase text-[#b5a4ff]">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>YOUR NEXT DIGITAL VENTURE</span>
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-white sm:text-[36px] md:text-[42px] leading-tight">
                Your idea could be our next project.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c5c1d3] sm:text-[16.5px]">
                Have a website, application, or business challenge in mind? Let&apos;s
                explore what we can build together.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-6 py-3.5 text-[13.5px] font-semibold text-[#14121a] shadow-[0_6px_20px_-4px_rgba(155,140,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(155,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  <span>Explore What We Do</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Internal Links */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11.5px] text-[#a49fba]">
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#10b981]" />
                  <span>Real deliverables · Thoughtful architecture · Dedicated support</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/ai-automation" className="hover:text-white transition-colors">
                    AI &amp; Automation →
                  </Link>
                  <span>•</span>
                  <Link href="/zoho" className="hover:text-white transition-colors">
                    Zoho Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
