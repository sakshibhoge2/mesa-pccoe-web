import {
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

type Props = {
  activePage?: string;
};

const links = [
  {
    label: "HOME",
    page: "home",
  },
  {
    label: "ABOUT MESA",
    page: "about",
  },
  {
    label: "TEAM",
    page: "team",
  },
  {
    label: "EVENTS",
    page: "events",
  },
  {
    label: "GALLERY",
    page: "gallery",
  },
  {
    label: "CONTACT",
    page: "contact",
  },
];

function getHashPage() {
  const hash =
    window.location.hash
      .replace("#/", "")
      .split("?")[0]
      .trim();

  return hash || "home";
}

function Navbar({
  activePage,
}: Props = {}) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [currentPage, setCurrentPage] =
    useState(
      activePage ||
        getHashPage()
    );

  const [isDark, setIsDark] =
    useState(true);

  const isHome =
    currentPage === "home";

  /* --------------------------------
     ROUTE
  -------------------------------- */

  useEffect(() => {
    const updatePage = () => {
      setCurrentPage(
        activePage ||
          getHashPage()
      );

      setMobileOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    updatePage();

    window.addEventListener(
      "hashchange",
      updatePage
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updatePage
      );
    };
  }, [activePage]);

  /* --------------------------------
     SCROLL
  -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 55
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* --------------------------------
     THEME
  -------------------------------- */

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "mesa-theme"
      );

    const light =
      saved === "light" ||
      saved === "editorial";

    const dark =
      !light;

    document.documentElement
      .classList.toggle(
        "dark",
        dark
      );

    document.documentElement
      .dataset.theme =
      dark
        ? "night"
        : "editorial";

    setIsDark(dark);
  }, []);

  function toggleTheme() {
    const nextDark =
      !isDark;

    setIsDark(nextDark);

    document.documentElement
      .classList.toggle(
        "dark",
        nextDark
      );

    document.documentElement
      .dataset.theme =
      nextDark
        ? "night"
        : "editorial";

    localStorage.setItem(
      "mesa-theme",
      nextDark
        ? "night"
        : "editorial"
    );
  }

  /* --------------------------------
     CAD MOUSE PARALLAX
  -------------------------------- */

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      cancelAnimationFrame(
        frame
      );

      frame =
        requestAnimationFrame(
          () => {
            const mouseX =
              event.clientX /
                window.innerWidth -
              0.5;

            const mouseY =
              event.clientY /
                window.innerHeight -
              0.5;

            const x =
              mouseX * 16;

            const y =
              mouseY * 10;

            document.documentElement
              .style.setProperty(
                "--cad-x",
                `${x}px`
              );

            document.documentElement
              .style.setProperty(
                "--cad-y",
                `${y}px`
              );
          }
        );
    };

    const resetParallax = () => {
      document.documentElement
        .style.setProperty(
          "--cad-x",
          "0px"
        );

      document.documentElement
        .style.setProperty(
          "--cad-y",
          "0px"
        );
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      resetParallax
    );

    return () => {
      cancelAnimationFrame(
        frame
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "blur",
        resetParallax
      );
    };
  }, []);

  return (
    <header
      className={`
        mesa-smart-nav-shell
        ${
          isHome
            ? "mesa-smart-nav-home"
            : "mesa-smart-nav-inner"
        }
        ${
          scrolled
            ? "mesa-smart-nav-scrolled"
            : ""
        }
      `}
    >
      {/* LARGE PCCOE LOGO — HOME ONLY */}

      {isHome && (
        <a
          href="#/home"
          className="home-pccoe-mark"
          aria-label="PCCOE Home"
        >
          <img
            src="/assets/brand/pccoe-logo.png"
            alt="PCCOE"
          />
        </a>
      )}

      {/* NAVBAR */}

      <nav className="mesa-smart-navbar">
        <a
          href="#/home"
          className="mesa-smart-brand"
          onClick={() =>
            setMobileOpen(false)
          }
        >
          <img
            src="/assets/brand/mesa-logo.png"
            alt="MESA PCCOE"
          />

          <div>
            <strong>
              MESA
            </strong>

            <span>
              PCCOE
            </span>
          </div>
        </a>

        <div className="mesa-smart-links">
          {links.map(
            (link) => (
              <a
                key={
                  link.page
                }
                href={`#/${link.page}`}
                className={
                  currentPage ===
                  link.page
                    ? "active"
                    : ""
                }
              >
                {
                  link.label
                }
              </a>
            )
          )}
        </div>

        <div className="mesa-smart-actions">
          <button
            type="button"
            className="mesa-smart-theme"
            onClick={
              toggleTheme
            }
            aria-label="Change theme"
          >
            <span className="mesa-smart-theme-icon">
              {isDark ? (
                <Moon
                  size={16}
                />
              ) : (
                <Sun
                  size={16}
                />
              )}
            </span>

            <span className="mesa-smart-theme-copy">
              <small>
                MODE
              </small>

              <strong>
                {isDark
                  ? "NIGHT"
                  : "DAY"}
              </strong>
            </span>
          </button>

          <button
            type="button"
            className="mesa-smart-menu"
            onClick={() =>
              setMobileOpen(
                (current) =>
                  !current
              )
            }
            aria-label="Open navigation"
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE */}

      <div
        className={`
          mesa-smart-mobile
          ${
            mobileOpen
              ? "open"
              : ""
          }
        `}
      >
        {links.map(
          (
            link,
            index
          ) => (
            <a
              key={
                link.page
              }
              href={`#/${link.page}`}
              className={
                currentPage ===
                link.page
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMobileOpen(
                  false
                )
              }
            >
              <small>
                {String(
                  index + 1
                ).padStart(
                  2,
                  "0"
                )}
              </small>

              <strong>
                {
                  link.label
                }
              </strong>
            </a>
          )
        )}
      </div>
    </header>
  );
}

export default Navbar;