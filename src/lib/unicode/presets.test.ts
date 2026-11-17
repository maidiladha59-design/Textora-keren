import { describe, expect, it } from "vitest";
import {
  allPresets,
  categories,
  categoryIds,
  getPresetsForCategories,
  presetsByCategory,
} from "./index";
import { splitGraphemes } from "./segment";

const SAMPLE = "Hello World 123";
const PUNCTUATION = "Halo, Dunia! 123.";
const EMOJI = "Hai 😀 🇮🇩 👨‍👩‍👧";
const NON_LATIN = "Привет 你好 123";

describe("katalog preset", () => {
  it("memiliki sedikitnya 100 preset", () => {
    expect(allPresets.length).toBeGreaterThanOrEqual(100);
  });

  it("memiliki ID unik", () => {
    const ids = allPresets.map((preset) => preset.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("mengisi setiap kategori", () => {
    for (const categoryId of categoryIds) {
      expect(
        presetsByCategory[categoryId].length,
        `kategori ${categoryId} kosong`,
      ).toBeGreaterThan(0);
    }
  });

  it("memakai kategori yang terdaftar", () => {
    const validCategories = new Set(categoryIds);
    for (const preset of allPresets) {
      expect(validCategories.has(preset.category), preset.id).toBe(true);
    }
  });

  it("menghasilkan output unik untuk teks uji", () => {
    const seen = new Map<string, string>();
    for (const preset of allPresets) {
      const output = preset.transform(SAMPLE);
      expect(output, preset.id).not.toContain("\uFFFD");
      const duplicate = seen.get(output);
      expect(duplicate, `${preset.id} sama dengan ${duplicate}`).toBeUndefined();
      seen.set(output, preset.id);
    }
  });

  it("menjaga spasi dan tanda baca", () => {
    const inputWhitespace = splitGraphemes(PUNCTUATION).filter((grapheme) =>
      /^\s$/u.test(grapheme),
    ).length;

    for (const preset of allPresets) {
      const output = preset.transform(PUNCTUATION);
      expect(output, preset.id).toContain(",");
      expect(output, preset.id).toContain("!");
      expect(output, preset.id).toContain(".");
      const outputWhitespace = splitGraphemes(output).filter((grapheme) =>
        /^\s$/u.test(grapheme),
      ).length;
      expect(
        outputWhitespace,
        `spasi hilang pada ${preset.id}`,
      ).toBeGreaterThanOrEqual(inputWhitespace);
    }
  });

  it("tidak merusak emoji atau urutan ZWJ", () => {
    for (const preset of allPresets) {
      const output = preset.transform(EMOJI);
      expect(output, preset.id).toContain("😀");
      expect(output, preset.id).toContain("🇮🇩");
      expect(output, preset.id).toContain("👨‍👩‍👧");
      expect(output, preset.id).not.toContain("\uFFFD");
    }
  });

  it("mempertahankan huruf non-Latin", () => {
    const required = Array.from(new Set(Array.from("Привет你好")));
    for (const preset of allPresets) {
      const output = preset.transform(NON_LATIN);
      for (const character of required) {
        expect(output, `${preset.id} menghilangkan ${character}`).toContain(
          character,
        );
      }
    }
  });

  it("aman untuk input kosong dan teks panjang", () => {
    const longText = "Teks panjang untuk uji performa. ".repeat(200);
    for (const preset of allPresets) {
      expect(preset.transform(""), preset.id).toBe("");
      expect(() => preset.transform(longText), preset.id).not.toThrow();
    }
  });

  it("menyediakan filter kategori untuk halaman terfokus", () => {
    const boldOnly = getPresetsForCategories(["bold"]);
    expect(boldOnly.length).toBe(presetsByCategory.bold.length);
    expect(boldOnly.every((preset) => preset.category === "bold")).toBe(true);

    const mixed = getPresetsForCategories(["bold", "bold-italic"]);
    expect(mixed.length).toBe(
      presetsByCategory.bold.length + presetsByCategory["bold-italic"].length,
    );
  });

  it("setiap preset menghasilkan grapheme yang dapat diproses tanpa error", () => {
    for (const category of categories) {
      expect(category.label.length).toBeGreaterThan(0);
    }
    for (const preset of allPresets) {
      expect(splitGraphemes(preset.transform(SAMPLE)).length).toBeGreaterThan(
        0,
      );
      expect(preset.tags.length).toBeGreaterThan(0);
    }
  });
});
