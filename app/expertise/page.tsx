import "./expertise.css";
import FadeUp from "@/components/animations/FadeUp";

export default function ExpertisePage() {
  return (
    <main className="expertise-page">

      {/* TOP SECTION */}
      <FadeUp>

        <section className="expertise-top">

          <div className="expertise-top-left">

            <p className="section-label">
              OUR EXPERTISE
            </p>

            <h1>
              Crafted Through <br />
              Precision, Material <br />
              And Architectural <br />
              Discipline.
            </h1>

          </div>

          <div className="expertise-top-right">

            <p>
              Vertex Construction & Services delivers
              refined execution environments through
              Italian marble craftsmanship, premium
              interiors, waterproofing systems, and
              luxury painting solutions engineered
              for timeless architectural spaces.
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
              alt="Italian Marble"
            />
          </div>

          <div className="service-content">

            <p className="section-label">
              01 / ITALIAN MARBLE
            </p>

            <h2>
              Italian Marble <br />
              & Stone Services
            </h2>

            <span>
              Cutting, laying, polishing, restoration,
              premium stone detailing, and precision
              marble execution environments designed
              for luxury residential and commercial
              architectural spaces.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* INTERIORS */}
      <FadeUp>

        <section className="service-section reverse">

          <div className="service-image">
            <img
              src="/images/expertise-page/interior-detail.webp"
              alt="Interior Design"
            />
          </div>

          <div className="service-content">

            <p className="section-label">
              02 / INTERIOR DESIGN
            </p>

            <h2>
              Interior Design <br />
              Services
            </h2>

            <span>
              Apartments, flats, villas, residences,
              premium spatial execution, luxury
              interior detailing, modern layouts,
              refined ceiling systems, and elegant
              architectural finishing solutions.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* WATERPROOFING */}
      <FadeUp>

        <section className="service-section">

          <div className="service-image">
            <img
              src="/images/expertise-page/waterproofing-detail.webp"
              alt="Waterproofing"
            />
          </div>

          <div className="service-content">

            <p className="section-label">
              03 / WATERPROOFING
            </p>

            <h2>
              Waterproofing <br />
              & Repair Systems
            </h2>

            <span>
              TPO membrane systems, polyurea
              applications, architectural repair
              solutions, terrace protection,
              and modern waterproofing systems
              engineered for long-term durability.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* PAINTING */}
      <FadeUp>

        <section className="service-section reverse">

          <div className="service-image">
            <img
              src="/images/expertise-page/painting-detail.webp"
              alt="Painting"
            />
          </div>

          <div className="service-content">

            <p className="section-label">
              04 / PAINTING
            </p>

            <h2>
              Interior & Exterior <br />
              Painting Services
            </h2>

            <span>
              Premium wall finishes, architectural
              surface preparation, refined interior
              painting systems, exterior coatings,
              and luxury finishing environments
              executed with precision and consistency.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* CTA */}
      <FadeUp>

        <section className="expertise-cta">

          <div className="expertise-cta-overlay"></div>

          <div className="expertise-cta-content">

            <p>
              BUILD WITH VERTEX
            </p>

            <h2>
              Exceptional Spaces <br />
              Begin With Precision.
            </h2>

            <button>
              Start A Consultation
            </button>

          </div>

        </section>

      </FadeUp>

    </main>
  );
}