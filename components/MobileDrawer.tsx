"use client";

import {
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
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
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "./nav-config";

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

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

const linkVariants = {
  closed: { opacity: 0, y: 16 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 + i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
  const reducedMotion = useReducedMotion();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKey);
      setExpandedKey(null);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[65] bg-black/40 backdrop-blur-[3px] lg:hidden"
          />

          <motion.div
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: "-92%", clipPath: "inset(0 0 100% 0 round 24px)" }
            }
            animate={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, clipPath: "inset(0 0 0 0 round 24px)" }
            }
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: "-20%", clipPath: "inset(0 0 100% 0 round 24px)" }
            }
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[68px] z-[70] bottom-4 flex flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/98 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] ring-1 ring-black/5 lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 p-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#5946dc]">
                NAVIGATION MENU
              </span>
              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/80 bg-white text-neutral-600 transition-colors duration-200 hover:bg-neutral-100"
              >
                <X size={17} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-2" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {navItems.map((item, i) => {
                  const isExpanded = expandedKey === item.label;
                  const isZoho = item.variant === "zoho";
                  const dropdown = item.dropdown;
                  const isIndustries = dropdown?.layout === "industries-grid";

                  return (
                    <motion.li
                      key={item.label}
                      custom={i}
                      variants={linkVariants}
                      initial={reducedMotion ? false : "closed"}
                      animate="open"
                      className="border-b border-neutral-200/60 py-1 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          {isZoho ? (
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="inline-flex items-center rounded-full border border-[#6C5CE7]/20 bg-[#6C5CE7]/10 px-3 py-1 text-[13px] font-bold uppercase tracking-wider text-[#5a4ad6]"
                            >
                              Zoho
                            </Link>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="py-3 text-[16px] font-semibold tracking-tight text-neutral-900"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>

                        {dropdown && (
                          <button
                            type="button"
                            onClick={() => setExpandedKey(isExpanded ? null : item.label)}
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-accordion-${item.label}`}
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-neutral-500 transition-colors duration-200 hover:bg-[#9b8cff]/10 hover:text-[#6C5CE7]"
                          >
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <ChevronDown size={18} />
                            </motion.span>
                          </button>
                        )}
                      </div>

                      {/* Accordion Region with Preview Sublinks */}
                      {dropdown && (
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              id={`mobile-accordion-${item.label}`}
                              role="region"
                              initial={reducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
                              animate={reducedMotion ? { height: "auto" } : { height: "auto", opacity: 1 }}
                              exit={reducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 rounded-2xl border border-[#6C5CE7]/14 bg-[#fbfaff] p-3.5">
                                <div className="mb-2.5 flex items-start justify-between gap-2 border-b border-neutral-200/50 pb-2">
                                  <div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#5946dc]">
                                      {dropdown.kicker}
                                    </span>
                                    <h4 className="text-[13.5px] font-semibold text-neutral-900">
                                      {dropdown.title}
                                    </h4>
                                    <p className="mt-0.5 text-[11.5px] text-neutral-500">
                                      {dropdown.description}
                                    </p>
                                  </div>
                                  <Link
                                    href={dropdown.pageHref}
                                    onClick={onClose}
                                    className="shrink-0 rounded-lg border border-[#6C5CE7]/20 bg-[#6C5CE7]/10 px-2.5 py-1 text-[11px] font-semibold text-[#5946dc]"
                                  >
                                    View
                                  </Link>
                                </div>

                                {isIndustries ? (
                                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                                    {dropdown.links.map((sub) => {
                                      const Icon = (sub.icon && iconMap[sub.icon]) || Building;
                                      return (
                                        <Link
                                          key={sub.title}
                                          href={sub.href}
                                          onClick={onClose}
                                          className="flex items-center gap-2 rounded-lg p-1.5 text-[11.5px] font-medium text-neutral-800 transition-colors hover:bg-white hover:text-[#5946dc]"
                                        >
                                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#9b8cff]/15 text-[#6C5CE7]">
                                            <Icon size={11} />
                                          </span>
                                          <span className="truncate">{sub.title}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <ul className="flex flex-col gap-1 pt-1">
                                    {dropdown.links.map((sub) => {
                                      const Icon = (sub.icon && iconMap[sub.icon]) || Sparkles;
                                      return (
                                        <li key={sub.title}>
                                          <Link
                                            href={sub.href}
                                            onClick={onClose}
                                            className="flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-white"
                                          >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#9b8cff]/12 text-[#6C5CE7]">
                                              <Icon size={14} />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                              <span className="block text-[13px] font-medium text-neutral-900">
                                                {sub.title}
                                              </span>
                                              {sub.description && (
                                                <span className="block text-[11px] text-neutral-500">
                                                  {sub.description}
                                                </span>
                                              )}
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}

                                {dropdown.featured && (
                                  <div className="mt-3 rounded-xl border border-[#9b8cff]/20 bg-[#6C5CE7]/6 p-2.5">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[11.5px] font-semibold text-neutral-900">
                                        {dropdown.featured.title}
                                      </span>
                                      <Link
                                        href={dropdown.featured.href}
                                        onClick={onClose}
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5946dc]"
                                      >
                                        <span>{dropdown.featured.ctaText}</span>
                                        <ArrowRight size={11} />
                                      </Link>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-neutral-200/70 p-4">
              <Link
                href="/#contact"
                onClick={onClose}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(108,92,231,0.55)] transition-all duration-300 hover:shadow-[0_14px_36px_-8px_rgba(108,92,231,0.7)] hover:-translate-y-0.5"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const baseEase = [0.22, 1, 0.36, 1] as [number, number, number, number];
  const transition = reducedMotion
    ? { duration: 0.01, ease: baseEase }
    : { duration: 0.35, ease: baseEase };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/70 text-neutral-700 transition-colors duration-200 hover:bg-white lg:hidden"
    >
      <span className="relative block h-3.5 w-4">
        <motion.span
          transition={transition}
          animate={
            isOpen
              ? { top: 6, rotate: 45 }
              : { top: 0, rotate: 0 }
          }
          className="absolute left-0 h-0.5 w-full rounded-full bg-current"
          style={{ top: 0 }}
        />
        <motion.span
          transition={transition}
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current"
        />
        <motion.span
          transition={transition}
          animate={
            isOpen
              ? { top: 6, rotate: -45 }
              : { top: 12, rotate: 0 }
          }
          className="absolute left-0 h-0.5 w-full rounded-full bg-current"
          style={{ top: 12 }}
        />
      </span>
    </button>
  );
}
