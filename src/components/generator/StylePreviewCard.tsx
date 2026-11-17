"use client";

import type { ReactNode } from "react";
import { FavoriteButton } from "@/components/saved/FavoriteButton";
import { dictionary } from "@/lib/i18n/id";
import type { SavedSourceId } from "@/lib/saved/model";
import type { Compatibility } from "@/lib/unicode";
import { CopyButton } from "./CopyButton";

export function StylePreviewCard({
  name,
  preview,
  text,
  source,
  input,
  compat,
  getText,
  footer,
  children,
}: {
  name: string;
  preview: string;
  text?: string;
  source: SavedSourceId;
  input?: string;
  compat?: Compatibility;
  getText: () => string;
  footer?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="flex flex-col rounded-2xl border border-border bg-surface p-4 shadow-card transition-colors duration-200 hover:border-border-strong">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-sm font-semibold text-foreground">
          {name}
        </h3>
        <div className="flex items-center gap-1.5">
          {compat === "limited" ? (
            <span
              title={dictionary.generator.limitedHint}
              className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-700 dark:text-amber-300"
            >
              {dictionary.generator.limited}
            </span>
          ) : null}
          <FavoriteButton
            text={text ?? ""}
            styleName={name}
            source={source}
            input={input}
          />
        </div>
      </div>

      <p className="sr-only">{dictionary.generator.previewLabel(name)}</p>
      <p
        aria-hidden="true"
        className="mt-3 line-clamp-3 min-h-[4.5rem] whitespace-pre-wrap break-words rounded-xl bg-surface-muted/70 px-3 py-3 text-base leading-7 text-foreground [overflow-wrap:anywhere]"
      >
        {preview}
      </p>

      {children}

      <div className="mt-auto pt-3">
        <CopyButton
          getText={getText}
          styleName={name}
          source={source}
          input={input}
        />
      </div>
      {footer ? <div className="mt-2">{footer}</div> : null}
    </li>
  );
}
