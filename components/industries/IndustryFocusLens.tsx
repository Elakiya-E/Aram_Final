"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  Radio,
  Zap,
  Compass,
  Building2,
  Truck,
  GraduationCap,
  HeartHandshake,
  Store,
  Layers,
  Sparkles,
} from "lucide-react";

type SectorGroup = {
  id: string;
  name: string;
  tag: string;
  color: string;
  accentBg: string;
  borderColor: string;
  industries: { id: string; name: string; icon: typeof Landmark }[];
};

const SECTOR_DOMAINS: SectorGroup[] = [
  {
    id: "finance",
    name: "Commerce & Finance",
    tag: "CAPITAL & RETAIL",
    color: "#6366f1",
    accentBg: "rgba(99, 102, 241, 0.08)",
    borderColor: "rgba(99, 102, 241, 0.24)",
    industries: [
      { id: "01", name: "Banking & Financial Services", icon: Landmark },
      { id: "03", name: "Retail & E-commerce", icon: ShoppingBag },
      { id: "12", name: "Local Businesses", icon: Store },
    ],
  },
  {
    id: "operations",
    name: "Operations & Supply",
    tag: "PHYSICAL & INDUSTRIAL",
    color: "#f59e0b",
    accentBg: "rgba(245, 158, 11, 0.08)",
    borderColor: "rgba(245, 158, 11, 0.24)",
    industries: [
      { id: "04", name: "Manufacturing", icon: Factory },
      { id: "06", name: "Energy", icon: Zap },
      { id: "09", name: "Logistics & Supply Chain", icon: Truck },
    ],
  },
  {
    id: "systems",
    name: "Infrastructure & Systems",
    tag: "NETWORKS & CARE",
    color: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.24)",
    industries: [
      { id: "02", name: "Healthcare", icon: HeartPulse },
      { id: "05", name: "Telecommunications", icon: Radio },
      { id: "07", name: "Travel & Tourism", icon: Compass },
    ],
  },
  {
    id: "civic",
    name: "Public & Social Impact",
    tag: "CIVIC & COMMUNITY",
    color: "#10b981",
    accentBg: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.24)",
    industries: [
      { id: "08", name: "Public Sector", icon: Building2 },
      { id: "10", name: "Education", icon: GraduationCap },
      { id: "11", name: "NGOs & Nonprofits", icon: HeartHandshake },
    ],
  },
];

export function IndustryFocusLens() {
  const reducedMotion = useReducedMotion();
  const [activeSector, setActiveSector] = useState<string>("finance");

  const currentSector =
    SECTOR_DOMAINS.find((s) => s.id === activeSector) || SECTOR_DOMAINS[0];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-gradient-to-b from-white via-white to-[#fbf9fe] p-5 shadow-[0_20px_50px_-20px_rgba(45,30,85,0.12),0_1px_3px_rgba(0,0,0,0.03)] md:p-6">
      {/* Top Status Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={13} className="text-[#6C5CE7]" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#14121a]">
            Sector Spectrum Matrix
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#6C5CE7]/10 px-2 py-0.5 text-[10.5px] font-semibold text-[#5946dc]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
          <span>12 Core Sectors</span>
        </div>
      </div>

      {/* Abstract Geometric Schematic Visual */}
      <div className="relative mt-3.5 flex flex-col items-center justify-center py-1">
        {/* Domain Selection Tabs (4 quadrants) */}
        <div className="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-4">
          {SECTOR_DOMAINS.map((domain) => {
            const isSelected = domain.id === activeSector;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveSector(domain.id)}
                className={`group relative flex flex-col items-start rounded-xl border p-2 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-[#6C5CE7]/40 bg-white shadow-xs ring-1 ring-[#6C5CE7]/20"
                    : "border-neutral-200/70 bg-neutral-50/60 hover:border-neutral-300 hover:bg-white"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: domain.color }}
                  />
                  <span className="font-mono text-[9px] font-bold tracking-wider uppercase text-neutral-400">
                    {domain.industries.length} SECTORS
                  </span>
                </div>
                <span className="mt-1 text-[11px] font-semibold text-[#14121a] leading-tight">
                  {domain.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Interconnection Radar Graphic */}
        <div className="relative mt-3 flex h-38 w-full max-w-[340px] items-center justify-center">
          {/* Subtle concentric rings */}
          <div className="absolute inset-0 m-auto h-36 w-36 rounded-full border border-neutral-200/60" />
          <div className="absolute inset-0 m-auto h-26 w-26 rounded-full border border-neutral-200/80 border-dashed" />
          <div className="absolute inset-0 m-auto h-16 w-16 rounded-full border border-[#6C5CE7]/20 bg-[#6C5CE7]/[0.02]" />

          {/* Central Hub Core */}
          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    scale: [1, 1.03, 1],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[#6C5CE7]/30 bg-white shadow-[0_4px_14px_-3px_rgba(108,92,231,0.25)]"
          >
            <Layers size={20} className="text-[#6C5CE7]" />
          </motion.div>

          {/* Orbiting domain node badges */}
          {SECTOR_DOMAINS.map((domain, index) => {
            const isSelected = domain.id === activeSector;
            const angles = [-45, 45, 135, -135];
            const angle = angles[index];
            const radius = 62; // px
            const rad = (angle * Math.PI) / 180;
            const x = Math.round(Math.cos(rad) * radius);
            const y = Math.round(Math.sin(rad) * radius);

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveSector(domain.id)}
                className={`absolute z-20 flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-300 ${
                  isSelected
                    ? "scale-110 shadow-md ring-2 ring-offset-2 ring-offset-white"
                    : "opacity-75 hover:opacity-100 hover:scale-105"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  backgroundColor: domain.accentBg,
                  borderColor: domain.borderColor,
                  color: domain.color,
                  boxShadow: isSelected
                    ? `0 4px 12px -2px ${domain.color}40`
                    : undefined,
                }}
                aria-label={domain.name}
              >
                <span className="font-mono text-[9.5px] font-bold">
                  {domain.industries[0].id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Readout Panel */}
        <div className="mt-3 w-full rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-xs">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: currentSector.color }}
              />
              <span className="text-[12px] font-bold text-[#14121a]">
                {currentSector.name}
              </span>
            </div>
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: currentSector.accentBg,
                color: currentSector.color,
                border: `1px solid ${currentSector.borderColor}`,
              }}
            >
              {currentSector.tag}
            </span>
          </div>

          <div className="mt-2.5 grid grid-cols-1 gap-1.5">
            {currentSector.industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50/50 px-2.5 py-1.5 text-[11.5px] text-[#2d2938]"
                >
                  <span className="font-mono text-[9.5px] font-bold text-neutral-400">
                    {ind.id}.
                  </span>
                  <Icon size={13} style={{ color: currentSector.color }} />
                  <span className="font-medium text-[#14121a] truncate">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blueprint Footnote */}
      <div className="mt-3.5 flex items-center justify-between border-t border-neutral-100 pt-2.5 text-[10.5px] text-[#716b7c]">
        <span>Engineered for cross-functional scale</span>
        <a
          href="#industries-showcase"
          className="font-semibold text-[#5946dc] hover:underline"
        >
          Explore all 12 industries ↓
        </a>
      </div>
    </div>
  );
}
