import "./clients.css";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";

export default function ClientsPage() {
  const testimonials = [
    {
      quote:
        "Vertex delivers finishes with unmatched precision. Their discipline and timeliness make them a partner we can rely on for premium projects.",
      author: "Developer Partner",
      project: "Premium Residential Project",
    },
    {
      quote:
        "From waterproofing to interiors, every detail is executed with perfection.",
      author: "Project Manager",
      project: "Commercial Development",
    },
    {
      quote:
        "The strength of Vertex lies in their honesty — no false promises, no overcommitment, no underdelivery.",
      author: "Senior Developer Partner",
      project: "High-Rise Development",
    },
    {
      quote: "Vertex brings craftsmanship and professionalism together.",
      author: "Builder Partner",
      project: "High-Rise Project",
    },
  ];

  return (
    <main className="clients-page">
      {/* HERO */}
      <section className="clients-hero">
        <img
          src="/images/clients/clients-hero.webp"
          alt="Trusted Client Partnerships"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="section-label">Testimonials</p>
          <h1>
            The Proof Is
            <br />
            in the Partner.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <FadeUp>
        <section className="clients-intro">
          <p className="intro-text">
            Vertex doesn&apos;t build trust through brochures. It builds trust
            through delivery. Here&apos;s what our partners say.
          </p>
        </section>
      </FadeUp>

      {/* TESTIMONIALS GRID */}
      <FadeUp>
        <section className="testimonials-section">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <span className="testimonial-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <cite>{item.author}</cite>
                  <span>{item.project}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* PARTNERSHIP SECTION */}
      <section className="partnership-section">
        <div className="partnership-image">
          <img
            src="/images/clients/clients-showcase.webp"
            alt="Premium Partnership"
          />
        </div>
        <div className="partnership-content">
          <FadeUp>
            <p className="section-label">Premium Environments</p>
            <h2>
              Delivering Refined
              <br />
              Architectural Spaces
              <br />
              Through Intelligent
              <br />
              Execution.
            </h2>
            <span>
              Vertex collaborates across luxury residential, commercial and
              premium architectural environments through disciplined execution,
              premium material handling and long-term value creation.
            </span>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta">
        <img
          src="/images/clients/clients-cta.webp"
          alt="Partner with Vertex"
        />
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-label">Ready to Experience It Firsthand?</p>
          <h2>
            Spaces Designed
            <br />
            Through Precision
            <br />& Trust.
          </h2>
          <Link href="/contact" className="btn-primary">
            Contact Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
