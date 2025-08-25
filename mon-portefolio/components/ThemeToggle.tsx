// filepath: mon-template-vitrine/components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Vérifier le thème sauvegardé dans localStorage ou la préférence système
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-transparent border-none transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary group"
    >
      <span className="flex items-center justify-center transition-transform duration-300 group-active:rotate-180">
        {isDark ? (
          <FiSun className="w-5 h-5 text-yellow-400 transition-colors duration-200" />
        ) : (
          <FiMoon className="w-5 h-5 text-indigo-600 dark:text-indigo-300 transition-colors duration-200" />
        )}
      </span>
    </button>
  );
}