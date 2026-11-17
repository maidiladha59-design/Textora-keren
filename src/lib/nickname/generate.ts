import { createMapTransformer } from "../unicode/engine";
import { frames, type FrameName } from "../unicode/presets/shared";
import {
  boldSerif,
  bubble,
  fraktur,
  italicSerif,
  monospace,
  script,
  smallCaps,
  squared,
} from "../unicode/maps/latin";
import type { Compatibility } from "../unicode/engine";

const nicknameStyles = {
  bold: {
    label: "Bold",
    transform: createMapTransformer(boldSerif),
  },
  fraktur: {
    label: "Fraktur",
    transform: createMapTransformer(fraktur),
  },
  squared: {
    label: "Squared",
    transform: createMapTransformer(squared),
    compat: "limited" as Compatibility,
  },
  monospace: {
    label: "Monospace",
    transform: createMapTransformer(monospace),
  },
  script: {
    label: "Script",
    transform: createMapTransformer(script),
  },
  "small-caps": {
    label: "Small Caps",
    transform: createMapTransformer(smallCaps),
  },
  italic: {
    label: "Italic",
    transform: createMapTransformer(italicSerif),
  },
  bubble: {
    label: "Bubble",
    transform: createMapTransformer(bubble),
  },
} as const;

type NicknameStyleId = keyof typeof nicknameStyles;
type NicknameFrameId = FrameName | "plain";

export type NicknameVibeId = "gaming" | "aesthetic" | "cute" | "minimal";

export interface NicknameVibe {
  id: NicknameVibeId;
  label: string;
  description: string;
  styles: readonly NicknameStyleId[];
  frames: readonly NicknameFrameId[];
}

export const nicknameVibes: readonly NicknameVibe[] = [
  {
    id: "gaming",
    label: "Gaming",
    description: "Tegas dengan mahkota, sayap, dan kurung.",
    styles: ["bold", "fraktur", "squared", "monospace"],
    frames: ["crown", "wings", "arrows", "brackets", "dagger"],
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    description: "Lembut dengan bintang, bunga, dan titik halus.",
    styles: ["script", "small-caps", "italic", "monospace"],
    frames: ["stars", "sparkles", "flowers", "moon", "dotted"],
  },
  {
    id: "cute",
    label: "Cute",
    description: "Hangat dengan hati dan wajah kecil.",
    styles: ["bubble", "script", "small-caps", "italic"],
    frames: ["hearts", "flowers", "cutePrefix", "heartStar"],
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Rapi dengan sedikit dekorasi.",
    styles: ["small-caps", "monospace", "bold", "italic"],
    frames: ["angle", "singleStar", "soft", "mono"],
  },
];

const frameLabels: Partial<Record<NicknameFrameId, string>> = {
  plain: "Tanpa bingkai",
  crown: "Mahkota",
  wings: "Sayap",
  arrows: "Panah",
  brackets: "Kurung",
  dagger: "Belati",
  stars: "Bintang",
  sparkles: "Kilau",
  flowers: "Bunga",
  moon: "Bulan",
  dotted: "Titik lembut",
  hearts: "Hati",
  cutePrefix: "Wajah lucu",
  heartStar: "Hati bintang",
  angle: "Sudut",
  singleStar: "Bintang kecil",
  soft: "Simbol lembut",
  mono: "Garis miring",
};

export interface NicknamePlatform {
  id: string;
  label: string;
  limit: number;
  note: string;
}

export const nicknamePlatforms: readonly NicknamePlatform[] = [
  {
    id: "free-fire",
    label: "Free Fire",
    limit: 12,
    note: "Nama pemain umumnya dibatasi 12 karakter.",
  },
  {
    id: "mobile-legends",
    label: "Mobile Legends",
    limit: 16,
    note: "Nama tampilan umumnya dibatasi 16 karakter.",
  },
  {
    id: "pubg-mobile",
    label: "PUBG Mobile",
    limit: 14,
    note: "Nama pemain umumnya dibatasi 14 karakter.",
  },
  {
    id: "roblox",
    label: "Roblox",
    limit: 20,
    note: "Nama tampilan umumnya dibatasi 20 karakter.",
  },
  {
    id: "discord",
    label: "Discord",
    limit: 32,
    note: "Nama pengguna umumnya dibatasi 32 karakter.",
  },
  {
    id: "instagram",
    label: "Instagram",
    limit: 30,
    note: "Nama tampilan umumnya dibatasi 30 karakter.",
  },
];

export function getNicknamePlatform(id: string): NicknamePlatform {
  return (
    nicknamePlatforms.find((platform) => platform.id === id) ??
    nicknamePlatforms[0]
  );
}

export function getNicknameVibe(id: NicknameVibeId): NicknameVibe {
  return nicknameVibes.find((vibe) => vibe.id === id) ?? nicknameVibes[0];
}

export interface NicknameSuggestion {
  id: string;
  text: string;
  styleLabel: string;
  frameLabel: string;
  compat?: Compatibility;
}

export function generateNicknames(
  name: string,
  vibeId: NicknameVibeId,
): NicknameSuggestion[] {
  const cleanName = name.trim().replace(/\s+/g, " ");
  if (cleanName.length === 0) return [];

  const vibe = getNicknameVibe(vibeId);
  const seen = new Set<string>();
  const suggestions: NicknameSuggestion[] = [];

  for (const styleId of vibe.styles) {
    const style = nicknameStyles[styleId];
    const styled = style.transform(cleanName);

    for (const frameId of ["plain", ...vibe.frames] as const) {
      const text =
        frameId === "plain"
          ? styled
          : `${frames[frameId][0]}${styled}${frames[frameId][1]}`;

      if (seen.has(text)) continue;
      seen.add(text);

      suggestions.push({
        id: `${styleId}-${frameId}`,
        text,
        styleLabel: style.label,
        frameLabel: frameLabels[frameId] ?? frameId,
        ...("compat" in style ? { compat: style.compat } : {}),
      });
    }
  }

  return suggestions;
}
