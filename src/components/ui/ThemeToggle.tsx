"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-surface-muted dark:text-white dark:hover:bg-white/10 ${className}`}
    >
      <Sun size={18} className={theme === "dark" ? "hidden" : "block"} />
      <Moon size={18} className={theme === "dark" ? "block" : "hidden"} />
    </button>
  );
}
