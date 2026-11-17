import {
  withCombiningMarks,
  createMapTransformer,
  spaced,
} from "../engine";
import {
  boldItalicSerif,
  boldSerif,
  italicSerif,
  sansBold,
  sansBoldItalic,
  sansItalic,
} from "../maps/latin";
import { frames, framed, preset } from "./shared";

const bold = createMapTransformer(boldSerif);
const boldSans = createMapTransformer(sansBold);
const italic = createMapTransformer(italicSerif);
const italicSans = createMapTransformer(sansItalic);
const boldItalic = createMapTransformer(boldItalicSerif);
const boldItalicSans = createMapTransformer(sansBoldItalic);

export const boldPresets = [
  preset("bold", "Bold", "bold", bold, [
    "tebal",
    "bold",
    "klasik",
    "whatsapp",
  ]),
  preset("bold-sans", "Bold Sans", "bold", boldSans, [
    "tebal",
    "sans",
    "modern",
    "instagram",
  ]),
  preset(
    "bold-spasi-tipis",
    "Bold Spasi Tipis",
    "bold",
    spaced(bold, "\u2009"),
    ["tebal", "spasi", "renggang"],
  ),
  preset(
    "bold-berbintang",
    "Bold Berbintang",
    "bold",
    framed(bold, frames.stars),
    ["tebal", "bintang", "dekoratif"],
  ),
  preset(
    "bold-bergaris-bawah",
    "Bold Bergaris Bawah",
    "bold",
    withCombiningMarks(bold, [["\u0332"]]),
    ["tebal", "garis bawah", "penekanan"],
  ),
  preset(
    "bold-coret",
    "Bold Coret",
    "bold",
    withCombiningMarks(bold, [["\u0336"]]),
    ["tebal", "coret", "strike"],
  ),
] as const;

export const italicPresets = [
  preset("italic", "Italic", "italic", italic, [
    "miring",
    "italic",
    "klasik",
    "bio",
  ]),
  preset("italic-sans", "Italic Sans", "italic", italicSans, [
    "miring",
    "sans",
    "modern",
  ]),
  preset(
    "italic-spasi-tipis",
    "Italic Spasi Tipis",
    "italic",
    spaced(italic, "\u2009"),
    ["miring", "spasi", "renggang"],
  ),
  preset(
    "italic-berbintang",
    "Italic Berbintang",
    "italic",
    framed(italic, frames.stars),
    ["miring", "bintang", "aesthetic"],
  ),
  preset(
    "italic-hati",
    "Italic Hati",
    "italic",
    framed(italic, frames.hearts),
    ["miring", "hati", "cute"],
  ),
] as const;

export const boldItalicPresets = [
  preset("bold-italic", "Bold Italic", "bold-italic", boldItalic, [
    "tebal",
    "miring",
    "penekanan",
  ]),
  preset(
    "bold-italic-sans",
    "Bold Italic Sans",
    "bold-italic",
    boldItalicSans,
    ["tebal", "miring", "sans"],
  ),
  preset(
    "bold-italic-spasi-tipis",
    "Bold Italic Spasi Tipis",
    "bold-italic",
    spaced(boldItalic, "\u2009"),
    ["tebal", "miring", "spasi"],
  ),
  preset(
    "bold-italic-kurung",
    "Bold Italic Kurung",
    "bold-italic",
    framed(boldItalic, frames.squares),
    ["tebal", "miring", "kurung"],
  ),
] as const;
