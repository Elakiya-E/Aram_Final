"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CSSProperties, useMemo } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Partner = {
  name: string;
  src: string;
  width: number;
  height: number;
  targetHeight: number;
  maxWidth?: number;
};

const PARTNERS: Partner[] = [
  {
    name: "Tensemi",
    src: "/partners/tensemi.png",
    width: 738,
    height: 252,
    targetHeight: 34,
    maxWidth: 130,
  },
  {
    name: "Google",
    src: "/partners/google-removebg-preview.png",
    width: 257,
    height: 90,
    targetHeight: 36,
    maxWidth: 125,
  },
  {
    name: "Microsoft",
    src: "/partners/Microsoft-removebg-preview.png",
    width: 399,
    height: 93,
    targetHeight: 32,
    maxWidth: 140,
  },
  {
    name: "AWS",
    src: "/partners/aws-removebg-preview.png",
    width: 411,
    height: 249,
    targetHeight: 38,
    maxWidth: 85,
  },
  {
    name: "Zoho",
    src: "/partners/zoho-removebg-preview.png",
    width: 450,
    height: 196,
    targetHeight: 38,
    maxWidth: 110,
  },
];

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
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reducedMotion
          ? {}
          : {
              y: -4,
              scale: 1.03,
            }
      }
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="partner-card group relative flex shrink-0 items-center justify-center w-[220px] sm:w-[240px] md:w-[260px] h-[120px] sm:h-[130px] md:h-[140px] rounded-2xl border border-white/8 dark:border-white/10 bg-white/90 dark:bg-[#131316]/80 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)] transition-[box-shadow] duration-300 hover:shadow-[0_12px_40px_-16px_rgba(104,84,216,0.18)] dark:hover:shadow-[0_14px_48px_-12px_rgba(155,137,255,0.18)] backdrop-blur-[4px] outline outline-1 outline-transparent"
      style={{ ["--card-i" as never]: index }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(155,137,255,0.08), transparent 60%)",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center px-6">
        <div className="flex h-12 w-full items-center justify-center">
          <Image
            src={partner.src}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            priority={index < 3}
            className="w-auto object-contain transition-[filter,transform] duration-300 group-hover:scale-[1.05]"
            style={{
              height: `${partner.targetHeight}px`,
              maxWidth: partner.maxWidth ? `${partner.maxWidth}px` : "140px",
              color: "transparent",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

type Props = {
  id?: string;
};

export function PartnersSection({ id }: Props) {
  const reducedMotion = useReducedMotion();

  const looped = useMemo(() => [...PARTNERS, ...PARTNERS], []);

  const trackStyle: CSSProperties = reducedMotion
    ? {}
    : {
        animationPlayState: "running",
      };

  return (
    <section
      id={id}
      className="partners-section section-wrap relative pt-24 pb-0 sm:pt-24 md:pt-24"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" /> ECOSYSTEM &amp; TRUSTED PARTNERS
          </div>
          <h2 className="mt-5 text-[clamp(36px,4.4vw,54px)] font-[500] leading-[1.02] tracking-[-.065em] text-[color:var(--text)]">
            Our Partners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.8] text-[color:var(--muted)] md:text-[13px]">
            Technology partnerships that help us build smarter solutions.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div
          className="group/marquee relative mt-14 -mx-4 overflow-hidden sm:-mx-6 md:-mx-10 lg:-mx-16 xl:-mx-24"
          onMouseEnter={() => {}}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] sm:w-[160px] md:w-[220px]"
            style={{
              background:
                "linear-gradient(to right, var(--bg, #0a0a0b) 0%, color-mix(in srgb, var(--bg, #0a0a0b) 78%, transparent) 55%, transparent 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] sm:w-[160px] md:w-[220px]"
            style={{
              background:
                "linear-gradient(to left, var(--bg, #0a0a0b) 0%, color-mix(in srgb, var(--bg, #0a0a0b) 78%, transparent) 55%, transparent 100%)",
            }}
          />

          {reducedMotion ? (
            <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-4 px-4 py-3 sm:gap-5 md:gap-6">
              {PARTNERS.map((partner, i) => (
                <PartnerCard key={partner.name} partner={partner} index={i} />
              ))}
            </div>
          ) : (
            <div
              className="relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0, #000 140px, #000 calc(100% - 140px), transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0, #000 140px, #000 calc(100% - 140px), transparent 100%)",
              }}
            >
              <div
                className="partners-marquee flex w-max gap-4 items-center sm:gap-5 md:gap-6 py-3 pr-6"
                style={trackStyle}
              >
                {looped.map((partner, i) => (
                  <PartnerCard
                    key={`${partner.name}-${i}`}
                    partner={partner}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
