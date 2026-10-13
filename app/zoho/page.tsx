import type { Metadata } from "next";
import { ZohoPageContent } from "@/components/zoho/ZohoPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Official Zoho Partner — Aram Analytics",
  description:
    "As an official Zoho partner, Aram Analytics helps businesses configure and customize Zoho CRM, Zoho Books, and Zoho Creator to fit their workflows, manage information, and support operations.",
  openGraph: {
    title: "Official Zoho Partner — Aram Analytics",
    description:
      "Aram Analytics helps businesses configure and customize Zoho solutions to better fit their workflows, manage information, and support day-to-day operations.",
    type: "website",
  },
};

export default function ZohoPage() {
  return (
    <>
      <main id="top">
        <ZohoPageContent />
      </main>
      <Footer />
    </>
  );
}
