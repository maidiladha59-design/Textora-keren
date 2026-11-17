export const FAVORITES_LIMIT = 100;
export const HISTORY_LIMIT = 50;
export const SAVED_TEXT_LIMIT = 2000;
export const FAVORITE_INPUT_LIMIT = 1000;

export const savedSourceIds = [
  "fancy",
  "bold",
  "italic",
  "script",
  "symbols",
  "nickname",
  "bio",
  "emoji",
  "numbers",
] as const;

export type SavedSourceId = (typeof savedSourceIds)[number];

const sourceSet: ReadonlySet<string> = new Set(savedSourceIds);

export interface SavedCandidate {
  text: string;
  styleName: string;
  source: SavedSourceId;
  input?: string;
}

export interface SavedText extends SavedCandidate {
  id: string;
  savedAt: number;
}

export interface HistoryEntry extends SavedCandidate {
  id: string;
  usedAt: number;
}

interface StoredItem {
  id: string;
  text: string;
  styleName: string;
  source: SavedSourceId;
  input?: string;
  time: number;
}

export function isSavedSourceId(value: unknown): value is SavedSourceId {
  return typeof value === "string" && sourceSet.has(value);
}

export function canSaveText(text: string): boolean {
  return text.trim().length > 0 && text.length <= SAVED_TEXT_LIMIT;
}

export function normalizeInput(input: string | undefined): string | undefined {
  if (!input || input.trim().length === 0) return undefined;
  return input.length <= SAVED_TEXT_LIMIT ? input : undefined;
}

function readString(value: unknown, maxLength: number): string | null {
  if (
    typeof value !== "string" ||
    value.trim().length === 0 ||
    value.length > maxLength
  ) {
    return null;
  }
  return value;
}

function readStoredItem(
  value: unknown,
  timeKey: "savedAt" | "usedAt",
): StoredItem | null {
  if (typeof value !== "object" || value === null) return null;

  const record = value as Record<string, unknown>;
  const id = readString(record.id, 200);
  const text = readString(record.text, SAVED_TEXT_LIMIT);
  const styleName = readString(record.styleName, 200);
  const source = record.source;
  const time = record[timeKey];

  if (
    !id ||
    !text ||
    !styleName ||
    !isSavedSourceId(source) ||
    typeof time !== "number" ||
    !Number.isFinite(time) ||
    time <= 0
  ) {
    return null;
  }

  let input: string | undefined;
  if (
    typeof record.input === "string" &&
    record.input.trim().length > 0 &&
    record.input.length <= SAVED_TEXT_LIMIT
  ) {
    input = record.input;
  }

  return { id, text, styleName, source, time, input };
}

function readList(raw: string | null): unknown[] | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function parseFavorites(raw: string | null): SavedText[] {
  const list = readList(raw);
  if (!list) return [];

  const favorites: SavedText[] = [];
  const seenTexts = new Set<string>();

  for (const value of list) {
    const item = readStoredItem(value, "savedAt");
    if (!item || seenTexts.has(item.text)) continue;

    seenTexts.add(item.text);
    favorites.push({
      id: item.id,
      text: item.text,
      styleName: item.styleName,
      source: item.source,
      input: item.input,
      savedAt: item.time,
    });

    if (favorites.length >= FAVORITES_LIMIT) break;
  }

  return favorites;
}

export function parseHistory(raw: string | null): HistoryEntry[] {
  const list = readList(raw);
  if (!list) return [];

  const history: HistoryEntry[] = [];
  let previousKey = "";

  for (const value of list) {
    const item = readStoredItem(value, "usedAt");
    if (!item) continue;

    const key = `${item.source}\u0000${item.styleName}\u0000${item.text}`;
    if (key === previousKey) continue;

    previousKey = key;
    history.push({
      id: item.id,
      text: item.text,
      styleName: item.styleName,
      source: item.source,
      input: item.input,
      usedAt: item.time,
    });

    if (history.length >= HISTORY_LIMIT) break;
  }

  return history;
}

export function findFavorite(
  favorites: readonly SavedText[],
  text: string,
): SavedText | undefined {
  return favorites.find((item) => item.text === text);
}

export function removeFavorite(
  favorites: readonly SavedText[],
  id: string,
): SavedText[] {
  return favorites.filter((item) => item.id !== id);
}

export function removeHistoryEntry(
  history: readonly HistoryEntry[],
  id: string,
): HistoryEntry[] {
  return history.filter((item) => item.id !== id);
}

export function prependHistory(
  history: readonly HistoryEntry[],
  entry: HistoryEntry,
): HistoryEntry[] {
  const latest = history[0];
  const isConsecutiveRepeat =
    latest !== undefined &&
    latest.text === entry.text &&
    latest.styleName === entry.styleName &&
    latest.source === entry.source;

  const base = isConsecutiveRepeat ? history.slice(1) : history;
  return [entry, ...base].slice(0, HISTORY_LIMIT);
}
