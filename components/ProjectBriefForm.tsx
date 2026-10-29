"use client";

import React, { useState, FormEvent, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Globe,
  Sparkles,
  Cpu,
  BarChart3,
  Layers,
  Compass,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  Edit3,
  User,
  Mail,
  Building2,
  FileText,
  RotateCcw,
} from "lucide-react";

export interface ProjectTypeOption {
  id: string;
  label: string;
  shortDesc: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "website",
    label: "Website or digital platform",
    shortDesc: "Modern web apps, customer portals & digital experiences",
    icon: Globe,
  },
  {
    id: "ai",
    label: "AI solutions",
    shortDesc: "Custom intelligent systems, LLM tools & automated agents",
    icon: Sparkles,
  },
  {
    id: "automation",
    label: "Workflow automation",
    shortDesc: "End-to-end process pipelines & multi-tool integrations",
    icon: Cpu,
  },
  {
    id: "data",
    label: "Data and analytics",
    shortDesc: "Unified dashboards, telemetry tracking & business reporting",
    icon: BarChart3,
  },
  {
    id: "zoho",
    label: "Zoho and business systems",
    shortDesc: "Zoho One, CRM, Creator workflows & ERP operations",
    icon: Layers,
  },
  {
    id: "other",
    label: "Something else",
    shortDesc: "Specialized engineering, advisory or bespoke architecture",
    icon: Compass,
  },
];

