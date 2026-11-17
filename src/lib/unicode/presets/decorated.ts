import {
  createMapTransformer,
  spaced,
  type Transformer,
  withAffixes,
} from "../engine";
import {
  boldFraktur,
  boldScript,
  boldSerif,
  bubble,
  circled,
  doubleStruck,
  fraktur,
  italicSerif,
  monospace,
  script,
  smallCaps,
  fullwidth,
} from "../maps/latin";
import { frames, preset } from "./shared";

const plain: Transformer = (input) => input;
const bold = createMapTransformer(boldSerif);
const italic = createMapTransformer(italicSerif);
const scriptRegular = createMapTransformer(script);
const scriptBold = createMapTransformer(boldScript);
const frakturRegular = createMapTransformer(fraktur);
const doubleStruckRegular = createMapTransformer(doubleStruck);
const mono = createMapTransformer(monospace);
const smallCapsRegular = createMapTransformer(smallCaps);
const fullwidthText = createMapTransformer(fullwidth);
const bubbleText = createMapTransformer(bubble);
const circledText = createMapTransformer(circled);
const boldFrakturText = createMapTransformer(boldFraktur);

export const aestheticPresets = [
  preset(
    "aesthetic-script",
    "Aesthetic Script",
    "aesthetic",
    withAffixes(scriptRegular, ...frames.aestheticScript),
    ["aesthetic", "script", "bintang"],
  ),
  preset(
    "aesthetic-tebal",
    "Aesthetic Tebal",
    "aesthetic",
    withAffixes(bold, ...frames.sparklePair),
    ["aesthetic", "tebal", "kilau"],
  ),
  preset(
    "aesthetic-wide",
    "Aesthetic Wide",
    "aesthetic",
    withAffixes(fullwidthText, ...frames.aesthetic),
    ["aesthetic", "wide", "lebar"],
  ),
  preset(
    "aesthetic-mono",
    "Aesthetic Monospace",
    "aesthetic",
    withAffixes(mono, ...frames.mono),
    ["aesthetic", "monospace", "minimalis"],
  ),
  preset(
    "aesthetic-italic",
    "Aesthetic Italic",
    "aesthetic",
    withAffixes(italic, ...frames.dotted),
    ["aesthetic", "miring", "lembut"],
  ),
  preset(
    "aesthetic-double-struck",
    "Aesthetic Double Struck",
    "aesthetic",
    withAffixes(doubleStruckRegular, ...frames.flowers),
    ["aesthetic", "double struck", "bunga"],
  ),
  preset(
    "aesthetic-small-caps",
    "Aesthetic Small Caps",
    "aesthetic",
    withAffixes(smallCapsRegular, ...frames.moon),
    ["aesthetic", "small caps", "bulan"],
  ),
  preset(
    "aesthetic-script-spasi",
    "Aesthetic Script Spasi",
    "aesthetic",
    withAffixes(spaced(scriptRegular, "\u2009"), ...frames.hearts),
    ["aesthetic", "script", "hati", "renggang"],
  ),
] as const;

export const cutePresets = [
  preset(
    "cute-bubble",
    "Cute Bubble",
    "cute",
    withAffixes(bubbleText, ...frames.cutePrefix),
    ["cute", "bubble", "lucu"],
  ),
  preset(
    "cute-script",
    "Cute Script",
    "cute",
    withAffixes(scriptBold, ...frames.sparkleScript),
    ["cute", "script", "kilau"],
  ),
  preset(
    "cute-tebal",
    "Cute Tebal",
    "cute",
    withAffixes(bold, ...frames.heartStar),
    ["cute", "tebal", "hati"],
  ),
  preset(
    "cute-small-caps",
    "Cute Small Caps",
    "cute",
    withAffixes(smallCapsRegular, ...frames.cutePrefix),
    ["cute", "small caps", "lucu"],
  ),
  preset(
    "cute-circled-spasi",
    "Cute Circled Spasi",
    "cute",
    withAffixes(spaced(circledText, "\u2009"), ...frames.singleStar),
    ["cute", "lingkaran", "renggang"],
  ),
] as const;

export const gothicPresets = [
  preset(
    "gothic-tebal",
    "Gothic Tebal",
    "gothic",
    boldFrakturText,
    ["gothic", "fraktur", "tebal"],
  ),
  preset(
    "gothic-spasi-tipis",
    "Gothic Spasi Tipis",
    "gothic",
    spaced(boldFrakturText, "\u2009"),
    ["gothic", "fraktur", "spasi"],
  ),
  preset(
    "gothic-salib",
    "Gothic Salib",
    "gothic",
    withAffixes(boldFrakturText, ...frames.gothic),
    ["gothic", "salib", "klasik"],
  ),
  preset(
    "gothic-dagger",
    "Gothic Dagger",
    "gothic",
    withAffixes(frakturRegular, ...frames.dagger),
    ["gothic", "fraktur", "klasik"],
  ),
] as const;

export const decorativePresets = [
  preset(
    "bingkai-bintang",
    "Bingkai Bintang",
    "decorative",
    withAffixes(plain, ...frames.stars),
    ["dekoratif", "bintang", "bingkai"],
  ),
  preset(
    "bingkai-hati",
    "Bingkai Hati",
    "decorative",
    withAffixes(plain, ...frames.hearts),
    ["dekoratif", "hati", "bingkai"],
  ),
  preset(
    "bingkai-bunga",
    "Bingkai Bunga",
    "decorative",
    withAffixes(plain, ...frames.flowers),
    ["dekoratif", "bunga", "bingkai"],
  ),
  preset(
    "bingkai-sayap",
    "Bingkai Sayap",
    "decorative",
    withAffixes(plain, ...frames.wings),
    ["dekoratif", "sayap", "bingkai"],
  ),
  preset(
    "bingkai-siku",
    "Bingkai Siku",
    "decorative",
    withAffixes(plain, ...frames.brackets),
    ["dekoratif", "kurung", "bingkai"],
  ),
  preset(
    "bingkai-panah",
    "Bingkai Panah",
    "decorative",
    withAffixes(plain, ...frames.arrows),
    ["dekoratif", "panah", "bingkai"],
  ),
  preset(
    "bingkai-mahkota",
    "Bingkai Mahkota",
    "decorative",
    withAffixes(plain, ...frames.crown),
    ["dekoratif", "mahkota", "bingkai"],
  ),
  preset(
    "bingkai-kilau",
    "Bingkai Kilau",
    "decorative",
    withAffixes(plain, ...frames.sparklePair),
    ["dekoratif", "kilau", "bingkai"],
  ),
] as const;
