import "./CTA.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <p className="cta-label">Let&apos;s Build Something Exceptional</p>

        <h2>
          Trusted Across
          <br />
          Hyderabad & Bengaluru.
          <br />
          Expanding PAN-India.
        </h2>

        <div className="cta-locations">
          <div className="cta-location">
            <span>Headquarters</span>
            <p>Hyderabad, Telangana</p>
          </div>
          <div className="cta-location">
            <span>Operations Hub</span>
            <p>Bengaluru, Karnataka</p>
          </div>
        </div>

        <div className="cta-buttons">
          <Link href="/contact" className="btn-primary">
            Start A Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/clients" className="btn-secondary">
            Read Client Experiences
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="cta-testimonial">
        <blockquote>
          &ldquo;The strength of Vertex lies in their honesty — no false promises, no
          overcommitment, no underdelivery.&rdquo;
        </blockquote>
        <cite>— Developer Partner, Premium Residential Project</cite>
      </div>
    </section>
  );
}
