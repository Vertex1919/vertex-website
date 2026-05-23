import "./ExpertisePreview.css";

export default function ExpertisePreview() {
  return (
    <section className="expertise-preview">

      {/* SECTION HEADER */}
      <div className="expertise-header">

        <p>OUR EXPERTISE</p>

        <h2>
          Precision-Driven Luxury <br />
          Execution Across Every Surface.
        </h2>

      </div>

      {/* EDITORIAL GRID */}
      <div className="editorial-grid">

        {/* MARBLE */}
        <div className="card marble-card">
          <div className="overlay"></div>

          <div className="content">
            <span>VERTEX EXPERTISE</span>
            <h3>Italian Marble</h3>
          </div>
        </div>

        {/* INTERIORS */}
        <div className="card interiors-card">
          <div className="overlay"></div>

          <div className="content">
            <span>VERTEX EXPERTISE</span>
            <h3>Luxury Interiors</h3>
          </div>
        </div>

        {/* WATERPROOFING */}
        <div className="card waterproofing-card">
          <div className="overlay"></div>

          <div className="content">
            <span>VERTEX EXPERTISE</span>
            <h3>Waterproofing</h3>
          </div>
        </div>

        {/* PAINTING */}
        <div className="card painting-card">
          <div className="overlay"></div>

          <div className="content">
            <span>VERTEX EXPERTISE</span>
            <h3>Painting Services</h3>
          </div>
        </div>

      </div>

    </section>
  );
}