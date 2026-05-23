import "./Philosophy.css";

export default function Philosophy() {
  return (
    <section className="philosophy">

      <div className="philosophy-grid">

        {/* LEFT IMAGE */}
        <div className="philosophy-image"></div>

        {/* RIGHT CONTENT */}
        <div className="philosophy-content">

          <p className="philosophy-label">
            BRAND PHILOSOPHY
          </p>

          <h2>
            Precision <br />
            Is Quiet. <br />
            But It <br />
            Defines <br />
            Everything.
          </h2>

          <p>
            Founded in 2023, Vertex Construction &
            Services specializes in luxury execution
            across interiors, Italian marble craftsmanship,
            waterproofing, painting, and refined turnkey
            architectural environments engineered with
            precision, discipline, and timeless detailing.
          </p>

          <div className="philosophy-year">
            <span>ESTABLISHED</span>
            <h3>2023</h3>
          </div>

        </div>

      </div>

    </section>
  );
}