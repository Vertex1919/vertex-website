import "./Intro.css";
import FadeUp from "../animations/FadeUp";

export default function Intro() {
  return (
    <section className="intro">

      <FadeUp>

        <div className="intro-container">

          {/* LEFT SIDE */}
          <div className="intro-left">

            <p className="intro-label">
              THE VERTEX STANDARD
            </p>

            <h2>
              Crafted Through <br />
              Precision, Detail <br />
              And Architectural <br />
              Discipline.
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <div className="intro-right">

            <p>
              Vertex Construction & Services delivers
              premium marble craftsmanship, refined
              interiors, waterproofing systems, and
              luxury execution environments designed
              for timeless architectural impact across
              Bengaluru, Hyderabad, and Mumbai.
            </p>

            <button>
              Discover Our Expertise
            </button>

          </div>

        </div>

      </FadeUp>

    </section>
  );
}