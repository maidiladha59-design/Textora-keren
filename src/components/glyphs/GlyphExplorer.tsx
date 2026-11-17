"use client";

import {
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Check, Copy, Eraser, Heart, Plus, Search, X } from "lucide-react";
import { FavoriteButton } from "@/components/saved/FavoriteButton";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { useToast } from "@/components/ui/ToastProvider";
import { copyToClipboard, useCopy } from "@/hooks/useCopy";
import { dictionary } from "@/lib/i18n/id";
import { filterGlyphs, type GlyphCategory, type GlyphItem } from "@/lib/glyphs";
import { canSaveText, type SavedSourceId } from "@/lib/saved/model";
import {
  createSavedId,
  recordHistory,
  toggleFavorite,
  useFavorites,
} from "@/lib/saved/store";
import { countGraphemes } from "@/lib/unicode/segment";
import { cn } from "@/lib/utils";

const favoriteErrorMessages = {
  invalid: dictionary.saved.invalid,
  limit: dictionary.saved.limitReached,
  unavailable: dictionary.saved.unavailable,
} as const;

const PAGE_SIZE = 12;

function GlyphTile({
  item,
  isFavorite,
  isCopied,
}: {
  item: GlyphItem;
  isFavorite: boolean;
  isCopied: boolean;
}) {
  const canSave = canSaveText(item.value);

  return (
    <li className="relative flex overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-colors duration-150 [contain-intrinsic-size:auto_7rem] [content-visibility:auto] hover:border-border-strong">
      <button
        type="button"
        data-glyph-action="copy"
        data-glyph-value={item.value}
        data-glyph-name={item.name}
        // Visible glyph must be part of the accessible name (WCAG 2.5.3).
        aria-label={dictionary.glyphs.copyLabel(
          `${item.value} ${item.name}`,
        )}
        className="flex min-h-24 flex-1 flex-col items-center justify-center gap-1.5 px-3 py-4 text-center transition-colors hover:bg-surface-muted/60"
      >
        <span
          aria-hidden="true"
          className="text-2xl leading-none text-foreground"
        >
          {item.value}
        </span>{" "}
        {/* Space keeps letter/digit glyphs tokenized apart from the name in axe's label check. */}
        <span className="text-[11px] font-medium leading-4 text-muted-foreground">
          {item.name}
        </span>
      </button>
      <div className="grid w-11 shrink-0 grid-rows-2 border-l border-border">
        <button
          type="button"
          data-glyph-action="add"
          data-glyph-value={item.value}
          data-glyph-name={item.name}
          aria-label={dictionary.glyphs.addLabel(item.name)}
          className="grid place-items-center border-b border-border text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          <Plus className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          data-glyph-action="favorite"
          data-glyph-value={item.value}
          data-glyph-name={item.name}
          disabled={!canSave}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? dictionary.saved.removeLabel(item.name)
              : dictionary.saved.addLabel(item.name)
          }
          title={canSave ? undefined : dictionary.saved.invalid}
          className={cn(
            "grid h-full w-11 place-items-center border-t border-border transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40",
            isFavorite
              ? "border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400"
              : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
          )}
        >
          <Heart
            className="size-4"
            fill={isFavorite ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>
      </div>
      {isCopied ? (
        <span className="pointer-events-none absolute left-1.5 top-1.5 grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
          <Check className="size-3" aria-hidden="true" />
        </span>
      ) : null}
    </li>
  );
}

