import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT MESA", href: "#about-mesa" },
  { label: "TEAM", href: "#team" },
  { label: "EVENTS", href: "#events" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dark mode is the default
  const [isDark, setIsDark] = useState(true);

  // --------------------------------------------------
  // LOAD THEME
  // --------------------------------------------------

  useEffect(() => {
    const savedTheme = localStorage.getItem("mesa-theme");

    // If user has previously selected light mode
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // Default = DARK
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("mesa-theme", "dark");
    }
  }, []);

  // --------------------------------------------------
  // THEME TOGGLE
  // --------------------------------------------------

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      // DARK → LIGHT
      root.classList.remove("dark");
      localStorage.setItem("mesa-theme", "light");
      setIsDark(false);
    } else {
      // LIGHT → DARK
      root.classList.add("dark");
      localStorage.setItem("mesa-theme", "dark");
      setIsDark(true);
    }
  };

  // --------------------------------------------------
  // CLOSE MOBILE MENU
  // --------------------------------------------------

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-5 md:px-8">

      {/* ==================================================
          MAIN NAVBAR
      ================================================== */}

      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-[var(--border)]/70
          bg-[var(--surface)]/80
          px-4
          py-3
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-5
          md:px-6
        "
      >

        {/* ==================================================
            LEFT — LOGO + MESA
        ================================================== */}

        <a
          href="#home"
          onClick={closeMobileMenu}
          aria-label="MESA PCCOE Home"
          className="
            group
            flex
            items-center
            gap-3
          "
        >

          {/* ----------------------------------------------
              DARK THEME LOGO
          ---------------------------------------------- */}

          {isDark && (
            <img
              src="/assets/mesa-logo-dark.png"
              alt="MESA PCCOE"
              className="
                h-11
                w-11
                shrink-0
                object-contain
                transition-transform
                duration-200
                group-hover:scale-105
                sm:h-12
                sm:w-12
              "
            />
          )}

          {/* ----------------------------------------------
              LIGHT THEME LOGO
          ---------------------------------------------- */}

          {!isDark && (
            <img
              src="/assets/mesa-logo-light.png"
              alt="MESA PCCOE"
              className="
                h-11
                w-11
                shrink-0
                object-contain
                transition-transform
                duration-200
                group-hover:scale-105
                sm:h-12
                sm:w-12
              "
            />
          )}

          {/* ----------------------------------------------
              MESA TEXT
          ---------------------------------------------- */}

          <div className="flex flex-col leading-none">

            <span
              className="
                font-[var(--font-display)]
                text-xl
                font-bold
                tracking-tight
                text-[var(--text-primary)]
                transition-colors
                duration-200
                group-hover:text-[var(--accent)]
                sm:text-[22px]
              "
            >
              MESA
            </span>

            <span
              className="
                mt-1
                font-[var(--font-mono)]
                text-[10px]
                font-medium
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              PCCOE
            </span>

          </div>
        </a>


        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-6 lg:flex xl:gap-9">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                relative
                py-1
                font-[var(--font-body)]
                text-[13px]
                font-medium
                tracking-wide
                text-[var(--text-secondary)]
                transition-colors
                duration-200
                hover:text-[var(--accent)]
              "
            >

              {item.label}

              {/* Technical underline */}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-[var(--accent)]
                  transition-all
                  duration-200
                  group-hover:w-full
                "
              />

            </a>
          ))}

        </div>


        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div className="flex items-center gap-2">

          {/* Engineering metadata */}

          <span
            className="
              hidden
              font-[var(--font-mono)]
              text-[9px]
              tracking-[0.16em]
              text-[var(--text-muted)]
              xl:block
            "
          >
            REV 26–27
          </span>


          {/* ==================================================
              THEME TOGGLE
          ================================================== */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--surface)]/40
              text-[var(--text-primary)]
              transition-all
              duration-200
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >

            {isDark ? (
              <Sun
                size={17}
                strokeWidth={1.8}
              />
            ) : (
              <Moon
                size={17}
                strokeWidth={1.8}
              />
            )}

          </button>


          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--surface)]/40
              text-[var(--text-primary)]
              transition-all
              duration-200
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              lg:hidden
            "
          >

            {mobileOpen ? (
              <X
                size={18}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={18}
                strokeWidth={1.8}
              />
            )}

          </button>

        </div>

      </nav>


      {/* ====================================================
          MOBILE NAVIGATION
      ==================================================== */}

      <div
        className={`
          mx-auto
          mt-2
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-[var(--border)]/70
          bg-[var(--surface)]/90
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden

          ${
            mobileOpen
              ? "max-h-[520px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >

        <div className="p-2">

          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className={`
                group
                flex
                items-center
                justify-between
                px-3
                py-4
                font-[var(--font-body)]
                text-[15px]
                font-medium
                text-[var(--text-secondary)]
                transition-colors
                duration-200
                hover:text-[var(--accent)]

                ${
                  index !== navItems.length - 1
                    ? "border-b border-[var(--border)]/60"
                    : ""
                }
              `}
            >

              <span>
                {item.label}
              </span>

              <span
                className="
                  font-[var(--font-mono)]
                  text-[9px]
                  tracking-widest
                  text-[var(--text-muted)]
                  transition-colors
                  duration-200
                  group-hover:text-[var(--accent)]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

            </a>
          ))}

        </div>

      </div>

    </header>
  );
}

export default Navbar;