import type { CharacterMap } from "../engine";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

function sequence(start: number, length: number): string {
  return Array.from({ length }, (_, index) =>
    String.fromCodePoint(start + index),
  ).join("");
}

function buildMap({
  upper,
  lower,
  digits,
  overrides,
}: {
  upper: string;
  lower: string;
  digits?: string;
  overrides?: CharacterMap;
}): CharacterMap {
  const map: Record<string, string> = {};
  const upperGlyphs = Array.from(upper);
  const lowerGlyphs = Array.from(lower);
  const digitGlyphs = digits ? Array.from(digits) : [];

  UPPER.split("").forEach((key, index) => {
    map[key] = upperGlyphs[index] ?? key;
  });
  LOWER.split("").forEach((key, index) => {
    map[key] = lowerGlyphs[index] ?? key;
  });
  DIGITS.split("").forEach((key, index) => {
    const glyph = digitGlyphs[index];
    if (glyph !== undefined) map[key] = glyph;
  });

  return Object.freeze({ ...map, ...overrides });
}

export const boldSerif = buildMap({
  upper: sequence(0x1d400, 26),
  lower: sequence(0x1d41a, 26),
  digits: sequence(0x1d7ce, 10),
});

export const italicSerif = buildMap({
  upper: sequence(0x1d434, 26),
  lower: sequence(0x1d44e, 26),
  overrides: { h: "\u210e" },
});

export const boldItalicSerif = buildMap({
  upper: sequence(0x1d468, 26),
  lower: sequence(0x1d482, 26),
});

export const script = buildMap({
  upper: sequence(0x1d49c, 26),
  lower: sequence(0x1d4b6, 26),
  overrides: {
    B: "\u212c",
    E: "\u2130",
    F: "\u2131",
    H: "\u210b",
    I: "\u2110",
    L: "\u2112",
    M: "\u2133",
    R: "\u211b",
    e: "\u212f",
    g: "\u210a",
    o: "\u2134",
  },
});

export const boldScript = buildMap({
  upper: sequence(0x1d4d0, 26),
  lower: sequence(0x1d4ea, 26),
});

export const fraktur = buildMap({
  upper: sequence(0x1d504, 26),
  lower: sequence(0x1d51e, 26),
  overrides: {
    C: "\u212d",
    H: "\u210c",
    I: "\u2111",
    R: "\u211c",
    Z: "\u2128",
  },
});

export const boldFraktur = buildMap({
  upper: sequence(0x1d56c, 26),
  lower: sequence(0x1d586, 26),
});

export const doubleStruck = buildMap({
  upper: sequence(0x1d538, 26),
  lower: sequence(0x1d552, 26),
  digits: sequence(0x1d7d8, 10),
  overrides: {
    C: "\u2102",
    H: "\u210d",
    N: "\u2115",
    P: "\u2119",
    Q: "\u211a",
    R: "\u211d",
    Z: "\u2124",
  },
});

export const monospace = buildMap({
  upper: sequence(0x1d670, 26),
  lower: sequence(0x1d68a, 26),
  digits: sequence(0x1d7f6, 10),
});

export const sansBold = buildMap({
  upper: sequence(0x1d5d4, 26),
  lower: sequence(0x1d5ee, 26),
  digits: sequence(0x1d7ec, 10),
});

export const sansItalic = buildMap({
  upper: sequence(0x1d608, 26),
  lower: sequence(0x1d622, 26),
});

export const sansBoldItalic = buildMap({
  upper: sequence(0x1d63c, 26),
  lower: sequence(0x1d656, 26),
});

const SMALL_CAPS = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ";

export const smallCaps = buildMap({
  upper: SMALL_CAPS,
  lower: SMALL_CAPS,
});

const SUPERSCRIPT =
  "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ";

export const superscript = buildMap({
  upper: UPPER,
  lower: SUPERSCRIPT,
  digits: "⁰¹²³⁴⁵⁶⁷⁸⁹",
});

const SUBSCRIPT = "ₐbcdₑfghᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz";

export const subscript = buildMap({
  upper: UPPER,
  lower: SUBSCRIPT,
  digits: "₀₁₂₃₄₅₆₇₈₉",
});

const CIRCLED_DIGITS = `\u24ea${sequence(0x2460, 9)}`;

export const circled = buildMap({
  upper: sequence(0x24b6, 26),
  lower: sequence(0x24d0, 26),
  digits: CIRCLED_DIGITS,
});

const NEGATIVE_CIRCLED = sequence(0x1f150, 26);

export const negativeCircled = buildMap({
  upper: NEGATIVE_CIRCLED,
  lower: NEGATIVE_CIRCLED,
  digits: `\u24ff${sequence(0x2776, 9)}`,
});

const SQUARED = sequence(0x1f130, 26);

export const squared = buildMap({
  upper: SQUARED,
  lower: SQUARED,
});

export const bubble = buildMap({
  upper: sequence(0x24b6, 26),
  lower: sequence(0x24d0, 26),
});

export const fullwidth = buildMap({
  upper: sequence(0xff21, 26),
  lower: sequence(0xff41, 26),
  digits: sequence(0xff10, 10),
});

export const upsideDown = buildMap({
  upper: "∀𐐒Ɔ◖ƎℲ⅁HIſʞ˥WNOԀQᴚS⊥∩ΛMX⅄Z",
  lower: "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz",
  digits: "0ƖᄅƐㄣϛ9ㄥ86",
});

export const mirror = buildMap({
  upper: UPPER,
  lower: "ɒdɔbɘꟻǫʜiꞁʞlmnopqɿꙅƚuvwxyz",
});
