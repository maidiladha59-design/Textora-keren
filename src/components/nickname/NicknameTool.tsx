"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import { EmptyState } from "@/components/generator/EmptyState";
import { StylePreviewCard } from "@/components/generator/StylePreviewCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { dictionary } from "@/lib/i18n/id";
import {
  generateNicknames,
  getNicknamePlatform,
  nicknamePlatforms,
  nicknameVibes,
  type NicknameVibeId,
} from "@/lib/nickname/generate";
import { countGraphemes } from "@/lib/unicode/segment";
import { cn } from "@/lib/utils";

export function NicknameTool() {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const [platformId, setPlatformId] = useState(nicknamePlatforms[0].id);
  const [vibe, setVibe] = useState<NicknameVibeId>("gaming");
  const nameId = useId();
  const platformId_ = useId();

  const platform = getNicknamePlatform(platformId);
  const suggestions = useMemo(
    () => generateNicknames(deferredName, vibe),
    [deferredName, vibe],
  );

  const vibeTabs = nicknameVibes.map((item) => ({
    id: item.id,
    label: item.label,
  }));
  const activeVibe = nicknameVibes.find((item) => item.id === vibe);

  function handleUseSample() {
    setName(dictionary.nickname.sampleName);
  }

  return (
    <section>
      <div className="rounded-3xl border border-border bg-surface p-4 shadow-card sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor={nameId}
                className="text-sm font-semibold text-foreground"
              >
                {dictionary.nickname.nameLabel}
              </label>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {dictionary.generator.characterCount(countGraphemes(name))}
              </span>
            </div>
            <input
              id={nameId}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={dictionary.nickname.namePlaceholder}
              maxLength={40}
              autoComplete="off"
              spellCheck={false}
              className="mt-2 block min-h-11 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </div>

          <div>
            <label
              htmlFor={platformId_}
              className="text-sm font-semibold text-foreground"
            >
              {dictionary.nickname.platformLabel}
            </label>
            <select
              id={platformId_}
              value={platformId}
              onChange={(event) => setPlatformId(event.target.value)}
              className="mt-2 block min-h-11 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
            >
              {nicknamePlatforms.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label} · {item.limit} karakter
                </option>
              ))}
            </select>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {platform.note} Batas dapat berubah sesuai kebijakan platform.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <FilterTabs
          options={vibeTabs}
          value={vibe}
          onChange={setVibe}
          panelId="nickname-results"
          ariaLabel={dictionary.nickname.vibeLabel}
          idPrefix="nickname-vibe"
        />

        <div
          id="nickname-results"
          role="tabpanel"
          aria-labelledby={`nickname-vibe-${vibe}`}
        >
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {dictionary.nickname.resultsTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                {dictionary.nickname.resultCount(suggestions.length)}
                <span aria-hidden="true"> · </span>
                {activeVibe?.description} {dictionary.nickname.hint}
              </p>
            </div>
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {platform.label} · {platform.limit} karakter
            </span>
          </div>

          <div className="mt-4">
            {suggestions.length === 0 ? (
              <EmptyState
                onUseSample={handleUseSample}
                title={dictionary.nickname.emptyTitle}
                description={dictionary.nickname.emptyDescription}
                sampleLabel={dictionary.nickname.sample}
              />
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {suggestions.map((suggestion) => {
                  const count = countGraphemes(suggestion.text);
                  const overLimit = count > platform.limit;

                  return (
                    <StylePreviewCard
                      key={suggestion.id}
                      name={`${suggestion.styleLabel} · ${suggestion.frameLabel}`}
                      preview={suggestion.text}
                      text={suggestion.text}
                      source="nickname"
                      input={deferredName}
                      compat={suggestion.compat}
                      getText={() => suggestion.text}
                    >
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={cn(
                            "text-xs font-semibold tabular-nums",
                            overLimit
                              ? "text-red-600 dark:text-red-400"
                              : "text-emerald-700 dark:text-emerald-300",
                          )}
                        >
                          {dictionary.nickname.charCount(
                            count,
                            platform.limit,
                          )}
                        </span>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]",
                            overLimit
                              ? "bg-red-500/10 text-red-700 dark:text-red-300"
                              : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
                          )}
                        >
                          {overLimit
                            ? dictionary.nickname.overLimit
                            : dictionary.nickname.safeLimit}
                        </span>
                      </div>
                    </StylePreviewCard>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
