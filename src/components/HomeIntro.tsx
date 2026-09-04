import { useState } from "react";

function HomeIntro() {
  const [visible, setVisible] =
    useState(true);

  if (!visible) return null;

  return (
    <div className="home-intro">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setVisible(false)}
        onError={() => setVisible(false)}
      >
        <source
          src="/assets/videos/mesa-logo-intro.mp4"
          type="video/mp4"
        />
      </video>

      <button
        type="button"
        onClick={() => setVisible(false)}
      >
        SKIP INTRO
      </button>
    </div>
  );
}

export default HomeIntro;