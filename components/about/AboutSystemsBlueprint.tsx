"use client";

import { useState } from "react";
import { Building2, Globe2, Layers, Cpu, Boxes, Users, Sparkles, MapPin } from "lucide-react";

interface DomainBlueprint {
  id: string;
  title: string;
  sub: string;
  tag: string;
  icon: typeof Layers;
  accent: string;
}

const DOMAINS: DomainBlueprint[] = [
  {
    id: "platforms",
    title: "Web & Mobile Platforms",
    sub: "Intuitive interfaces engineered for scale",
    tag: "SYS.01",
    icon: Layers,
    accent: "#8b5cf6",
  },
  {
    id: "workflows",
    title: "AI & Automation Workflows",
    sub: "Eliminating repetitive busywork",
    tag: "SYS.02",
    icon: Cpu,
    accent: "#6366f1",
  },
  {
    id: "enterprise",
    title: "Enterprise & Zoho Solutions",
    sub: "Tailored business ecosystems",
    tag: "SYS.03",
    icon: Boxes,
    accent: "#f59e0b",
  },
  {
    id: "institutions",
    title: "NGOs, Businesses & Institutions",
    sub: "Practical solutions for real operators",
    tag: "SYS.04",
    icon: Users,
    accent: "#10b981",
  },
];

export function AboutSystemsBlueprint() {
  const [activeDomain, setActiveDomain] = useState<string>("platforms");

  return (
    <div className="about-systems-blueprint-card">
      {/* Decorative technical coordinate framing */}
      <div className="blueprint-top-bar">
        <div className="blueprint-tag-pill">
          <Building2 size={13} className="text-[#8b5cf6]" />
          <span>REGIONAL BASE &amp; REACH</span>
        </div>
        <div className="blueprint-ping">
          <span className="ping-dot" />
          <span className="ping-label">ACTIVE OPERATIONS</span>
        </div>
      </div>

      {/* Campus Location Block */}
      <div className="blueprint-campus-block">
        <div className="campus-meta">
          <span className="campus-kicker">
            <MapPin size={12} className="text-[#8b5cf6]" /> INCUBATOR HEADQUARTERS
          </span>
          <h3 className="campus-title">Vaazhai Incubator Campus</h3>
          <p className="campus-sub">Puliyangudi, Tenkasi District, Tamil Nadu</p>
        </div>
        <div className="campus-telemetry-badge">
          <span>COORDINATES</span>
          <strong>9.17° N, 77.41° E</strong>
        </div>
      </div>

      <div className="blueprint-divider" />

      {/* Abstract Circuit Connection SVG */}
      <div className="blueprint-circuit-wrap" aria-hidden="true">
        <svg className="blueprint-circuit-svg" viewBox="0 0 380 60" fill="none">
          <path
            d="M 20 30 H 120 L 140 15 H 240 L 260 45 H 360"
            stroke="rgba(139, 92, 246, 0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle cx="20" cy="30" r="3" fill="#8b5cf6" />
          <circle cx="140" cy="15" r="3" fill="#6366f1" />
          <circle cx="260" cy="45" r="3" fill="#f59e0b" />
          <circle cx="360" cy="30" r="3" fill="#10b981" />
        </svg>
      </div>

      {/* Layered System Domain Cards */}
      <div className="blueprint-domains-stack">
        {DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isSelected = activeDomain === domain.id;

          return (
            <div
              key={domain.id}
              onClick={() => setActiveDomain(domain.id)}
              onMouseEnter={() => setActiveDomain(domain.id)}
              className={`blueprint-domain-row ${isSelected ? "is-selected" : ""}`}
              style={{
                borderColor: isSelected ? domain.accent : "rgba(139, 92, 246, 0.16)",
              }}
            >
              <div
                className="domain-icon-frame"
                style={{
                  color: domain.accent,
                  backgroundColor: `${domain.accent}14`,
                  borderColor: `${domain.accent}33`,
                }}
              >
                <Icon size={16} />
              </div>

              <div className="domain-copy">
                <div className="domain-title-line">
                  <b>{domain.title}</b>
                  <span className="domain-tag" style={{ color: domain.accent }}>
                    {domain.tag}
                  </span>
                </div>
                <small>{domain.sub}</small>
              </div>

              <div className="domain-status-notch">
                <span
                  className="notch-pip"
                  style={{ backgroundColor: isSelected ? domain.accent : "rgba(139, 92, 246, 0.3)" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer System Verification */}
      <div className="blueprint-footer">
        <span className="blueprint-foot-note">
          <span>✳</span> Engineered for growing businesses, non-profits &amp; regional institutions.
        </span>
      </div>
    </div>
  );
}
