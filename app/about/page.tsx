import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-hero-content">

          <p>ABOUT VERTEX</p>

          <h1>
            Crafted Through <br />
            Precision, Discipline <br />
            And Architectural <br />
            Excellence.
          </h1>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="about-philosophy">

        <div className="about-philosophy-image"></div>

        <div className="about-philosophy-content">

          <p className="section-label">
            OUR PHILOSOPHY
          </p>

          <h2>
            Precision Is Quiet. <br />
            But It Defines <br />
            Everything.
          </h2>

          <p className="description">
            Vertex Construction & Services was founded
            with a vision to deliver refined execution
            environments that combine craftsmanship,
            luxury materials, architectural discipline,
            and timeless visual sophistication across
            every project touchpoint.
          </p>

        </div>

      </section>

      {/* STORY */}
      <section className="about-story">

        <div className="story-left">

          <p className="section-label">
            THE VERTEX STORY
          </p>

          <h2>
            Built For Modern <br />
            Luxury Execution.
          </h2>

          <p className="description">
            Since 2023, Vertex has expanded across
            Bengaluru, Hyderabad, and Mumbai,
            delivering premium marble craftsmanship,
            luxury interiors, waterproofing systems,
            and architectural finishing solutions
            engineered with precision and consistency.
          </p>

        </div>

        <div className="story-right"></div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div className="values-image"></div>

        <div className="values-content">

          <p className="section-label">
            CORE VALUES
          </p>

          <h2>
            Luxury Is Built <br />
            Through Discipline.
          </h2>

          <div className="values-list">

            <div>
              <span>01</span>
              <h3>Precision</h3>
            </div>

            <div>
              <span>02</span>
              <h3>Reliability</h3>
            </div>

            <div>
              <span>03</span>
              <h3>Craftsmanship</h3>
            </div>

            <div>
              <span>04</span>
              <h3>Architectural Detail</h3>
            </div>

          </div>

        </div>

      </section>

      {/* STRIP IMAGE */}
      <section className="about-strip"></section>

      {/* CLOSING */}
      <section className="about-closing">

        <p>
          BUILDING PREMIUM ENVIRONMENTS ACROSS INDIA
        </p>

        <h2>
          Vertex Exists To Create <br />
          Timeless Architectural <br />
          Experiences.
        </h2>

      </section>

    </main>
  );
}