import type { Metadata } from "next";
import { AiAutomationPageContent } from "@/components/ai-automation/AiAutomationPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "AI & Automation Services | Aram Analytics",
  },
  description:
    "Explore AI automation services from Aram Analytics, including AI chatbots, LLM integration, custom AI development, and business workflow automation.",
  alternates: {
    canonical: "/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Services | Aram Analytics",
    description:
      "Explore AI automation services from Aram Analytics, including AI chatbots, LLM integration, custom AI development, and business workflow automation.",
    url: "/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI & Automation Services | Aram Analytics",
    description:
      "Explore AI automation services from Aram Analytics, including AI chatbots, LLM integration, custom AI development, and business workflow automation.",
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
