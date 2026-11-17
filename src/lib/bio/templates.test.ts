import { describe, expect, it } from "vitest";
import {
  BIO_LIMIT,
  bioCategories,
  bioTemplates,
  countCharacters,
  generateBios,
} from "./templates";

const sampleInput = {
  name: "Nadia",
  role: "Ilustrator & desainer",
  action: "Karya baru setiap Jumat",
};

describe("bio templates", () => {
  it("defines four templates for every category", () => {
    expect(bioCategories).toHaveLength(7);
    expect(bioTemplates).toHaveLength(28);
    expect(new Set(bioTemplates.map((template) => template.id)).size).toBe(28);

    for (const category of bioCategories) {
      expect(
        bioTemplates.filter((template) => template.category === category.id),
      ).toHaveLength(4);
    }
  });

  it("builds clean text without placeholder tokens", () => {
    for (const template of bioTemplates) {
      const text = template.build(sampleInput);
      expect(text.length).toBeGreaterThan(0);
      expect(text).not.toContain("{");
      expect(text).not.toContain("undefined");
      expect(text).not.toContain("null");
      expect(text.includes("\uFFFD")).toBe(false);
    }
  });

  it("returns no suggestions without a name", () => {
    expect(
      generateBios({ name: "", role: "Peran", action: "Aksi" }, "all"),
    ).toEqual([]);
  });

  it("returns unique suggestions for the sample", () => {
    const suggestions = generateBios(sampleInput, "all");
    expect(suggestions.length).toBeGreaterThanOrEqual(20);
    expect(new Set(suggestions.map((item) => item.text)).size).toBe(
      suggestions.length,
    );
    expect(
      suggestions.every(
        (item) => item.count === countCharacters(item.text),
      ),
    ).toBe(true);
  });

  it("still returns a name-only suggestion", () => {
    const suggestions = generateBios(
      { name: "Nadia", role: "", action: "" },
      "simple",
    );
    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0].text).toContain("Nadia");
  });

  it("counts Unicode code points", () => {
    expect(countCharacters("abc")).toBe(3);
    expect(countCharacters("❤️")).toBe(2);
    expect(BIO_LIMIT).toBe(150);
  });
});
