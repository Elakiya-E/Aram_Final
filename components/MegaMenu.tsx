"use client";

import {
  Bot,
  Cloud,
  Database,
  Workflow,
  Blocks,
  Layers,
  Boxes,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { MegaMenuItem } from "./nav-config";
import { WORKFLOW_AUDIT_OFFER } from "@/content/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Workflow,
  Bot,
  Database,
  Blocks,
  Cloud,
  Layers,
  Boxes,
};

type MegaMenuProps = {
  isOpen: boolean;
  items: MegaMenuItem[];
  onClose: () => void;
  anchorRef?: React.RefObject<HTMLElement | null>;
};

const staggeredFadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function MegaMenu({ isOpen, items, onClose, anchorRef }: MegaMenuProps) {
  const reducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        anchorRef?.current &&
        !anchorRef.current.contains(target)
      ) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="menu"
          aria-label="What we do services"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.985 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.985 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 mt-3 w-[680px] max-w-[92vw] -translate-x-1/2"
        >
          <div className="rounded-2xl border border-white/80 bg-white/95 p-4 backdrop-blur-2xl shadow-[0_20px_60px_-12px_rgba(40,30,80,0.22),0_8px_24px_-8px_rgba(108,92,231,0.14)] ring-1 ring-[#6C5CE7]/5">
            <div className="grid grid-cols-[1fr_220px] gap-4">
              <div className="grid grid-cols-2 gap-2">
                {items.map((item, i) => {
                  const Icon = (item.icon ? iconMap[item.icon] : undefined) || Workflow;
                  return (
                    <motion.div
                      key={item.title}
                      custom={i}
                      variants={staggeredFadeIn}
                      initial={reducedMotion ? false : "hidden"}
                      animate="show"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        role="menuitem"
                        className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[#9b8cff]/8"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9b8cff]/12 text-[#6C5CE7] transition-colors duration-200 group-hover:bg-[#9b8cff]/18">
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-medium text-neutral-900">
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-[11.5px] leading-relaxed text-neutral-500">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                custom={items.length}
                variants={staggeredFadeIn}
                initial={reducedMotion ? false : "hidden"}
                animate="show"
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#9b8cff]/15 via-[#6C5CE7]/10 to-transparent p-4 ring-1 ring-[#9b8cff]/15"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#9b8cff]/20 blur-2xl"
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="mb-2.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#826cff]/18 text-[#6C5CE7]">
                      <Sparkles size={14} />
                    </span>
                    <h4 className="text-[13px] font-semibold leading-snug text-neutral-900">
                      {WORKFLOW_AUDIT_OFFER.title}
                    </h4>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-neutral-500">
                      {WORKFLOW_AUDIT_OFFER.description}
                    </p>
                  </div>
                  <Link
                    href={WORKFLOW_AUDIT_OFFER.href}
                    onClick={onClose}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6C5CE7] transition-colors duration-200 hover:text-[#5943c9]"
                  >
                    {WORKFLOW_AUDIT_OFFER.ctaText}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
