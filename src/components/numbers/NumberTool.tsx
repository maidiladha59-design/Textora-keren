"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { EmptyState } from "@/components/generator/EmptyState";
import { StylePreviewCard } from "@/components/generator/StylePreviewCard";
import { TextInput } from "@/components/generator/TextInput";
import { dictionary } from "@/lib/i18n/id";
import { FAVORITE_INPUT_LIMIT } from "@/lib/saved/model";
import {
  numberStyles,
  transformNumberStyle,
} from "@/lib/numbers/styles";
import { truncateGraphemes } from "@/lib/unicode/segment";

const PREVIEW_LIMIT = 220;

export function NumberTool() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const isEmpty = text.trim().length === 0;
  const previewInput = useMemo(
    () => truncateGraphemes(deferredText, PREVIEW_LIMIT),
    [deferredText],
  );

  const results = useMemo(
    () =>
      numberStyles.map((style) => ({
        style,
        preview: transformNumberStyle(previewInput, style),
        favoriteText:
          deferredText.length <= FAVORITE_INPUT_LIMIT
            ? transformNumberStyle(deferredText, style)
            : undefined,
      })),
    [previewInput, deferredText],
  );

  return (
    <section>
      <TextInput value={text} onChange={setText} onClear={() => setText("")} />

      <div className="mt-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              {dictionary.numbers.resultsTitle}
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
              {dictionary.numbers.resultCount(numberStyles.length)}
              <span aria-hidden="true"> · </span>
              {dictionary.numbers.hint}
            </p>
          </div>
        </div>

        <div id="number-results" className="mt-4">
          {isEmpty ? (
            <EmptyState
              onUseSample={() => setText(dictionary.numbers.sampleText)}
              title={dictionary.numbers.emptyTitle}
              description={dictionary.numbers.emptyDescription}
              sampleLabel={dictionary.numbers.sample}
            />
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map(({ style, preview, favoriteText }) => (
                <StylePreviewCard
                  key={style.id}
                  name={style.name}
                  preview={preview}
                  text={favoriteText}
                  source="numbers"
                  input={deferredText}
                  compat={style.compat}
                  getText={() => transformNumberStyle(deferredText, style)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
