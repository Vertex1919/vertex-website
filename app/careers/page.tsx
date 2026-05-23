import "./careers.css";
import FadeUp from "@/components/animations/FadeUp";

export default function CareersPage() {
  return (
    <main className="careers-page">

      {/* HERO */}
      <section className="careers-hero">

        <img
          src="/images/careers/careers-hero.webp"
          alt="Vertex Careers"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p>
            CAREERS AT VERTEX
          </p>

          <h1>
            Built Through <br />
            Craftsmanship, <br />
            Precision And <br />
            Architectural Thinking.
          </h1>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <FadeUp>

        <section className="philosophy-section">

          <h2>
            Precision Is <br />
            A Culture, <br />
            Not A Process.
          </h2>

        </section>

      </FadeUp>

      {/* HORIZONTAL STRIP */}
      <section className="horizontal-section">

        <div className="horizontal-track">

          <div className="horizontal-card">

            <img
              src="/images/careers/studio-culture.webp"
              alt="Studio Culture"
            />

            <div className="horizontal-content">

              <span>
                STUDIO CULTURE
              </span>

              <h3>
                Collaborative Architectural Thinking
              </h3>

            </div>

          </div>

          <div className="horizontal-card">

            <img
              src="/images/careers/craftsmanship.webp"
              alt="Craftsmanship"
            />

            <div className="horizontal-content">

              <span>
                EXECUTION STANDARDS
              </span>

              <h3>
                Luxury Execution Through Detail
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* MANIFESTO */}
      <FadeUp>

        <section className="manifesto-section">

          <div className="manifesto-left">

            <p>
              We believe exceptional environments
              are built through discipline,
              collaboration, material understanding,
              and obsessive attention to detail.
            </p>

          </div>

          <div className="manifesto-right">

            <h2>
              Every Space <br />
              Reflects The <br />
              Standards Behind It.
            </h2>

          </div>

        </section>

      </FadeUp>

      {/* CTA */}
      <section className="careers-cta">

        <img
          src="/images/careers/careers-cta.webp"
          alt="Join Vertex"
        />

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <p>
            BUILD WITH VERTEX
          </p>

          <h2>
            Join A Team <br />
            Focused On <br />
            Exceptional Spaces.
          </h2>

          <a href="mailto:careers@vertexconstructionservices.in">
            careers@vertexconstructionservices.in
          </a>

        </div>

      </section>

    </main>
  );
}