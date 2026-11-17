"use client";

import { useSyncExternalStore } from "react";
import {
  FAVORITES_LIMIT,
  canSaveText,
  findFavorite,
  normalizeInput,
  parseFavorites,
  parseHistory,
  prependHistory,
  removeFavorite,
  removeHistoryEntry,
  type HistoryEntry,
  type SavedCandidate,
  type SavedText,
} from "./model";

export const FAVORITES_STORAGE_KEY = "textora-favorites-v1";
export const HISTORY_STORAGE_KEY = "textora-history-v1";

const EMPTY_FAVORITES: readonly SavedText[] = [];
const EMPTY_HISTORY: readonly HistoryEntry[] = [];

let favoritesCache: SavedText[] | null = null;
let historyCache: HistoryEntry[] | null = null;
const favoriteListeners = new Set<() => void>();
const historyListeners = new Set<() => void>();
let storageBound = false;

function bindStorage(): void {
  if (storageBound || typeof window === "undefined") return;
  storageBound = true;

  window.addEventListener("storage", (event) => {
    if (event.key === FAVORITES_STORAGE_KEY || event.key === null) {
      favoritesCache = null;
      favoriteListeners.forEach((listener) => listener());
    }
    if (event.key === HISTORY_STORAGE_KEY || event.key === null) {
      historyCache = null;
      historyListeners.forEach((listener) => listener());
    }
  });
}

function subscribeFavorites(listener: () => void): () => void {
  bindStorage();
  favoriteListeners.add(listener);
  return () => favoriteListeners.delete(listener);
}

function subscribeHistory(listener: () => void): () => void {
  bindStorage();
  historyListeners.add(listener);
  return () => historyListeners.delete(listener);
}

function getFavoritesSnapshot(): readonly SavedText[] {
  if (typeof window === "undefined") return EMPTY_FAVORITES;
  if (favoritesCache === null) {
    try {
      favoritesCache = parseFavorites(
        window.localStorage.getItem(FAVORITES_STORAGE_KEY),
      );
    } catch {
      favoritesCache = [];
    }
  }
  return favoritesCache;
}

function getHistorySnapshot(): readonly HistoryEntry[] {
  if (typeof window === "undefined") return EMPTY_HISTORY;
  if (historyCache === null) {
    try {
      historyCache = parseHistory(
        window.localStorage.getItem(HISTORY_STORAGE_KEY),
      );
    } catch {
      historyCache = [];
    }
  }
  return historyCache;
}

function getEmptyFavorites(): readonly SavedText[] {
  return EMPTY_FAVORITES;
}

function getEmptyHistory(): readonly HistoryEntry[] {
  return EMPTY_HISTORY;
}

function writeFavorites(next: SavedText[]): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
  } catch {
    return false;
  }
  favoritesCache = next;
  favoriteListeners.forEach((listener) => listener());
  return true;
}

function writeHistory(next: HistoryEntry[]): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next));
  } catch {
    return false;
  }
  historyCache = next;
  historyListeners.forEach((listener) => listener());
  return true;
}

export function createSavedId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    try {
      return crypto.randomUUID();
    } catch {
      // Fall back to a timestamp-based id when randomUUID is unavailable.
    }
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function useFavorites(): readonly SavedText[] {
  return useSyncExternalStore(
    subscribeFavorites,
    getFavoritesSnapshot,
    getEmptyFavorites,
  );
}

export function useHistory(): readonly HistoryEntry[] {
  return useSyncExternalStore(
    subscribeHistory,
    getHistorySnapshot,
    getEmptyHistory,
  );
}

export type FavoriteToggleResult =
  | { ok: true; favorited: boolean }
  | { ok: false; reason: "invalid" | "limit" | "unavailable" };

export function toggleFavorite(
  candidate: SavedCandidate,
  id: string,
  savedAt: number,
): FavoriteToggleResult {
  if (!canSaveText(candidate.text)) {
    return { ok: false, reason: "invalid" };
  }

  const current = getFavoritesSnapshot();
  const existing = findFavorite(current, candidate.text);

  if (!existing && current.length >= FAVORITES_LIMIT) {
    return { ok: false, reason: "limit" };
  }

  const next = existing
    ? removeFavorite(current, existing.id)
    : [
        {
          id,
          savedAt,
          text: candidate.text,
          styleName: candidate.styleName,
          source: candidate.source,
          input: normalizeInput(candidate.input),
        },
        ...current,
      ].slice(0, FAVORITES_LIMIT);

  if (!writeFavorites(next)) {
    return { ok: false, reason: "unavailable" };
  }

  return { ok: true, favorited: existing === undefined };
}

export function deleteFavorite(id: string): boolean {
  const current = getFavoritesSnapshot();
  const next = removeFavorite(current, id);
  if (next.length === current.length) return true;
  return writeFavorites(next);
}

export function clearFavorites(): boolean {
  return writeFavorites([]);
}

export function recordHistory(
  candidate: SavedCandidate,
  id: string,
  usedAt: number,
): boolean {
  if (!canSaveText(candidate.text)) return false;

  const entry: HistoryEntry = {
    id,
    usedAt,
    text: candidate.text,
    styleName: candidate.styleName,
    source: candidate.source,
    input: normalizeInput(candidate.input),
  };

  return writeHistory(prependHistory(getHistorySnapshot(), entry));
}

export function deleteHistoryEntry(id: string): boolean {
  const current = getHistorySnapshot();
  const next = removeHistoryEntry(current, id);
  if (next.length === current.length) return true;
  return writeHistory(next);
}

export function clearHistory(): boolean {
  return writeHistory([]);
}
