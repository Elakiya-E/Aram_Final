"use client";

import {
  Users,
  FileSpreadsheet,
  Database,
  Sliders,
  Wrench,
  Bot,
  Layers,
  BarChart3,
  Boxes,
  Cloud,
  Landmark,
  Activity,
  ShoppingBag,
  Factory,
  Radio,
  Zap,
  Plane,
  Building,
  Truck,
  GraduationCap,
  HeartHandshake,
  Store,
  Globe,
  LayoutGrid,
  Building2,
  Cpu,
  Sparkles,
  MessageSquareCode,
  Cable,
  Compass,
  Eye,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { NavDropdown } from "./nav-config";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  FileSpreadsheet,
  Database,
  Sliders,
  Wrench,
  Bot,
  Layers,
  BarChart3,
  Boxes,
  Cloud,
  Landmark,
  Activity,
  ShoppingBag,
  Factory,
  Radio,
  Zap,
  Plane,
  Building,
  Truck,
  GraduationCap,
  HeartHandshake,
  Store,
  Globe,
  LayoutGrid,
  Building2,
  Cpu,
  Sparkles,
  MessageSquareCode,
  Cable,
  Compass,
  Eye,
  ShieldCheck,
  Mail,
  Workflow,
};

type NavDropdownCardProps = {
  isOpen: boolean;
  dropdown: NavDropdown;
  alignment?: "left" | "center" | "right";
  onClose: () => void;
  triggerId?: string;
};

