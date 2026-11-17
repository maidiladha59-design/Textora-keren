import { describe, expect, it } from "vitest";
import { numberStyles, transformNumberStyle } from "./styles";

describe("number styles", () => {
  it("exposes ten unique styles", () => {
    expect(numberStyles).toHaveLength(10);
    expect(new Set(numberStyles.map((style) => style.id)).size).toBe(10);
    expect(new Set(numberStyles.map((style) => style.name)).size).toBe(10);
  });

  it("produces distinct output for every style", () => {
    const outputs = numberStyles.map((style) =>
      transformNumberStyle("0123456789", style),
    );
    expect(new Set(outputs).size).toBe(numberStyles.length);
  });

  it("changes digits while preserving letters, spaces, and punctuation", () => {
    const result = transformNumberStyle(
      "Harga 12.500,- (2026)",
      numberStyles[0],
    );
    expect(result).toContain("Harga ");
    expect(result).toContain(".");
    expect(result).toContain(",- (");
    expect(result).not.toContain("12.500");
  });

  it("returns an empty string for empty input", () => {
    for (const style of numberStyles) {
      expect(transformNumberStyle("", style)).toBe("");
    }
  });

  it("handles long input without replacement characters", () => {
    const input = "9".repeat(5000);
    for (const style of numberStyles) {
      const output = transformNumberStyle(input, style);
      expect(output.length).toBeGreaterThan(0);
      expect(output.includes("\uFFFD")).toBe(false);
    }
  });

  it("keeps keycap digits as combining sequences", () => {
    const keycap = numberStyles.find((style) => style.id === "keycap");
    expect(keycap).toBeDefined();
    expect(transformNumberStyle("1", keycap!)).toContain("\u20E3");
  });

  it("marks limited styles explicitly", () => {
    const limited = numberStyles.filter((style) => style.compat === "limited");
    expect(limited.length).toBeGreaterThan(0);
  });
});
