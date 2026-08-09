import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("mesa-theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("mesa-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("mesa-theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((current) => !current)}
      className="
        fixed right-6 top-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface)]
        text-[var(--text-primary)]
        shadow-lg
        transition-all duration-300
        hover:scale-105
      "
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <Sun size={18} strokeWidth={1.8} />
      ) : (
        <Moon size={18} strokeWidth={1.8} />
      )}
    </button>
  );
}

export default ThemeToggle;