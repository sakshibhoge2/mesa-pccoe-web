import {
  useEffect,
  useRef,
  useState,
} from "react";


function PagePiston() {

  const [
    active,
    setActive,
  ] = useState(false);


  const [
    videoKey,
    setVideoKey,
  ] = useState(0);


  const targetRef =
    useRef<string | null>(
      null
    );


  const timerRef =
    useRef<number | null>(
      null
    );



  useEffect(() => {

    function handleClick(
      event: MouseEvent
    ) {

      const clicked =
        event.target as HTMLElement;


      const anchor =
        clicked.closest(
          'a[href^="#/"]'
        ) as HTMLAnchorElement | null;


      if (!anchor) return;


      const destination =
        anchor.getAttribute(
          "href"
        );


      if (!destination) return;



      /* Don't animate if same page */

      if (
        destination ===
        window.location.hash
      ) {

        return;

      }



      event.preventDefault();


      targetRef.current =
        destination;


      /*
        IMPORTANT:
        changing videoKey forces
        browser to create/restart
        the video from frame 0
      */

      setVideoKey(
        (current) =>
          current + 1
      );


      setActive(
        true
      );



      /*
        Your video is 1.4 seconds.

        We wait about 1350ms,
        then change the page.
      */

      timerRef.current =
        window.setTimeout(
          () => {

            if (
              targetRef.current
            ) {

              window.location.hash =
                targetRef.current;

            }


            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant",
            });


            window.setTimeout(
              () => {

                setActive(
                  false
                );

              },
              100
            );

          },
          900
        );

    }



    document.addEventListener(
      "click",
      handleClick
    );


    return () => {

      document.removeEventListener(
        "click",
        handleClick
      );


      if (
        timerRef.current !==
        null
      ) {

        window.clearTimeout(
          timerRef.current
        );

      }

    };

  }, []);



  return (

    <div
      className={`piston-video-transition ${
        active
          ? "active"
          : ""
      }`}
    >

      {active && (

        <video
          key={
            videoKey
          }
          autoPlay
          muted
          playsInline
          preload="auto"
          className="page-piston-video"
          onLoadedData={(
            event
          ) => {

            event.currentTarget.currentTime =
              0;


            void event.currentTarget.play();

          }}
        >

          <source
            src="/assets/videos/piston-transition.mp4"
            type="video/mp4"
          />

        </video>

      )}

    </div>

  );

}


export default PagePiston;