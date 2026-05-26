import "./about.css";
import FadeUp from "@/components/animations/FadeUp";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <p className="hero-label">About Vertex</p>
          <h1>
            Built on Craft.
            <br />
            Driven by
            <br />
            Commitment.
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <FadeUp>
        <section className="about-intro">
          <div className="about-intro-content">
            <p className="intro-text">
              Vertex Construction Services was founded in Bengaluru in 2021 with
              a singular ambition: to bring accountability and precision to
              finishing services in Indian construction.
            </p>
            <p className="intro-text">
              Too many projects in India&apos;s booming real estate sector suffer at
              the final mile — poor tile alignment, leaking terraces,
              inconsistent paint finishes. Vertex was built specifically to
              eliminate that failure.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* VISION & METHOD */}
      <FadeUp>
        <section className="about-foundation">
          <div className="foundation-header">
            <p className="section-label">Our Foundation</p>
            <h2>
              Today, headquartered in Hyderabad with active operations across
              Bengaluru, Vertex partners with India&apos;s leading developers.
            </h2>
          </div>

          <div className="foundation-grid">
            <div className="foundation-card">
              <span className="card-number">01</span>
              <h3>The Vision</h3>
              <p>
                To be India&apos;s most trusted finishing partner — from Hyderabad
                and Bengaluru to every major construction market across the
                country.
              </p>
            </div>

            <div className="foundation-card">
              <span className="card-number">02</span>
              <h3>The Method</h3>
              <p>
                Vertex operates on a single operational principle: Do it once.
                Do it right. Deliver it premium. Every project is staffed with
                experienced labourers, site engineers, and project managers
                accountable to one standard — yours.
              </p>
            </div>

            <div className="foundation-card">
              <span className="card-number">03</span>
              <h3>The Promise</h3>
              <p>
                No fabricated timelines. No inflated claims. Transparent
                communication from first briefing to final handover.
              </p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* DIFFERENCE SECTION */}
      <section className="about-difference">
        <div className="difference-image"></div>
        <div className="difference-content">
          <FadeUp>
            <p className="section-label">The Vertex Difference</p>
            <h2>
              Delivering where every detail is owned, every deadline is met.
            </h2>

            <div className="difference-list">
              <div className="difference-item">
                <h4>Strict Quality Control</h4>
                <p>
                  Every surface, every joint, every coat — reviewed before
                  sign-off.
                </p>
              </div>

              <div className="difference-item">
                <h4>Timely Delivery</h4>
                <p>
                  We build project timelines we can hold. Delays at the
                  finishing stage cost developers money and reputation. We take
                  that seriously.
                </p>
              </div>

              <div className="difference-item">
                <h4>Honest Partnerships</h4>
                <p>
                  Our client relationships are built on trust, not persuasion.
                  We earn repeat business through delivery, not sales tactics.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STRIP IMAGE */}
      <section className="about-strip"></section>

      {/* CLOSING */}
      <FadeUp>
        <section className="about-closing">
          <p className="section-label">Building Premium Environments Across India</p>
          <h2>
            Vertex Exists To Create
            <br />
            Timeless Architectural
            <br />
            Experiences.
          </h2>
          <a href="/contact" className="btn-primary">
            Connect With Our Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </section>
      </FadeUp>
    </main>
  );
}