interface FormDataState {
  name: string;
  email: string;
  company: string;
  selectedTypes: string[];
  message: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectBriefForm() {
  const reducedMotion = useReducedMotion();
  const formBaseId = useId();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    company: "",
    selectedTypes: [],
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    selectedTypes?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Field change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof typeof errors];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  };

  // Toggle project type selection
  const handleToggleType = (typeId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedTypes.includes(typeId);
      const updated = exists
        ? prev.selectedTypes.filter((id) => id !== typeId)
        : [...prev.selectedTypes, typeId];
      return { ...prev, selectedTypes: updated };
    });

    if (errors.selectedTypes) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.selectedTypes;
        return next;
      });
    }
  };

  // Validation routines per step
  const validateStep1 = (): boolean => {
    const stepErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      stepErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      stepErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      stepErrors.email = "Please enter a valid work email address.";
    }

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const stepErrors: { selectedTypes?: string; message?: string } = {};

    if (formData.selectedTypes.length === 0) {
      stepErrors.selectedTypes = "Please select at least one area you need help with.";
    }

    if (!formData.message.trim()) {
      stepErrors.message = "Please share what you would like to build or solve.";
    } else if (formData.message.trim().length < 8) {
      stepErrors.message = "Please provide a little more context (at least 8 characters).";
    }

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return Object.keys(stepErrors).length === 0;
  };

  // Step navigation
  const goToNextStep = () => {
    setSubmitError(null);
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const goToPrevStep = () => {
    setSubmitError(null);
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  const jumpToStep = (targetStep: 1 | 2 | 3) => {
    setSubmitError(null);
    if (targetStep < step) {
      setStep(targetStep);
      return;
    }
    if (targetStep === 2 && validateStep1()) {
      setStep(2);
    } else if (targetStep === 3 && validateStep1() && validateStep2()) {
      setStep(3);
    }
  };

  // Final submission
  const handleSubmitBrief = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);

    const step1Valid = validateStep1();
    const step2Valid = validateStep2();

    if (!step1Valid) {
      setStep(1);
      return;
    }
    if (!step2Valid) {
      setStep(2);
      return;
    }

    const selectedLabels = formData.selectedTypes
      .map((id) => PROJECT_TYPES.find((t) => t.id === id)?.label)
      .filter(Boolean) as string[];

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          types: selectedLabels,
          message: formData.message.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fields?: Record<string, string>;
      } | null;

      if (!response.ok || !data?.ok) {
        const fieldErrors = data?.fields;
        if (fieldErrors) {
          setErrors((prev) => ({ ...prev, ...fieldErrors }));
        }

        setSubmitError(
          data?.error ||
            "We couldn't send your brief right now. Please try again in a moment."
        );
        return;
      }

      // The success screen is only shown once the server confirms delivery.
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn't reach the enquiry service. Please check your connection and try again — your details have been kept."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      selectedTypes: [],
      message: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
    setStep(1);
  };

  // If successfully submitted, display distinctive editorial confirmation
  if (isSubmitted) {
    return (
      <div className="brief-workspace-surface brief-success-surface" role="region" aria-label="Project Brief Submission Confirmation">
        <div className="brief-accent-bar" aria-hidden="true" />

        <div className="brief-success-card">
          <div className="brief-success-icon-wrap" aria-hidden="true">
            <div className="brief-success-ring" />
            <CheckCircle2 size={36} className="brief-success-icon" strokeWidth={2.2} />
          </div>

          <div className="brief-success-header">
            <span className="brief-kicker-badge brief-kicker-mint">BRIEF DISPATCHED</span>
            <h3 className="brief-success-title">Your brief is on its way.</h3>
            <p className="brief-success-description">
              Thank you for sharing your project with Aram Analytics. Your enquiry has been submitted successfully.
            </p>
          </div>

          {/* Compact summary recap */}
          <div className="brief-success-recap">
            <div className="brief-recap-row">
              <span className="brief-recap-label">Client</span>
              <span className="brief-recap-value">
                {formData.name} {formData.company ? `(${formData.company})` : ""}
              </span>
            </div>
            <div className="brief-recap-row">
              <span className="brief-recap-label">Work Email</span>
              <span className="brief-recap-value">{formData.email}</span>
            </div>
            {formData.selectedTypes.length > 0 && (
              <div className="brief-recap-row">
                <span className="brief-recap-label">Focus Areas</span>
                <span className="brief-recap-value">
                  {formData.selectedTypes
                    .map((id) => PROJECT_TYPES.find((t) => t.id === id)?.label)
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>
            )}
          </div>

          <div className="brief-success-actions">
            <a
              href="#top"
              className="brief-btn brief-btn-primary brief-btn-success-home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span>Back to Aram Analytics</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={resetForm}
              className="brief-btn brief-btn-ghost"
            >
              <RotateCcw size={14} />
              <span>Submit another brief</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="brief-workspace-surface" role="region" aria-label="Project Brief Interactive Workspace">
      <div className="brief-accent-bar" aria-hidden="true" />

      {/* Top Workspace Header */}
      <div className="brief-workspace-header">
        <div className="brief-workspace-eyebrow">
          <span className="brief-eyebrow-dot" aria-hidden="true" />
          <span className="brief-eyebrow-text">THE PROJECT BRIEF</span>
        </div>
        <div className="brief-workspace-meta">
          <span className="brief-step-counter">
            STEP <strong>0{step}</strong> / 03
          </span>
        </div>
      </div>

      {/* Guided Progress Indicator */}
      <nav className="brief-stepper" aria-label="Project brief steps">
        <ol className="brief-stepper-list">
          {/* Step 1 indicator */}
          <li className="brief-stepper-item">
            <button
              type="button"
              onClick={() => jumpToStep(1)}
              className={`brief-step-btn ${
                step === 1 ? "brief-step-active" : step > 1 ? "brief-step-completed" : "brief-step-upcoming"
              }`}
              aria-current={step === 1 ? "step" : undefined}
            >
              <span className="brief-step-badge">
                {step > 1 ? <Check size={12} strokeWidth={2.8} /> : "01"}
              </span>
              <span className="brief-step-name">About you</span>
            </button>
          </li>

          <li className="brief-stepper-divider" aria-hidden="true">
            <span className={`brief-divider-line ${step > 1 ? "brief-divider-filled" : ""}`} />
          </li>

          {/* Step 2 indicator */}
          <li className="brief-stepper-item">
            <button
              type="button"
              onClick={() => jumpToStep(2)}
              className={`brief-step-btn ${
                step === 2 ? "brief-step-active" : step > 2 ? "brief-step-completed" : "brief-step-upcoming"
              }`}
              aria-current={step === 2 ? "step" : undefined}
            >
              <span className="brief-step-badge">
                {step > 2 ? <Check size={12} strokeWidth={2.8} /> : "02"}
              </span>
              <span className="brief-step-name">Your project</span>
            </button>
          </li>

          <li className="brief-stepper-divider" aria-hidden="true">
            <span className={`brief-divider-line ${step > 2 ? "brief-divider-filled" : ""}`} />
          </li>

          {/* Step 3 indicator */}
          <li className="brief-stepper-item">
            <button
              type="button"
              onClick={() => jumpToStep(3)}
              className={`brief-step-btn ${
                step === 3 ? "brief-step-active" : "brief-step-upcoming"
              }`}
              aria-current={step === 3 ? "step" : undefined}
            >
              <span className="brief-step-badge">03</span>
              <span className="brief-step-name">Review</span>
            </button>
          </li>
        </ol>
      </nav>

      {/* Error alert banner if any general submission error */}
      {submitError && (
        <div className="brief-alert-banner brief-alert-error" role="alert" aria-live="assertive">
          <AlertCircle size={16} className="brief-alert-icon" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Guided Step Panels */}
      <form onSubmit={handleSubmitBrief} noValidate className="brief-form-body">
        <AnimatePresence mode="wait">
          {/* STEP 1: ABOUT YOU */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="brief-step-panel"
            >
              <div className="brief-panel-intro">
                <h4 className="brief-panel-title">Let&apos;s start with the basics</h4>
                <p className="brief-panel-sub">
                  Tell us who is leading this project so we can tailor our technical discovery.
                </p>
              </div>

              <div className="brief-fields-stack">
                {/* Full name */}
                <div className="brief-field-unit">
                  <label htmlFor={`${formBaseId}-name`} className="brief-field-label">
                    <span>Full name</span>
                    <span className="brief-req-star" aria-hidden="true">*</span>
                  </label>
                  <div className="brief-input-wrap">
                    <User size={16} className="brief-input-icon" aria-hidden="true" />
                    <input
                      id={`${formBaseId}-name`}
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`brief-text-input ${errors.name ? "brief-input-error" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${formBaseId}-name-err` : undefined}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p id={`${formBaseId}-name-err`} className="brief-field-err" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Work email */}
                <div className="brief-field-unit">
                  <label htmlFor={`${formBaseId}-email`} className="brief-field-label">
                    <span>Work email</span>
                    <span className="brief-req-star" aria-hidden="true">*</span>
                  </label>
                  <div className="brief-input-wrap">
                    <Mail size={16} className="brief-input-icon" aria-hidden="true" />
                    <input
                      id={`${formBaseId}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`brief-text-input ${errors.email ? "brief-input-error" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${formBaseId}-email-err` : undefined}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p id={`${formBaseId}-email-err`} className="brief-field-err" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company or organization */}
                <div className="brief-field-unit">
                  <div className="brief-label-flex">
                    <label htmlFor={`${formBaseId}-company`} className="brief-field-label">
                      <span>Company or organization</span>
                    </label>
                    <span className="brief-opt-badge">optional</span>
                  </div>
                  <div className="brief-input-wrap">
                    <Building2 size={16} className="brief-input-icon" aria-hidden="true" />
                    <input
                      id={`${formBaseId}-company`}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Inc. or venture name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="brief-text-input"
                    />
                  </div>
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="brief-panel-actions brief-actions-single">
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="brief-btn brief-btn-primary"
                >
                  <span>Continue to project details</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: YOUR PROJECT */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="brief-step-panel"
            >
              <div className="brief-panel-intro">
                <h4 className="brief-panel-title">What do you need help with?</h4>
                <p className="brief-panel-sub">
                  Select one or more focus areas, then share the core challenge or vision.
                </p>
              </div>

              {/* Selectable Project Types Grid */}
              <div className="brief-field-unit">
                <div className="brief-label-flex">
                  <span className="brief-field-label">
                    <span>Project focus</span>
                    <span className="brief-req-star" aria-hidden="true">*</span>
                  </span>
                  <span className="brief-hint-text">Select all that apply</span>
                </div>

                <div
                  className="brief-types-grid"
                  role="group"
                  aria-label="Select project focus areas"
                  aria-describedby={errors.selectedTypes ? `${formBaseId}-types-err` : undefined}
                >
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = formData.selectedTypes.includes(type.id);
                    const IconComp = type.icon;

                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => handleToggleType(type.id)}
                        className={`brief-type-card ${isSelected ? "brief-type-selected" : ""}`}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={0}
                      >
                        <div className="brief-type-head">
                          <div className="brief-type-icon-box" aria-hidden="true">
                            <IconComp size={16} strokeWidth={1.9} />
                          </div>
                          <div className={`brief-type-checkbox ${isSelected ? "brief-check-active" : ""}`} aria-hidden="true">
                            {isSelected ? <Check size={11} strokeWidth={3} /> : null}
                          </div>
                        </div>

                        <div className="brief-type-content">
                          <strong className="brief-type-name">{type.label}</strong>
                          <span className="brief-type-desc">{type.shortDesc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {errors.selectedTypes && (
                  <p id={`${formBaseId}-types-err`} className="brief-field-err" role="alert">
                    {errors.selectedTypes}
                  </p>
                )}
              </div>

              {/* Project description or challenge */}
              <div className="brief-field-unit">
                <label htmlFor={`${formBaseId}-message`} className="brief-field-label">
                  <span>Project description or challenge</span>
                  <span className="brief-req-star" aria-hidden="true">*</span>
                </label>
                <div className="brief-textarea-wrap">
                  <textarea
                    id={`${formBaseId}-message`}
                    name="message"
                    rows={4}
                    placeholder="Share your goals, operational bottlenecks, required integrations, or scope..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`brief-textarea ${errors.message ? "brief-input-error" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? `${formBaseId}-message-err` : undefined}
                    required
                  />
                </div>
                {errors.message && (
                  <p id={`${formBaseId}-message-err`} className="brief-field-err" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Step 2 Actions */}
              <div className="brief-panel-actions brief-actions-split">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="brief-btn brief-btn-ghost"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={goToNextStep}
                  className="brief-btn brief-btn-primary"
                >
                  <span>Review brief</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: REVIEW AND SEND */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="brief-step-panel"
            >
              <div className="brief-panel-intro">
                <h4 className="brief-panel-title">Review and send your brief</h4>
                <p className="brief-panel-sub">
                  Verify your information before sending. You can edit any section.
                </p>
              </div>

              {/* Review summary cards */}
              <div className="brief-review-container">
                {/* 1. Contact Info Card */}
                <div className="brief-review-card">
                  <div className="brief-review-head">
                    <div className="brief-review-title-group">
                      <User size={14} className="brief-review-icon" aria-hidden="true" />
                      <span className="brief-review-sec-title">Contact details</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => jumpToStep(1)}
                      className="brief-review-edit-btn"
                      aria-label="Edit contact details"
                    >
                      <Edit3 size={12} />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="brief-review-grid">
                    <div className="brief-review-pair">
                      <span className="brief-review-k">Name</span>
                      <strong className="brief-review-v">{formData.name}</strong>
                    </div>
                    <div className="brief-review-pair">
                      <span className="brief-review-k">Email</span>
                      <strong className="brief-review-v">{formData.email}</strong>
                    </div>
                    <div className="brief-review-pair">
                      <span className="brief-review-k">Company</span>
                      <strong className="brief-review-v">
                        {formData.company.trim() ? formData.company : "Not specified"}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* 2. Project Focus Card */}
                <div className="brief-review-card">
                  <div className="brief-review-head">
                    <div className="brief-review-title-group">
                      <Sparkles size={14} className="brief-review-icon" aria-hidden="true" />
                      <span className="brief-review-sec-title">Selected focus</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => jumpToStep(2)}
                      className="brief-review-edit-btn"
                      aria-label="Edit selected focus areas"
                    >
                      <Edit3 size={12} />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="brief-review-chips">
                    {formData.selectedTypes.length > 0 ? (
                      formData.selectedTypes.map((typeId) => {
                        const opt = PROJECT_TYPES.find((t) => t.id === typeId);
                        if (!opt) return null;
                        const OptIcon = opt.icon;
                        return (
                          <span key={typeId} className="brief-review-chip">
                            <OptIcon size={12} className="brief-chip-icon" />
                            <span>{opt.label}</span>
                          </span>
                        );
                      })
                    ) : (
                      <span className="brief-review-chip brief-chip-muted">
                        General enquiry
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Challenge & Scope Card */}
                <div className="brief-review-card">
                  <div className="brief-review-head">
                    <div className="brief-review-title-group">
                      <FileText size={14} className="brief-review-icon" aria-hidden="true" />
                      <span className="brief-review-sec-title">Project description</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => jumpToStep(2)}
                      className="brief-review-edit-btn"
                      aria-label="Edit project description"
                    >
                      <Edit3 size={12} />
                      <span>Edit</span>
                    </button>
                  </div>

                  <blockquote className="brief-review-message">
                    &ldquo;{formData.message}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Step 3 Actions */}
              <div className="brief-panel-actions brief-actions-split">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  disabled={isSubmitting}
                  className="brief-btn brief-btn-ghost"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brief-btn brief-btn-primary brief-btn-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="brief-spinner" aria-hidden="true" />
                      <span>Submitting brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <ArrowUpRight size={16} className="brief-btn-arrow" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>

              <p className="brief-workspace-assurance">
                Direct transmission. Your brief is reviewed by engineering leadership without sales pressure.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
