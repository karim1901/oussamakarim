"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { getServerTheme, getTheme, setTheme, subscribeTheme } from "./theme";

function useTheme() {
  return useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
}

export function ThemeSegmented({ className = "" }) {
  const theme = useTheme();

  const options = [
    { value: "dark", label: "Dark theme", icon: Moon },
    { value: "light", label: "Light theme", icon: Sun },
  ];

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={`glass flex items-center gap-1 rounded-full p-1 ${className}`}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={`focus-ring grid h-8 w-8 place-items-center rounded-full transition-all duration-300 ${
              active
                ? "bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_6px_18px_-6px_var(--glow)]"
                : "text-muted hover:text-ink"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}

export function ThemeSwitch({ className = "" }) {
  const theme = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Light theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`focus-ring glass relative flex h-8 w-14 items-center rounded-full px-1 ${className}`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_4px_14px_-4px_var(--glow)] transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
