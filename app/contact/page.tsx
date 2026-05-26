import "./contact.css";
import FadeUp from "@/components/animations/FadeUp";

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <img src="/images/contact/contact-hero.webp" alt="Contact Vertex" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="section-label">Contact Us</p>
          <h1>
            Let&apos;s Talk
            <br />
            Business.
          </h1>
        </div>
      </section>

      {/* CONTACT INFO */}
      <FadeUp>
        <section className="contact-info-section">
          <div className="contact-intro">
            <p>
              Whether you&apos;re planning a 300-unit residential tower or a boutique
              commercial space, the conversation starts here.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Head Office</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>

            <div className="contact-card">
              <h3>Operations Hub</h3>
              <p>Bengaluru, Karnataka, India</p>
            </div>

            <div className="contact-card">
              <h3>Phone & WhatsApp</h3>
              <p>
                <a href="tel:+917899042875">+91 78990 42875</a>
                <br />
                <a href="tel:+919901207418">+91 99012 07418</a>
              </p>
            </div>

            <div className="contact-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@vertexconstructionservices.in">
                  hello@vertexconstructionservices.in
                </a>
              </p>
            </div>
          </div>

          <div className="whatsapp-section">
            <p className="section-label">WhatsApp Connect</p>
            <span>
              For project enquiries, scope discussions, and urgent site queries —
              WhatsApp is the fastest route to our team.
            </span>
            <div className="whatsapp-buttons">
              <a
                href="https://wa.me/917899042875"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Message +91 78990 42875
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
              <a
                href="https://wa.me/919901207418"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Message +91 99012 07418
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* FORM */}
      <FadeUp>
        <section className="form-section">
          <div className="form-intro">
            <p className="section-label">Enquiry Form</p>
            <h2>
              Request A
              <br />
              Consultation.
            </h2>
            <span className="form-note">Response within 1 business day.</span>
          </div>

          <form
            action="https://formspree.io/f/mbdbkjjb"
            method="POST"
            className="contact-form"
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company / Developer Name"
              />
            </div>

            <div className="form-row">
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
            </div>

            <div className="form-row">
              <select name="service" required>
                <option value="">Service Required</option>
                <option value="marble">Marble / Tile / Granite</option>
                <option value="waterproofing">Waterproofing</option>
                <option value="interior">Interior Designing</option>
                <option value="painting">Painting</option>
                <option value="multiple">Multiple Services</option>
              </select>

              <select name="scale" required>
                <option value="">Project Scale</option>
                <option value="under-50">Under 50 units</option>
                <option value="50-200">50–200 units</option>
                <option value="200+">200+ units</option>
                <option value="commercial">Commercial</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input
              type="text"
              name="location"
              placeholder="City / Project Location"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={6}
              required
            ></textarea>

            <button type="submit">
              Submit Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </section>
      </FadeUp>

      {/* CTA */}
      <section className="contact-cta">
        <img src="/images/contact/contact-cta.webp" alt="Build with Vertex" />
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-label">hello@vertexconstructionservices.in</p>
          <h2>
            Let&apos;s Build
            <br />
            Something
            <br />
            Exceptional.
          </h2>
        </div>
      </section>
    </main>
  );
}
