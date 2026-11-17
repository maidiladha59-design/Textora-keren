"use client";

import { Eraser } from "lucide-react";
import { useId } from "react";
import { dictionary } from "@/lib/i18n/id";
import { countGraphemes } from "@/lib/unicode/segment";

export function TextInput({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}) {
  const inputId = useId();
  const hintId = `${inputId}-hint`;
  const count = countGraphemes(value);

  return (
    <div className="rounded-3xl border border-border bg-surface p-4 shadow-card sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-foreground"
        >
          {dictionary.generator.inputLabel}
        </label>
        <span className="text-xs font-medium tabular-nums text-muted-foreground">
          {dictionary.generator.characterCount(count)}
        </span>
      </div>

      <textarea
        id={inputId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={hintId}
        placeholder={dictionary.generator.inputPlaceholder}
        rows={4}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        className="mt-3 block min-h-32 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
      />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p id={hintId} className="max-w-md text-xs leading-5 text-muted-foreground">
          {dictionary.generator.inputHint}
        </p>
        <button
          type="button"
          onClick={onClear}
          disabled={value.length === 0}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
        >
          <Eraser className="size-4" aria-hidden="true" />
          {dictionary.generator.clear}
        </button>
      </div>
    </div>
  );
}
