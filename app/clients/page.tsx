import "./clients.css";

import FadeUp from "@/components/animations/FadeUp";
import ClientWall from "@/components/client-wall/ClientWall";

export default function ClientsPage() {

  return (
    <main className="clients-page">

      {/* HERO */}
      <section className="clients-hero">

        <img
          src="/images/clients/clients-hero.webp"
          alt="Luxury Client Environments"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p>
            TRUSTED EXECUTION ENVIRONMENTS
          </p>

          <h1>
            Crafted Through <br />
            Precision, Trust <br />
            And Architectural <br />
            Excellence.
          </h1>

        </div>

      </section>

      {/* SHOWCASE */}
      <FadeUp>

        <section className="showcase-section">

          <div className="showcase-left">

            <img
              src="/images/clients/clients-showcase.webp"
              alt="Luxury Interior Environment"
            />

          </div>

          <div className="showcase-right">

            <p className="section-label">
              PREMIUM ENVIRONMENTS
            </p>

            <h2>
              Delivering Refined <br />
              Architectural Spaces <br />
              Through Intelligent <br />
              Execution.
            </h2>

            <span>
              Vertex collaborates across
              luxury residential,
              commercial and premium
              architectural environments
              through disciplined execution,
              premium material handling
              and long-term value creation.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* INDUSTRIES */}
      <FadeUp>

        <section className="industries-section">

          <div className="industries-content">

            <p className="section-label">
              TRUSTED PARTNERSHIPS
            </p>

            <h2>
              Premium Solutions <br />
              Designed Around <br />
              Quality, Precision <br />
              And Practical Value.
            </h2>

            <span>
              Vertex combines premium
              architectural execution
              with intelligent project
              planning, allowing clients
              to experience refined spaces
              through practical, transparent
              and dependable delivery systems.
            </span>

          </div>

          <div className="industries-image">

            <img
              src="/images/clients/industries.webp"
              alt="Premium Architectural Space"
            />

          </div>

        </section>

      </FadeUp>

      {/* CLIENT WALL */}
      <ClientWall />

      {/* CTA */}
      <section className="clients-cta">

        <img
          src="/images/clients/clients-cta.webp"
          alt="Luxury Consultation"
        />

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <p>
            BUILD WITH CONFIDENCE
          </p>

          <h2>
            Spaces Designed <br />
            Through Precision, <br />
            Trust And Refined <br />
            Execution.
          </h2>

          <a href="/contact">
            Request Consultation
          </a>

        </div>

      </section>

    </main>
  );
}