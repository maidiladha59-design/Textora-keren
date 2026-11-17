import { describe, expect, it } from "vitest";
import { filterGlyphs, type GlyphCategory, type GlyphItem } from "./glyphs";
import { emojiCategories, emojis } from "./emoji/data";
import { symbolCategories, symbols } from "./symbols/data";

function assertCollection(
  label: string,
  categories: readonly GlyphCategory[],
  items: readonly GlyphItem[],
) {
  const categoryIds = new Set(categories.map((category) => category.id));
  const values = new Set<string>();

  expect(categories.length).toBeGreaterThanOrEqual(9);
  expect(items.length).toBeGreaterThanOrEqual(90);

  for (const category of categories) {
    expect(
      items.filter((item) => item.category === category.id).length,
    ).toBeGreaterThanOrEqual(8);
  }

  for (const item of items) {
    expect(item.value.trim().length, `${label} value`).toBeGreaterThan(0);
    expect(item.name.trim().length, `${label} name`).toBeGreaterThan(0);
    expect(categoryIds.has(item.category), `${label} category`).toBe(true);
    expect(item.value.includes("\uFFFD"), `${label} replacement char`).toBe(
      false,
    );
    expect(values.has(item.value), `${label} duplicate ${item.value}`).toBe(
      false,
    );
    values.add(item.value);
  }
}

describe("glyph collections", () => {
  it("keeps symbol data complete and unique", () => {
    assertCollection("simbol", symbolCategories, symbols);
  });

  it("keeps emoji data complete and unique", () => {
    assertCollection("emoji", emojiCategories, emojis);
  });

  it("filters by category", () => {
    const hearts = filterGlyphs(symbols, "heart", "");
    expect(hearts.length).toBeGreaterThan(0);
    expect(hearts.every((item) => item.category === "heart")).toBe(true);
  });

  it("searches names and keywords case-insensitively", () => {
    const upper = filterGlyphs(symbols, "all", "HATI");
    const lower = filterGlyphs(symbols, "all", "hati");
    expect(upper.length).toBeGreaterThan(0);
    expect(upper).toEqual(lower);
  });

  it("returns everything for an empty query and all category", () => {
    expect(filterGlyphs(emojis, "all", "   ")).toHaveLength(emojis.length);
  });
});
