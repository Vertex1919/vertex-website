import "./Intro.css";
import FadeUp from "../animations/FadeUp";

export default function Intro() {
  return (
    <section className="intro">
      <FadeUp>
        <div className="intro-container">
          {/* LEFT SIDE */}
          <div className="intro-left">
            <p className="intro-label">The Vertex Standard</p>
            <h2>
              One standard.
              <br />
              One commitment.
              <br />
              Excellence.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="intro-right">
            <div className="intro-features">
              <div className="intro-feature">
                <span className="feature-number">01</span>
                <h3>Straight Commitments</h3>
                <p>
                  We say what we&apos;ll do. We do what we say. Nothing more,
                  nothing less.
                </p>
              </div>

              <div className="intro-feature">
                <span className="feature-number">02</span>
                <h3>Expert Workforce</h3>
                <p>
                  Skilled labourers. Experienced engineers. Decisive project
                  managers — all operating under a single quality framework.
                </p>
              </div>

              <div className="intro-feature">
                <span className="feature-number">03</span>
                <h3>Premium Methods & Materials</h3>
                <p>
                  No substitutions. No shortcuts. Industry-leading materials,
                  modern techniques, and documented quality control at every
                  stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
