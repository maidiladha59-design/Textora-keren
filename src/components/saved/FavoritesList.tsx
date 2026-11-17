"use client";

import { Heart } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import { useHydrated } from "@/hooks/useHydrated";
import { dictionary } from "@/lib/i18n/id";
import {
  clearFavorites,
  deleteFavorite,
  useFavorites,
} from "@/lib/saved/store";
import { ClearAllControl } from "./ClearAllControl";
import { SavedTextCard } from "./SavedTextCard";

function EmptyFavorites() {
  return (
    <div className="rounded-3xl border border-dashed border-border-strong bg-surface/60 px-6 py-12 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
        <Heart className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
        {dictionary.favorites.emptyTitle}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {dictionary.favorites.emptyDescription}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <ButtonLink href="/fancy-text-generator" size="md">
          {dictionary.favorites.start}
        </ButtonLink>
        <ButtonLink href="/symbols" variant="secondary" size="md">
          {dictionary.favorites.browseSymbols}
        </ButtonLink>
      </div>
    </div>
  );
}

export function FavoritesList() {
  const favorites = useFavorites();
  const { showToast } = useToast();
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <p
        role="status"
        className="rounded-3xl border border-border bg-surface p-8 text-center text-sm text-muted-foreground"
      >
        {dictionary.favorites.loading}
      </p>
    );
  }

  if (favorites.length === 0) {
    return <EmptyFavorites />;
  }

  function handleRemove(id: string) {
    if (deleteFavorite(id)) {
      showToast(dictionary.favorites.removed, "info");
    } else {
      showToast(dictionary.favorites.storageError, "error");
    }
  }

  function handleClear() {
    if (clearFavorites()) {
      showToast(dictionary.favorites.cleared, "success");
    } else {
      showToast(dictionary.favorites.storageError, "error");
    }
  }

  return (
    <section aria-labelledby="favorites-list-title">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="favorites-list-title"
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            {dictionary.favorites.listTitle}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {dictionary.favorites.count(favorites.length)}
            <span aria-hidden="true"> · </span>
            {dictionary.saved.localOnly}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            {dictionary.favorites.limitNote}
          </p>
        </div>
        <ClearAllControl
          label={dictionary.favorites.clearAll}
          title={dictionary.favorites.clearConfirmTitle}
          description={dictionary.favorites.clearConfirmDescription}
          confirmLabel={dictionary.favorites.confirmClear}
          cancelLabel={dictionary.favorites.cancel}
          onConfirm={handleClear}
        />
      </div>

      <ul className="mt-5 grid gap-4 lg:grid-cols-2">
        {favorites.map((item) => (
          <SavedTextCard
            key={item.id}
            text={item.text}
            styleName={item.styleName}
            source={item.source}
            input={item.input}
            timestamp={item.savedAt}
            timestampLabel={dictionary.saved.savedAt}
            removeLabel={dictionary.favorites.removeLabel(item.styleName)}
            onRemove={() => handleRemove(item.id)}
            recordUsage
          />
        ))}
      </ul>
    </section>
  );
}
