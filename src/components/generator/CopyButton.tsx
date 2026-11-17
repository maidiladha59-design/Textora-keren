"use client";

import { Check, Copy, TriangleAlert } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";
import { useCopy, type CopyStatus } from "@/hooks/useCopy";
import { dictionary } from "@/lib/i18n/id";
import { canSaveText, type SavedSourceId } from "@/lib/saved/model";
import { createSavedId, recordHistory } from "@/lib/saved/store";
import { cn } from "@/lib/utils";

const labels: Record<CopyStatus, string> = {
  idle: dictionary.generator.copy,
  copied: dictionary.generator.copied,
  error: dictionary.generator.copyError,
};

export function CopyButton({
  getText,
  styleName,
  source,
  input,
  recordUsage = true,
  className,
  disabled = false,
  fullWidth = true,
}: {
  getText: () => string;
  styleName: string;
  source: SavedSourceId;
  input?: string;
  recordUsage?: boolean;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}) {
  const { status, copy } = useCopy();
  const { showToast } = useToast();

  async function handleClick() {
    const text = getText();
    const succeeded = await copy(text);

    if (!succeeded) {
      showToast(dictionary.generator.copyErrorAnnouncement, "error");
      return;
    }

    if (recordUsage && canSaveText(text)) {
      recordHistory(
        { text, styleName, source, input },
        createSavedId(),
        Date.now(),
      );
    }

    showToast(dictionary.generator.copyAnnouncement(styleName), "success");
  }

  const Icon =
    status === "copied" ? Check : status === "error" ? TriangleAlert : Copy;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={
        status === "error"
          ? `${dictionary.generator.copyError}: ${dictionary.generator.copyLabel(styleName)}`
          : dictionary.generator.copyLabel(styleName)
      }
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border px-4 text-xs font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
        fullWidth && "w-full",
        status === "copied" &&
          "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        status === "error" &&
          "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300",
        status === "idle" &&
          "border-border-strong bg-surface text-foreground hover:bg-surface-muted",
        className,
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {labels[status]}
    </button>
  );
}
