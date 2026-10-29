import type { Metadata } from "next";
import { AiAutomationPageContent } from "@/components/ai-automation/AiAutomationPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "AI & Automation | Practical Business Solutions — Aram Analytics",
  },
  description:
    "Discover how Aram Analytics approaches AI and business workflow automation to simplify repetitive tasks, connect systems, and improve operational processes.",
  alternates: {
    canonical: "/ai-automation",
  },
  openGraph: {
    title: "AI & Automation | Practical Business Solutions — Aram Analytics",
    description:
      "Discover how Aram Analytics approaches AI and business workflow automation to simplify repetitive tasks, connect systems, and improve operational processes.",
    url: "/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI & Automation | Practical Business Solutions — Aram Analytics",
    description:
      "Discover how Aram Analytics approaches AI and business workflow automation to simplify repetitive tasks, connect systems, and improve operational processes.",
  },
};

export default function AiAutomationPage() {
  return (
    <>
      <main id="top">
        <AiAutomationPageContent />
      </main>
      <Footer />
    </>
  );
}
