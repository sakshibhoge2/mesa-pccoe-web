import {
  ArrowDown,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import {
  useRef,
  useState,
} from "react";


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