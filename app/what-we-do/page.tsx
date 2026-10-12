import type { Metadata } from "next";
import { WhatWeDoPageContent } from "@/components/what-we-do/WhatWeDoPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do — Aram Analytics",
  description:
    "We turn complex challenges into connected solutions. Explore Aram Analytics' core capabilities across AI solutions, automation, software engineering, data analytics, Zoho systems, and cloud services.",
  openGraph: {
    title: "What We Do — Aram Analytics | Connected Technology Solutions",
    description:
      "We combine AI, automation, software engineering, data, and digital platforms to help businesses work smarter, move faster, and grow with confidence.",
    type: "website",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <main id="top">
        <WhatWeDoPageContent />
      </main>
      <Footer />
    </>
  );
}
