"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { CategoryTabs, type CategoryOption } from "./CategoryTabs";
import { EmptyState } from "./EmptyState";
import { ResultList } from "./ResultList";
import { TextInput } from "./TextInput";
import { dictionary } from "@/lib/i18n/id";
import { cn } from "@/lib/utils";
import {
  categories,
  categoryIds,
  getPresetsForCategories,
  type CategoryId,
} from "@/lib/unicode";
import { truncateGraphemes } from "@/lib/unicode/segment";

const SCOPE_CATEGORIES = {
  all: categoryIds,
  bold: ["bold", "bold-italic"],
  italic: ["italic", "bold-italic", "cursive"],
  script: ["script", "cursive"],
} satisfies Record<string, readonly CategoryId[]>;

export type GeneratorScope = keyof typeof SCOPE_CATEGORIES;

const PREVIEW_LIMIT = 220;

export function GeneratorTool({ scope = "all" }: { scope?: GeneratorScope }) {
  const scopeCategories: readonly CategoryId[] = SCOPE_CATEGORIES[scope];

  const basePresets = useMemo(
    () => getPresetsForCategories(scopeCategories),
    [scopeCategories],
  );

  const availableCategories = useMemo(
    () => categories.filter((category) => scopeCategories.includes(category.id)),
    [scopeCategories],
  );

  const tabs = useMemo<CategoryOption[]>(
    () => [
      { id: "all", label: dictionary.generator.allCategories },
      ...availableCategories.map((category) => ({
        id: category.id,
        label: category.label,
      })),
    ],
    [availableCategories],
  );

  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const [activeCategory, setActiveCategory] = useState<"all" | CategoryId>(
    "all",
  );
  const source = scope === "all" ? "fancy" : scope;

  const filteredPresets = useMemo(
    () =>
      activeCategory === "all"
        ? basePresets
        : basePresets.filter((preset) => preset.category === activeCategory),
    [activeCategory, basePresets],
  );

  const previewInput = useMemo(
    () => truncateGraphemes(deferredText, PREVIEW_LIMIT),
    [deferredText],
  );

  const isEmpty = text.trim().length === 0;
  const isStale = text !== deferredText;

  function handleUseSample() {
    setText(dictionary.generator.sampleText);
  }

  return (
    <section>
      <TextInput
        value={text}
        onChange={setText}
        onClear={() => setText("")}
      />

      <div className="mt-6">
        <CategoryTabs
          options={tabs}
          value={activeCategory}
          onChange={setActiveCategory}
        />

        <div
          id="generator-results"
          role="tabpanel"
          aria-labelledby={`generator-tab-${activeCategory}`}
        >
          <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {dictionary.generator.resultsTitle}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {dictionary.generator.resultCount(filteredPresets.length)}
                <span aria-hidden="true"> · </span>
                {dictionary.generator.resultsHint}
              </p>
            </div>
            {isStale ? (
              <span
                aria-hidden="true"
                className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {dictionary.generator.updating}
              </span>
            ) : null}
          </div>

          <div
            aria-busy={isStale}
            className={cn(
              "mt-4 transition-opacity duration-200",
              isStale && "opacity-60",
            )}
          >
            {isEmpty ? (
              <EmptyState onUseSample={handleUseSample} />
            ) : (
              <ResultList
                presets={filteredPresets}
                input={deferredText}
                previewInput={previewInput}
                source={source}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
