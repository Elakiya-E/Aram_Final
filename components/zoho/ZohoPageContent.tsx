"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Briefcase,
  Check,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Globe,
  HelpCircle,
  Layers,
  LifeBuoy,
  MessageSquare,
  ShieldCheck,
  Sliders,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

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
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   DATA DEFINITIONS (STRICTLY ALIGNED WITH APPROVED CONTENT)
   ========================================================================= */

type ZohoProductKey = "crm" | "books" | "creator";

interface ZohoProduct {
  id: ZohoProductKey;
  name: string;
  badge: string;
  description: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  icon: typeof Boxes;
  focusCapabilities: {
    title: string;
    detail: string;
  }[];
  servicesOffered: string[];
}

const ZOHO_PRODUCTS: Record<ZohoProductKey, ZohoProduct> = {
  crm: {
    id: "crm",
    name: "Zoho CRM",
    badge: "CUSTOMER & SALES ECOSYSTEM",
    description:
      "Organize customer information, manage sales activities, and keep your team focused on customer relationships.",
    color: "#E42527",
    accentBg: "rgba(228, 37, 39, 0.06)",
    accentBorder: "rgba(228, 37, 39, 0.22)",
    icon: Users,
    focusCapabilities: [
      {
        title: "Customer Information Hub",
        detail:
          "Consolidate accounts, contacts, interaction histories, and communications into structured records.",
      },
      {
        title: "Sales Pipeline Alignment",
        detail:
          "Map your deal stages, lead qualification steps, and follow-up activities to your actual sales cycle.",
      },
      {
        title: "Activity & Task Tracking",
        detail:
          "Keep team members aligned on meetings, reminders, deal updates, and next best actions.",
      },
    ],
    servicesOffered: [
      "Setup & Configuration",
      "Customization",
      "Training",
      "Ongoing Support",
    ],
  },
  books: {
    id: "books",
    name: "Zoho Books",
    badge: "FINANCIAL & ACCOUNTING WORKFLOWS",
    description:
      "Manage accounting workflows, organize financial records, and support clearer visibility into your business finances.",
    color: "#226DB4",
    accentBg: "rgba(34, 109, 180, 0.06)",
    accentBorder: "rgba(34, 109, 180, 0.22)",
    icon: FileSpreadsheet,
    focusCapabilities: [
      {
        title: "Accounting Workflow Setup",
        detail:
          "Configure standard chart of accounts, tax structures, and business entity profiles.",
      },
      {
        title: "Invoicing & Receivables",
        detail:
          "Organize billing schedules, invoice layouts, receipt capture, and payment recording.",
      },
      {
        title: "Financial Visibility",
        detail:
          "Support clear reporting on cash flow, vendor payables, and day-to-day transaction records.",
      },
    ],
    servicesOffered: [
      "Setup & Configuration",
      "Customization",
      "Training",
      "Ongoing Support",
    ],
  },
  creator: {
    id: "creator",
    name: "Zoho Creator",
    badge: "CUSTOM BUSINESS APPLICATIONS",
    description:
      "Build custom business applications around your organization's specific processes and requirements.",
    color: "#089949",
    accentBg: "rgba(8, 153, 73, 0.06)",
    accentBorder: "rgba(8, 153, 73, 0.22)",
    icon: Database,
    focusCapabilities: [
      {
        title: "Tailored Form & Data Models",
        detail:
          "Construct relational schemas and structured forms that match your proprietary internal operations.",
      },
      {
        title: "Deluge Automation Logic",
        detail:
          "Write clean business rules, automated validation steps, and condition-based workflow actions.",
      },
      {
        title: "Role-Based Internal Portals",
        detail:
          "Provide departmental views, status trackers, and secure data access for distinct team roles.",
      },
    ],
    servicesOffered: [
      "Setup & Configuration",
      "Customization",
      "Training",
      "Ongoing Support",
    ],
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    label: "Discovery & Workflow Mapping",
    description:
      "We begin by understanding how your business works, current operational friction, team roles, and specific operational needs.",
    deliverable: "Documented workflow map and target Zoho solution alignment",
  },
  {
    step: "02",
    title: "Configure",
    label: "Solution Setup & Customization",
    description:
      "We configure the selected Zoho product, adapt settings and fields to your workflows, and build necessary automation logic.",
    deliverable: "Ready-to-use, tailored Zoho CRM, Books, or Creator instance",
  },
  {
    step: "03",
    title: "Enable",
    label: "Team Walkthroughs & Training",
    description:
      "We help your team understand the configured solutions with practical walkthroughs so everyone is comfortable in their daily work.",
    deliverable: "Role-specific training sessions and reference documentation",
  },
  {
    step: "04",
    title: "Support",
    label: "Ongoing Assistance & Adjustments",
    description:
      "We provide ongoing support based on your agreed requirements, assisting with questions, minor adjustments, and continuous use.",
    deliverable: "Prompt operational assistance and ongoing configuration updates",
  },
];

/* =========================================================================
   ZOHO INQUIRY FORM COMPONENT
   ========================================================================= */

