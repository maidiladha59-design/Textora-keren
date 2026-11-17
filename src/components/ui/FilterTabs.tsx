"use client";

import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export interface FilterOption<T extends string> {
  id: T;
  label: string;
}

export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  panelId,
  ariaLabel,
  idPrefix,
  className,
}: {
  options: readonly FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  panelId: string;
  ariaLabel: string;
  idPrefix: string;
  className?: string;
}) {
  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % options.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
    }

    if (nextIndex === undefined) return;

    event.preventDefault();
    onChange(options[nextIndex].id);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<
      HTMLButtonElement
    >('[role="tab"]');
    tabs?.[nextIndex]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]",
        className,
      )}
    >
      {options.map((option, index) => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            id={`${idPrefix}-${option.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 text-xs font-semibold transition-colors duration-150",
              selected
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
