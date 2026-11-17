import {
  withCombiningMarks,
  createMapTransformer,
  spaced,
} from "../engine";
import {
  boldScript,
  doubleStruck,
  fraktur,
  monospace,
  script,
  smallCaps,
} from "../maps/latin";
import { frames, framed, preset } from "./shared";

const scriptRegular = createMapTransformer(script);
const scriptBold = createMapTransformer(boldScript);
const frakturRegular = createMapTransformer(fraktur);
const doubleStruckRegular = createMapTransformer(doubleStruck);
const mono = createMapTransformer(monospace);
const smallCapsRegular = createMapTransformer(smallCaps);

export const scriptPresets = [
  preset("script", "Script", "script", scriptRegular, [
    "script",
    "kursif",
    "tulisan tangan",
    "elegan",
  ]),
  preset("script-tebal", "Script Tebal", "script", scriptBold, [
    "script",
    "kursif",
    "tebal",
  ]),
  preset(
    "script-spasi-tipis",
    "Script Spasi Tipis",
    "script",
    spaced(scriptRegular, "\u2009"),
    ["script", "spasi", "renggang"],
  ),
  preset(
    "script-bintang",
    "Script Bintang",
    "script",
    framed(scriptRegular, frames.stars),
    ["script", "bintang", "aesthetic"],
  ),
  preset(
    "script-bunga",
    "Script Bunga",
    "script",
    framed(scriptRegular, frames.flowers),
    ["script", "bunga", "dekoratif"],
  ),
  preset(
    "script-hati",
    "Script Hati",
    "script",
    framed(scriptRegular, frames.hearts),
    ["script", "hati", "cute"],
  ),
  preset(
    "script-bintang-kecil",
    "Script Bintang Kecil",
    "script",
    framed(scriptRegular, frames.singleStar),
    ["script", "bintang", "minimalis"],
  ),
] as const;

export const cursivePresets = [
  preset(
    "cursive-spasi",
    "Cursive Spasi",
    "cursive",
    spaced(scriptRegular, " "),
    ["cursive", "script", "spasi"],
  ),
  preset(
    "cursive-tebal-spasi",
    "Cursive Tebal Spasi",
    "cursive",
    spaced(scriptBold, " "),
    ["cursive", "script", "tebal", "spasi"],
  ),
  preset(
    "cursive-ombak",
    "Cursive Ombak",
    "cursive",
    framed(scriptRegular, frames.wave),
    ["cursive", "ombak", "dekoratif"],
  ),
  preset(
    "cursive-lembut",
    "Cursive Lembut",
    "cursive",
    framed(scriptBold, frames.soft),
    ["cursive", "lembut", "aesthetic"],
  ),
] as const;

export const frakturPresets = [
  preset("fraktur", "Fraktur", "fraktur", frakturRegular, [
    "fraktur",
    "gothic",
    "klasik",
  ]),
  preset(
    "fraktur-spasi-tipis",
    "Fraktur Spasi Tipis",
    "fraktur",
    spaced(frakturRegular, "\u2009"),
    ["fraktur", "spasi", "renggang"],
  ),
  preset(
    "fraktur-bintang",
    "Fraktur Bintang",
    "fraktur",
    framed(frakturRegular, frames.stars),
    ["fraktur", "bintang", "dekoratif"],
  ),
  preset(
    "fraktur-kurung",
    "Fraktur Kurung",
    "fraktur",
    framed(frakturRegular, frames.squares),
    ["fraktur", "kurung", "judul"],
  ),
] as const;

export const doubleStruckPresets = [
  preset(
    "double-struck",
    "Double Struck",
    "double-struck",
    doubleStruckRegular,
    ["double struck", "berongga", "matematis"],
  ),
  preset(
    "double-struck-spasi-tipis",
    "Double Struck Spasi Tipis",
    "double-struck",
    spaced(doubleStruckRegular, "\u2009"),
    ["double struck", "spasi", "renggang"],
  ),
  preset(
    "double-struck-bintang",
    "Double Struck Bintang",
    "double-struck",
    framed(doubleStruckRegular, frames.stars),
    ["double struck", "bintang", "dekoratif"],
  ),
  preset(
    "double-struck-berlian",
    "Double Struck Berlian",
    "double-struck",
    framed(doubleStruckRegular, frames.diamonds),
    ["double struck", "berlian", "aesthetic"],
  ),
] as const;

export const monospacePresets = [
  preset("monospace", "Monospace", "monospace", mono, [
    "monospace",
    "kode",
    "terminal",
  ]),
  preset(
    "monospace-spasi-tipis",
    "Monospace Spasi Tipis",
    "monospace",
    spaced(mono, "\u2009"),
    ["monospace", "spasi", "renggang"],
  ),
  preset(
    "monospace-kurung",
    "Monospace Kurung",
    "monospace",
    framed(mono, frames.brackets),
    ["monospace", "kurung", "kode"],
  ),
  preset(
    "monospace-garis-bawah",
    "Monospace Garis Bawah",
    "monospace",
    withCombiningMarks(mono, [["\u0332"]]),
    ["monospace", "garis bawah", "penekanan"],
  ),
] as const;

export const smallCapsPresets = [
  preset("small-caps", "Small Caps", "small-caps", smallCapsRegular, [
    "small caps",
    "kapital kecil",
    "rapi",
  ]),
  preset(
    "small-caps-spasi-tipis",
    "Small Caps Spasi Tipis",
    "small-caps",
    spaced(smallCapsRegular, "\u2009"),
    ["small caps", "spasi", "renggang"],
  ),
  preset(
    "small-caps-bintang",
    "Small Caps Bintang",
    "small-caps",
    framed(smallCapsRegular, frames.stars),
    ["small caps", "bintang", "dekoratif"],
  ),
] as const;
