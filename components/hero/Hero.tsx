"use client";

import "./Hero.css";
import OptimizedImage from "@/components/optimized-image/OptimizedImage";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* HERO IMAGE */}
      <OptimizedImage
        src="/images/hero/hero.webp"
        alt="Premium Construction Environment"
        priority
        className="hero-image"
      />

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <p className="hero-label">Premium Construction & Interior Services</p>

        <h1>
          Finishing Excellence.
          <br />
          Built to Last.
        </h1>

        <span className="hero-subtext">
          India&apos;s top developers don&apos;t settle at the structure. They settle
          at the finish. That&apos;s where Vertex Construction Services begins.
          From marble alignment to waterproofing precision — we deliver what we
          promise, every single time.
        </span>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <a href="/contact" className="btn-primary">
            Schedule Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="https://wa.me/917899042875"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            WhatsApp Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
