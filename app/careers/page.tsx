import "./careers.css";
import FadeUp from "@/components/animations/FadeUp";

export default function CareersPage() {
  const roles = [
    {
      title: "Skilled Labourers",
      description:
        "Tile fixers, waterproofing applicators, painters, and finishing specialists who take precision seriously.",
    },
    {
      title: "Disciplined Engineers",
      description:
        "Site engineers and supervisors who manage quality, not just timelines.",
    },
    {
      title: "Honest Project Managers",
      description:
        "People who communicate clearly, plan realistically, and hold their teams accountable.",
    },
    {
      title: "Artistic Craftsmen",
      description:
        "Interior execution specialists, marble specialists, and design-eye craftspeople.",
    },
  ];

  const benefits = [
    {
      title: "Growth with Purpose",
      description: "A clear career path in a fast-scaling company",
    },
    {
      title: "Craftsmanship First",
      description: "Your skill is valued, trained, and rewarded",
    },
    {
      title: "Culture of Trust",
      description: "Internal honesty is as important as client delivery",
    },
    {
      title: "Nationwide Opportunities",
      description: "As Vertex expands PAN-India, the team expands with it",
    },
  ];

  return (
    <main className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <img src="/images/careers/careers-hero.webp" alt="Careers at Vertex" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="section-label">Careers at Vertex</p>
          <h1>
            Your Craft.
            <br />
            Our Platform.
            <br />
            India&apos;s Future.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <FadeUp>
        <section className="careers-intro">
          <p className="intro-text">
            Vertex Construction Services is growing — and we&apos;re building the
            team that will take finishing services to every major construction
            market in India.
          </p>
          <p className="intro-subtext">
            We&apos;re not looking for order-takers. We&apos;re looking for craftsmen,
            engineers, and managers who take ownership of their work and care
            about the outcome.
          </p>
        </section>
      </FadeUp>

      {/* ROLES */}
      <FadeUp>
        <section className="roles-section">
          <div className="roles-header">
            <p className="section-label">Who We&apos;re Looking For</p>
            <h2>
              Precision Is A Culture,
              <br />
              Not A Process.
            </h2>
          </div>
          <div className="roles-grid">
            {roles.map((role, index) => (
              <div key={index} className="role-card">
                <span className="role-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* BENEFITS */}
      <FadeUp>
        <section className="benefits-section">
          <div className="benefits-header">
            <p className="section-label">What Vertex Offers</p>
            <h2>
              Every Space Reflects
              <br />
              The Standards Behind It.
            </h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* CTA */}
      <section className="careers-cta">
        <img src="/images/careers/careers-cta.webp" alt="Join Vertex" />
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-label">Build With Vertex</p>
          <h2>
            Join A Team
            <br />
            Focused On
            <br />
            Exceptional Spaces.
          </h2>
          <div className="cta-contacts">
            <a
              href="mailto:hello@vertexconstructionservices.in"
              className="btn-primary"
            >
              Send Your Profile
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
            </a>
            <a
              href="https://wa.me/917899042875"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Enquiries
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
