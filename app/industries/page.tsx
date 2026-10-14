import type { Metadata } from "next";
import { IndustriesPageContent } from "@/components/industries/IndustriesPageContent";
import { Footer } from "@/components/Footer";
import "@/components/industries/industries.css";

export const metadata: Metadata = {
  title: {
    absolute: "Industries We Serve | Aram Analytics",
  },
  description:
    "Discover how Aram Analytics helps businesses across healthcare, retail, education, finance, manufacturing, and more with software, AI, automation, and data solutions.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Aram Analytics",
    description:
      "Discover how Aram Analytics helps businesses across healthcare, retail, education, finance, manufacturing, and more with software, AI, automation, and data solutions.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Industries We Serve | Aram Analytics",
    description:
      "Discover how Aram Analytics helps businesses across healthcare, retail, education, finance, manufacturing, and more with software, AI, automation, and data solutions.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <main id="top">
        <IndustriesPageContent />
      </main>
      <Footer />
    </>
  );
}
