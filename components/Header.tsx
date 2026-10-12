"use client";

import { ArrowUpRight, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "./NavLink";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer, HamburgerButton } from "./MobileDrawer";
import { ZohoLogo, ZohoPartnerDivider } from "./ZohoLogo";
import {
  NAV_ITEMS,
  SHOW_ANNOUNCEMENT_BAR,
  ANNOUNCEMENT_TEXT,
  ANNOUNCEMENT_HREF,
} from "./nav-config";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

const SCROLL_SHOW_THRESHOLD = 40;
const HEADER_SHRINK_SCROLL = 40;

function useScrollState() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | "none">("none");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const current = window.scrollY || window.pageYOffset;
      setScrollY(current);
      if (Math.abs(current - lastScrollY.current) > 4) {
        setScrollDir(current > lastScrollY.current ? "down" : "up");
        lastScrollY.current = current;
      }
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, scrollDir };
}

function AnnouncementBar({
  visible,
  onDismiss,
}: {
  visible: boolean;
  onDismiss: () => void;
}) {
  const reducedMotion = useReducedMotion();
  if (!visible || !SHOW_ANNOUNCEMENT_BAR) return null;

  return (
    <motion.div
      initial={reducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
      animate={reducedMotion ? { height: "auto" } : { height: "auto", opacity: 1 }}
      exit={reducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="flex items-center justify-center gap-3 px-4 py-2">
        <Link
          href={ANNOUNCEMENT_HREF}
          className="group inline-flex items-center gap-2 rounded-full border border-[#9b8cff]/20 bg-gradient-to-r from-[#9b8cff]/12 via-[#6C5CE7]/8 to-[#9b8cff]/12 px-4 py-1.5 text-[11.5px] font-medium text-neutral-700 backdrop-blur-md transition-all duration-200 hover:border-[#9b8cff]/30 hover:from-[#9b8cff]/18 hover:to-[#9b8cff]/18 dark:text-neutral-200"
        >
          <span className="text-[#826cff] dark:text-[#b5a8ff]">
            <Sparkles size={11} />
          </span>
          <span className="tracking-tight">{ANNOUNCEMENT_TEXT}</span>
          <ArrowUpRight
            size={11}
            className="transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
        <button
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-400 transition-colors duration-200 hover:bg-white/60 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <X size={12} />
        </button>
      </div>
    </motion.div>
  );
}

function MagneticCTAButton() {
  const reducedMotion = useReducedMotion();
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      const maxPull = 7;
      setPos({
        x: Math.max(-maxPull, Math.min(maxPull, relX * 0.35)),
        y: Math.max(-maxPull, Math.min(maxPull, relY * 0.35)),
      });
    },
    [reducedMotion],
  );

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={btnRef}
      href="/#contact"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reducedMotion ? undefined : { x: pos.x, y: pos.y }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#b6a9ff] via-[#9b8cff] to-[#6C5CE7] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8cff] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0b]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#9b8cff]/50 to-[#6C5CE7]/50 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
      />
      <span className="relative z-10">Let&apos;s talk</span>
      <ArrowUpRight
        size={14}
        className="relative z-10 transition-transform duration-300 ease-out group-hover:rotate-[-12deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  );
}

function LogoMark() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      whileHover={reducedMotion ? {} : { rotate: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
    >
      <Image
        alt="Aram Analytics"
        className="h-[28px] w-auto object-contain"
        height={28}
        priority
        src={siteLogo}
      />
    </motion.div>
  );
}

