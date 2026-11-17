"use client";

import { useMemo } from "react";
import { dictionary } from "@/lib/i18n/id";
import {
  FAVORITE_INPUT_LIMIT,
  type SavedSourceId,
} from "@/lib/saved/model";
import type { StylePreset } from "@/lib/unicode";
import { StyleCard } from "./StyleCard";

export function ResultList({
  presets,
  input,
  previewInput,
  source,
}: {
  presets: readonly StylePreset[];
  input: string;
  previewInput: string;
  source: SavedSourceId;
}) {
  const results = useMemo(
    () =>
      presets.map((preset) => ({
        preset,
        preview: preset.transform(previewInput),
        favoriteText:
          input.length <= FAVORITE_INPUT_LIMIT
            ? preset.transform(input)
            : undefined,
      })),
    [presets, input, previewInput],
  );

  if (results.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface p-6 text-center text-sm text-muted-foreground">
        {dictionary.generator.noResults}
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {results.map(({ preset, preview, favoriteText }) => (
        <StyleCard
          key={preset.id}
          preset={preset}
          preview={preview}
          text={favoriteText}
          input={input}
          source={source}
        />
      ))}
    </ul>
  );
}
