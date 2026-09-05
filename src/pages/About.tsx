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

    text:
      "To build a student community where Mechanical Engineering students grow through technical excellence, innovation, teamwork, leadership and meaningful real-world exposure.",
  },

  mission: {
    number:
      "02",

    label:
      "MISSION",

    text:
      "To provide a platform for students to learn, lead and collaborate through technical and non-technical events, competitions, training programmes, workshops, guest lectures and industry interactions.",
  },
};


const facultyRoles = [
  "DEAN — STUDENT DEVELOPMENT & WELFARE",
  "HEAD OF DEPARTMENT",
  "FACULTY INCHARGE — MESA",
];


const facultyNames = [
  "Prof. Dr. P. A. Deshmukh",
  "Prof. P. R. Kale",
  "Assistant Prof. S. S. Shinde",
];


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

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

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


      {/* =====================================================
          VISION / MISSION
      ===================================================== */}

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

              <span className="vision-number">
                {content.number}
                {" / "}
                {content.label}
              </span>


              <h2 className="vision-main-title">
                {content.label}
              </h2>


              <p>
                {content.text}
              </p>


              <small>
                SELECT VISION / MISSION
              </small>

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =====================================================
          FACULTY GUIDANCE
      ===================================================== */}

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
                member,
                index
              ) => (

                <article
                  key={
                    `${member.name}-${index}`
                  }
                >

                  <MediaSlot
                    src={
                      member.image
                    }
                    alt={
                      facultyNames[index]
                    }
                    label="FACULTY PHOTO"
                  />


                  <div className="faculty-card-copy">

                    <span>
                      {
                        facultyRoles[index]
                      }
                    </span>


                    <h3>
                      {
                        facultyNames[index]
                      }
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </ScrollReveal>

      </section>

    </div>
  );
}


export default About;