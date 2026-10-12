import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Aram Analytics",
  description:
    "Aram Analytics is a multidisciplinary technology partner based at Vaazhai Incubator Campus, Puliyangudi, Tamil Nadu. We build web platforms, mobile applications, AI-driven automation, and enterprise solutions.",
  openGraph: {
    title: "About Aram Analytics — Technology that connects ideas, systems, and outcomes",
    description:
      "Aram Analytics brings together software engineering, AI, automation, data, and digital platforms to turn complex challenges into practical technology solutions.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <main id="top">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