function ZohoInquiryForm({ initialProduct }: { initialProduct?: string }) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct || "Zoho CRM"
  );
  const [selectedService, setSelectedService] = useState<string>(
    "Setup & Configuration"
  );
  const [status, setStatus] = useState<string>("");

  const configuredEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@aramanalytics.com";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const challenges = formData.get("challenges") as string;

    const subject = encodeURIComponent(
      `Zoho Inquiry from ${name} [${selectedProduct}]`
    );
    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Work Email: ${email}\n` +
        `Organization: ${organization || "Not specified"}\n` +
        `Zoho Product of Interest: ${selectedProduct}\n` +
        `Primary Service Requirement: ${selectedService}\n\n` +
        `Business Processes & Challenges:\n${challenges}\n`
    );

    window.location.href = `mailto:${configuredEmail}?subject=${subject}&body=${body}`;
    setStatus(
      "Opening your email client with your Zoho inquiry details prepared."
    );
  }

  return (
    <form className="zoho-inquiry-form" onSubmit={handleSubmit}>
      <div className="zoho-form-grid">
        <label className="zoho-form-field">
          <span className="zoho-field-label">Your Name *</span>
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            required
            className="zoho-input"
          />
        </label>
        <label className="zoho-form-field">
          <span className="zoho-field-label">Work Email *</span>
          <input
            type="email"
            name="email"
            placeholder="jane@company.com"
            required
            className="zoho-input"
          />
        </label>
      </div>

      <div className="zoho-form-grid">
        <label className="zoho-form-field">
          <span className="zoho-field-label">Company / Organization</span>
          <input
            type="text"
            name="organization"
            placeholder="Acme Enterprises"
            className="zoho-input"
          />
        </label>
        <div className="zoho-form-field">
          <span className="zoho-field-label">Supported Product</span>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="zoho-select"
          >
            <option value="Zoho CRM">Zoho CRM</option>
            <option value="Zoho Books">Zoho Books</option>
            <option value="Zoho Creator">Zoho Creator</option>
            <option value="Multiple Zoho Solutions">Multiple Solutions</option>
          </select>
        </div>
      </div>

      <div className="zoho-form-field">
        <span className="zoho-field-label">Service Requirement</span>
        <div className="zoho-pill-selector">
          {[
            "Setup & Configuration",
            "Customization",
            "Training",
            "Ongoing Support",
          ].map((service) => (
            <button
              type="button"
              key={service}
              onClick={() => setSelectedService(service)}
              className={`zoho-pill-choice ${
                selectedService === service ? "is-selected" : ""
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <label className="zoho-form-field">
        <span className="zoho-field-label">
          Business processes & challenges you want to solve *
        </span>
        <textarea
          name="challenges"
          required
          rows={3}
          placeholder="Tell us about how your business currently operates and which workflows you're looking to configure..."
          className="zoho-textarea"
        />
      </label>

      <div className="zoho-form-footer">
        <button type="submit" className="button button-primary zoho-submit-btn">
          Talk to Aram ↗
        </button>
        <span className="zoho-form-disclaimer">
          {status ||
            "Direct conversation with our team. No pressure, clear guidance."}
        </span>
      </div>
    </form>
  );
}

/* =========================================================================
   CONCEPTUAL UI BLUEPRINT VISUALIZER FOR SELECTED PRODUCT
   ========================================================================= */

