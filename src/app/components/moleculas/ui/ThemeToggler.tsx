"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        group rounded-full p-2 cursor-pointer
        transition-colors duration-200
        hover:bg-[var(--c-accent)]
      "
    >
      {theme === "light" ? (
        <Moon
          className="
            h-5 w-5 text-[var(--c-text)]
            transition-colors duration-200
            group-hover:text-white
          "
        />
      ) : (
        <Sun
          className="
            h-5 w-5 text-[var(--c-text)]
            transition-colors duration-200
            group-hover:text-white
          "
        />
      )}
    </button>
  );
}