export function NavDropdownCard({
  isOpen,
  dropdown,
  alignment = "center",
  onClose,
  triggerId,
}: NavDropdownCardProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const alignmentClasses =
    alignment === "left"
      ? "left-0"
      : alignment === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  const isIndustries = dropdown.layout === "industries-grid";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={cardRef}
          role="menu"
          aria-labelledby={triggerId}
          className={`absolute top-full z-[70] pt-2.5 ${alignmentClasses} pointer-events-auto`}
        >
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -6, scale: 0.985 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.985 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border border-[#6C5CE7]/16 bg-white/95 p-5 backdrop-blur-2xl shadow-[0_24px_56px_-16px_rgba(35,25,75,0.18),0_4px_16px_-4px_rgba(108,92,231,0.08)] ring-1 ring-[#6C5CE7]/5 dark:border-[#6C5CE7]/22 dark:bg-[#0f0f12]/95 ${
              isIndustries ? "w-[560px]" : "w-[540px]"
            } max-w-[94vw]`}
          >
            {/* Dropdown Header: Kicker, Title, Description, and Direct Page Link */}
            <div className="mb-4 flex items-start justify-between gap-4 border-b border-neutral-100 pb-3.5 dark:border-white/6">
              <div className="max-w-[420px]">
                <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-widest uppercase text-[#5946dc] dark:text-[#b5a8ff]">
                  <span className="h-1 w-1 rounded-full bg-[#6C5CE7]" aria-hidden="true" />
                  <span>{dropdown.kicker}</span>
                </div>
                <h3 className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-neutral-900 dark:text-neutral-100">
                  {dropdown.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#5e586c] dark:text-neutral-400">
                  {dropdown.description}
                </p>
              </div>

              <Link
                href={dropdown.pageHref}
                onClick={onClose}
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#6C5CE7]/15 bg-[#6C5CE7]/6 px-3 py-1.5 text-[11.5px] font-medium text-[#5946dc] transition-all duration-200 hover:border-[#6C5CE7]/30 hover:bg-[#6C5CE7]/12 dark:border-[#6C5CE7]/25 dark:text-[#b5a8ff] dark:hover:bg-[#6C5CE7]/20"
              >
                <span>{dropdown.pageCta}</span>
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Layout Variant 1: Compact 2-Column List (For Industries) */}
            {isIndustries ? (
              <div className="grid grid-cols-[1fr_200px] gap-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {dropdown.links.map((link) => {
                    const Icon = (link.icon && iconMap[link.icon]) || Building;
                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={onClose}
                        role="menuitem"
                        className="group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition-all duration-150 hover:bg-[#9b8cff]/10 dark:hover:bg-white/5"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#9b8cff]/12 text-[#6C5CE7] transition-colors duration-150 group-hover:bg-[#6C5CE7] group-hover:text-white dark:text-[#b5a8ff]">
                          <Icon size={12.5} />
                        </span>
                        <span className="truncate text-[12px] font-medium text-neutral-800 transition-colors duration-150 group-hover:text-[#5946dc] dark:text-neutral-200 dark:group-hover:text-white">
                          {link.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Right Callout Banner */}
                {dropdown.featured && (
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#9b8cff]/18 bg-gradient-to-br from-[#9b8cff]/14 via-[#6C5CE7]/8 to-transparent p-3.5 dark:from-[#9b8cff]/12 dark:via-[#6C5CE7]/6">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#5946dc] dark:text-[#b5a8ff]">
                        {dropdown.featured.kicker}
                      </span>
                      <h4 className="mt-1 text-[12.5px] font-semibold text-neutral-900 dark:text-neutral-100">
                        {dropdown.featured.title}
                      </h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#5e586c] dark:text-neutral-400">
                        {dropdown.featured.description}
                      </p>
                    </div>

                    <Link
                      href={dropdown.featured.href}
                      onClick={onClose}
                      className="group mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#5946dc] transition-colors duration-200 hover:text-[#4534b8] dark:text-[#b5a8ff]"
                    >
                      <span>{dropdown.featured.ctaText}</span>
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* Layout Variant 2: Standard Sublinks List + Featured Callout */
              <div className="grid grid-cols-[1fr_210px] gap-4">
                <div className="flex flex-col gap-1">
                  {dropdown.links.map((link) => {
                    const Icon = (link.icon && iconMap[link.icon]) || Sparkles;
                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={onClose}
                        role="menuitem"
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-150 hover:bg-[#9b8cff]/8 dark:hover:bg-white/5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#9b8cff]/12 text-[#6C5CE7] transition-colors duration-150 group-hover:bg-[#6C5CE7] group-hover:text-white dark:text-[#b5a8ff]">
                          <Icon size={15} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-medium text-neutral-900 transition-colors duration-150 group-hover:text-[#5946dc] dark:text-neutral-100 dark:group-hover:text-[#b5a8ff]">
                              {link.title}
                            </span>
                            {link.badge && (
                              <span className="rounded-sm bg-[#6C5CE7]/8 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-[#5946dc] dark:bg-[#6C5CE7]/15 dark:text-[#b5a8ff]">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          {link.description && (
                            <p className="mt-0.5 line-clamp-1 text-[11.5px] text-neutral-500 dark:text-neutral-400">
                              {link.description}
                            </p>
                          )}
                        </div>
                        <ArrowUpRight
                          size={13}
                          className="shrink-0 text-neutral-300 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6C5CE7] group-hover:opacity-100 dark:text-neutral-600 dark:group-hover:text-[#b5a8ff]"
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Right Callout Banner */}
                {dropdown.featured && (
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#9b8cff]/18 bg-gradient-to-br from-[#9b8cff]/14 via-[#6C5CE7]/8 to-transparent p-4 dark:from-[#9b8cff]/12 dark:via-[#6C5CE7]/6">
                    <div
                      aria-hidden="true"
                      className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#9b8cff]/20 blur-xl pointer-events-none"
                    />
                    <div className="relative">
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#5946dc] dark:text-[#b5a8ff]">
                        {dropdown.featured.kicker}
                      </span>
                      <h4 className="mt-1.5 text-[13px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                        {dropdown.featured.title}
                      </h4>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-[#5e586c] dark:text-neutral-400">
                        {dropdown.featured.description}
                      </p>
                    </div>

                    <Link
                      href={dropdown.featured.href}
                      onClick={onClose}
                      className="group relative mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#5946dc] transition-colors duration-200 hover:text-[#4534b8] dark:text-[#b5a8ff]"
                    >
                      <span>{dropdown.featured.ctaText}</span>
                      <ArrowRight
                        size={12.5}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
