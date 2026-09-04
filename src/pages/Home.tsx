import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import CinematicHero from "../components/CinematicHero";
import MediaSlot from "../components/MediaSlot";
import ScrollReveal from "../components/ScrollReveal";

import {
  events,
} from "../data/events";

import {
  homeStories,
} from "../data/site";

function Home() {
  const [
    activeStory,
    setActiveStory,
  ] = useState(0);

  useEffect(() => {
    const timer =
      window.setInterval(
        () => {
          setActiveStory(
            (current) =>
              (current + 1) %
              homeStories.length
          );
        },
        4700
      );

    return () =>
      window.clearInterval(
        timer
      );
  }, []);

  const story =
    homeStories[
      activeStory
    ];

  const upcomingEvents =
    events
      .filter(
        (event) =>
          (
            event.status ??
            "upcoming"
          ) ===
          "upcoming"
      )
      .slice(
        0,
        3
      );

  return (
    <>
      <CinematicHero />


      <section
        id="mesa-intro"
        className="paper-intro"
      >

        <ScrollReveal>

          <div className="paper-intro-grid">

            <div className="paper-intro-main">

              <span>
                MESA / PCCOE
              </span>

              <h2>
                BUILT BY STUDENTS.
                <br />

                <em>
                  FOR THE STUDENTS.
                </em>
              </h2>

              <p>
                The Mechanical Engineering
                Students&apos; Association
                of PCCOE connects technical
                learning, competitions,
                leadership, industry exposure
                and memorable student
                experiences.
              </p>

              <a href="#/about">
                KNOW MESA

                <ArrowUpRight
                  size={17}
                />
              </a>

            </div>


            <div className="home-mesa-mark">

              <img
                src="/assets/brand/mesa-logo.png"
                alt="MESA PCCOE"
              />

              <span>
                MECHANICAL ENGINEERING
                STUDENTS&apos; ASSOCIATION
              </span>

            </div>

          </div>

        </ScrollReveal>

      </section>


      <section className="mesa-is-section">

        <ScrollReveal>

          <div className="section-title">

            <span>
              MESA IS...
            </span>

            <h2>
              ONE COMMUNITY.
              <br />

              <em>
                MANY EXPERIENCES.
              </em>
            </h2>

          </div>


          <div className="mesa-story-grid">

            <div className="story-photo-stage">

              <MediaSlot
                key={
                  story.image
                }
                src={
                  story.image
                }
                alt={
                  story.label
                }
                label={
                  story.label
                }
              />

              <div className="story-index">

                0
                {activeStory + 1}

                <small>
                  /04
                </small>

              </div>

            </div>


            <div className="story-copy">

              <span>
                {
                  story.word
                }
              </span>

              <h3>
                {
                  story.title
                }
              </h3>

              <p>
                {
                  story.text
                }
              </p>

              <div className="story-selector">

                {homeStories.map(
                  (
                    _,
                    index
                  ) => (

                    <button
                      key={
                        index
                      }
                      type="button"
                      className={
                        index ===
                        activeStory
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setActiveStory(
                          index
                        )
                      }
                    />

                  )
                )}

              </div>

              <a href="#/about">

                EXPLORE MESA

                <ArrowRight
                  size={17}
                />

              </a>

            </div>

          </div>

        </ScrollReveal>

      </section>


      <section className="home-events">

        <ScrollReveal>

          <div className="section-heading-row">

            <div>

              <span>
                WHAT&apos;S NEXT
              </span>

              <h2>
                UPCOMING
                <br />

                <em>
                  AT MESA.
                </em>
              </h2>

            </div>

            <a href="#/events">

              ALL EVENTS

              <ArrowUpRight
                size={18}
              />

            </a>

          </div>


          <div className="events-preview-grid">

            {upcomingEvents.map(
              (
                event,
                index
              ) => (

                <article
                  key={
                    event.id
                  }
                >

                  <MediaSlot
                    src={
                      event.image
                    }
                    alt={
                      event.title
                    }
                    label={`EVENT ${
                      index + 1
                    }`}
                    className="event-image"
                  />

                  <div className="event-preview-body">

                    <div>

                      <span>
                        0
                        {index + 1}
                      </span>

                      <small>
                        {
                          event.category
                        }
                      </small>

                    </div>

                    <h3>
                      {
                        event.title
                      }
                    </h3>

                    <p>

                      <CalendarDays
                        size={15}
                      />

                      {
                        event.date
                      }

                    </p>

                  </div>

                </article>

              )
            )}

          </div>

        </ScrollReveal>

      </section>
    </>
  );
}

export default Home;