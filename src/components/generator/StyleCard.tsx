"use client";

import type { SavedSourceId } from "@/lib/saved/model";
import type { StylePreset } from "@/lib/unicode";
import { StylePreviewCard } from "./StylePreviewCard";

export function StyleCard({
  preset,
  preview,
  text,
  input,
  source,
}: {
  preset: StylePreset;
  preview: string;
  text?: string;
  input: string;
  source: SavedSourceId;
}) {
  return (
    <StylePreviewCard
      name={preset.name}
      preview={preview}
      text={text}
      source={source}
      input={input}
      compat={preset.compat}
      getText={() => preset.transform(input)}
    />
  );
}
