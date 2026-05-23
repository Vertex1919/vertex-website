"use client";

import "./ClientWall.css";

const clients = [
  "Aparna Constructions",
  "Adarsh Developers",
  "Shapoorji Pallonji",
  "RMZ Group",
  "Starworth",
  "Kalpataru Projects International",
];

export default function ClientWall() {

  return (
    <section className="client-wall">

      <div className="client-wall-header">

        <p>
          TRUSTED CLIENT ENVIRONMENTS
        </p>

        <h2>
          Built Through <br />
          Trusted Relationships <br />
          Across Premium <br />
          Architectural Spaces.
        </h2>

      </div>

      <div className="prestige-grid">

        {clients.map((client, index) => (

          <div
            className={`prestige-card prestige-${index + 1}`}
            key={index}
          >

            <div className="card-glow"></div>

            <span data-text={client}>
              {client}
            </span>

          </div>

        ))}

      </div>

      <div className="client-wall-footer">

        <p>
          And many more premium residential,
          commercial and architectural
          execution environments across India.
        </p>

      </div>

    </section>
  );
}