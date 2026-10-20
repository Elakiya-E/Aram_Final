import type { Metadata } from "next";
import { OurWorkPageContent } from "@/components/our-work/OurWorkPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Our Work & Projects | Aram Analytics",
  },
  description:
    "Explore Aram Analytics projects across e-commerce, AI-powered marketing, counseling websites, semiconductor technology, infrastructure, civic engagement, interactive digital learning, and personal brand platforms.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work & Projects | Aram Analytics",
    description:
      "Explore Aram Analytics projects across e-commerce, AI-powered marketing, counseling websites, semiconductor technology, infrastructure, civic engagement, interactive digital learning, and personal brand platforms.",
    url: "/our-work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Our Work & Projects | Aram Analytics",
    description:
      "Explore Aram Analytics projects across e-commerce, AI-powered marketing, counseling websites, semiconductor technology, infrastructure, civic engagement, interactive digital learning, and personal brand platforms.",
  },
};

export default function OurWorkPage() {
  return (
    <>
      <main id="top">
        <OurWorkPageContent />
      </main>
      <Footer />
    </>
  );
}
