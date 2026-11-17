import { describe, expect, it } from "vitest";
import {
  generateNicknames,
  nicknamePlatforms,
  nicknameVibes,
} from "./generate";

describe("nickname generator", () => {
  it("provides unique platforms and vibes", () => {
    expect(new Set(nicknamePlatforms.map((item) => item.id)).size).toBe(
      nicknamePlatforms.length,
    );
    expect(new Set(nicknameVibes.map((item) => item.id)).size).toBe(
      nicknameVibes.length,
    );
    expect(nicknamePlatforms.every((item) => item.limit > 0)).toBe(true);
  });

  it("returns no suggestions for blank input", () => {
    expect(generateNicknames("   ", "gaming")).toEqual([]);
  });

  it("is deterministic for the same input", () => {
    const first = generateNicknames("ProGamer", "gaming");
    const second = generateNicknames("ProGamer", "gaming");
    expect(first).toEqual(second);
  });

  it("creates at least sixteen unique suggestions per vibe", () => {
    for (const vibe of nicknameVibes) {
      const suggestions = generateNicknames("Pro Gamer", vibe.id);
      expect(suggestions.length).toBeGreaterThanOrEqual(16);
      expect(
        new Set(suggestions.map((item) => item.text)).size,
      ).toBe(suggestions.length);
      expect(suggestions.every((item) => item.text.includes(" "))).toBe(true);
      expect(
        suggestions.every((item) => !item.text.includes("\uFFFD")),
      ).toBe(true);
    }
  });

  it("marks squared suggestions as limited", () => {
    const suggestions = generateNicknames("ProGamer", "gaming");
    expect(suggestions.some((item) => item.compat === "limited")).toBe(true);
  });

  it("normalizes repeated whitespace", () => {
    const spaced = generateNicknames("  Pro   Gamer ", "minimal");
    const clean = generateNicknames("Pro Gamer", "minimal");
    expect(spaced.length).toBeGreaterThan(0);
    expect(spaced.map((item) => item.text)).toEqual(
      clean.map((item) => item.text),
    );
  });
});
