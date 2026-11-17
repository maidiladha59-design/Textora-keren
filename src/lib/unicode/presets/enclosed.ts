import { createMapTransformer, spaced } from "../engine";
import {
  bubble,
  circled,
  negativeCircled,
  squared,
} from "../maps/latin";
import { frames, framed, preset } from "./shared";

const circledText = createMapTransformer(circled);
const negativeCircledText = createMapTransformer(negativeCircled);
const squaredText = createMapTransformer(squared);
const bubbleText = createMapTransformer(bubble);

export const circledPresets = [
  preset("circled", "Circled", "circled", circledText, [
    "lingkaran",
    "bulat",
    "angka",
  ]),
  preset(
    "circled-spasi-tipis",
    "Circled Spasi Tipis",
    "circled",
    spaced(circledText, "\u2009"),
    ["lingkaran", "spasi", "renggang"],
  ),
  preset(
    "circled-bintang",
    "Circled Bintang",
    "circled",
    framed(circledText, frames.stars),
    ["lingkaran", "bintang", "dekoratif"],
  ),
  preset(
    "circled-hati",
    "Circled Hati",
    "circled",
    framed(circledText, frames.hearts),
    ["lingkaran", "hati", "cute"],
  ),
  preset(
    "circled-bintang-kecil",
    "Circled Bintang Kecil",
    "circled",
    framed(circledText, frames.singleStar),
    ["lingkaran", "bintang", "minimalis"],
  ),
] as const;

export const negativeCircledPresets = [
  preset(
    "negative-circled",
    "Circled Negatif",
    "negative-circled",
    negativeCircledText,
    ["lingkaran gelap", "negatif", "tebal"],
    "limited",
  ),
  preset(
    "negative-circled-spasi-tipis",
    "Circled Negatif Spasi Tipis",
    "negative-circled",
    spaced(negativeCircledText, "\u2009"),
    ["lingkaran gelap", "spasi", "renggang"],
    "limited",
  ),
  preset(
    "negative-circled-bintang",
    "Circled Negatif Bintang",
    "negative-circled",
    framed(negativeCircledText, frames.stars),
    ["lingkaran gelap", "bintang", "dekoratif"],
    "limited",
  ),
] as const;

export const squaredPresets = [
  preset("squared", "Squared", "squared", squaredText, [
    "kotak",
    "squared",
    "kapital",
  ], "limited"),
  preset(
    "squared-spasi-tipis",
    "Squared Spasi Tipis",
    "squared",
    spaced(squaredText, "\u2009"),
    ["kotak", "spasi", "renggang"],
    "limited",
  ),
  preset(
    "squared-kurung",
    "Squared Kurung",
    "squared",
    framed(squaredText, frames.squares),
    ["kotak", "kurung", "judul"],
    "limited",
  ),
] as const;

export const bubblePresets = [
  preset("bubble", "Bubble", "bubble", bubbleText, [
    "bubble",
    "gelembung",
    "lucu",
  ]),
  preset(
    "bubble-spasi-tipis",
    "Bubble Spasi Tipis",
    "bubble",
    spaced(bubbleText, "\u2009"),
    ["bubble", "spasi", "renggang"],
  ),
  preset(
    "bubble-hati",
    "Bubble Hati",
    "bubble",
    framed(bubbleText, frames.hearts),
    ["bubble", "hati", "cute"],
  ),
  preset(
    "bubble-kilau",
    "Bubble Kilau",
    "bubble",
    framed(bubbleText, frames.sparkles),
    ["bubble", "kilau", "aesthetic"],
  ),
] as const;
