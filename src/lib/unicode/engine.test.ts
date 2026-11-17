import { describe, expect, it } from "vitest";
import {
  addCombiningMarks,
  createFlippedTransformer,
  createMapTransformer,
  mapCharacters,
  reverseGraphemes,
  spaceGraphemes,
  spaced,
  withAffixes,
  withCombiningMarks,
} from "./engine";
import { boldSerif, italicSerif, script } from "./maps/latin";
import {
  countGraphemes,
  splitGraphemes,
  truncateGraphemes,
} from "./segment";

describe("segment", () => {
  it("keeps emoji sequences and flags as single graphemes", () => {
    expect(splitGraphemes("👨‍👩‍👧")).toHaveLength(1);
    expect(splitGraphemes("🇮🇩")).toHaveLength(1);
    expect(splitGraphemes("a😀b")).toHaveLength(3);
    expect(countGraphemes("Hai 👋🏽")).toBe(5);
  });

  it("truncates without splitting graphemes", () => {
    expect(truncateGraphemes("👨‍👩‍👧abc", 2)).toBe("👨‍👩‍👧a…");
    expect(truncateGraphemes("abc", 5)).toBe("abc");
    expect(truncateGraphemes("abc", 0)).toBe("");
  });
});

describe("mapCharacters", () => {
  const bold = createMapTransformer(boldSerif);

  it("maps Latin letters and digits", () => {
    expect(bold("ABZ 019")).toBe("𝐀𝐁𝐙 𝟎𝟏𝟗");
  });

  it("keeps punctuation, spaces, emoji, and non-Latin text", () => {
    expect(bold("Hai, dunia! 😀")).toBe("𝐇𝐚𝐢, 𝐝𝐮𝐧𝐢𝐚! 😀");
    expect(bold("Привет 你好")).toBe("Привет 你好");
  });

  it("uses the letterlike form for reserved script and italic code points", () => {
    expect(script.B).toBe("\u212c");
    expect(script.e).toBe("\u212f");
    expect(italicSerif.h).toBe("\u210e");
    expect(bold("\uFFFD")).toBe("\uFFFD");
  });

  it("maps the base of accented letters and keeps the diacritic", () => {
    const result = mapCharacters("café", boldSerif);
    expect(result.startsWith("𝐜𝐚𝐟")).toBe(true);
    expect(result).toContain("\u0301");
    expect(result).not.toContain("\uFFFD");
  });

  it("returns empty output for empty input", () => {
    expect(mapCharacters("", boldSerif)).toBe("");
  });
});

describe("text helpers", () => {
  it("spaces graphemes with a chosen separator", () => {
    expect(spaceGraphemes("Hai")).toBe("H a i");
    expect(spaceGraphemes("a b", "\u2009")).toBe("a \u2009b");
    expect(spaced(createMapTransformer(boldSerif), "\u2009")("Hi")).toBe(
      "𝐇\u2009𝐢",
    );
  });

  it("adds combining marks deterministically and skips whitespace", () => {
    const transform = withCombiningMarks((input) => input, [["\u0336"]]);
    expect(transform("ab c")).toBe("a\u0336b\u0336 c\u0336");
    expect(transform("ab c")).toBe(transform("ab c"));
    expect(transform("")).toBe("");
    expect(addCombiningMarks("", [["\u0336"]])).toBe("");
    expect(addCombiningMarks("a", [])).toBe("a");
  });

  it("reverses by grapheme, not by UTF-16 unit", () => {
    expect(reverseGraphemes("abc")).toBe("cba");
    expect(reverseGraphemes("👨‍👩‍👧a")).toBe("a👨‍👩‍👧");
    expect(reverseGraphemes("")).toBe("");
  });

  it("flips mapped characters in reverse order", () => {
    const flipped = createFlippedTransformer(boldSerif);
    expect(flipped("AB")).toBe("𝐁𝐀");
  });

  it("wraps non-empty text only", () => {
    const wrapped = withAffixes((input) => input, "✦ ", " ✦");
    expect(wrapped("Hai")).toBe("✦ Hai ✦");
    expect(wrapped("")).toBe("");
    expect(wrapped("   ")).toBe("");
  });
});