function ConceptualProductBlueprint({
  productKey,
}: {
  productKey: ZohoProductKey;
}) {
  const reducedMotion = useReducedMotion();

  if (productKey === "crm") {
    return (
      <div className="zoho-blueprint-panel">
        <div className="zoho-blueprint-header">
          <div className="zoho-blueprint-dots">
            <span className="bp-dot bp-dot-red" />
            <span className="bp-dot bp-dot-yellow" />
            <span className="bp-dot bp-dot-green" />
          </div>
          <div className="zoho-blueprint-title">
            <span>Conceptual Blueprint · Zoho CRM Pipeline &amp; Customer View</span>
          </div>
          <span className="zoho-blueprint-status">Configured Structure</span>
        </div>

        <div className="zoho-blueprint-body">
          {/* Top Pipeline Stages */}
          <div className="zoho-pipeline-stream">
            <div className="zoho-stream-step is-complete">
              <span className="stream-badge">01</span>
              <span className="stream-name">Lead Inflow</span>
              <span className="stream-count">14 Inquiries</span>
            </div>
            <div className="zoho-stream-step is-complete">
              <span className="stream-badge">02</span>
              <span className="stream-name">Qualified</span>
              <span className="stream-count">8 Active</span>
            </div>
            <div className="zoho-stream-step is-active">
              <span className="stream-badge">03</span>
              <span className="stream-name">Proposal Fit</span>
              <span className="stream-count">5 In Review</span>
            </div>
            <div className="zoho-stream-step">
              <span className="stream-badge">04</span>
              <span className="stream-name">Closing</span>
              <span className="stream-count">3 Pending</span>
            </div>
          </div>

          {/* Dual Card Layout */}
          <div className="zoho-blueprint-grid">
            <div className="zoho-blueprint-subcard">
              <div className="subcard-header">
                <Users size={14} className="text-[#E42527]" />
                <span className="subcard-title">Customer Profile Hub</span>
                <span className="subcard-chip">Structured Record</span>
              </div>
              <div className="subcard-content">
                <div className="profile-row">
                  <span className="row-label">Account</span>
                  <span className="row-value font-semibold">Apex Logistics Ltd.</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Key Contact</span>
                  <span className="row-value">Operations Director</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Relationship Stage</span>
                  <span className="row-badge badge-crm">Evaluation</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Activity Status</span>
                  <span className="row-value">Discovery completed; workflow mapped</span>
                </div>
              </div>
            </div>

            <div className="zoho-blueprint-subcard">
              <div className="subcard-header">
                <Workflow size={14} className="text-[#6C5CE7]" />
                <span className="subcard-title">Configured Workflows</span>
                <span className="subcard-chip">Automated Rule</span>
              </div>
              <div className="subcard-content">
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Auto-assignment of inbound leads by territory</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Follow-up reminder triggers at 48h idle time</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Activity log synchronization for team visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="zoho-blueprint-footer">
          <span className="footer-meta">
            * Conceptual layout illustrating structured CRM pipeline and customer alignment.
          </span>
        </div>
      </div>
    );
  }

  if (productKey === "books") {
    return (
      <div className="zoho-blueprint-panel">
        <div className="zoho-blueprint-header">
          <div className="zoho-blueprint-dots">
            <span className="bp-dot bp-dot-red" />
            <span className="bp-dot bp-dot-yellow" />
            <span className="bp-dot bp-dot-green" />
          </div>
          <div className="zoho-blueprint-title">
            <span>Conceptual Blueprint · Zoho Books Financial Workflows</span>
          </div>
          <span className="zoho-blueprint-status">Reconciled Flow</span>
        </div>

        <div className="zoho-blueprint-body">
          {/* Financial Flow Tracker */}
          <div className="zoho-pipeline-stream">
            <div className="zoho-stream-step is-complete">
              <span className="stream-badge">01</span>
              <span className="stream-name">Invoice Sent</span>
              <span className="stream-count">Generated</span>
            </div>
            <div className="zoho-stream-step is-complete">
              <span className="stream-badge">02</span>
              <span className="stream-name">Client Review</span>
              <span className="stream-count">Viewed</span>
            </div>
            <div className="zoho-stream-step is-active">
              <span className="stream-badge">03</span>
              <span className="stream-name">Payment Log</span>
              <span className="stream-count">Direct Deposit</span>
            </div>
            <div className="zoho-stream-step is-complete">
              <span className="stream-badge">04</span>
              <span className="stream-name">Reconciled</span>
              <span className="stream-count">Ledger Match</span>
            </div>
          </div>

          <div className="zoho-blueprint-grid">
            <div className="zoho-blueprint-subcard">
              <div className="subcard-header">
                <FileSpreadsheet size={14} className="text-[#226DB4]" />
                <span className="subcard-title">Ledger &amp; Accounts Setup</span>
                <span className="subcard-chip">Chart of Accounts</span>
              </div>
              <div className="subcard-content">
                <div className="profile-row">
                  <span className="row-label">Receivables Flow</span>
                  <span className="row-value font-semibold">Configured Schedules</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Tax Categorization</span>
                  <span className="row-value">Standard GST / Tax Tables</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Status</span>
                  <span className="row-badge badge-books">Synchronized</span>
                </div>
                <div className="profile-row">
                  <span className="row-label">Reporting</span>
                  <span className="row-value">P&amp;L and Cash Flow Views</span>
                </div>
              </div>
            </div>

            <div className="zoho-blueprint-subcard">
              <div className="subcard-header">
                <ShieldCheck size={14} className="text-[#089949]" />
                <span className="subcard-title">Financial Operational Clarity</span>
                <span className="subcard-chip">Auditable</span>
              </div>
              <div className="subcard-content">
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Standardized invoicing templates with accurate tax fields</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Automated receipt logging and expense categorization</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={13} className="text-[#089949]" />
                  <span>Clear visibility for leadership on receivables &amp; payables</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="zoho-blueprint-footer">
          <span className="footer-meta">
            * Conceptual blueprint showing financial accounting structure and ledger alignment.
          </span>
        </div>
      </div>
    );
  }

  // Creator
  return (
    <div className="zoho-blueprint-panel">
      <div className="zoho-blueprint-header">
        <div className="zoho-blueprint-dots">
          <span className="bp-dot bp-dot-red" />
          <span className="bp-dot bp-dot-yellow" />
          <span className="bp-dot bp-dot-green" />
        </div>
        <div className="zoho-blueprint-title">
          <span>Conceptual Blueprint · Zoho Creator Custom Application Logic</span>
        </div>
        <span className="zoho-blueprint-status">Custom App Schema</span>
      </div>

      <div className="zoho-blueprint-body">
        {/* Logic pipeline */}
        <div className="zoho-pipeline-stream">
          <div className="zoho-stream-step is-complete">
            <span className="stream-badge">01</span>
            <span className="stream-name">Form Submission</span>
            <span className="stream-count">Schema Validated</span>
          </div>
          <div className="zoho-stream-step is-complete">
            <span className="stream-badge">02</span>
            <span className="stream-name">Deluge Script</span>
            <span className="stream-count">Logic Executed</span>
          </div>
          <div className="zoho-stream-step is-active">
            <span className="stream-badge">03</span>
            <span className="stream-name">Approval Gate</span>
            <span className="stream-count">Manager Review</span>
          </div>
          <div className="zoho-stream-step">
            <span className="stream-badge">04</span>
            <span className="stream-name">Record Commit</span>
            <span className="stream-count">Cross-Module Sync</span>
          </div>
        </div>

        <div className="zoho-blueprint-grid">
          <div className="zoho-blueprint-subcard">
            <div className="subcard-header">
              <Database size={14} className="text-[#089949]" />
              <span className="subcard-title">Custom Data Architecture</span>
              <span className="subcard-chip">Relational Schema</span>
            </div>
            <div className="subcard-content">
              <div className="profile-row">
                <span className="row-label">Application Type</span>
                <span className="row-value font-semibold">Workflow Management Portal</span>
              </div>
              <div className="profile-row">
                <span className="row-label">Data Objects</span>
                <span className="row-value">Projects, Approvals &amp; Assets</span>
              </div>
              <div className="profile-row">
                <span className="row-label">Access Level</span>
                <span className="row-badge badge-creator">Role-Secured</span>
              </div>
              <div className="profile-row">
                <span className="row-label">Business Logic</span>
                <span className="row-value">Configured Deluge automation rules</span>
              </div>
            </div>
          </div>

          <div className="zoho-blueprint-subcard">
            <div className="subcard-header">
              <Zap size={14} className="text-[#f59e0b]" />
              <span className="subcard-title">Configured Business Rules</span>
              <span className="subcard-chip">Tailored Flow</span>
            </div>
            <div className="subcard-content">
              <div className="rule-item">
                <CheckCircle2 size={13} className="text-[#089949]" />
                <span>Custom forms built around organization-specific fields</span>
              </div>
              <div className="rule-item">
                <CheckCircle2 size={13} className="text-[#089949]" />
                <span>Multi-stage approval routing for internal team compliance</span>
              </div>
              <div className="rule-item">
                <CheckCircle2 size={13} className="text-[#089949]" />
                <span>Tailored reports &amp; dashboards reflecting core KPIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="zoho-blueprint-footer">
        <span className="footer-meta">
          * Conceptual blueprint illustrating custom business applications built in Zoho Creator.
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   CONNECTED SYSTEMS HERO INTERACTIVE VISUAL
   ========================================================================= */

function HeroConnectedSystemsDiagram({
  activeProduct,
  onSelectProduct,
}: {
  activeProduct: ZohoProductKey;
  onSelectProduct: (key: ZohoProductKey) => void;
}) {
  return (
    <div className="zoho-hero-sys-canvas">
      {/* Central Aram Integration Hub */}
      <div className="zoho-hub-center">
        <div className="hub-core-pulse" aria-hidden="true" />
        <div className="hub-card">
          <div className="hub-icon-row">
            <Image
              src="/zoho-logo.svg"
              alt="Official Zoho Partner"
              width={54}
              height={18}
              className="object-contain"
            />
          </div>
          <span className="hub-tag">CONFIGURATION HUB</span>
          <h4 className="hub-title">Aram Analytics</h4>
          <span className="hub-status">Official Zoho Partner</span>
        </div>
      </div>

      {/* 3 Surrounding Product Satellites */}
      <div className="zoho-satellite-grid">
        {/* Node 1: CRM */}
        <button
          type="button"
          onClick={() => onSelectProduct("crm")}
          className={`zoho-sat-node sat-crm ${
            activeProduct === "crm" ? "is-active" : ""
          }`}
        >
          <div className="sat-icon-wrap" style={{ color: "#E42527" }}>
            <Users size={18} />
          </div>
          <div className="sat-meta">
            <span className="sat-name">Zoho CRM</span>
            <span className="sat-role">Customer &amp; Sales</span>
          </div>
          <div className="sat-dot" style={{ backgroundColor: "#E42527" }} />
        </button>

        {/* Node 2: Books */}
        <button
          type="button"
          onClick={() => onSelectProduct("books")}
          className={`zoho-sat-node sat-books ${
            activeProduct === "books" ? "is-active" : ""
          }`}
        >
          <div className="sat-icon-wrap" style={{ color: "#226DB4" }}>
            <FileSpreadsheet size={18} />
          </div>
          <div className="sat-meta">
            <span className="sat-name">Zoho Books</span>
            <span className="sat-role">Finance &amp; Ledgers</span>
          </div>
          <div className="sat-dot" style={{ backgroundColor: "#226DB4" }} />
        </button>

        {/* Node 3: Creator */}
        <button
          type="button"
          onClick={() => onSelectProduct("creator")}
          className={`zoho-sat-node sat-creator ${
            activeProduct === "creator" ? "is-active" : ""
          }`}
        >
          <div className="sat-icon-wrap" style={{ color: "#089949" }}>
            <Database size={18} />
          </div>
          <div className="sat-meta">
            <span className="sat-name">Zoho Creator</span>
            <span className="sat-role">Custom Applications</span>
          </div>
          <div className="sat-dot" style={{ backgroundColor: "#089949" }} />
        </button>
      </div>

      {/* Bottom Connected Banner */}
      <div className="zoho-sys-bottom-strip">
        <div className="strip-item">
          <Check size={12} className="text-[#6C5CE7]" />
          <span>Connected Business Systems</span>
        </div>
        <div className="strip-separator">•</div>
        <div className="strip-item">
          <Check size={12} className="text-[#6C5CE7]" />
          <span>Tailored Workflows</span>
        </div>
        <div className="strip-separator">•</div>
        <div className="strip-item">
          <Check size={12} className="text-[#6C5CE7]" />
          <span>Practical Enablement</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN ZOHO PAGE CONTENT COMPONENT
   ========================================================================= */

export function ZohoPageContent() {
  const [selectedProduct, setSelectedProduct] = useState<ZohoProductKey>("crm");
  const currentProduct = ZOHO_PRODUCTS[selectedProduct];

  return (
    <div className="zoho-page">
      {/* -----------------------------------------------------------------
          SECTION 01: HERO SECTION
          ----------------------------------------------------------------- */}
      <section className="zoho-hero-section section-wrap" id="hero">
        <div className="zoho-hero-editorial">
          {/* Eyebrow with Official Zoho Logo & Designation */}
          <Reveal>
            <div className="zoho-official-badge">
              <Image
                src="/zoho-logo.svg"
                alt="Zoho official logo"
                width={62}
                height={20}
                className="zoho-badge-svg"
                priority
              />
              <span className="zoho-badge-divider" aria-hidden="true" />
              <span className="zoho-badge-text">Official Zoho Partner</span>
            </div>
          </Reveal>

          {/* Main Hero Headline */}
          <Reveal delay={0.08}>
            <h1 className="zoho-hero-title">
              Your business. Better{" "}
              <span className="serif-accent italic-highlight">connected</span>{" "}
              with Zoho.
            </h1>
          </Reveal>

          {/* Approved Description */}
          <Reveal delay={0.15}>
            <p className="zoho-hero-desc">
              As an official Zoho partner, Aram Analytics helps businesses
              configure and customize Zoho solutions to better fit their
              workflows, manage information, and support day-to-day operations.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.22} className="zoho-hero-actions">
            <a href="#inquire" className="button button-primary">
              Discuss Your Zoho Needs ↗
            </a>
            <a href="#products" className="button button-quiet">
              Explore Supported Solutions ↓
            </a>
          </Reveal>
        </div>

        {/* Hero Interactive System Composition */}
        <Reveal delay={0.3} className="zoho-hero-visual-wrap">
          <HeroConnectedSystemsDiagram
            activeProduct={selectedProduct}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              const el = document.getElementById("products");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </Reveal>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 02: PARTNERSHIP PROOF & OFFICIAL SCOPE
          ----------------------------------------------------------------- */}
      <section className="zoho-proof-section section-wrap" id="partnership">
        <Reveal className="zoho-proof-card">
          <div className="zoho-proof-grid">
            <div className="zoho-proof-left">
              <div className="zoho-proof-mark">
                <Image
                  src="/zoho-logo.svg"
                  alt="Official Zoho Partner"
                  width={110}
                  height={38}
                  className="object-contain"
                />
                <div className="proof-status-pill">
                  <span className="proof-status-dot" />
                  <span>Official Zoho Partner</span>
                </div>
              </div>
              <h2 className="zoho-proof-headline">
                Accredited guidance for your core operational platforms.
              </h2>
              <p className="zoho-proof-copy">
                As an official Zoho partner, Aram Analytics operates with
                direct product alignment across Zoho CRM, Zoho Books, and Zoho
                Creator. We focus exclusively on practical configuration,
                tailored workflow adaptation, and hands-on enablement for your
                team.
              </p>
            </div>

            <div className="zoho-proof-right">
              <div className="proof-detail-card">
                <span className="proof-detail-label">SUPPORTED PRODUCTS</span>
                <div className="proof-chip-list">
                  <span className="proof-chip chip-crm">Zoho CRM</span>
                  <span className="proof-chip chip-books">Zoho Books</span>
                  <span className="proof-chip chip-creator">Zoho Creator</span>
                </div>
              </div>

              <div className="proof-detail-card">
                <span className="proof-detail-label">CONFIRMED SERVICES</span>
                <div className="proof-service-list">
                  <div className="proof-service-item">
                    <CheckCircle2 size={14} className="text-[#6C5CE7]" />
                    <span>Setup &amp; Configuration</span>
                  </div>
                  <div className="proof-service-item">
                    <CheckCircle2 size={14} className="text-[#6C5CE7]" />
                    <span>Customization</span>
                  </div>
                  <div className="proof-service-item">
                    <CheckCircle2 size={14} className="text-[#6C5CE7]" />
                    <span>Training</span>
                  </div>
                  <div className="proof-service-item">
                    <CheckCircle2 size={14} className="text-[#6C5CE7]" />
                    <span>Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 03: PRODUCT SECTION (INTERACTIVE PRODUCT EXPLORER)
          ----------------------------------------------------------------- */}
      <section className="zoho-section section-wrap" id="products">
        <Reveal className="zoho-section-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>SUPPORTED ZOHO SUITE</span>
          </div>
          <h2>The right tools for the way you work.</h2>
          <p>
            We focus our partnership capabilities on three cornerstone Zoho
            applications, ensuring each tool is adapted to your exact operational
            reality.
          </p>
        </Reveal>

        {/* 3 Core Product Overview Cards */}
        <Reveal delay={0.08} className="zoho-overview-cards-grid">
          {(Object.keys(ZOHO_PRODUCTS) as ZohoProductKey[]).map((key) => {
            const prod = ZOHO_PRODUCTS[key];
            const isSelected = selectedProduct === key;
            return (
              <button
                type="button"
                key={prod.id}
                onClick={() => setSelectedProduct(key)}
                className={`zoho-overview-card ${
                  isSelected ? "is-selected" : ""
                }`}
                style={{
                  ["--card-accent" as never]: prod.color,
                }}
              >
                <div className="overview-card-top">
                  <div
                    className="overview-icon-box"
                    style={{
                      color: prod.color,
                      backgroundColor: prod.accentBg,
                      borderColor: prod.accentBorder,
                    }}
                  >
                    <prod.icon size={20} />
                  </div>
                  <span
                    className="overview-badge"
                    style={{
                      color: prod.color,
                      backgroundColor: prod.accentBg,
                      borderColor: prod.accentBorder,
                    }}
                  >
                    {prod.name}
                  </span>
                </div>
                <h3 className="overview-title">{prod.name}</h3>
                <p className="overview-desc">{prod.description}</p>
                <div className="overview-card-footer">
                  <span className="overview-action-label">
                    {isSelected ? "Active in Explorer ↓" : "Explore Configuration →"}
                  </span>
                </div>
              </button>
            );
          })}
        </Reveal>

        {/* Product Selector Tabs */}
        <Reveal delay={0.12} className="zoho-product-tabs-container">
          <div className="zoho-tabs-nav" role="tablist">
            {(Object.keys(ZOHO_PRODUCTS) as ZohoProductKey[]).map((key) => {
              const prod = ZOHO_PRODUCTS[key];
              const isSelected = selectedProduct === key;
              return (
                <button
                  key={prod.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedProduct(key)}
                  className={`zoho-tab-btn ${isSelected ? "is-active" : ""}`}
                >
                  <prod.icon
                    size={16}
                    style={{ color: isSelected ? prod.color : "currentColor" }}
                  />
                  <span className="tab-btn-title">{prod.name}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="tab-active-indicator"
                      transition={{ duration: 0.35, ease }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Dynamic Product Explorer View */}
        <div className="zoho-explorer-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="zoho-explorer-grid"
            >
              {/* Left Column: Product Information & Confirmed Services */}
              <div className="zoho-explorer-info">
                <div className="explorer-header">
                  <span
                    className="explorer-badge"
                    style={{
                      color: currentProduct.color,
                      borderColor: currentProduct.accentBorder,
                      backgroundColor: currentProduct.accentBg,
                    }}
                  >
                    {currentProduct.badge}
                  </span>
                  <h3 className="explorer-title">{currentProduct.name}</h3>
                  <p className="explorer-description">
                    {currentProduct.description}
                  </p>
                </div>

                <div className="explorer-capabilities">
                  <span className="explorer-subhead">
                    HOW ARAM CONFIGURES {currentProduct.name.toUpperCase()}
                  </span>
                  <div className="explorer-cap-list">
                    {currentProduct.focusCapabilities.map((cap) => (
                      <div key={cap.title} className="cap-item">
                        <div
                          className="cap-bullet"
                          style={{ backgroundColor: currentProduct.color }}
                        />
                        <div>
                          <h4 className="cap-title">{cap.title}</h4>
                          <p className="cap-detail">{cap.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="explorer-services-strip">
                  <span className="services-strip-label">
                    CONFIRMED SERVICES FOR THIS PRODUCT:
                  </span>
                  <div className="services-pill-row">
                    {currentProduct.servicesOffered.map((s) => (
                      <span key={s} className="service-chip">
                        <Check size={11} className="text-[#6C5CE7]" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="explorer-cta-row">
                  <a href="#inquire" className="button button-primary">
                    Configure {currentProduct.name} ↗
                  </a>
                </div>
              </div>

              {/* Right Column: High-Fidelity Conceptual Blueprint */}
              <div className="zoho-explorer-mockup">
                <ConceptualProductBlueprint productKey={selectedProduct} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 04: SERVICES SECTION (VARIED EDITORIAL LAYOUT)
          ----------------------------------------------------------------- */}
      <section className="zoho-section section-wrap" id="services">
        <Reveal className="zoho-section-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>CONFIRMED SERVICES</span>
          </div>
          <h2>Configured around your business.</h2>
          <p>
            We focus strictly on the four confirmed services required to deploy,
            tailor, and maintain Zoho CRM, Zoho Books, and Zoho Creator for your
            organization.
          </p>
        </Reveal>

        {/* Varied Editorial Layout: Asymmetric, non-identical structure */}
        <div className="zoho-editorial-services">
          {/* Service 1: Hero Primary Anchor Card */}
          <Reveal className="service-editorial-card card-primary-anchor">
            <div className="card-top-eyebrow">
              <span className="service-number">SERVICE 01</span>
              <span className="service-badge-pill">FOUNDATION</span>
            </div>
            <div className="anchor-content-layout">
              <div className="anchor-text-block">
                <div className="anchor-icon-wrap">
                  <Sliders size={22} className="text-[#6C5CE7]" />
                </div>
                <h3 className="service-card-title">Setup &amp; Configuration</h3>
                <p className="service-card-summary">
                  Set up selected Zoho products to suit your business
                  requirements.
                </p>
                <p className="service-card-body">
                  We initialize your Zoho CRM, Books, or Creator environment from
                  the ground up: configuring user accounts, setting security
                  permissions, creating standard and custom fields, and ensuring
                  your foundational data hierarchy reflects your company&apos;s
                  exact operating model.
                </p>
                <div className="service-feature-checklist">
                  <div className="feature-check-item">
                    <CheckCircle2 size={14} className="text-[#089949]" />
                    <span>User roles, profiles, and data access permissions</span>
                  </div>
                  <div className="feature-check-item">
                    <CheckCircle2 size={14} className="text-[#089949]" />
                    <span>Module selection and foundational field mapping</span>
                  </div>
                  <div className="feature-check-item">
                    <CheckCircle2 size={14} className="text-[#089949]" />
                    <span>Initial record structure and clean data imports</span>
                  </div>
                </div>
              </div>

              <div className="anchor-preview-blueprint">
                <div className="mini-blueprint-header">
                  <span className="mini-bp-dot" />
                  <span>Deployment Architecture</span>
                </div>
                <div className="mini-blueprint-flow">
                  <div className="flow-node">
                    <span className="node-step">01</span>
                    <span className="node-text">Environment Setup</span>
                  </div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node">
                    <span className="node-step">02</span>
                    <span className="node-text">Role &amp; Field Alignment</span>
                  </div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node is-highlight">
                    <span className="node-step">03</span>
                    <span className="node-text">Structured Baseline Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Service 2 & 3: Paired Asymmetrical Dual Split */}
          <div className="service-editorial-duo">
            {/* Service 2: Customization */}
            <Reveal delay={0.1} className="service-editorial-card card-duo-item">
              <div className="card-top-eyebrow">
                <span className="service-number">SERVICE 02</span>
                <span className="service-badge-pill">ADAPTATION</span>
              </div>
              <div className="duo-icon-wrap">
                <Workflow size={20} className="text-[#E42527]" />
              </div>
              <h3 className="service-card-title">Customization</h3>
              <p className="service-card-summary">
                Adapt available settings and features to better fit your
                workflows.
              </p>
              <p className="service-card-body">
                Standard out-of-the-box software rarely matches how a specific
                business conducts its day-to-day operations. We adapt page
                layouts, configure conditional fields, build automated email
                rules, and write Deluge business logic to make the interface feel
                natural to your team.
              </p>
              <div className="service-tag-cloud">
                <span className="tag-pill">Custom page layouts</span>
                <span className="tag-pill">Conditional field logic</span>
                <span className="tag-pill">Automated alert rules</span>
                <span className="tag-pill">Deluge script logic</span>
              </div>
            </Reveal>

            {/* Service 3: Training */}
            <Reveal delay={0.18} className="service-editorial-card card-duo-item">
              <div className="card-top-eyebrow">
                <span className="service-number">SERVICE 03</span>
                <span className="service-badge-pill">HUMAN ADOPTION</span>
              </div>
              <div className="duo-icon-wrap">
                <Users size={20} className="text-[#226DB4]" />
              </div>
              <h3 className="service-card-title">Training</h3>
              <p className="service-card-summary">
                Help your team understand and use the configured solutions.
              </p>
              <p className="service-card-body">
                Technology only succeeds if people actually use it with
                confidence. We conduct focused walkthroughs tailored to
                different roles within your organization—from front-line
                reps logging activities to managers checking reports—so everyone
                understands their daily workflows.
              </p>
              <div className="service-tag-cloud">
                <span className="tag-pill">Role-based walkthroughs</span>
                <span className="tag-pill">Operational reference notes</span>
                <span className="tag-pill">Hands-on practice sessions</span>
                <span className="tag-pill">Adoption check-ins</span>
              </div>
            </Reveal>
          </div>

          {/* Service 4: Wide Horizontal Ribbon Card */}
          <Reveal delay={0.25} className="service-editorial-card card-ribbon-support">
            <div className="ribbon-content-grid">
              <div className="ribbon-badge-side">
                <span className="service-number">SERVICE 04</span>
                <div className="ribbon-icon-wrap">
                  <LifeBuoy size={24} className="text-[#089949]" />
                </div>
              </div>
              <div className="ribbon-main-text">
                <h3 className="service-card-title">Ongoing Support</h3>
                <p className="service-card-summary">
                  Assist with questions, adjustments, and continued use after
                  setup.
                </p>
                <p className="service-card-body">
                  Business needs evolve over time. As you onboard new team
                  members, add product lines, or modify reporting requirements,
                  Aram Analytics remains available to provide configuration
                  adjustments, answer operational questions, and maintain your
                  Zoho environment.
                </p>
              </div>
              <div className="ribbon-action-side">
                <div className="support-chips">
                  <div className="sup-chip">
                    <CheckCircle2 size={13} className="text-[#089949]" />
                    <span>Configuration adjustments</span>
                  </div>
                  <div className="sup-chip">
                    <CheckCircle2 size={13} className="text-[#089949]" />
                    <span>Workflow fine-tuning</span>
                  </div>
                  <div className="sup-chip">
                    <CheckCircle2 size={13} className="text-[#089949]" />
                    <span>Operational guidance</span>
                  </div>
                </div>
                <a href="#inquire" className="button button-quiet ribbon-btn">
                  Ask About Support ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 05: PROCESS SECTION (CONNECTED 4-STAGE TIMELINE)
          ----------------------------------------------------------------- */}
      <section className="zoho-section section-wrap" id="process">
        <Reveal className="zoho-section-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>OUR PROCESS</span>
          </div>
          <h2>Understand. Configure. Enable. Support.</h2>
          <p>
            We start by understanding how your business works, configure the
            appropriate Zoho solution, help your team get comfortable using it,
            and provide ongoing support based on your agreed requirements.
          </p>
        </Reveal>

        {/* Connected Process Pathway with Continuous Line Animation */}
        <div className="zoho-process-timeline-wrap">
          {/* Continuous Connecting Line */}
          <div className="zoho-process-track-line" aria-hidden="true" />

          <div className="zoho-process-steps-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal
                key={step.step}
                delay={0.08 * (idx + 1)}
                className="zoho-process-step-card"
              >
                <div className="step-card-header">
                  <div className="step-number-circle">
                    <span>{step.step}</span>
                  </div>
                  <span className="step-label-pill">{step.label}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <div className="step-deliverable-box">
                  <span className="deliverable-label">DELIVERABLE:</span>
                  <p className="deliverable-text">{step.deliverable}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 06: CLOSING CTA SECTION WITH WORKING INQUIRY FORM
          ----------------------------------------------------------------- */}
      <section className="zoho-section zoho-cta-section section-wrap" id="inquire">
        <div className="zoho-cta-box">
          <div className="zoho-cta-glow" aria-hidden="true" />

          <div className="zoho-cta-layout">
            <Reveal className="zoho-cta-copy">
              <div className="eyebrow">
                <Sparkles size={13} className="text-[#b5a4ff]" />
                <span>OFFICIAL ZOHO PARTNER INQUIRY</span>
              </div>
              <h2 className="zoho-cta-headline">
                Let&apos;s find the right Zoho solution for you.
              </h2>
              <p className="zoho-cta-desc">
                Tell us about your business processes and the challenges you
                want to solve. We&apos;ll discuss which of our supported Zoho
                solutions may fit your needs.
              </p>

              <div className="zoho-cta-summary-bullets">
                <div className="summary-bullet">
                  <div className="bullet-dot" />
                  <span>
                    Direct discussion with experienced Zoho implementation
                    practitioners
                  </span>
                </div>
                <div className="summary-bullet">
                  <div className="bullet-dot" />
                  <span>
                    Focused exclusively on confirmed services: Setup,
                    Customization, Training &amp; Support
                  </span>
                </div>
                <div className="summary-bullet">
                  <div className="bullet-dot" />
                  <span>
                    Transparent evaluation of Zoho CRM, Zoho Books, or Zoho
                    Creator fit
                  </span>
                </div>
              </div>

              <div className="zoho-contact-direct">
                <span className="direct-label">Direct Contact:</span>
                <a
                  href="mailto:contact@aramanalytics.com"
                  className="direct-email-link"
                >
                  contact@aramanalytics.com <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="zoho-cta-form-container">
              <ZohoInquiryForm initialProduct={currentProduct.name} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
