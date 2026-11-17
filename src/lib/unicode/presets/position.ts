import { createMapTransformer, spaced } from "../engine";
import { subscript, superscript } from "../maps/latin";
import { frames, framed, preset } from "./shared";

const superscriptText = createMapTransformer(superscript);
const subscriptText = createMapTransformer(subscript);

export const superscriptPresets = [
  preset(
    "superscript",
    "Superscript",
    "superscript",
    superscriptText,
    ["superscript", "atas", "kecil"],
    "limited",
  ),
  preset(
    "superscript-spasi-tipis",
    "Superscript Spasi Tipis",
    "superscript",
    spaced(superscriptText, "\u2009"),
    ["superscript", "spasi", "renggang"],
    "limited",
  ),
  preset(
    "superscript-bingkai",
    "Superscript Bingkai",
    "superscript",
    framed(superscriptText, frames.mono),
    ["superscript", "bingkai", "dekoratif"],
    "limited",
  ),
] as const;

export const subscriptPresets = [
  preset(
    "subscript",
    "Subscript",
    "subscript",
    subscriptText,
    ["subscript", "bawah", "kecil"],
    "limited",
  ),
  preset(
    "subscript-spasi-tipis",
    "Subscript Spasi Tipis",
    "subscript",
    spaced(subscriptText, "\u2009"),
    ["subscript", "spasi", "renggang"],
    "limited",
  ),
  preset(
    "subscript-lembut",
    "Subscript Lembut",
    "subscript",
    framed(subscriptText, frames.soft),
    ["subscript", "lembut", "dekoratif"],
    "limited",
  ),
] as const;
