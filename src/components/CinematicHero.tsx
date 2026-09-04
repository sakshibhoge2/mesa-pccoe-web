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

  const [
    popupOpen,
    setPopupOpen,
  ] = useState(false);

  function toggleVideo() {
    const video =
      videoRef.current;

    if (!video) return;

    if (video.paused) {
      void video.play();

      setPaused(false);
    } else {
      video.pause();

      setPaused(true);
    }
  }

  function toggleSound() {
    const video =
      videoRef.current;

    if (!video) return;

    const next =
      !muted;

    video.muted =
      next;

    setMuted(next);
  }

  return (
    <section className="cinematic-hero">

      <div className="cinematic-media">

        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
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
            <Play size={30} />

            <strong>
              MESA FILM
            </strong>
          </div>
        )}

        <div className="cinematic-shade" />

      </div>


      {/* PCCOE LOGO ONLY */}

      <div className="hero-college hero-college-logo-only">

        <img
          src="/assets/brand/pccoe-logo.png"
          alt="PCCOE"
        />

      </div>


      <div className="hero-identity">

        <img
          src="/assets/brand/mesa-logo.png"
          alt="MESA PCCOE"
        />

        <span>
          LEADERS OF TOMORROW
        </span>

        <h1>
          WHERE IDEAS
          <br />

          <em>
            BECOME IMPACT.
          </em>
        </h1>

      </div>


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


      {/* EDITABLE POPUP */}

      {heroPopup.active && (

        <button
          type="button"
          className={`hero-popup ${
            popupOpen
              ? "hero-popup--open"
              : ""
          }`}
          onClick={() =>
            setPopupOpen(
              (current) =>
                !current
            )
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
                href={
                  heroPopup.href
                }
                onClick={(
                  event
                ) =>
                  event.stopPropagation()
                }
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


      {!videoFailed && (

        <div className="cinematic-controls">

          <button
            type="button"
            onClick={
              toggleVideo
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


      <a
        href="#mesa-intro"
        className="cinematic-scroll"
      >
        DISCOVER MESA

        <ArrowDown
          size={15}
        />
      </a>


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
                key={`${item}-${index}`}
              >
                {item}

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