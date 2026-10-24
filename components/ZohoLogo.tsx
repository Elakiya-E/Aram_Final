"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type ZohoLogoProps = {
  onClick?: () => void;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

export function ZohoLogo({
  onClick,
  ariaHasPopup,
  ariaExpanded,
  onFocus,
  onBlur,
}: ZohoLogoProps = {}) {
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
        href="/zoho"
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-haspopup={ariaHasPopup ? "menu" : undefined}
        aria-expanded={ariaHasPopup ? ariaExpanded : undefined}
        aria-label="Zoho Partner"
        className="flex items-center rounded-full border border-[#6C5CE7]/20 bg-[#6C5CE7]/10 px-2.5 xl:px-3.5 py-1 xl:py-1.5 text-[12.5px] xl:text-[13.5px] font-bold uppercase tracking-[0.07em] text-[#5a4ad6] transition-all duration-200 hover:border-[#6C5CE7]/30 hover:bg-[#6C5CE7]/15 hover:text-[#4a3ac0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]/30"
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
      className="mx-1.5 xl:mx-2.5 hidden h-5 w-px shrink-0 bg-neutral-200 lg:block"
    />
  );
}

export function ZohoLogoMobile({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/zoho"
      onClick={onClick}
      className="flex items-center gap-3 py-4"
    >
      <span className="inline-flex items-center rounded-full border border-[#6C5CE7]/15 bg-[#6C5CE7]/10 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#5a4ad6]">
        Zoho
      </span>
      <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">
        Partner
      </span>
    </Link>
  );
}
