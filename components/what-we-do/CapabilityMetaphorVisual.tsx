"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Workflow,
  Layers,
  Database,
  Boxes,
  Cloud,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Globe,
  Radio,
} from "lucide-react";
import Image from "next/image";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

interface CapabilityMetaphorProps {
  activeId: string;
  accent: string;
}

export function CapabilityMetaphorVisual({
  activeId,
  accent,
}: CapabilityMetaphorProps) {
  return (
    <div className="metaphor-visual-stage">
      {/* Dynamic ambient backdrop */}
      <div
        className="metaphor-ambient-glow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent}20 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Central Interactive Canvas Container */}
      <div className="metaphor-screen-frame">
        <div className="metaphor-screen-header">
          <div className="metaphor-status-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="metaphor-mode-badge" style={{ color: accent, borderColor: `${accent}40` }}>
            <span className="status-ping" style={{ backgroundColor: accent }} />
            <span>MODE: {activeId.toUpperCase().replace("-", " · ")}</span>
          </div>
          <span className="metaphor-fps">60 FPS · REALTIME</span>
        </div>

        {/* Dynamic Interactive Visual State */}
        <div className="metaphor-canvas-viewport">
          <AnimatePresence mode="wait">
            {/* 01: AI SOLUTIONS */}
            {activeId === "ai-solutions" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="ai-synapse-network">
                  <svg className="metaphor-svg-overlay" viewBox="0 0 400 300" fill="none">
                    <line x1="200" y1="150" x2="100" y2="80" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <line x1="200" y1="150" x2="300" y2="80" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <line x1="200" y1="150" x2="80" y2="220" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <line x1="200" y1="150" x2="320" y2="220" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <line x1="100" y1="80" x2="300" y2="80" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="220" x2="320" y2="220" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />

                    {/* Concentric neural ripples */}
                    <circle cx="200" cy="150" r="45" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="200" cy="150" r="75" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.25" />
                  </svg>

                  {/* Core Intelligence Hub */}
                  <div className="neural-core-hub">
                    <div className="neural-pulse-ring" />
                    <Bot size={28} className="text-[#8b5cf6]" />
                    <span className="hub-sublabel">COGNITIVE ENGINE</span>
                  </div>

                  {/* Radiating Satellite Nodes */}
                  <div className="sat-node sat-top-left">
                    <span className="sat-dot" />
                    <b>RAG Ingestion</b>
                    <small>Knowledge Retrieval</small>
                  </div>

                  <div className="sat-node sat-top-right">
                    <span className="sat-dot" />
                    <b>Custom Copilots</b>
                    <small>Autonomous Assistance</small>
                  </div>

                  <div className="sat-node sat-bottom-left">
                    <span className="sat-dot" />
                    <b>NLP Classifiers</b>
                    <small>Intent Parsing</small>
                  </div>

                  <div className="sat-node sat-bottom-right">
                    <span className="sat-dot" />
                    <b>Decision Logic</b>
                    <small>Structured Outcomes</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 02: AI & AUTOMATION */}
            {activeId === "ai-automation" && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="automation-pipeline-view">
                  <svg className="metaphor-svg-overlay" viewBox="0 0 420 300" fill="none">
                    {/* Pipeline connection path */}
                    <path
                      d="M 50 150 C 130 150, 140 90, 210 90 C 280 90, 290 150, 370 150"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 50 150 C 130 150, 140 210, 210 210 C 280 210, 290 150, 370 150"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                      opacity="0.8"
                    />

                    {/* Moving pulse along path */}
                    <circle cx="210" cy="90" r="5" fill="#6366f1" filter="drop-shadow(0 0 6px #6366f1)" />
                  </svg>

                  <div className="pipeline-step-node step-trigger">
                    <Zap size={18} className="text-[#6366f1]" />
                    <span className="step-name">EVENT TRIGGER</span>
                    <small>Incoming Webhook</small>
                  </div>

                  <div className="pipeline-step-node step-orchestrator">
                    <Workflow size={22} className="text-[#6366f1]" />
                    <span className="step-name">SMART DISPATCHER</span>
                    <small>Routing &amp; Verification</small>
                  </div>

                  <div className="pipeline-step-node step-action-a">
                    <CheckCircle2 size={16} className="text-[#10b981]" />
                    <span className="step-name">BRANCH ALPHA</span>
                    <small>Data Transformation</small>
                  </div>

                  <div className="pipeline-step-node step-action-b">
                    <CheckCircle2 size={16} className="text-[#6366f1]" />
                    <span className="step-name">BRANCH BETA</span>
                    <small>Sync &amp; Notification</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 03: SOFTWARE & DIGITAL PRODUCTS */}
            {activeId === "software-products" && (
              <motion.div
                key="software"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="software-architecture-stack">
                  <div className="arch-layer arch-layer-top">
                    <div className="layer-badge">TIER 01: CLIENT &amp; INTERFACES</div>
                    <div className="layer-chips">
                      <span>Next.js Web Platforms</span>
                      <span>Native Mobile Apps</span>
                      <span>Responsive Portals</span>
                    </div>
                  </div>

                  <div className="arch-connector-v">
                    <span className="arch-line" />
                    <small>REST &amp; GRAPHQL PROTOCOLS</small>
                    <span className="arch-line" />
                  </div>

                  <div className="arch-layer arch-layer-mid">
                    <div className="layer-badge">TIER 02: BUSINESS LOGIC &amp; BACKEND</div>
                    <div className="layer-chips">
                      <span>Microservices</span>
                      <span>Secure Auth &amp; IAM</span>
                      <span>Worker Queues</span>
                    </div>
                  </div>

                  <div className="arch-connector-v">
                    <span className="arch-line" />
                    <small>ACID PERSISTENCE &amp; CACHE</small>
                    <span className="arch-line" />
                  </div>

                  <div className="arch-layer arch-layer-bottom">
                    <div className="layer-badge">TIER 03: DISTRIBUTED DATA STORE</div>
                    <div className="layer-chips">
                      <span>PostgreSQL &amp; Redis</span>
                      <span>Edge Object Storage</span>
                      <span>Event Bus</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 04: DATA & ANALYTICS */}
            {activeId === "data-analytics" && (
              <motion.div
                key="data"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="data-telemetry-view">
                  <div className="telemetry-top-stats">
                    <div className="telemetry-stat">
                      <small>INGESTION RATE</small>
                      <b>4.2k / sec</b>
                    </div>
                    <div className="telemetry-stat">
                      <small>PIPELINE LATENCY</small>
                      <b className="text-[#10b981]">14ms</b>
                    </div>
                    <div className="telemetry-stat">
                      <small>ACCURACY</small>
                      <b>99.98%</b>
                    </div>
                  </div>

                  {/* Data Waveform / Sparklines */}
                  <div className="telemetry-chart-area">
                    <svg className="telemetry-svg" viewBox="0 0 380 120" fill="none">
                      <defs>
                        <linearGradient id="dataGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 90 Q 40 40, 80 70 T 160 50 T 240 30 T 320 60 T 380 40 L 380 120 L 0 120 Z"
                        fill="url(#dataGrad)"
                      />
                      <path
                        d="M 0 90 Q 40 40, 80 70 T 160 50 T 240 30 T 320 60 T 380 40"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="380" cy="40" r="4" fill="#10b981" />
                    </svg>
                  </div>

                  <div className="telemetry-metrics-bar">
                    <div className="metric-pill">
                      <Activity size={13} className="text-[#10b981]" />
                      <span>Executive KPI Dashboards</span>
                    </div>
                    <div className="metric-pill">
                      <Database size={13} className="text-[#10b981]" />
                      <span>Unified Data Warehouse</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 05: ZOHO & BUSINESS SYSTEMS */}
            {activeId === "zoho-systems" && (
              <motion.div
                key="zoho"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="zoho-nexus-layout">
                  <svg className="metaphor-svg-overlay" viewBox="0 0 380 280" fill="none">
                    <circle cx="190" cy="140" r="85" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.35" />
                    <line x1="190" y1="140" x2="190" y2="45" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
                    <line x1="190" y1="140" x2="275" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
                    <line x1="190" y1="140" x2="275" y2="190" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
                    <line x1="190" y1="140" x2="105" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
                    <line x1="190" y1="140" x2="105" y2="190" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
                  </svg>

                  <div className="zoho-central-nexus">
                    <Boxes size={26} className="text-[#f59e0b]" />
                    <span>ZOHO CRM</span>
                    <small>Unified Core</small>
                  </div>

                  <div className="zoho-satellite-pod pod-top">
                    <b>Zoho Creator</b>
                    <small>Custom Apps</small>
                  </div>

                  <div className="zoho-satellite-pod pod-tr">
                    <b>Zoho Books</b>
                    <small>Finance Flow</small>
                  </div>

                  <div className="zoho-satellite-pod pod-br">
                    <b>Zoho Analytics</b>
                    <small>BI Reports</small>
                  </div>

                  <div className="zoho-satellite-pod pod-tl">
                    <b>Zoho Desk</b>
                    <small>Support Hub</small>
                  </div>

                  <div className="zoho-satellite-pod pod-bl">
                    <b>Third-Party ERP</b>
                    <small>Bi-directional API</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 06: CLOUD & MANAGED SERVICES */}
            {activeId === "cloud-services" && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="metaphor-graphic-wrap"
              >
                <div className="cloud-resilience-grid">
                  <div className="cloud-status-banner">
                    <div className="uptime-shield">
                      <ShieldCheck size={20} className="text-[#ec4899]" />
                      <div>
                        <b>99.98% High Availability</b>
                        <small>Active Multi-Zone Monitoring</small>
                      </div>
                    </div>
                    <span className="live-status-chip">HEALTHY</span>
                  </div>

                  <div className="cloud-regions-grid">
                    <div className="region-card">
                      <Globe size={14} className="text-[#ec4899]" />
                      <div>
                        <b>Primary Cluster</b>
                        <small>Edge Load Balancer</small>
                      </div>
                    </div>

                    <div className="region-card">
                      <Radio size={14} className="text-[#ec4899]" />
                      <div>
                        <b>Failover Node</b>
                        <small>Zero-Downtime Backup</small>
                      </div>
                    </div>

                    <div className="region-card">
                      <Cpu size={14} className="text-[#ec4899]" />
                      <div>
                        <b>Auto-Scaling</b>
                        <small>Elastic Capacity</small>
                      </div>
                    </div>

                    <div className="region-card">
                      <CheckCircle2 size={14} className="text-[#10b981]" />
                      <div>
                        <b>24/7 Telemetry</b>
                        <small>Automated Patching</small>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Screen footer bar with system signature */}
        <div className="metaphor-screen-foot">
          <div className="system-signature">
            <Image
              src={siteLogo}
              alt="Aram Analytics"
              width={56}
              height={18}
              className="brand-logo"
            />
            <span>INTELLIGENCE IN MOTION</span>
          </div>
          <span className="system-version">SYSTEM.STATUS: OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
}