export function Header() {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const { scrollY, scrollDir } = useScrollState();
  const [activeHash, setActiveHash] = useState<string>("#top");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(SHOW_ANNOUNCEMENT_BAR);
  const whatWeDoRef = useRef<HTMLDivElement>(null);

  const isShrunk = scrollY > HEADER_SHRINK_SCROLL;
  const isHidden =
    scrollY > SCROLL_SHOW_THRESHOLD + 80 && scrollDir === "down" && !megaOpen && !mobileOpen;

  useEffect(() => {
    function onHashChange() {
      setActiveHash(window.location.hash || "#top");
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const megaItem = NAV_ITEMS.find((n) => !!n.megaMenu);

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          height:
            announcementVisible && SHOW_ANNOUNCEMENT_BAR
              ? "calc(var(--header-total, 102px) + 44px)"
              : "var(--header-total, 102px)",
          transition: reducedMotion
            ? "none"
            : "height 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      <header
        role="banner"
        className="fixed inset-x-0 top-0 z-[60]"
        style={
          {
            ["--header-total" as never]: "calc(var(--header-h, 78px) + 24px)",
          } as React.CSSProperties
        }
      >
        <AnnouncementBar
          visible={announcementVisible}
          onDismiss={() => setAnnouncementVisible(false)}
        />

        <div className="px-4 pt-4">
          <motion.nav
            aria-label="Primary"
            initial={false}
            animate={
              reducedMotion
                ? {}
                : {
                    y: isHidden ? -120 : 0,
                    opacity: isHidden ? 0 : 1,
                    width: isShrunk ? "min(1120px, 96%)" : "min(1200px, 100%)",
                    paddingLeft: isShrunk ? 14 : 18,
                    paddingRight: isShrunk ? 14 : 18,
                    paddingTop: isShrunk ? 8 : 10,
                    paddingBottom: isShrunk ? 8 : 10,
                    backdropFilter: isShrunk ? "blur(22px)" : "blur(16px)",
                    boxShadow: isShrunk
                      ? "0 16px 50px -16px rgba(40,30,80,0.22), 0 6px 20px -10px rgba(108,92,231,0.18), 0 1px 0 rgba(255,255,255,0.85) inset, 0 0 0 1px rgba(108,92,231,0.08) inset"
                      : "0 10px 40px -14px rgba(40,30,80,0.16), 0 1px 0 rgba(255,255,255,0.85) inset, 0 0 0 1px rgba(108,92,231,0.05) inset",
                  }
            }
            transition={
              reducedMotion
                ? {}
                : {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="mx-auto flex items-center justify-between rounded-2xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-[#0f0f11]/78 backdrop-blur-[16px]"
          >
            <div className="flex items-center gap-1">
              <Link href="/" aria-label="Aram Analytics home" className="shrink-0">
                <LogoMark />
              </Link>
            </div>

            <div className="relative hidden items-center lg:flex" ref={whatWeDoRef}>
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/about"
                    ? pathname === "/about"
                    : item.href === "/what-we-do"
                    ? pathname === "/what-we-do"
                    : pathname === "/" &&
                      (activeHash === item.href ||
                        activeHash === item.href.replace("/", ""));
                const isMegaTrigger = !!item.megaMenu;
                const isZoho = item.variant === "zoho";
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => {
                      if (isMegaTrigger) setMegaOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isMegaTrigger && megaOpen) setMegaOpen(false);
                    }}
                    className="flex items-center"
                  >
                    {isZoho ? (
                      <>
                        <ZohoLogo />
                        <ZohoPartnerDivider />
                      </>
                    ) : (
                      <NavLink
                        href={item.href}
                        label={item.label}
                        isActive={isActive}
                        hoveredLabel={hoveredNav}
                        onHover={setHoveredNav}
                        onFocus={setHoveredNav}
                        ariaHasPopup={isMegaTrigger}
                        ariaExpanded={isMegaTrigger ? megaOpen : undefined}
                        onClick={() => setMegaOpen(false)}
                      />
                    )}
                    {isMegaTrigger && megaItem?.megaMenu && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2">
                        <MegaMenu
                          isOpen={megaOpen}
                          items={megaItem.megaMenu}
                          onClose={() => setMegaOpen(false)}
                          anchorRef={whatWeDoRef}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:block">
                <MagneticCTAButton />
              </div>
              <HamburgerButton
                isOpen={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              />
            </div>
          </motion.nav>
        </div>

        <MobileDrawer
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          navItems={NAV_ITEMS}
        />
      </header>
    </>
  );
}
