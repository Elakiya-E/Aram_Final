"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function ZohoLogo() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reducedMotion
          ? {}
          : {
              y: -1,
            }
      }
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group relative shrink-0"
    >
      <Link
        href="#zoho"
        aria-label="Zoho Partner"
        className="flex items-center rounded-full border border-[#6C5CE7]/15 bg-[#6C5CE7]/10 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#5a4ad6] transition-all duration-200 hover:border-[#6C5CE7]/25 hover:bg-[#6C5CE7]/15 hover:text-[#4a3ac0] dark:text-[#b5a8ff] dark:hover:text-[#c9bfff] dark:hover:bg-[#6C5CE7]/20 dark:border-[#6C5CE7]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]/30"
      >
        Zoho
      </Link>
    </motion.div>
  );
}

export function ZohoPartnerDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-2 hidden h-4 w-px shrink-0 bg-neutral-200 lg:block dark:bg-white/10"
    />
  );
}

export function ZohoLogoMobile({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="#zoho"
      onClick={onClick}
      className="flex items-center gap-3 py-4"
    >
      <span className="inline-flex items-center rounded-full border border-[#6C5CE7]/15 bg-[#6C5CE7]/10 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#5a4ad6] dark:text-[#b5a8ff]">
        Zoho
      </span>
      <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        Partner
      </span>
    </Link>
  );
}
