import {
  CalendarDays,
  MapPin,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

import MediaSlot from "../components/MediaSlot";
import ScrollReveal from "../components/ScrollReveal";

import {
  events,
  legacyEvents,
} from "../data/events";


type EventStatus =
  | "upcoming"
  | "past";


function Events() {

  const [
    activeTab,
    setActiveTab,
  ] =
    useState<EventStatus>(
      "upcoming"
    );


  const [
    registrationMessage,
    setRegistrationMessage,
  ] =
    useState<
      string | null
    >(null);


  const visibleEvents =
    events.filter(
      (event) =>
        event.status ===
        activeTab
    );


  return (

    <div className="inner-page compact-events-page">


      {/* =====================================================
          LEGACY EVENTS
      ===================================================== */}

      <section className="legacy-events-section">

        <ScrollReveal>

          <div className="legacy-heading">

            <span>
              MESA / LEGACY
            </span>

            <h1>
              MEMORABLE MOMENTS.
            </h1>

            <p>
              Selected milestones
              from previous years.
            </p>

          </div>


          <div className="legacy-timeline">

            <div className="legacy-track">


              {legacyEvents.map(
                (
                  event,
                  index
                ) => (

                  <article
                    key={
                      event.id
                    }
                    className={
                      index % 2 === 0
                        ? "legacy-event legacy-event-top"
                        : "legacy-event legacy-event-bottom"
                    }
                  >


                    {/* PHOTO */}

                    <div className="legacy-event-photo">

                      <img
                        src={
                          event.image
                        }
                        alt={
                          event.title
                        }
                      />

                    </div>


                    {/* TIMELINE NODE */}

                    <i />


                    {/* EVENT NAME */}

                    <strong>
                      {
                        event.title
                      }
                    </strong>


                  </article>

                )
              )}


              {/* MAIN LINE */}

              <div className="legacy-line" />


            </div>

          </div>

        </ScrollReveal>

      </section>



      {/* =====================================================
          CURRENT YEAR TABS
      ===================================================== */}

      <section className="compact-event-tabs">

        <div>


          <button
            type="button"
            className={
              activeTab ===
              "upcoming"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab(
                "upcoming"
              )
            }
          >
            UPCOMING
          </button>


          <button
            type="button"
            className={
              activeTab ===
              "past"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab(
                "past"
              )
            }
          >
            PAST — YEAR
          </button>


        </div>

      </section>



      {/* =====================================================
          EVENT LIST
      ===================================================== */}

      <section className="compact-events-list">

        <ScrollReveal>

          <div className="compact-events-heading">

            <span>
              MESA / EVENTS
            </span>

            <h1>

              {
                activeTab ===
                "upcoming"
                  ? "UPCOMING EVENTS"
                  : "COMPLETED THIS YEAR"
              }

            </h1>

          </div>


          <div className="compact-event-grid">


            {
              visibleEvents.length >
              0 ? (

                visibleEvents.map(
                  (
                    event,
                    index
                  ) => (

                    <article
                      key={
                        event.id
                      }
                      className="compact-event-card"
                    >


                      <div className="compact-event-image">

                        <MediaSlot
                          src={
                            event.image
                          }
                          alt={
                            event.title
                          }
                          label="EVENT PHOTO"
                        />


                        <span>

                          {
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )
                          }

                        </span>

                      </div>



                      <div className="compact-event-copy">

                        <small>
                          {
                            event.category
                          }
                        </small>


                        <h2>
                          {
                            event.title
                          }
                        </h2>


                        <p>
                          {
                            event.description
                          }
                        </p>


                        <div className="compact-event-meta">

                          <span>

                            <CalendarDays
                              size={16}
                            />

                            {
                              event.date
                            }

                          </span>


                          <span>

                            <MapPin
                              size={16}
                            />

                            {
                              event.location
                            }

                          </span>

                        </div>


                        {
                          activeTab ===
                          "upcoming" ? (

                            <button
                              type="button"
                              className="register-event-button"
                              onClick={() =>
                                setRegistrationMessage(
                                  "Event registration is not active yet."
                                )
                              }
                            >
                              REGISTER
                            </button>

                          ) : (

                            <button
                              type="button"
                              className="register-event-button registration-closed"
                              disabled
                            >
                              REGISTRATION CLOSED
                            </button>

                          )
                        }


                      </div>

                    </article>

                  )
                )

              ) : (

                <div className="events-empty-state">

                  <strong>

                    {
                      activeTab ===
                      "upcoming"
                        ? "NO UPCOMING EVENTS ADDED YET."
                        : "NO COMPLETED EVENTS ADDED FOR THIS YEAR YET."
                    }

                  </strong>

                </div>

              )
            }


          </div>

        </ScrollReveal>

      </section>



      {/* =====================================================
          REGISTRATION POPUP
      ===================================================== */}

      {
        registrationMessage && (

          <div
            className="registration-modal-backdrop"
            onClick={() =>
              setRegistrationMessage(
                null
              )
            }
          >

            <div
              className="registration-modal"
              onClick={(
                event
              ) =>
                event.stopPropagation()
              }
            >


              <button
                type="button"
                className="registration-modal-close"
                aria-label="Close registration popup"
                onClick={() =>
                  setRegistrationMessage(
                    null
                  )
                }
              >

                <X size={18} />

              </button>


              <span>
                MESA / REGISTRATION
              </span>


              <h2>
                NOT ACTIVE YET.
              </h2>


              <p>
                {
                  registrationMessage
                }
              </p>


            </div>

          </div>

        )
      }


    </div>

  );

}


export default Events;