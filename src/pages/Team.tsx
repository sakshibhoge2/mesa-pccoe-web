import {
  ChevronDown,
} from "lucide-react";

import {
  useState,
} from "react";

import MediaSlot from "../components/MediaSlot";
import ScrollReveal from "../components/ScrollReveal";

import {
  coreTeam,
  teams,
  annualTeam,
} from "../data/team";




function Team() {
  /* CLOSED BY DEFAULT */

  const [
    openTeam,
    setOpenTeam,
  ] = useState<
    number | null
  >(null);

  const [
    annualOpen,
    setAnnualOpen,
  ] = useState(false);

  return (
    <div className="inner-page team-page">

      {/* HERO */}

      <section className="team-premium-hero">

        <ScrollReveal>
          <div className="team-premium-copy">

            <span>
              TEAM MESA
            </span>

            <h1>
              THE PEOPLE
              <br />

              BEHIND THE
              <br />

              <em>
                MOMENTUM.
              </em>
            </h1>

            <p>
              One community.
              Different skills.
              Shared responsibility.
            </p>

          </div>
        </ScrollReveal>


        <ScrollReveal>
          <div className="team-machine-window">

            <MediaSlot
              src="/assets/team/team-group.jpg"
              alt="Team MESA"
              label="TEAM GROUP PHOTO"
              className="team-group-machine-photo"
            />

            <div className="team-machine-tag">

              <span>
                TEAM ASSEMBLY
              </span>

              <strong>
                ONE TEAM · ONE MESA
              </strong>

            </div>

          </div>
        </ScrollReveal>

      </section>


      {/* CORE TEAM */}

      <section className="core-team-section">

        <ScrollReveal>

          <div className="inner-heading">

            <span>
              CORE TEAM
            </span>

            <h2>
              LEADING
              <br />
              THE WAY.
            </h2>

          </div>


          <div className="core-team-grid">

            {coreTeam.map(
              (
                member,
                index
              ) => (

                <article
                  key={
                    `${member.role}-${index}`
                  }
                >

                  <MediaSlot
                    src={
                      member.image
                    }
                    alt={
                      member.name
                    }
                    label={
                      member.role
                    }
                  />

                  <span>
                    {
                      member.role
                    }
                  </span>

                  <h3>
                    {
                      member.name
                    }
                  </h3>

                </article>

              )
            )}

          </div>

        </ScrollReveal>

      </section>


      {/* MESA DEPARTMENTS */}

      <section className="other-teams">

        <ScrollReveal>

          <div className="inner-heading">

            <span>
              MESA TEAMS
            </span>

            <h2>
              ONE TEAM.
              <br />
              MANY SKILLS.
            </h2>

          </div>


          <div className="team-accordion">

            {teams.map(
              (
                team,
                index
              ) => {

                const open =
                  openTeam ===
                  index;

                return (
                  <article
                    key={
                      team.title
                    }
                    className={
                      open
                        ? "open"
                        : ""
                    }
                  >

                    <button
                      type="button"
                      aria-expanded={
                        open
                      }
                      onClick={() =>
                        setOpenTeam(
                          open
                            ? null
                            : index
                        )
                      }
                    >

                      <span>
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>
                        {
                          team.title
                        }
                      </strong>

                      <ChevronDown
                        size={20}
                      />

                    </button>


                    <div className="team-accordion-members">

                      {team.members.map(
                        (
                          member
                        ) => (

                          <span
                            key={
                              member
                            }
                          >
                            {
                              member
                            }
                          </span>

                        )
                      )}

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </ScrollReveal>

      </section>


      {/* 2025–2026 */}

      <section className="annual-team-section">

        <ScrollReveal>

          <button
            type="button"
            className={`
              annual-team-trigger
              ${
                annualOpen
                  ? "open"
                  : ""
              }
            `}
            aria-expanded={
              annualOpen
            }
            onClick={() =>
              setAnnualOpen(
                (current) =>
                  !current
              )
            }
          >

            <div>

              <span>
                TEAM ARCHIVE
              </span>

              <strong>
                TEAM{" "}
                {
                  annualTeam.year
                }
              </strong>

            </div>

            <ChevronDown
              size={24}
            />

          </button>


          <div
            className={`
              annual-team-content
              ${
                annualOpen
                  ? "open"
                  : ""
              }
            `}
          >

            <div className="annual-team-grid">

              {annualTeam.members.map(
                (
                  member
                ) => (

                  <article
                    key={
                      member.id
                    }
                    className="annual-team-member"
                  >

                    <MediaSlot
                      src={
                        member.image
                      }
                      alt={
                        member.name
                      }
                      label={
                        member.role
                      }
                      className="annual-member-photo"
                    />

                    <div className="annual-member-copy">

                      <span>
                        {
                          member.role
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

          </div>

        </ScrollReveal>

      </section>

    </div>
  );
}

export default Team;