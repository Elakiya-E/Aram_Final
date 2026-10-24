import type { Metadata } from "next";
import { AiAutomationPageContent } from "@/components/ai-automation/AiAutomationPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "AI & Automation in Practice | Aram Analytics",
  },
  description:
    "Explore the AI solutions and automation workflows Aram Analytics has built to address practical business needs.",
  alternates: {
    canonical: "/ai-automation",
  },
  openGraph: {
    title: "AI & Automation in Practice | Aram Analytics",
    description:
      "Explore the AI solutions and automation workflows Aram Analytics has built to address practical business needs.",
    url: "/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI & Automation in Practice | Aram Analytics",
    description:
      "Explore the AI solutions and automation workflows Aram Analytics has built to address practical business needs.",
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
