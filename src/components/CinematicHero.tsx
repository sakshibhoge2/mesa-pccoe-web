import {
  ArrowDown,
  ArrowUpRight,
  BellRing,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import {
  useRef,
  useState,
} from "react";

import {
  heroPopup,
} from "../data/site";


function CinematicHero() {

  const videoRef =
    useRef<HTMLVideoElement>(
      null
    );


  const [
    videoFailed,
    setVideoFailed,
  ] = useState(false);


  const [
    paused,
    setPaused,
  ] = useState(false);


  const [
    muted,
    setMuted,
  ] = useState(true);



  /* ======================================================
     VIDEO PLAY / PAUSE
  ====================================================== */

  function toggleVideo() {

    const video =
      videoRef.current;


    if (!video) {
      return;
    }


    if (video.paused) {

      void video.play();

      setPaused(false);

    } else {

      video.pause();

      setPaused(true);

    }

  }



  /* ======================================================
     VIDEO SOUND
  ====================================================== */

  function toggleSound() {

    const video =
      videoRef.current;


    if (!video) {
      return;
    }


    const next =
      !muted;


    video.muted =
      next;


    setMuted(
      next
    );

  }



  /* ======================================================
     GO DIRECTLY TO UPCOMING EVENTS
  ====================================================== */

  function goToUpcomingEvents() {

    window.location.hash =
      "/events";


    let attempts = 0;


    const scrollToUpcoming =
      window.setInterval(
        () => {

          attempts += 1;


          const upcomingSection =
            document.querySelector(
              ".compact-event-tabs"
            );


          if (upcomingSection) {

            window.clearInterval(
              scrollToUpcoming
            );


            upcomingSection
              .scrollIntoView({
                behavior:
                  "smooth",

                block:
                  "start",
              });


            return;

          }


          if (attempts >= 20) {

            window.clearInterval(
              scrollToUpcoming
            );

          }

        },
        100
      );

  }



  return (

    <section className="cinematic-hero">


      {/* ==================================================
          HERO VIDEO
      ================================================== */}

      <div className="cinematic-media">


        {!videoFailed ? (

          <video

            ref={
              videoRef
            }

            autoPlay

            muted

            loop

            playsInline

            preload="metadata"

            onError={() =>
              setVideoFailed(
                true
              )
            }

          >

            <source

              src="/assets/videos/mesa-hero.mp4"

              type="video/mp4"

            />

          </video>

        ) : (

          <div className="video-fallback">

            <Play
              size={30}
            />

            <strong>
              MESA FILM
            </strong>

          </div>

        )}


        <div className="cinematic-shade" />


      </div>



      {/* ==================================================
          PCCOE LOGO
      ================================================== */}

      <div className="hero-college hero-college-logo-only">

        <img

          src="/assets/brand/pccoe-logo.png"

          alt="PCCOE"

        />

      </div>



      {/* ==================================================
          MAIN MESA HERO IDENTITY
      ================================================== */}

      <div className="hero-identity">

        <img

          src="/assets/brand/mesa-logo.png"

          alt="MESA PCCOE"

        />


        <h1 className="hero-leaders-title">

          LEADERS OF

          <br />

          <em>
            TOMORROW.
          </em>

        </h1>

      </div>



      {/* ==================================================
          STUDENT MANIFESTO
      ================================================== */}

      <div className="student-manifesto">

        <small>
          MESA IS
        </small>


        <strong>

          FOR THE STUDENTS

          <br />

          BY THE STUDENTS

        </strong>

      </div>



      {/* ==================================================
          TEACHERS' DAY POPUP
      ================================================== */}

      {heroPopup.active && (

        <button

          type="button"

          className="hero-popup"

          aria-label="Open Teachers Day in upcoming events"

          onClick={
            goToUpcomingEvents
          }

        >

          <div className="hero-popup-small">

            <BellRing
              size={19}
            />


            <div>

              <span>
                {
                  heroPopup.eyebrow
                }
              </span>


              <strong>
                {
                  heroPopup.meta
                }
              </strong>

            </div>


            <ArrowUpRight
              size={16}
            />

          </div>



          <div className="hero-popup-expanded">

            <div>

              <small>
                {
                  heroPopup.eyebrow
                }
              </small>


              <strong>
                {
                  heroPopup.title
                }
              </strong>


              <a

                href="#/events"

                onClick={(
                  event
                ) => {

                  event.preventDefault();

                  event.stopPropagation();

                  goToUpcomingEvents();

                }}

              >

                VIEW DETAILS


                <ArrowUpRight
                  size={14}
                />

              </a>

            </div>

          </div>

        </button>

      )}



      {/* ==================================================
          VIDEO CONTROLS
      ================================================== */}

      {!videoFailed && (

        <div className="cinematic-controls">

          <button

            type="button"

            onClick={
              toggleVideo
            }

            aria-label={
              paused
                ? "Play video"
                : "Pause video"
            }

          >

            {paused ? (

              <Play
                size={15}
              />

            ) : (

              <Pause
                size={15}
              />

            )}

          </button>



          <button

            type="button"

            onClick={
              toggleSound
            }

            aria-label={
              muted
                ? "Unmute video"
                : "Mute video"
            }

          >

            {muted ? (

              <VolumeX
                size={15}
              />

            ) : (

              <Volume2
                size={15}
              />

            )}

          </button>



          <span>

            <i />

            MESA / FILM

          </span>

        </div>

      )}



      {/* ==================================================
          DISCOVER
      ================================================== */}

      <a

        href="#mesa-intro"

        className="cinematic-scroll"

      >

        DISCOVER MESA


        <ArrowDown
          size={15}
        />

      </a>



      {/* ==================================================
          TICKER
      ================================================== */}

      <div className="hero-ticker">

        <div>

          {[
            "FOR THE STUDENTS",
            "BY THE STUDENTS",
            "DESIGN",
            "BUILD",
            "TEST",
            "ITERATE",
            "LEAD",
            "IMPACT",
            "FOR THE STUDENTS",
            "BY THE STUDENTS",
            "DESIGN",
            "BUILD",
            "TEST",
            "IMPACT",
          ].map(
            (
              item,
              index
            ) => (

              <span

                key={
                  `${item}-${index}`
                }

              >

                {
                  item
                }


                <i />

              </span>

            )
          )}

        </div>

      </div>


    </section>

  );

}


export default CinematicHero;