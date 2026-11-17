"use client";

import { useId, useMemo, useState } from "react";
import { Pencil, X } from "lucide-react";
import { CopyButton } from "@/components/generator/CopyButton";
import { EmptyState } from "@/components/generator/EmptyState";
import { FavoriteButton } from "@/components/saved/FavoriteButton";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { dictionary } from "@/lib/i18n/id";
import {
  BIO_LIMIT,
  bioCategories,
  countCharacters,
  generateBios,
  type BioCategoryId,
} from "@/lib/bio/templates";
import { cn } from "@/lib/utils";

type BioTabId = "all" | BioCategoryId;

interface EditingBio {
  templateName: string;
  text: string;
}

function countClass(count: number): string {
  if (count > BIO_LIMIT) return "text-red-600 dark:text-red-400";
  if (count >= 130) return "text-amber-700 dark:text-amber-300";
  return "text-emerald-700 dark:text-emerald-300";
}

export function BioTool() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [action, setAction] = useState("");
  const [category, setCategory] = useState<BioTabId>("all");
  const [editing, setEditing] = useState<EditingBio | null>(null);
  const nameId = useId();
  const roleId = useId();
  const actionId = useId();
  const editorId = useId();

  const suggestions = useMemo(
    () => generateBios({ name, role, action }, category),
    [name, role, action, category],
  );

  const tabs = useMemo(
    () => [
      { id: "all" as const, label: dictionary.glyphs.all },
      ...bioCategories.map((item) => ({ id: item.id, label: item.label })),
    ],
    [],
  );

  const editorCount = editing ? countCharacters(editing.text) : 0;

  function handleUseSample() {
    setName(dictionary.bio.sampleName);
    setRole(dictionary.bio.sampleRole);
    setAction(dictionary.bio.sampleAction);
  }

  return (
    <section>
      <div className="rounded-3xl border border-border bg-surface p-4 shadow-card sm:p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor={nameId}
              className="text-sm font-semibold text-foreground"
            >
              {dictionary.bio.nameLabel}
            </label>
            <input
              id={nameId}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={dictionary.bio.namePlaceholder}
              maxLength={40}
              autoComplete="off"
              className="mt-2 block min-h-11 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </div>
          <div>
            <label
              htmlFor={roleId}
              className="text-sm font-semibold text-foreground"
            >
              {dictionary.bio.roleLabel}
            </label>
            <input
              id={roleId}
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder={dictionary.bio.rolePlaceholder}
              maxLength={60}
              autoComplete="off"
              className="mt-2 block min-h-11 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </div>
          <div>
            <label
              htmlFor={actionId}
              className="text-sm font-semibold text-foreground"
            >
              {dictionary.bio.actionLabel}
            </label>
            <input
              id={actionId}
              type="text"
              value={action}
              onChange={(event) => setAction(event.target.value)}
              placeholder={dictionary.bio.actionPlaceholder}
              maxLength={60}
              autoComplete="off"
              className="mt-2 block min-h-11 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </div>
        </div>
      </div>

      {editing ? (
        <div className="mt-6 rounded-3xl border border-primary/30 bg-surface p-4 shadow-card sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-soft-foreground">
                {dictionary.bio.editorTitle}
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-foreground">
                {editing.templateName}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
              {dictionary.bio.closeEditor}
            </button>
          </div>

          <label htmlFor={editorId} className="sr-only">
            {dictionary.bio.editorTitle}
          </label>
          <textarea
            id={editorId}
            autoFocus
            value={editing.text}
            onChange={(event) =>
              setEditing({ ...editing, text: event.target.value })
            }
            rows={4}
            spellCheck={false}
            className="mt-3 block min-h-28 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={cn("font-semibold tabular-nums", countClass(editorCount))}>
                {editorCount}/{BIO_LIMIT} karakter
              </span>
              {editorCount > BIO_LIMIT ? (
                <span className="rounded-full bg-red-500/10 px-2 py-0.5 font-semibold text-red-700 dark:text-red-300">
                  {dictionary.bio.overLimit}
                </span>
              ) : editorCount >= 130 ? (
                <span className="rounded-full bg-amber-500/10 px-2 py-0.5 font-semibold text-amber-700 dark:text-amber-300">
                  {dictionary.bio.nearLimit}
                </span>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <FavoriteButton
                text={editing.text}
                styleName={editing.templateName}
                source="bio"
                input={name}
              />
              <CopyButton
                getText={() => editing.text}
                styleName={editing.templateName}
                source="bio"
                input={name}
                disabled={editorCount === 0 || editorCount > BIO_LIMIT}
                fullWidth={false}
                className="min-w-40 px-5"
              />
            </div>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {dictionary.bio.editorHint}
          </p>
        </div>
      ) : null}

      <div className="mt-6">
        <FilterTabs
          options={tabs}
          value={category}
          onChange={setCategory}
          panelId="bio-results"
          ariaLabel={dictionary.bio.categoryLabel}
          idPrefix="bio-tab"
        />

        <div id="bio-results" role="tabpanel" aria-labelledby={`bio-tab-${category}`}>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {dictionary.bio.resultsTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                {dictionary.bio.resultCount(suggestions.length)}
                <span aria-hidden="true"> · </span>
                {dictionary.bio.hint}
              </p>
            </div>
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              Instagram · {BIO_LIMIT} karakter
            </span>
          </div>

          <div className="mt-4">
            {name.trim().length === 0 ? (
              <EmptyState
                onUseSample={handleUseSample}
                title={dictionary.bio.emptyTitle}
                description={dictionary.bio.emptyDescription}
                sampleLabel={dictionary.bio.sample}
              />
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {suggestions.map((suggestion) => {
                  const overLimit = suggestion.count > BIO_LIMIT;

                  return (
                    <li
                      key={suggestion.id}
                      className="flex flex-col rounded-2xl border border-border bg-surface p-4 shadow-card transition-colors duration-200 hover:border-border-strong"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="font-display text-sm font-semibold text-foreground">
                          {suggestion.templateName}
                        </h3>
                        <span
                          className={cn(
                            "text-xs font-semibold tabular-nums",
                            countClass(suggestion.count),
                          )}
                        >
                          {suggestion.count}/{BIO_LIMIT}
                        </span>
                      </div>
                      <p
                        aria-hidden="true"
                        className="mt-3 line-clamp-4 min-h-[6rem] whitespace-pre-line break-words rounded-xl bg-surface-muted/70 px-3 py-3 text-sm leading-6 text-foreground [overflow-wrap:anywhere]"
                      >
                        {suggestion.text}
                      </p>
                      {overLimit ? (
                        <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-400">
                          {dictionary.bio.overLimit}
                        </p>
                      ) : null}
                      <div className="mt-auto flex flex-wrap gap-2 pt-3">
                        <button
                          type="button"
                          onClick={() =>
                            setEditing({
                              templateName: suggestion.templateName,
                              text: suggestion.text,
                            })
                          }
                          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 text-xs font-semibold text-foreground transition-colors hover:bg-surface-muted"
                        >
                          <Pencil className="size-4" aria-hidden="true" />
                          {dictionary.bio.edit}
                        </button>
                        <CopyButton
                          getText={() => suggestion.text}
                          styleName={suggestion.templateName}
                          source="bio"
                          input={name}
                          disabled={overLimit}
                          className="min-w-28 flex-1"
                        />
                        <FavoriteButton
                          text={suggestion.text}
                          styleName={suggestion.templateName}
                          source="bio"
                          input={name}
                        />
                      </div>
                    </li>
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
