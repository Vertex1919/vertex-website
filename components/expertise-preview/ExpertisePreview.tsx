import "./ExpertisePreview.css";
import Link from "next/link";

export default function ExpertisePreview() {
  const services = [
    {
      id: "01",
      title: "Marble, Tile & Granite",
      description: "Flawless alignment, precision grouting, polished finishes",
      image: "/images/expertise/marble.webp",
    },
    {
      id: "02",
      title: "Waterproofing Solutions",
      description: "Bathrooms, terraces, basements, facades — sealed for decades",
      image: "/images/expertise/waterproofing.webp",
    },
    {
      id: "03",
      title: "Interior Designing",
      description: "Corporate lobbies to premium residences — function meets form",
      image: "/images/expertise/interiors.webp",
    },
    {
      id: "04",
      title: "Premium Painting",
      description: "Weather-resistant exteriors, rich interiors, strict surface preparation",
      image: "/images/expertise/painting.webp",
    },
  ];

  return (
    <section className="expertise-preview">
      {/* SECTION HEADER */}
      <div className="expertise-header">
        <div className="expertise-header-left">
          <p className="section-label">Our Expertise</p>
          <h2>
            Four specialised verticals.
            <br />
            One accountable partner.
          </h2>
        </div>
        <div className="expertise-header-right">
          <p>
            Finishing services built for India&apos;s premium developers. Every
            surface Vertex touches is governed by the same principle — premium
            methods, proven materials, complete accountability.
          </p>
          <Link href="/expertise" className="btn-secondary">
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">
        {services.map((service) => (
          <Link href="/expertise" key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <div className="service-overlay"></div>
            </div>
            <div className="service-content">
              <span className="service-number">{service.id}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
