"use client";

import { Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import { useHydrated } from "@/hooks/useHydrated";
import { dictionary } from "@/lib/i18n/id";
import {
  clearHistory,
  deleteHistoryEntry,
  useHistory,
} from "@/lib/saved/store";
import { ClearAllControl } from "./ClearAllControl";
import { SavedTextCard } from "./SavedTextCard";

function EmptyHistory() {
  return (
    <div className="rounded-3xl border border-dashed border-border-strong bg-surface/60 px-6 py-12 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-soft-foreground">
        <Clock3 className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
        {dictionary.history.emptyTitle}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {dictionary.history.emptyDescription}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <ButtonLink href="/fancy-text-generator" size="md">
          {dictionary.history.start}
        </ButtonLink>
        <ButtonLink href="/symbols" variant="secondary" size="md">
          {dictionary.history.browseTools}
        </ButtonLink>
      </div>
    </div>
  );
}

export function HistoryList() {
  const history = useHistory();
  const { showToast } = useToast();
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <p
        role="status"
        className="rounded-3xl border border-border bg-surface p-8 text-center text-sm text-muted-foreground"
      >
        {dictionary.history.loading}
      </p>
    );
  }

  if (history.length === 0) {
    return <EmptyHistory />;
  }

  function handleRemove(id: string) {
    if (deleteHistoryEntry(id)) {
      showToast(dictionary.history.removed, "info");
    } else {
      showToast(dictionary.history.storageError, "error");
    }
  }

  function handleClear() {
    if (clearHistory()) {
      showToast(dictionary.history.cleared, "success");
    } else {
      showToast(dictionary.history.storageError, "error");
    }
  }

  return (
    <section aria-labelledby="history-list-title">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="history-list-title"
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            {dictionary.history.listTitle}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {dictionary.history.count(history.length)}
            <span aria-hidden="true"> · </span>
            {dictionary.saved.localOnly}
          </p>
          <p className="mt-1 max-w-xl text-xs leading-5 text-muted-foreground">
            {dictionary.history.limitNote}
          </p>
        </div>
        <ClearAllControl
          label={dictionary.history.clearAll}
          title={dictionary.history.clearConfirmTitle}
          description={dictionary.history.clearConfirmDescription}
          confirmLabel={dictionary.history.confirmClear}
          cancelLabel={dictionary.history.cancel}
          onConfirm={handleClear}
        />
      </div>

      <ul className="mt-5 grid gap-4 lg:grid-cols-2">
        {history.map((item) => (
          <SavedTextCard
            key={item.id}
            text={item.text}
            styleName={item.styleName}
            source={item.source}
            input={item.input}
            timestamp={item.usedAt}
            timestampLabel={dictionary.saved.usedAt}
            removeLabel={dictionary.history.removeLabel(item.styleName)}
            onRemove={() => handleRemove(item.id)}
            recordUsage={false}
          />
        ))}
      </ul>
    </section>
  );
}
