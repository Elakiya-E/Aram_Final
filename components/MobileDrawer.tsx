"use client";

import {
  X,
  ChevronDown,
  ArrowUpRight,
  Bot,
  Cloud,
  Database,
  Workflow,
  Blocks,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "./nav-config";
import { ZohoLogoMobile } from "./ZohoLogo";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Workflow,
  Bot,
  Database,
  Blocks,
  Cloud,
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
      delay: 0.06 + i * 0.06,
      duration: 0.45,
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
            className="fixed inset-0 z-[55] bg-black/35 backdrop-blur-[2px] lg:hidden"
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
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[72px] z-[60] bottom-4 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/98 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 lg:hidden dark:border-white/10 dark:bg-[#0c0c0e]/96"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/80 bg-white text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 pb-4" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {navItems.map((item, i) => {
                  const hasMega = !!item.megaMenu;
                  const isExpanded = expandedKey === item.label;
                  const isZoho = item.variant === "zoho";

                  return (
                    <motion.li
                      key={item.label}
                      custom={i}
                      variants={linkVariants}
                      initial={reducedMotion ? false : "closed"}
                      animate="open"
                      className="border-b border-neutral-200/70 first:border-t dark:border-white/7"
                    >
                      {isZoho ? (
                        <ZohoLogoMobile onClick={onClose} />
                      ) : hasMega ? (
                        <>
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="flex-1 py-4 text-[17px] font-medium text-neutral-900 dark:text-neutral-100"
                            >
                              {item.label}
                            </Link>
                            <button
                              onClick={() =>
                                setExpandedKey(isExpanded ? null : item.label)
                              }
                              aria-expanded={isExpanded}
                              aria-controls={`mobile-accordion-${item.label}`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/5"
                            >
                              <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <ChevronDown size={18} />
                              </motion.span>
                            </button>
                          </div>
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                id={`mobile-accordion-${item.label}`}
                                role="region"
                                initial={reducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
                                animate={reducedMotion ? { height: "auto" } : { height: "auto", opacity: 1 }}
                                exit={reducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <ul className="flex flex-col gap-1 pb-4 pl-2">
                                  {item.megaMenu?.map((sub) => {
                                    const Icon = iconMap[sub.icon] || Workflow;
                                    return (
                                      <li key={sub.title}>
                                        <Link
                                          href={sub.href}
                                          onClick={onClose}
                                          className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-[#9b8cff]/8 dark:hover:bg-white/5"
                                        >
                                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9b8cff]/12 text-[#6C5CE7] dark:text-[#b5a8ff]">
                                            <Icon size={17} />
                                          </span>
                                          <span className="min-w-0">
                                            <span className="block text-[14px] font-medium text-neutral-900 dark:text-neutral-100">
                                              {sub.title}
                                            </span>
                                            <span className="mt-0.5 block text-[11.5px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                                              {sub.description}
                                            </span>
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block py-4 text-[17px] font-medium text-neutral-900 dark:text-neutral-100"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-neutral-200/70 p-4 dark:border-white/7">
              <Link
                href="/#contact"
                onClick={onClose}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-5 py-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(108,92,231,0.55)] transition-all duration-300 hover:shadow-[0_14px_36px_-8px_rgba(108,92,231,0.7)] hover:-translate-y-0.5"
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
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/60 text-neutral-700 transition-colors duration-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10 lg:hidden"
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
