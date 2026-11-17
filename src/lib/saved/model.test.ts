import { describe, expect, it } from "vitest";
import {
  FAVORITES_LIMIT,
  HISTORY_LIMIT,
  SAVED_TEXT_LIMIT,
  canSaveText,
  findFavorite,
  normalizeInput,
  parseFavorites,
  parseHistory,
  prependHistory,
  removeFavorite,
  removeHistoryEntry,
  type HistoryEntry,
  type SavedText,
} from "./model";

function favorite(overrides: Partial<SavedText> = {}): SavedText {
  return {
    id: "favorite-1",
    text: "Halo dunia",
    styleName: "Bold",
    source: "fancy",
    input: "Halo dunia",
    savedAt: 1_700_000_000_000,
    ...overrides,
  };
}

function historyEntry(overrides: Partial<HistoryEntry> = {}): HistoryEntry {
  return {
    id: "history-1",
    text: "Halo dunia",
    styleName: "Bold",
    source: "fancy",
    input: "Halo dunia",
    usedAt: 1_700_000_000_000,
    ...overrides,
  };
}

describe("saved text model", () => {
  it("validates saveable text", () => {
    expect(canSaveText("Halo")).toBe(true);
    expect(canSaveText("   ")).toBe(false);
    expect(canSaveText("x".repeat(SAVED_TEXT_LIMIT))).toBe(true);
    expect(canSaveText("x".repeat(SAVED_TEXT_LIMIT + 1))).toBe(false);
  });

  it("normalizes optional original input", () => {
    expect(normalizeInput(undefined)).toBeUndefined();
    expect(normalizeInput("   ")).toBeUndefined();
    expect(normalizeInput("Halo")).toBe("Halo");
    expect(normalizeInput("x".repeat(SAVED_TEXT_LIMIT + 1))).toBeUndefined();
  });

  it("parses and sanitizes favorites", () => {
    const valid = favorite();
    const duplicate = favorite({ id: "favorite-2" });
    const invalidSource = { ...favorite(), source: "unknown" };
    const emptyText = { ...favorite(), text: "   " };
    const invalidTime = { ...favorite(), savedAt: "yesterday" };
    const tooLong = { ...favorite(), text: "x".repeat(SAVED_TEXT_LIMIT + 1) };

    const parsed = parseFavorites(
      JSON.stringify([
        valid,
        duplicate,
        invalidSource,
        emptyText,
        invalidTime,
        tooLong,
        null,
        "not an object",
      ]),
    );

    expect(parsed).toEqual([valid]);
    expect(parseFavorites(null)).toEqual([]);
    expect(parseFavorites("not json")).toEqual([]);
    expect(parseFavorites(JSON.stringify({ items: [valid] }))).toEqual([]);
  });

  it("caps favorites while keeping the newest entries", () => {
    const entries = Array.from({ length: FAVORITES_LIMIT + 5 }, (_, index) =>
      favorite({
        id: `favorite-${index}`,
        text: `Teks ${index}`,
        savedAt: 1_700_000_000_000 + index,
      }),
    );

    const parsed = parseFavorites(JSON.stringify(entries));
    expect(parsed).toHaveLength(FAVORITES_LIMIT);
    expect(parsed[0]?.text).toBe("Teks 0");
  });

  it("parses history and drops consecutive duplicates", () => {
    const first = historyEntry();
    const repeated = historyEntry({
      id: "history-2",
      usedAt: first.usedAt + 1000,
    });
    const differentStyle = historyEntry({
      id: "history-3",
      styleName: "Italic",
      usedAt: first.usedAt + 2000,
    });
    const repeatedAgain = historyEntry({
      id: "history-4",
      usedAt: first.usedAt + 3000,
    });

    const parsed = parseHistory(
      JSON.stringify([first, repeated, differentStyle, repeatedAgain]),
    );

    expect(parsed.map((entry) => entry.id)).toEqual([
      "history-1",
      "history-3",
      "history-4",
    ]);
  });

  it("prepends history, replaces a consecutive repeat, and enforces the cap", () => {
    const base = historyEntry();
    const replacement = historyEntry({
      id: "history-new",
      usedAt: base.usedAt + 5000,
    });

    const replaced = prependHistory([base], replacement);
    expect(replaced).toHaveLength(1);
    expect(replaced[0]?.id).toBe("history-new");

    const other = historyEntry({
      id: "history-other",
      styleName: "Italic",
      usedAt: base.usedAt + 9000,
    });
    const prepended = prependHistory([base], other);
    expect(prepended[0]?.id).toBe("history-other");
    expect(prepended[1]?.id).toBe(base.id);

    const full = Array.from({ length: HISTORY_LIMIT }, (_, index) =>
      historyEntry({
        id: `history-${index}`,
        text: `Teks ${index}`,
        usedAt: base.usedAt + index,
      }),
    );
    const capped = prependHistory(
      full,
      historyEntry({ id: "history-extra", text: "Teks baru" }),
    );
    expect(capped).toHaveLength(HISTORY_LIMIT);
    expect(capped[0]?.id).toBe("history-extra");
    expect(capped.some((entry) => entry.id === "history-49")).toBe(false);
  });

  it("finds and removes saved entries by identity", () => {
    const first = favorite();
    const second = favorite({ id: "favorite-2", text: "Teks lain" });

    expect(findFavorite([first, second], "Teks lain")?.id).toBe("favorite-2");
    expect(findFavorite([first, second], "Tidak ada")).toBeUndefined();
    expect(removeFavorite([first, second], first.id)).toEqual([second]);

    const firstHistory = historyEntry();
    const secondHistory = historyEntry({
      id: "history-2",
      text: "Teks lain",
    });
    expect(removeHistoryEntry([firstHistory, secondHistory], firstHistory.id)).toEqual([
      secondHistory,
    ]);
  });
});
