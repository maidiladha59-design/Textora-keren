import {
  mapCharacters,
  type CharacterMap,
  type Compatibility,
} from "../unicode/engine";

const ASCII_DIGITS = "0123456789";

function digitMap(glyphs: readonly string[]): CharacterMap {
  return Object.freeze(
    Object.fromEntries(
      ASCII_DIGITS.split("").map((digit, index) => [
        digit,
        glyphs[index] ?? digit,
      ]),
    ),
  );
}

export interface NumberStyle {
  id: string;
  name: string;
  description: string;
  map: CharacterMap;
  compat?: Compatibility;
}

export const numberStyles: readonly NumberStyle[] = [
  {
    id: "bold",
    name: "Bold",
    description: "Angka tebal matematis dari blok bold serif.",
    map: digitMap(Array.from("𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗")),
  },
  {
    id: "double-struck",
    name: "Double Struck",
    description: "Angka berongga ganda dengan kesan teknis.",
    map: digitMap(Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡")),
  },
  {
    id: "monospace",
    name: "Monospace",
    description: "Angka selebar tetap seperti kode terminal.",
    map: digitMap(Array.from("𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿")),
  },
  {
    id: "sans-bold",
    name: "Bold Sans",
    description: "Angka tebal tanpa kait untuk tampilan modern.",
    map: digitMap(Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵")),
  },
  {
    id: "circled",
    name: "Circled",
    description: "Angka di dalam lingkaran untuk daftar pendek.",
    map: digitMap(Array.from("⓪①②③④⑤⑥⑦⑧⑨")),
  },
  {
    id: "negative-circled",
    name: "Circled Negatif",
    description: "Angka terang di atas lingkaran gelap.",
    compat: "limited",
    map: digitMap(Array.from("⓿➊➋➌➍➎➏➐➑➒")),
  },
  {
    id: "superscript",
    name: "Superscript",
    description: "Angka kecil di posisi atas seperti eksponen.",
    map: digitMap(Array.from("⁰¹²³⁴⁵⁶⁷⁸⁹")),
  },
  {
    id: "subscript",
    name: "Subscript",
    description: "Angka kecil di posisi bawah untuk indeks.",
    map: digitMap(Array.from("₀₁₂₃₄₅₆₇₈₉")),
  },
  {
    id: "wide",
    name: "Wide",
    description: "Angka selebar penuh khas alfabet Asia Timur.",
    map: digitMap(Array.from("０１２３４５６７８９")),
  },
  {
    id: "keycap",
    name: "Keycap",
    description: "Angka dengan bingkai tombol keyboard.",
    compat: "limited",
    map: digitMap([
      "0️⃣",
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
    ]),
  },
];

export function transformNumberStyle(
  input: string,
  style: NumberStyle,
): string {
  return mapCharacters(input, style.map);
}
