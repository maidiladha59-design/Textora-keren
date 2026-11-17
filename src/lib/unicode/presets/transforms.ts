import {
  withCombiningMarks,
  createFlippedTransformer,
  createMapTransformer,
  reverseGraphemes,
  spaced,
  type Transformer,
  withAffixes,
} from "../engine";
import { fullwidth, mirror, upsideDown } from "../maps/latin";
import { frames, preset } from "./shared";

const plain: Transformer = (input) => input;
const wide = createMapTransformer(fullwidth);
const flipped = createFlippedTransformer(upsideDown);
const mirrored = createMapTransformer(mirror);

export const widePresets = [
  preset("wide", "Wide", "wide", wide, ["wide", "lebar", "fullwidth"]),
  preset(
    "wide-spasi-tipis",
    "Wide Spasi Tipis",
    "wide",
    spaced(wide, "\u2009"),
    ["wide", "spasi", "renggang"],
  ),
  preset(
    "wide-bintang",
    "Wide Bintang",
    "wide",
    withAffixes(wide, ...frames.stars),
    ["wide", "bintang", "dekoratif"],
  ),
  preset(
    "wide-kurung",
    "Wide Kurung",
    "wide",
    withAffixes(wide, ...frames.brackets),
    ["wide", "kurung", "judul"],
  ),
] as const;

export const upsideDownPresets = [
  preset(
    "upside-down",
    "Terbalik",
    "upside-down",
    flipped,
    ["terbalik", "upside down", "unik"],
    "limited",
  ),
  preset(
    "upside-down-spasi-tipis",
    "Terbalik Spasi Tipis",
    "upside-down",
    spaced(flipped, "\u2009"),
    ["terbalik", "spasi", "unik"],
    "limited",
  ),
  preset(
    "upside-down-bintang",
    "Terbalik Bintang",
    "upside-down",
    withAffixes(flipped, ...frames.stars),
    ["terbalik", "bintang", "dekoratif"],
    "limited",
  ),
] as const;

export const reversePresets = [
  preset("reverse", "Reverse", "reverse", reverseGraphemes, [
    "reverse",
    "terbalik urutan",
    "unik",
  ]),
  preset(
    "reverse-spasi-tipis",
    "Reverse Spasi Tipis",
    "reverse",
    spaced(reverseGraphemes, "\u2009"),
    ["reverse", "spasi", "unik"],
  ),
  preset(
    "reverse-panah",
    "Reverse Panah",
    "reverse",
    withAffixes(reverseGraphemes, ...frames.angle),
    ["reverse", "panah", "dekoratif"],
  ),
] as const;

export const mirrorPresets = [
  preset(
    "mirror",
    "Mirror",
    "mirror",
    mirrored,
    ["mirror", "cermin", "unik"],
    "limited",
  ),
  preset(
    "mirror-spasi-tipis",
    "Mirror Spasi Tipis",
    "mirror",
    spaced(mirrored, "\u2009"),
    ["mirror", "spasi", "unik"],
    "limited",
  ),
  preset(
    "mirror-kurung",
    "Mirror Kurung",
    "mirror",
    withAffixes(mirrored, ...frames.brackets),
    ["mirror", "kurung", "dekoratif"],
    "limited",
  ),
] as const;

export const spacedPresets = [
  preset("spasi-reguler", "Spasi Reguler", "spaced", spaced(plain, " "), [
    "spasi",
    "renggang",
    "minimalis",
  ]),
  preset(
    "spasi-tipis",
    "Spasi Tipis",
    "spaced",
    spaced(plain, "\u2009"),
    ["spasi", "tipis", "aesthetic"],
  ),
  preset(
    "spasi-lebar",
    "Spasi Lebar",
    "spaced",
    spaced(plain, "\u2003"),
    ["spasi", "lebar", "judul"],
  ),
  preset(
    "spasi-titik",
    "Spasi Titik",
    "spaced",
    spaced(plain, "·"),
    ["spasi", "titik", "dekoratif"],
  ),
] as const;

export const glitchPresets = [
  preset(
    "glitch-halus",
    "Glitch Halus",
    "glitch",
    withCombiningMarks(plain, [["\u0334"], ["\u0335"], ["\u0336"]]),
    ["glitch", "coret", "efek"],
    "limited",
  ),
  preset(
    "glitch-ganda",
    "Glitch Ganda",
    "glitch",
    withCombiningMarks(plain, [
      ["\u0301", "\u0335"],
      ["\u0300", "\u0336"],
      ["\u0302", "\u0334"],
    ]),
    ["glitch", "ganda", "efek"],
    "limited",
  ),
  preset(
    "glitch-coret",
    "Glitch Coret",
    "glitch",
    withCombiningMarks(plain, [["\u0336"]]),
    ["glitch", "coret", "strike"],
    "limited",
  ),
  preset(
    "glitch-miring",
    "Glitch Miring",
    "glitch",
    withCombiningMarks(plain, [["\u0338"]]),
    ["glitch", "miring", "efek"],
    "limited",
  ),
] as const;
