import type { SavedSourceId } from "./model";

export const savedSources: Record<
  SavedSourceId,
  { label: string; href: string }
> = {
  fancy: { label: "Fancy Text", href: "/fancy-text-generator" },
  bold: { label: "Bold Text", href: "/bold-text" },
  italic: { label: "Italic Text", href: "/italic-text" },
  script: { label: "Script Text", href: "/script-text" },
  symbols: { label: "Simbol", href: "/symbols" },
  nickname: { label: "Nickname", href: "/nickname-generator" },
  bio: { label: "Bio Instagram", href: "/instagram-bio-generator" },
  emoji: { label: "Emoji", href: "/emoji" },
  numbers: { label: "Angka", href: "/number-generator" },
};
