import {
  Trophy,
} from "lucide-react";

import {
  useState,
} from "react";

import MediaSlot from "../components/MediaSlot";
import ScrollReveal from "../components/ScrollReveal";

import {
  facultyMembers,
} from "../data/faculty";

const visionMission = {
  vision: {
    number:
      "01",

    label:
      "VISION",

    title:
      "THE FUTURE WE WANT TO CREATE.",

    text:
      "To build a student community where Mechanical Engineering students grow through technical excellence, innovation, teamwork, leadership and meaningful real-world exposure.",
  },

  mission: {
    number:
      "02",

    label:
      "MISSION",

    title:
      "HOW WE MOVE FORWARD.",

    text:
      "To create opportunities through workshops, competitions, industry interaction, student-led initiatives and collaborative experiences that turn classroom learning into capability and impact.",
  },
};

function About() {
  const [
    selected,
    setSelected,
  ] =
    useState<
      "vision" |
      "mission"
    >(
      "vision"
    );

  const content =
    visionMission[
      selected
    ];

  return (
    <div className="inner-page about-page">

      <section className="about-leaders-hero">

        <div>

          <span>
            ABOUT MESA
          </span>

          <h1>
            LEADERS OF
            <br />

            <em>
              TOMORROW.
            </em>
          </h1>

          <p>
            A student-driven
            Mechanical Engineering
            community built around
            learning, creating,
            collaboration and
            leadership.
          </p>

        </div>

        <div className="about-logo-machine">

          <img
            src="/assets/brand/mesa-logo.png"
            alt="MESA PCCOE"
          />

        </div>

      </section>


      <section className="vision-machine-section">

        <ScrollReveal>

          <div className="vision-machine-grid">

            <div className="vision-selector">

              <button
                type="button"
                className={
                  selected ===
                  "vision"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelected(
                    "vision"
                  )
                }
              >
                01

                <span>
                  VISION
                </span>
              </button>


              <div
                className={`vision-gear ${
                  selected ===
                  "mission"
                    ? "mission"
                    : ""
                }`}
              >

                <div className="vision-gear-hub" />

              </div>


              <button
                type="button"
                className={
                  selected ===
                  "mission"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelected(
                    "mission"
                  )
                }
              >
                02

                <span>
                  MISSION
                </span>
              </button>

            </div>


            <div
              key={
                selected
              }
              className="vision-content-machine"
            >

              <span>
                {
                  content.number
                }
                {" / "}
                {
                  content.label
                }
              </span>

              <h2>
                {
                  content.title
                }
              </h2>

              <p>
                {
                  content.text
                }
              </p>

              <small>
                SELECT VISION / MISSION
              </small>

            </div>

          </div>

        </ScrollReveal>

      </section>


      <section className="faculty-guidance">

        <ScrollReveal>

          <div className="section-title">

            <span>
              FACULTY GUIDANCE
            </span>

            <h2>
              GUIDED BY EXPERIENCE.
              <br />

              <em>
                DRIVEN BY STUDENTS.
              </em>
            </h2>

          </div>


          <div className="faculty-grid faculty-grid-three">

            {facultyMembers.map(
              (
                member
              ) => (

                <article
                  key={
                    member.id
                  }
                >

                  <MediaSlot
                    src={
                      member.image
                    }
                    alt={
                      member.name
                    }
                    label="FACULTY PHOTO"
                  />

                  <div className="faculty-card-copy">

                    <span>
                      {
                        member.designation
                      }
                    </span>

                    <h3>
                      {
                        member.name
                      }
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </ScrollReveal>

      </section>


      <section className="about-champions">

        <ScrollReveal>

          <div className="about-champions-grid">

            <MediaSlot
              src="/assets/hero/champions-stage.png"
              alt="PCCOE Champions 2025"
              label="CHAMPIONS PHOTO"
              className="about-champion-photo"
            />

            <div>

              <Trophy
                size={29}
              />

              <span>
                PCCOE CHAMPIONS 2025
              </span>

              <h2>
                DEPARTMENT OF
                <br />
                MECHANICAL ENGINEERING
              </h2>

              <strong>
                WINNERS
              </strong>

            </div>

          </div>

        </ScrollReveal>

      </section>

    </div>
  );
}

export default About;