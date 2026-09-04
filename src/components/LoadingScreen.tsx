import {
  useEffect,
  useRef,
  useState,
} from "react";

interface LoadingScreenProps {
  duration?: number;
  onComplete?: () => void;
  label?: string;
}

const STATUS_STEPS = [
  "INITIALIZING SYSTEMS",
  "CALIBRATING TOLERANCES",
  "TORQUE CHECK: OK",
  "LOADING ASSEMBLY",
];

export default function LoadingScreen({
  duration = 3200,
  onComplete,
  label,
}: LoadingScreenProps) {
  const [progress, setProgress] =
    useState(0);

  const [stepIndex, setStepIndex] =
    useState(0);

  const startRef =
    useRef<number | null>(null);

  const frameRef =
    useRef<number | null>(null);

  const doneRef =
    useRef(false);

  useEffect(() => {
    const tick = (
      time: number
    ) => {
      if (
        startRef.current === null
      ) {
        startRef.current =
          time;
      }

      const elapsed =
        time -
        startRef.current;

      const percentage =
        Math.min(
          100,
          (elapsed / duration) *
            100
        );

      setProgress(
        percentage
      );

      setStepIndex(
        Math.min(
          STATUS_STEPS.length -
            1,
          Math.floor(
            (percentage / 100) *
              STATUS_STEPS.length
          )
        )
      );

      if (
        percentage < 100
      ) {
        frameRef.current =
          requestAnimationFrame(
            tick
          );
      } else if (
        !doneRef.current
      ) {
        doneRef.current =
          true;

        window.setTimeout(
          () => {
            onComplete?.();
          },
          180
        );
      }
    };

    frameRef.current =
      requestAnimationFrame(
        tick
      );

    return () => {
      if (
        frameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, [
    duration,
    onComplete,
  ]);

  const R = 46;

  const CIRC =
    2 * Math.PI * R;

  const dashOffset =
    CIRC -
    (progress / 100) *
      CIRC;

  const ticks =
    Array.from(
      {
        length: 36,
      },
      (_, index) =>
        index * 10
    );

  return (
    <div className="ls-root">

      <style>{`

        .ls-root {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background-color: #02070b;

          background-image:
            url("/assets/backgrounds/dark-blueprint.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          color: #fff;

          font-family:
            "JetBrains Mono",
            "IBM Plex Mono",
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Consolas,
            monospace;

          -webkit-font-smoothing:
            antialiased;
        }


        /* ==========================================
           SUBTLE CAD MOVEMENT
        ========================================== */

        .ls-bg-motion {
          position: absolute;
          inset: -2%;

          pointer-events: none;

          background-image:
            url("/assets/backgrounds/dark-blueprint.jpg");

          background-size: cover;
          background-position: center;

          opacity: .18;

          animation:
            lsBgFloat
            8s
            ease-in-out
            infinite alternate;
        }


        @keyframes lsBgFloat {

          from {
            transform:
              scale(1.02)
              translate3d(
                -4px,
                -2px,
                0
              );
          }

          to {
            transform:
              scale(1.04)
              translate3d(
                5px,
                4px,
                0
              );
          }

        }


        /* ==========================================
           FAINT EXTRA GRID
        ========================================== */

        .ls-grid {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(
                255,
                255,
                255,
                .8
              )
              1px,
              transparent
              1px
            ),
            linear-gradient(
              90deg,
              rgba(
                255,
                255,
                255,
                .8
              )
              1px,
              transparent
              1px
            );

          background-size:
            40px
            40px;

          opacity: .012;
        }


        /* ==========================================
           SOFT VIGNETTE
           VERY LIGHT ONLY
        ========================================== */

        .ls-vignette {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at center,
              transparent 40%,
              rgba(
                0,
                0,
                0,
                .28
              )
              100%
            );
        }


        /* ==========================================
           CORNERS
        ========================================== */

        .ls-corner {
          position: absolute;

          width: 28px;
          height: 28px;

          opacity: .55;
        }


        .ls-corner::before,
        .ls-corner::after {
          content: "";

          position: absolute;

          background:
            rgba(
              255,
              255,
              255,
              .75
            );
        }


        .ls-corner::before {
          width: 100%;
          height: 1px;

          top: 50%;
        }


        .ls-corner::after {
          height: 100%;
          width: 1px;

          left: 50%;
        }


        .ls-corner.tl {
          top: 28px;
          left: 28px;
        }


        .ls-corner.tr {
          top: 28px;
          right: 28px;
        }


        .ls-corner.bl {
          bottom: 28px;
          left: 28px;
        }


        .ls-corner.br {
          bottom: 28px;
          right: 28px;
        }


        /* ==========================================
           ENGINEERING TAGS
        ========================================== */

        .ls-tag {
          position: absolute;

          z-index: 5;

          color:
            rgba(
              255,
              255,
              255,
              .48
            );

          font-size: 10px;

          letter-spacing:
            .18em;

          text-transform:
            uppercase;
        }


        .ls-tag.top-left {
          top: 28px;
          left: 66px;
        }


        .ls-tag.top-right {
          top: 28px;
          right: 66px;

          text-align: right;
        }


        .ls-tag.bottom-left {
          bottom: 28px;
          left: 66px;
        }


        /* ==========================================
           MAIN CENTER
        ========================================== */

        .ls-center {
          position: relative;

          z-index: 10;

          width:
            min(
              64vw,
              360px
            );

          aspect-ratio:
            1 / 1;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        /* ==========================================
           GAUGE
        ========================================== */

        .ls-gauge {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          transform:
            rotate(-90deg);

          filter:
            drop-shadow(
              0 0 14px
              rgba(
                255,
                255,
                255,
                .06
              )
            );
        }


        .ls-gauge circle {
          fill: none;
        }


        .ls-gauge .track {
          stroke:
            rgba(
              255,
              255,
              255,
              .17
            );

          stroke-width:
            .6;
        }


        .ls-gauge .fill {
          stroke:
            #f2a900;

          stroke-width:
            .75;

          stroke-linecap:
            butt;

          transition:
            stroke-dashoffset
            80ms
            linear;
        }


        .ls-gauge .tick {
          stroke:
            rgba(
              255,
              255,
              255,
              .32
            );

          stroke-width:
            .4;
        }


        .ls-gauge .tick.major {
          stroke:
            rgba(
              242,
              169,
              0,
              .82
            );

          stroke-width:
            .7;
        }


        /* ==========================================
           INNER ROTATING BEARING
        ========================================== */

        .ls-bearing {
          position: absolute;

          inset: 10%;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .12
            );

          border-radius: 50%;

          animation:
            lsBearingSpin
            12s
            linear
            infinite;
        }


        .ls-bearing::before {
          content: "";

          position: absolute;

          inset: 10%;

          border:
            1px dashed
            rgba(
              242,
              169,
              0,
              .28
            );

          border-radius: 50%;
        }


        .ls-bearing::after {
          content: "";

          position: absolute;

          left: 50%;
          top: -6px;

          width: 9px;
          height: 9px;

          border-radius: 50%;

          transform:
            translateX(-50%);

          background:
            #f2a900;

          box-shadow:
            0 0 18px
            rgba(
              242,
              169,
              0,
              .45
            );
        }


        @keyframes lsBearingSpin {

          to {
            transform:
              rotate(360deg);
          }

        }


        /* ==========================================
           VIDEO
        ========================================== */

        .ls-video-wrap {
          position: relative;

          z-index: 12;

          width: 70%;
          height: 70%;

          overflow: hidden;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(
              0,
              0,
              0,
              .88
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .13
            );

          box-shadow:
            0 30px 90px
            rgba(
              0,
              0,
              0,
              .5
            ),
            inset 0 0 35px
            rgba(
              255,
              255,
              255,
              .04
            );
        }


        .ls-video-wrap video {
          width: 165%;
          height: 165%;

          object-fit: contain;

          filter:
            contrast(1.08)
            saturate(.85);

          mix-blend-mode:
            screen;
        }


        /* ==========================================
           CENTER SHINE
        ========================================== */

        .ls-shine {
          position: absolute;

          z-index: 13;

          inset: 18%;

          pointer-events: none;

          border-radius: 50%;

          background:
            linear-gradient(
              120deg,
              rgba(
                255,
                255,
                255,
                .08
              ),
              transparent
              28%
            );
        }


        /* ==========================================
           FOOTER / STATUS
        ========================================== */

        .ls-footer {
          position: absolute;

          z-index: 20;

          bottom: 64px;

          left: 50%;

          width:
            min(
              78vw,
              420px
            );

          transform:
            translateX(-50%);

          display: flex;

          flex-direction: column;

          gap: 10px;
        }


        .ls-status-row {
          display: flex;

          justify-content:
            space-between;

          align-items:
            baseline;

          font-size: 11px;

          letter-spacing:
            .14em;

          text-transform:
            uppercase;
        }


        .ls-status-label {
          color: #fff;
        }


        .ls-status-pct {
          color:
            #f2a900;

          font-variant-numeric:
            tabular-nums;
        }


        /* ==========================================
           PROGRESS RULER
        ========================================== */

        .ls-ruler {
          position: relative;

          height: 14px;

          overflow: hidden;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .65
            );

          background:
            repeating-linear-gradient(
              90deg,
              rgba(
                255,
                255,
                255,
                .18
              )
              0,
              rgba(
                255,
                255,
                255,
                .18
              )
              1px,
              transparent
              1px,
              transparent
              10px
            );
        }


        .ls-ruler-fill {
          position: absolute;

          top: 0;
          left: 0;
          bottom: 0;

          background:
            #f2a900;

          box-shadow:
            0 0 16px
            rgba(
              242,
              169,
              0,
              .35
            );

          transition:
            width
            80ms
            linear;
        }


        /* ==========================================
           BRAND
        ========================================== */

        .ls-brand {
          position: absolute;

          z-index: 20;

          bottom: 24px;

          left: 50%;

          transform:
            translateX(-50%);

          color:
            rgba(
              255,
              255,
              255,
              .26
            );

          font-size: 9px;

          letter-spacing:
            .3em;

          text-align: center;

          text-transform:
            uppercase;

          white-space:
            nowrap;
        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (
          max-width: 600px
        ) {

          .ls-center {
            width:
              min(
                82vw,
                310px
              );
          }


          .ls-tag {
            font-size: 7px;
          }


          .ls-tag.top-left {
            top: 18px;
            left: 49px;
          }


          .ls-tag.top-right {
            top: 18px;
            right: 49px;
          }


          .ls-tag.bottom-left {
            bottom: 20px;
            left: 48px;
          }


          .ls-corner.tl {
            top: 18px;
            left: 15px;
          }


          .ls-corner.tr {
            top: 18px;
            right: 15px;
          }


          .ls-corner.bl {
            bottom: 18px;
            left: 15px;
          }


          .ls-corner.br {
            bottom: 18px;
            right: 15px;
          }


          .ls-footer {
            bottom: 64px;

            width:
              calc(
                100% - 36px
              );
          }


          .ls-status-row {
            font-size: 8px;
          }


          .ls-brand {
            width:
              calc(
                100% - 30px
              );

            white-space:
              normal;

            font-size: 6px;

            line-height: 1.5;
          }

        }


        /* ==========================================
           REDUCED MOTION
        ========================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .ls-bearing,
          .ls-bg-motion {
            animation: none;
          }


          .ls-gauge .fill,
          .ls-ruler-fill {
            transition: none;
          }

        }

      `}</style>


      {/* BACKGROUND */}

      <div className="ls-bg-motion" />

      <div className="ls-grid" />

      <div className="ls-vignette" />



      {/* CORNERS */}

      <span className="ls-corner tl" />
      <span className="ls-corner tr" />
      <span className="ls-corner bl" />
      <span className="ls-corner br" />



      {/* LABELS */}

      <span className="ls-tag top-left">
        MESA · PCCOE
      </span>


      <span className="ls-tag top-right">

        FIG. 01

        <br />

        REV&nbsp;A

      </span>


      <span className="ls-tag bottom-left">
        SYS // BOOT
      </span>



      {/* CENTER */}

      <div className="ls-center">


        <svg
          className="ls-gauge"
          viewBox="0 0 100 100"
        >

          <circle
            className="track"
            cx="50"
            cy="50"
            r={R}
          />


          {ticks.map(
            (
              degree
            ) => {

              const major =
                degree %
                  30 ===
                0;


              const inner =
                major
                  ? 40
                  : 43;


              const outer =
                46;


              const radians =
                (
                  degree *
                  Math.PI
                ) /
                180;


              const x1 =
                50 +
                inner *
                  Math.cos(
                    radians
                  );


              const y1 =
                50 +
                inner *
                  Math.sin(
                    radians
                  );


              const x2 =
                50 +
                outer *
                  Math.cos(
                    radians
                  );


              const y2 =
                50 +
                outer *
                  Math.sin(
                    radians
                  );


              return (

                <line
                  key={
                    degree
                  }
                  className={
                    major
                      ? "tick major"
                      : "tick"
                  }
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                />

              );

            }
          )}


          <circle
            className="fill"
            cx="50"
            cy="50"
            r={R}
            strokeDasharray={
              CIRC
            }
            strokeDashoffset={
              dashOffset
            }
          />

        </svg>



        <div className="ls-bearing" />



        <div className="ls-video-wrap">

          <video
            src="/assets/videos/mesa-outro.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

        </div>



        <div className="ls-shine" />


      </div>



      {/* STATUS */}

      <div className="ls-footer">


        <div className="ls-status-row">

          <span className="ls-status-label">

            {label ||
              STATUS_STEPS[
                stepIndex
              ]}

          </span>


          <span className="ls-status-pct">

            {Math.floor(
              progress
            )}
            %

          </span>

        </div>



        <div className="ls-ruler">

          <div
            className="ls-ruler-fill"
            style={{
              width:
                `${progress}%`,
            }}
          />

        </div>


      </div>



      <span className="ls-brand">

        Mechanical Engineering
        Students&apos;
        Association

      </span>

    </div>
  );
}