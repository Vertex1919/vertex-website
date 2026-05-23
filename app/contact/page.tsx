import "./contact.css";
import FadeUp from "@/components/animations/FadeUp";

export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <img
          src="/images/contact/contact-hero.webp"
          alt="Vertex Contact"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p>
            REQUEST A CONSULTATION
          </p>

          <h1>
            Exceptional Spaces <br />
            Begin Through <br />
            Vision, Precision <br />
            And Conversation.
          </h1>

        </div>

      </section>

      {/* CONSULTATION SPACE */}
      <FadeUp>

        <section className="consultation-section">

          <div className="consultation-left">

            <img
              src="/images/contact/consultation-space.webp"
              alt="Consultation Space"
            />

          </div>

          <div className="consultation-right">

            <p className="section-label">
              CONSULTATION EXPERIENCE
            </p>

            <h2>
              Designed Around <br />
              Clarity, Detail <br />
              And Architectural <br />
              Thinking.
            </h2>

            <span>
              Vertex collaborates closely with
              clients to understand spatial
              requirements, material direction,
              execution standards and long-term
              architectural value across every
              premium environment.
            </span>

          </div>

        </section>

      </FadeUp>

      {/* FORM */}
      <FadeUp>

        <section className="form-section">

          <div className="form-intro">

            <p className="section-label">
              START A PROJECT
            </p>

            <h2>
              Request A <br />
              Private Consultation.
            </h2>

          </div>

          <form
            action="https://formspree.io/f/mbdbkjjb"
            method="POST"
            className="contact-form"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <select
              name="project"
              required
            >

              <option value="">
                Select Project Type
              </option>

              <option>
                Italian Marble Services
              </option>

              <option>
                Interior Design Services
              </option>

              <option>
                Waterproofing Solutions
              </option>

              <option>
                Painting Services
              </option>

              <option>
                Full Consultation
              </option>

            </select>

            <input
              type="text"
              name="location"
              placeholder="Project Location"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={6}
              required
            ></textarea>

            <button type="submit">
              Submit Consultation
            </button>

          </form>

        </section>

      </FadeUp>

      {/* CTA */}
      <section className="contact-cta">

        <img
          src="/images/contact/contact-cta.webp"
          alt="Vertex Contact CTA"
        />

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <p>
            HELLO@VERTEXCONSTRUCTIONSERVICES.IN
          </p>

          <h2>
            Let’s Build <br />
            Something <br />
            Exceptional.
          </h2>

          <a href="mailto:hello@vertexconstructionservices.in">
            hello@vertexconstructionservices.in
          </a>

        </div>

      </section>

    </main>
  );
}