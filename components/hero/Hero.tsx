"use client";

import "./Hero.css";

import OptimizedImage from "@/components/optimized-image/OptimizedImage";

export default function Hero() {

  return (

    <section className="hero-section">

      {/* HERO IMAGE */}
      <OptimizedImage
        src="/images/hero/hero.webp"
        alt="Luxury Architectural Environment"
        priority
        className="hero-image"
      />

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <p>
          PREMIUM CONSTRUCTION & INTERIOR ENVIRONMENTS
        </p>

        <h1>
          Crafted Through <br />
          Precision, Luxury <br />
          And Intelligent <br />
          Execution.
        </h1>

        <span className="hero-subtext">
          Vertex Construction & Services
          delivers premium marble,
          waterproofing, painting and
          interior execution environments
          through refined craftsmanship,
          practical planning and
          architectural precision.
        </span>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a
            href="/expertise"
            className="hero-primary"
          >
            Explore Expertise
          </a>

          <a
            href="/contact"
            className="hero-secondary"
          >
            Request Consultation
          </a>

        </div>

      </div>

    </section>
  );
}