import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Aram Analytics — Thoughtful technology. Better business.",
    template: "%s — Aram Analytics",
  },
  description:
    "Aram Analytics helps ambitious teams connect their tools, streamline operations, and get more from Zoho.",
  applicationName: "Aram Analytics",
  openGraph: {
    title: "Aram Analytics — Thoughtful technology. Better business.",
    description:
      "Practical software, intelligent automation, and expert Zoho guidance for teams ready to work better.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={GeistSans.className}>
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
