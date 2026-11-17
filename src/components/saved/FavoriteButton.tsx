"use client";

import { Heart } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";
import { dictionary } from "@/lib/i18n/id";
import { canSaveText, type SavedSourceId } from "@/lib/saved/model";
import {
  createSavedId,
  toggleFavorite,
  useFavorites,
} from "@/lib/saved/store";
import { cn } from "@/lib/utils";

const errorMessages = {
  invalid: dictionary.saved.invalid,
  limit: dictionary.saved.limitReached,
  unavailable: dictionary.saved.unavailable,
};

export function FavoriteButton({
  text,
  styleName,
  source,
  input,
  variant = "card",
  className,
}: {
  text: string;
  styleName: string;
  source: SavedSourceId;
  input?: string;
  variant?: "card" | "plain" | "tile";
  className?: string;
}) {
  const favorites = useFavorites();
  const { showToast } = useToast();
  const saved = favorites.some((item) => item.text === text);
  const canSave = canSaveText(text);

  function handleClick() {
    const result = toggleFavorite(
      { text, styleName, source, input },
      createSavedId(),
      Date.now(),
    );

    if (!result.ok) {
      showToast(errorMessages[result.reason], "error");
      return;
    }

    showToast(
      result.favorited
        ? dictionary.saved.added(styleName)
        : dictionary.saved.removed(styleName),
      result.favorited ? "success" : "info",
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!canSave}
      aria-pressed={saved}
      aria-label={
        saved
          ? dictionary.saved.removeLabel(styleName)
          : dictionary.saved.addLabel(styleName)
      }
      title={
        canSave
          ? undefined
          : dictionary.saved.invalid
      }
      className={cn(
        "grid place-items-center transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40",
        variant === "card" &&
          "size-11 shrink-0 rounded-full border border-border bg-surface",
        variant === "plain" && "size-11 shrink-0 rounded-full",
        variant === "tile" && "h-full w-11 border-t border-border",
        saved
          ? "border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400"
          : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
        className,
      )}
    >
      <Heart
        className="size-4"
        fill={saved ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
