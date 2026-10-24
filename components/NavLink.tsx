"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  onHover?: (label: string | null) => void;
  onFocus?: (label: string | null) => void;
  hoveredLabel: string | null;
  children?: React.ReactNode;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  onClick?: () => void;
};

export function NavLink({
  href,
  label,
  isActive,
  onHover,
  onFocus,
  hoveredLabel,
  children,
  ariaHasPopup,
  ariaExpanded,
  onClick,
}: NavLinkProps) {
  const reducedMotion = useReducedMotion();
  const isHovered = hoveredLabel === label;
  const showPill = isHovered || isActive;

  return (
    <div className="relative">
      <Link
        href={href}
        onMouseEnter={() => onHover?.(label)}
        onMouseLeave={() => onHover?.(null)}
        onFocus={() => onFocus?.(label)}
        onBlur={() => onFocus?.(null)}
        onClick={onClick}
        aria-haspopup={ariaHasPopup ? "menu" : undefined}
        aria-expanded={ariaHasPopup ? ariaExpanded : undefined}
        className="relative z-10 flex items-center gap-1.5 px-2.5 xl:px-3.5 2xl:px-4 py-2 text-[14px] xl:text-[15px] 2xl:text-[16px] font-medium tracking-tight text-neutral-600 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-none"
      >
        {showPill && !reducedMotion && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 -z-10 rounded-full bg-[#9b8cff]/10"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 38,
              mass: 0.8,
            }}
          />
        )}
        <span className="relative z-10">{label}</span>
        {children}
        {isActive && !isHovered && (
          <motion.span
            layoutId="nav-active-dot"
            className="relative z-10 ml-0.5 block h-1.5 w-1.5 rounded-full bg-[#826cff]"
            aria-hidden="true"
          />
        )}
      </Link>
    </div>
  );
}
