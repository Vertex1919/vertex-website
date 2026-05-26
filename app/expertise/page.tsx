import "./expertise.css";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";

export default function ExpertisePage() {
  return (
    <main className="expertise-page">
      {/* TOP SECTION */}
      <FadeUp>
        <section className="expertise-top">
          <div className="expertise-top-left">
            <p className="section-label">Our Expertise</p>
            <h1>
              Four Verticals.
              <br />
              One Standard of
              <br />
              Excellence.
            </h1>
          </div>
          <div className="expertise-top-right">
            <p>
              Every surface Vertex touches is governed by the same principle —
              premium methods, proven materials, complete accountability.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* MARBLE */}
      <FadeUp>
        <section className="service-section">
          <div className="service-image">
            <img
              src="/images/expertise-page/marble-detail.webp"
              alt="Marble, Tile & Granite Fixing"
            />
          </div>
          <div className="service-content">
            <p className="section-label">01 / Marble, Tile & Granite</p>
            <h2>
              Precision That Shows
              <br />
              in Every Joint
            </h2>
            <span>
              Finishing quality is most visible in the details — a hairline
              misalignment, an uneven grout line, a dull surface where there
              should be a mirror finish. Vertex eliminates these entirely.
            </span>
            <ul className="service-features">
              <li>Flawless tile and marble alignment across large-format surfaces</li>
              <li>Precision grouting with structural integrity and clean aesthetics</li>
              <li>Polished finishes that meet premium residential and commercial standards</li>
              <li>Granite installation for high-traffic lobbies, terraces, and feature walls</li>
            </ul>
            <p className="service-suitable">
              Suitable for: Premium apartments, commercial towers, hotel lobbies, retail spaces.
            </p>
            <a
              href="https://wa.me/919901207418"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Discuss Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>
      </FadeUp>

      {/* WATERPROOFING */}
      <FadeUp>
        <section className="service-section reverse">
          <div className="service-image">
            <img
              src="/images/expertise-page/waterproofing-detail.webp"
              alt="Waterproofing Solutions"
            />
          </div>
          <div className="service-content">
            <p className="section-label">02 / Waterproofing</p>
            <h2>
              Built to Seal.
              <br />
              Built to Last.
            </h2>
            <span>
              Water ingress is one of the costliest post-delivery problems in
              Indian construction. Vertex&apos;s waterproofing division applies
              advanced sealants and modern application techniques at every
              vulnerable surface.
            </span>
            <ul className="service-features">
              <li>Bathrooms & wet areas — complete membrane application</li>
              <li>Terraces & rooftops — thermal and drainage-compatible solutions</li>
              <li>Basements — hydrostatic pressure-resistant systems</li>
              <li>Facades & external walls — weather-barrier coatings</li>
            </ul>
            <a
              href="mailto:hello@vertexconstructionservices.in"
              className="btn-secondary"
            >
              Request Site Assessment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>
      </FadeUp>

      {/* INTERIORS */}
      <FadeUp>
        <section className="service-section">
          <div className="service-image">
            <img
              src="/images/expertise-page/interior-detail.webp"
              alt="Interior Designing"
            />
          </div>
          <div className="service-content">
            <p className="section-label">03 / Interior Design</p>
            <h2>
              Spaces That Work
              <br />
              As Well As They Look
            </h2>
            <span>
              Interior design at Vertex is not a cosmetic exercise. Every space
              we design — from a 50-seat corporate lobby to a premium 3BHK
              residence — is built around a precise balance of elegance,
              functionality, and construction-ready execution.
            </span>
            <ul className="service-features">
              <li>Corporate lobbies, boardrooms, and commercial interiors</li>
              <li>Premium residential apartments and villas</li>
              <li>Lighting design, spatial planning, material selection</li>
              <li>Coordination with civil and MEP teams for integrated delivery</li>
            </ul>
            <Link href="/contact" className="btn-secondary">
              Schedule Design Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeUp>

      {/* PAINTING */}
      <FadeUp>
        <section className="service-section reverse">
          <div className="service-image">
            <img
              src="/images/expertise-page/painting-detail.webp"
              alt="Premium Painting Services"
            />
          </div>
          <div className="service-content">
            <p className="section-label">04 / Premium Painting</p>
            <h2>
              Surface Preparation
              <br />
              First. Always.
            </h2>
            <span>
              The difference between a good paint job and a premium finish is
              what happens before the first coat — surface preparation, primer
              selection, and base correction. Vertex treats this as
              non-negotiable.
            </span>
            <ul className="service-features">
              <li>Weather-resistant exterior finishes for high-rise and villa projects</li>
              <li>Interior applications across texture, matte, and semi-gloss specifications</li>
              <li>Strict surface preparation protocol including filling, sanding, and priming</li>
              <li>Colour consultancy available for developer handover-ready units</li>
            </ul>
            <a
              href="https://wa.me/917899042875"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get a Painting Estimate
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>
      </FadeUp>

      {/* CTA */}
      <FadeUp>
        <section className="expertise-cta">
          <div className="expertise-cta-overlay"></div>
          <div className="expertise-cta-content">
            <p className="section-label">Build With Vertex</p>
            <h2>
              Exceptional Spaces
              <br />
              Begin With Precision.
            </h2>
            <Link href="/contact" className="btn-primary">
              Start A Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