export function GlyphExplorer({
  categories,
  items,
  source,
  idPrefix,
  composerTitle,
  composerPlaceholder,
  searchPlaceholder = dictionary.glyphs.searchPlaceholder,
}: {
  categories: readonly GlyphCategory[];
  items: readonly GlyphItem[];
  source: SavedSourceId;
  idPrefix: string;
  composerTitle: string;
  composerPlaceholder: string;
  searchPlaceholder?: string;
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [activeCategory, setActiveCategory] = useState("all");
  const [composer, setComposer] = useState("");
  const { status: composerStatus, copy: copyComposer } = useCopy();
  const { showToast } = useToast();
  const favorites = useFavorites();
  const favoriteTexts = useMemo(
    () => new Set(favorites.map((favorite) => favorite.text)),
    [favorites],
  );
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const copiedTimeoutRef = useRef<number | undefined>(undefined);
  const searchId = useId();
  const composerId = useId();
  const resultsId = `${idPrefix}-results`;

  useEffect(() => {
    return () => {
      window.clearTimeout(copiedTimeoutRef.current);
    };
  }, []);

  const tabs = useMemo(
    () => [
      { id: "all", label: dictionary.glyphs.all },
      ...categories.map((category) => ({
        id: category.id,
        label: category.label,
      })),
    ],
    [categories],
  );

  const filtered = useMemo(
    () => filterGlyphs(items, activeCategory, deferredQuery),
    [activeCategory, deferredQuery, items],
  );
  const listKey = `${activeCategory}\u0000${deferredQuery}`;
  const [page, setPage] = useState({ key: listKey, count: PAGE_SIZE });
  const visibleCount = page.key === listKey ? page.count : PAGE_SIZE;
  const visible = filtered.slice(0, visibleCount);

  const activeDescription = categories.find(
    (category) => category.id === activeCategory,
  )?.description;

  const composerCount = countGraphemes(composer);

  async function handleCopyComposer() {
    const succeeded = await copyComposer(composer);

    if (!succeeded) {
      showToast(dictionary.generator.copyErrorAnnouncement, "error");
      return;
    }

    recordHistory(
      { text: composer, styleName: composerTitle, source },
      createSavedId(),
      Date.now(),
    );
    showToast(
      dictionary.generator.copyAnnouncement(composerTitle),
      "success",
    );
  }

  async function handleTileCopy(value: string, name: string) {
    const succeeded = await copyToClipboard(value);

    if (!succeeded) {
      showToast(dictionary.generator.copyErrorAnnouncement, "error");
      return;
    }

    setCopiedValue(value);
    window.clearTimeout(copiedTimeoutRef.current);
    copiedTimeoutRef.current = window.setTimeout(() => {
      setCopiedValue(null);
    }, 2000);

    recordHistory(
      { text: value, styleName: name, source },
      createSavedId(),
      Date.now(),
    );
    showToast(dictionary.generator.copyAnnouncement(name), "success");
  }

  function handleTileFavorite(value: string, name: string) {
    const result = toggleFavorite(
      { text: value, styleName: name, source },
      createSavedId(),
      Date.now(),
    );

    if (!result.ok) {
      showToast(favoriteErrorMessages[result.reason], "error");
      return;
    }

    showToast(
      result.favorited
        ? dictionary.saved.added(name)
        : dictionary.saved.removed(name),
      result.favorited ? "success" : "info",
    );
  }

  function handleTileAction(event: MouseEvent<HTMLUListElement>) {
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>(
      "button[data-glyph-action]",
    );

    if (!target) return;

    const { glyphAction, glyphValue = "", glyphName = "" } = target.dataset;

    if (glyphAction === "copy") {
      void handleTileCopy(glyphValue, glyphName);
    } else if (glyphAction === "add") {
      setComposer((current) => current + glyphValue);
      showToast(dictionary.glyphs.addAnnouncement(glyphName), "success");
    } else if (glyphAction === "favorite") {
      handleTileFavorite(glyphValue, glyphName);
    }
  }

  return (
    <section>
      <div className="rounded-3xl border border-border bg-surface p-4 shadow-card sm:p-5">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <label
            htmlFor={composerId}
            className="text-sm font-semibold text-foreground"
          >
            {composerTitle}
          </label>
          <span className="text-xs font-medium tabular-nums text-muted-foreground">
            {dictionary.generator.characterCount(composerCount)}
          </span>
        </div>
        <textarea
          id={composerId}
          value={composer}
          onChange={(event) => setComposer(event.target.value)}
          rows={2}
          placeholder={composerPlaceholder}
          spellCheck={false}
          className="mt-3 block min-h-20 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="max-w-md text-xs leading-5 text-muted-foreground">
            {dictionary.glyphs.composerHint}
          </p>
          <div className="flex items-center gap-2">
            <FavoriteButton
              text={composer}
              styleName={composerTitle}
              source={source}
              variant="plain"
            />
            <button
              type="button"
              onClick={() => setComposer("")}
              disabled={composer.length === 0}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <Eraser className="size-4" aria-hidden="true" />
              {dictionary.glyphs.clearComposer}
            </button>
            <button
              type="button"
              onClick={handleCopyComposer}
              disabled={composer.length === 0}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 text-xs font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
                composerStatus === "copied"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : composerStatus === "error"
                    ? "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300"
                    : "border-border-strong bg-surface text-foreground hover:bg-surface-muted",
              )}
            >
              {composerStatus === "copied" ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {composerStatus === "copied"
                ? dictionary.generator.copied
                : dictionary.glyphs.copyComposer}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="rounded-2xl border border-border bg-surface p-3">
          <label htmlFor={searchId} className="sr-only">
            {dictionary.glyphs.searchLabel}
          </label>
          <div className="flex items-center gap-2">
            <Search
              className="ml-2 size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              autoComplete="off"
              className="min-h-11 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70 [&::-webkit-search-cancel-button]:hidden"
            />
            {query.length > 0 ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Bersihkan pencarian"
                className="grid size-11 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-3">
          <FilterTabs
            options={tabs}
            value={activeCategory}
            onChange={setActiveCategory}
            panelId={resultsId}
            ariaLabel={dictionary.generator.categoryLabel}
            idPrefix={`${idPrefix}-tab`}
          />
        </div>

        <div
          id={resultsId}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-tab-${activeCategory}`}
        >
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {dictionary.generator.resultsTitle}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {filtered.length > visible.length
                  ? dictionary.glyphs.visibleCount(
                      visible.length,
                      filtered.length,
                    )
                  : dictionary.glyphs.resultCount(filtered.length)}
                {activeDescription ? ` · ${activeDescription}` : ""}
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
              <p className="font-display text-base font-semibold text-foreground">
                {dictionary.glyphs.emptyTitle}
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                {dictionary.glyphs.emptyDescription}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                  setPage({ key: "all\u0000", count: PAGE_SIZE });
                }}
                className="mt-4 inline-flex min-h-11 items-center rounded-full border border-border-strong bg-surface px-4 text-xs font-semibold text-foreground transition-colors hover:bg-surface-muted"
              >
                {dictionary.glyphs.all}
              </button>
            </div>
          ) : (
            <>
              <ul
                onClick={handleTileAction}
                className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
              >
                {visible.map((item) => (
                  <GlyphTile
                    key={`${item.category}-${item.value}`}
                    item={item}
                    isFavorite={favoriteTexts.has(item.value)}
                    isCopied={copiedValue === item.value}
                  />
                ))}
              </ul>
              {visible.length < filtered.length ? (
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setPage({
                        key: listKey,
                        count: visibleCount + PAGE_SIZE,
                      })
                    }
                    className="inline-flex min-h-11 items-center rounded-full border border-border-strong bg-surface px-4 text-xs font-semibold text-foreground transition-colors hover:bg-surface-muted"
                  >
                    {dictionary.glyphs.showMore}
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
