"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import siteLogo from "@/app/logo3-Picsart-AiImageEnhancer-removebg-preview.png";

export function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-main">
        <Link aria-label="Aram Analytics home" className="wordmark footer-wordmark" href="/">
          <Image
            alt="Aram Analytics"
            className="brand-logo"
            height={28}
            src={siteLogo}
          />
        </Link>
        <p>
          Thoughtful technology.
          <br />
          Better business.
        </p>
        <div className="footer-nav-links">
          <Link href="/#services">What we do</Link>
          <Link href="/#work">Our work</Link>
          <Link href="/#zoho">Zoho</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <a className="footer-top" href="#top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aram Analytics. All rights reserved.</span>
        <span>
          Made for people doing good work <span className="footer-heart">✳</span>
        </span>
        <span className="footer-placeholder">Vaazhai Incubator Campus, Puliyangudi, Tamil Nadu</span>
      </div>
    </footer>
  );
}
