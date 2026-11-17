"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { dictionary } from "@/lib/i18n/id";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  isThemePreference,
  resolveTheme,
  type ThemePreference,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

const THEME_CHANGE_EVENT = "textora-theme-change";

const options: ReadonlyArray<{
  value: ThemePreference;
  label: string;
  icon: LucideIcon;
}> = [
  { value: "light", label: dictionary.theme.light, icon: Sun },
  { value: "dark", label: dictionary.theme.dark, icon: Moon },
  { value: "system", label: dictionary.theme.system, icon: Monitor },
];

function readPreference(): ThemePreference {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const sync = () => {
    const preference = readPreference();
    applyTheme(resolveTheme(preference));
    onChange();
  };

  window.addEventListener("storage", sync);
  window.addEventListener(THEME_CHANGE_EVENT, sync);
  media.addEventListener("change", sync);

  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener(THEME_CHANGE_EVENT, sync);
    media.removeEventListener("change", sync);
  };
}

function getServerSnapshot(): ThemePreference | null {
  return null;
}

export function ThemeToggle({
  variant = "bar",
  className,
}: {
  variant?: "bar" | "panel";
  className?: string;
}) {
  const preference = useSyncExternalStore(
    subscribe,
    readPreference,
    getServerSnapshot,
  );

  function choose(next: ThemePreference) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode or full quota: the theme still applies for this visit.
    }

    applyTheme(resolveTheme(next));
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  if (variant === "panel") {
    return (
      <div className={cn("grid grid-cols-3 gap-2", className)}>
        {options.map(({ value, label, icon: Icon }) => {
          const selected = preference === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => choose(value)}
              aria-pressed={selected}
              className={cn(
                "flex h-11 flex-col items-center justify-center gap-1 rounded-xl border text-[11px] font-medium transition-colors",
                selected
                  ? "border-primary/40 bg-primary-soft text-primary-soft-foreground"
                  : "border-border bg-surface text-muted-foreground hover:bg-surface-muted hover:text-foreground",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={dictionary.theme.label}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5",
        className,
      )}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const selected = preference === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => choose(value)}
            aria-pressed={selected}
            aria-label={label}
            title={label}
            className={cn(
              "grid size-9 place-items-center rounded-full transition-colors",
              selected
                ? "bg-primary-soft text-primary-soft-foreground"
                : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
