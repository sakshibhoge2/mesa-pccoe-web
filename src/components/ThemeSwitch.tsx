import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "editorial" | "night";

function ThemeSwitch() {
  const [theme, setTheme] =
    useState<ThemeMode>(() => {
      const saved =
        localStorage.getItem("mesa-theme");

      return saved === "editorial"
        ? "editorial"
        : "night";
    });

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;
  }, [theme]);

  function toggleTheme() {
    const next: ThemeMode =
      theme === "editorial"
        ? "night"
        : "editorial";

    setTheme(next);

    localStorage.setItem(
      "mesa-theme",
      next
    );
  }

  const isNight =
    theme === "night";

  return (
    <button
      type="button"
      className={`theme-switch ${
        isNight
          ? "is-night"
          : "is-light"
      }`}
      onClick={toggleTheme}
      aria-label={`Current theme: ${
        isNight
          ? "Night"
          : "Light"
      }. Click to switch.`}
    >
      <span className="theme-switch-icon">
        {isNight ? (
          <Moon size={14} />
        ) : (
          <Sun size={14} />
        )}
      </span>

      <span className="theme-switch-copy">
        <small>
          CURRENT MODE
        </small>

        <strong>
          {isNight
            ? "NIGHT"
            : "LIGHT"}
        </strong>
      </span>
    </button>
  );
}

export default ThemeSwitch;