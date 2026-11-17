"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { CopyButton } from "@/components/generator/CopyButton";
import { dictionary } from "@/lib/i18n/id";
import { formatSavedDate } from "@/lib/saved/format";
import type { SavedSourceId } from "@/lib/saved/model";
import { savedSources } from "@/lib/saved/sources";

export function SavedTextCard({
  text,
  styleName,
  source,
  input,
  timestamp,
  timestampLabel,
  removeLabel,
  onRemove,
  recordUsage,
}: {
  text: string;
  styleName: string;
  source: SavedSourceId;
  input?: string;
  timestamp: number;
  timestampLabel: (date: string) => string;
  removeLabel: string;
  onRemove: () => void;
  recordUsage: boolean;
}) {
  const sourceInfo = savedSources[source];

  return (
    <li className="flex flex-col rounded-2xl border border-border bg-surface p-4 shadow-card transition-colors duration-200 hover:border-border-strong">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link
          href={sourceInfo.href}
          className="inline-flex min-h-9 items-center rounded-full bg-primary-soft px-3 text-xs font-semibold text-primary-soft-foreground transition-colors hover:brightness-95"
        >
          {sourceInfo.label}
        </Link>
        <span className="text-xs tabular-nums text-muted-foreground">
          {timestampLabel(formatSavedDate(timestamp))}
        </span>
      </div>

      <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
        {styleName}
      </h3>

      {input ? (
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground [overflow-wrap:anywhere]">
          <span className="font-semibold text-foreground">
            {dictionary.saved.inputLabel}:
          </span>{" "}
          {input}
        </p>
      ) : null}

      <p className="mt-3 max-h-44 overflow-y-auto whitespace-pre-wrap break-words rounded-xl bg-surface-muted/70 px-3 py-3 text-sm leading-6 text-foreground [overflow-wrap:anywhere]">
        {text}
      </p>

      <div className="mt-auto flex gap-2 pt-3">
        <CopyButton
          getText={() => text}
          styleName={styleName}
          source={source}
          input={input}
          recordUsage={recordUsage}
          className="flex-1"
        />
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeLabel}
          title={removeLabel}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-border-strong bg-surface text-muted-foreground transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400"
        >
          <Trash2 className="size-4" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
