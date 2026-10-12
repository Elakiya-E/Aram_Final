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
  Server,
  Network,
  Share2,
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
          background: `radial-gradient(circle at 50% 50%, ${accent}25 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Screen Frame Window */}
      <div className="metaphor-screen-frame">
        {/* Terminal Header */}
        <div className="metaphor-screen-header">
          <div className="metaphor-status-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div
            className="metaphor-mode-badge"
            style={{ color: accent, borderColor: `${accent}44` }}
          >
            <span className="status-ping" style={{ backgroundColor: accent }} />
            <span>ARAM.ENGINE // {activeId.toUpperCase().replace("-", "_")}</span>
          </div>
          <span className="metaphor-fps">60 FPS · ACTIVE</span>
        </div>

        {/* Viewport Stage (Explicit 420px height to prevent collapsing) */}
        <div className="metaphor-canvas-viewport">
          <AnimatePresence mode="wait">
            {/* 01: AI SOLUTIONS */}
            {activeId === "ai-solutions" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="ai-scene-container">
                  <svg className="scene-svg-background" viewBox="0 0 500 340" fill="none">
                    {/* Neural Synapse Pathways */}
                    <line x1="250" y1="170" x2="110" y2="70" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 3" opacity="0.75" />
                    <line x1="250" y1="170" x2="390" y2="70" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 3" opacity="0.75" />
                    <line x1="250" y1="170" x2="90" y2="270" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 3" opacity="0.75" />
                    <line x1="250" y1="170" x2="410" y2="270" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 3" opacity="0.75" />
                    <line x1="110" y1="70" x2="390" y2="70" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.3" />
                    <line x1="90" y1="270" x2="410" y2="270" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.3" />

                    {/* Concentric Thought Rings */}
                    <circle cx="250" cy="170" r="50" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
                    <circle cx="250" cy="170" r="85" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
                    <circle cx="250" cy="170" r="120" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.18" />

                    {/* Moving pulse dots */}
                    <circle cx="180" cy="120" r="4" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
                    <circle cx="320" cy="120" r="4" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
                  </svg>

                  {/* Core Intelligence Hub */}
                  <div className="scene-core-hub">
                    <div className="core-hub-pulse" />
                    <Bot size={32} className="text-[#8b5cf6]" />
                    <span className="core-hub-text">COGNITIVE ENGINE</span>
                  </div>

                  {/* Satellites */}
                  <div className="scene-sat sat-tl">
                    <span className="sat-indicator" style={{ backgroundColor: "#8b5cf6" }} />
                    <b>RAG Ingestion</b>
                    <small>Knowledge Retrieval</small>
                  </div>

                  <div className="scene-sat sat-tr">
                    <span className="sat-indicator" style={{ backgroundColor: "#8b5cf6" }} />
                    <b>Custom Copilots</b>
                    <small>Autonomous Assistance</small>
                  </div>

                  <div className="scene-sat sat-bl">
                    <span className="sat-indicator" style={{ backgroundColor: "#8b5cf6" }} />
                    <b>NLP Classifiers</b>
                    <small>Semantic Intelligence</small>
                  </div>

                  <div className="scene-sat sat-br">
                    <span className="sat-indicator" style={{ backgroundColor: "#8b5cf6" }} />
                    <b>Decision Logic</b>
                    <small>Useful Outcomes</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 02: AI & AUTOMATION */}
            {activeId === "ai-automation" && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="automation-scene-container">
                  <svg className="scene-svg-background" viewBox="0 0 500 340" fill="none">
                    {/* Pipeline conduits */}
                    <path
                      d="M 60 170 C 150 170, 160 100, 250 100 C 340 100, 350 170, 440 170"
                      stroke="#6366f1"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 60 170 C 150 170, 160 240, 250 240 C 340 240, 350 170, 440 170"
                      stroke="#6366f1"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                    />

                    {/* Animated signal pulse along route */}
                    <circle cx="250" cy="100" r="5" fill="#6366f1" filter="drop-shadow(0 0 8px #6366f1)" />
                    <circle cx="250" cy="240" r="5" fill="#6366f1" filter="drop-shadow(0 0 8px #6366f1)" />
                  </svg>

                  <div className="pipeline-node node-left">
                    <Zap size={18} className="text-[#6366f1]" />
                    <b>Event Ingestion</b>
                    <small>Multi-App Webhooks</small>
                  </div>

                  <div className="pipeline-node node-mid">
                    <Workflow size={24} className="text-[#6366f1]" />
                    <b>Workflow Router</b>
                    <small>Auto Rule Orchestration</small>
                  </div>

                  <div className="pipeline-node node-rt">
                    <CheckCircle2 size={16} className="text-[#10b981]" />
                    <b>Target Sync</b>
                    <small>CRM &amp; Data Pipeline</small>
                  </div>

                  <div className="pipeline-node node-rb">
                    <CheckCircle2 size={16} className="text-[#6366f1]" />
                    <b>Automated Alerts</b>
                    <small>Team Notifications</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 03: SOFTWARE & DIGITAL PRODUCTS */}
            {activeId === "software-products" && (
              <motion.div
                key="software"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="software-scene-container">
                  <div className="software-tier-card tier-top">
                    <div className="tier-badge">TIER 01 · CLIENT &amp; DIGITAL INTERFACES</div>
                    <div className="tier-pills">
                      <span>Next.js Web Platforms</span>
                      <span>iOS &amp; Android Apps</span>
                      <span>Enterprise Portals</span>
                    </div>
                  </div>

                  <div className="tier-connector">
                    <span className="tier-wire" />
                    <span className="tier-label">SECURE REST &amp; GRAPHQL ENDPOINTS</span>
                    <span className="tier-wire" />
                  </div>

                  <div className="software-tier-card tier-mid">
                    <div className="tier-badge">TIER 02 · BUSINESS LOGIC &amp; MICROSERVICES</div>
                    <div className="tier-pills">
                      <span>Serverless Edge Workers</span>
                      <span>Auth &amp; IAM Security</span>
                      <span>Task Queues</span>
                    </div>
                  </div>

                  <div className="tier-connector">
                    <span className="tier-wire" />
                    <span className="tier-label">DATABASE PERSISTENCE &amp; CACHE LAYER</span>
                    <span className="tier-wire" />
                  </div>

                  <div className="software-tier-card tier-bot">
                    <div className="tier-badge">TIER 03 · SCALABLE DATA INFRASTRUCTURE</div>
                    <div className="tier-pills">
                      <span>PostgreSQL Relational DB</span>
                      <span>Redis In-Memory</span>
                      <span>Event Bus Storage</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 04: DATA & ANALYTICS */}
            {activeId === "data-analytics" && (
              <motion.div
                key="data"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="data-scene-container">
                  <div className="data-kpi-row">
                    <div className="data-kpi-card">
                      <small>INGESTION RATE</small>
                      <b>5.8k / sec</b>
                    </div>
                    <div className="data-kpi-card">
                      <small>PIPELINE LATENCY</small>
                      <b className="text-[#10b981]">11ms</b>
                    </div>
                    <div className="data-kpi-card">
                      <small>DATA ACCURACY</small>
                      <b>99.99%</b>
                    </div>
                  </div>

                  <div className="data-chart-viewport">
                    <svg className="data-chart-svg" viewBox="0 0 460 140" fill="none">
                      <defs>
                        <linearGradient id="dataWaveGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 100 Q 50 30, 100 80 T 200 50 T 300 20 T 400 70 T 460 30 L 460 140 L 0 140 Z"
                        fill="url(#dataWaveGrad)"
                      />
                      <path
                        d="M 0 100 Q 50 30, 100 80 T 200 50 T 300 20 T 400 70 T 460 30"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle cx="460" cy="30" r="5" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)" />
                    </svg>
                  </div>

                  <div className="data-summary-pills">
                    <div className="data-summary-pill">
                      <Activity size={14} className="text-[#10b981]" />
                      <span>Real-Time Leadership KPI Dashboards</span>
                    </div>
                    <div className="data-summary-pill">
                      <Database size={14} className="text-[#10b981]" />
                      <span>Unified Multi-Source Warehouse</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 05: ZOHO & BUSINESS SYSTEMS */}
            {activeId === "zoho-systems" && (
              <motion.div
                key="zoho"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="zoho-scene-container">
                  <svg className="scene-svg-background" viewBox="0 0 500 340" fill="none">
                    <circle cx="250" cy="170" r="105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.45" />
                    <line x1="250" y1="170" x2="250" y2="55" stroke="#f59e0b" strokeWidth="2" opacity="0.65" />
                    <line x1="250" y1="170" x2="360" y2="105" stroke="#f59e0b" strokeWidth="2" opacity="0.65" />
                    <line x1="250" y1="170" x2="360" y2="235" stroke="#f59e0b" strokeWidth="2" opacity="0.65" />
                    <line x1="250" y1="170" x2="140" y2="105" stroke="#f59e0b" strokeWidth="2" opacity="0.65" />
                    <line x1="250" y1="170" x2="140" y2="235" stroke="#f59e0b" strokeWidth="2" opacity="0.65" />
                  </svg>

                  <div className="zoho-central-core">
                    <Boxes size={28} className="text-[#f59e0b]" />
                    <b>ZOHO CRM</b>
                    <small>Central Core</small>
                  </div>

                  <div className="zoho-orb-satellite orb-top">
                    <b>Zoho Creator</b>
                    <small>Custom Workflows</small>
                  </div>

                  <div className="zoho-orb-satellite orb-tr">
                    <b>Zoho Books</b>
                    <small>Finance Automation</small>
                  </div>

                  <div className="zoho-orb-satellite orb-br">
                    <b>Zoho Analytics</b>
                    <small>BI Dashboards</small>
                  </div>

                  <div className="zoho-orb-satellite orb-tl">
                    <b>Zoho Desk</b>
                    <small>Omnichannel Support</small>
                  </div>

                  <div className="zoho-orb-satellite orb-bl">
                    <b>Enterprise ERP</b>
                    <small>Two-Way Integration</small>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 06: CLOUD & MANAGED SERVICES */}
            {activeId === "cloud-services" && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="metaphor-scene"
              >
                <div className="cloud-scene-container">
                  <div className="cloud-header-banner">
                    <div className="shield-info">
                      <ShieldCheck size={22} className="text-[#ec4899]" />
                      <div>
                        <b>99.98% High-Availability Uptime</b>
                        <small>Multi-Zone Active Redundancy</small>
                      </div>
                    </div>
                    <span className="live-status-badge">SYSTEMS ONLINE</span>
                  </div>

                  <div className="cloud-grid-quad">
                    <div className="quad-card">
                      <Globe size={16} className="text-[#ec4899]" />
                      <div>
                        <b>Global Edge</b>
                        <small>Zero-Latency CDN</small>
                      </div>
                    </div>

                    <div className="quad-card">
                      <Radio size={16} className="text-[#ec4899]" />
                      <div>
                        <b>Failover Mesh</b>
                        <small>Instant Redundancy</small>
                      </div>
                    </div>

                    <div className="quad-card">
                      <Cpu size={16} className="text-[#ec4899]" />
                      <div>
                        <b>Auto-Scaling</b>
                        <small>Dynamic Elasticity</small>
                      </div>
                    </div>

                    <div className="quad-card">
                      <CheckCircle2 size={16} className="text-[#10b981]" />
                      <div>
                        <b>24/7 Telemetry</b>
                        <small>Automated Security</small>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Window Footer Status Bar */}
        <div className="metaphor-screen-foot">
          <div className="system-signature">
            <Image
              src={siteLogo}
              alt="Aram Analytics"
              width={54}
              height={17}
              className="brand-logo"
            />
            <span>INTELLIGENCE IN MOTION</span>
          </div>
          <span className="system-version">SYSTEM_STATE: SYNCHRONIZED</span>
        </div>
      </div>
    </div>
  );
}
