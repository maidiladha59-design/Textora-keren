"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ClearAllControl({
  label,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  className,
}: {
  label: string;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  className?: string;
}) {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 text-xs font-semibold text-foreground transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400",
          className,
        )}
      >
        <Trash2 className="size-4" aria-hidden="true" />
        {label}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={title}
      className={cn(
        "rounded-2xl border border-red-500/30 bg-red-500/5 p-3",
        className,
      )}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            onConfirm();
            setConfirming(false);
          }}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-red-700"
        >
          {confirmLabel}
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border-strong bg-surface px-4 text-xs font-semibold text-foreground transition-colors hover:bg-surface-muted"
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
}
