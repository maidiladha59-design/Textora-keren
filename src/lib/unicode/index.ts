import { categories, categoryIds, type CategoryId } from "./categories";
import type { StylePreset } from "./engine";
import {
  aestheticPresets,
  cutePresets,
  decorativePresets,
  gothicPresets,
} from "./presets/decorated";
import {
  bubblePresets,
  circledPresets,
  negativeCircledPresets,
  squaredPresets,
} from "./presets/enclosed";
import {
  cursivePresets,
  doubleStruckPresets,
  frakturPresets,
  monospacePresets,
  scriptPresets,
  smallCapsPresets,
} from "./presets/lettering";
import {
  subscriptPresets,
  superscriptPresets,
} from "./presets/position";
import {
  boldItalicPresets,
  boldPresets,
  italicPresets,
} from "./presets/serif";
import {
  glitchPresets,
  mirrorPresets,
  reversePresets,
  spacedPresets,
  upsideDownPresets,
  widePresets,
} from "./presets/transforms";

export { categories, categoryIds, getCategory } from "./categories";
export type { Category, CategoryId } from "./categories";
export type {
  Compatibility,
  StylePreset,
  Transformer,
} from "./engine";

export const allPresets: readonly StylePreset[] = [
  ...boldPresets,
  ...italicPresets,
  ...boldItalicPresets,
  ...scriptPresets,
  ...cursivePresets,
  ...frakturPresets,
  ...doubleStruckPresets,
  ...monospacePresets,
  ...smallCapsPresets,
  ...superscriptPresets,
  ...subscriptPresets,
  ...circledPresets,
  ...negativeCircledPresets,
  ...squaredPresets,
  ...bubblePresets,
  ...widePresets,
  ...upsideDownPresets,
  ...reversePresets,
  ...mirrorPresets,
  ...spacedPresets,
  ...glitchPresets,
  ...aestheticPresets,
  ...cutePresets,
  ...gothicPresets,
  ...decorativePresets,
];

const grouped = categoryIds.reduce<Record<CategoryId, StylePreset[]>>(
  (result, categoryId) => {
    result[categoryId] = allPresets.filter(
      (preset) => preset.category === categoryId,
    );
    return result;
  },
  {} as Record<CategoryId, StylePreset[]>,
);

export const presetsByCategory: Readonly<
  Record<CategoryId, readonly StylePreset[]>
> = grouped;

export const categoryOptions = categories.map((category) => ({
  id: category.id,
  label: category.label,
}));

export function getPresetsForCategories(
  selected: readonly CategoryId[],
): StylePreset[] {
  const allowed = new Set<CategoryId>(selected);
  return allPresets.filter((preset) => allowed.has(preset.category));
}
