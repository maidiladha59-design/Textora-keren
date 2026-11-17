import type { CategoryId } from "../categories";
import type { Compatibility, StylePreset, Transformer } from "../engine";
import { withAffixes } from "../engine";

export function preset(
  id: string,
  name: string,
  category: CategoryId,
  transform: Transformer,
  tags: readonly string[],
  compat?: Compatibility,
): StylePreset {
  return {
    id,
    name,
    category,
    transform,
    tags: [...tags],
    ...(compat ? { compat } : {}),
  };
}

export const frames = {
  stars: ["✦ ", " ✦"],
  sparkles: ["✧ ", " ✧"],
  hearts: ["♡ ", " ♡"],
  flowers: ["❀ ", " ❀"],
  diamonds: ["❖ ", " ❖"],
  brackets: ["「 ", " 」"],
  squares: ["【 ", " 】"],
  wings: ["༺ ", " ༻"],
  arrows: ["➳ ", " ➳"],
  crown: ["♛ ", " ♛"],
  moon: ["☾ ", " ☽"],
  gothic: ["✠ ", " ✠"],
  dagger: ["† ", " †"],
  singleStar: ["⋆ ", " ⋆"],
  angle: ["❮ ", " ❯"],
  wave: ["〜 ", " 〜"],
  soft: ["⊹ ", " ⊹"],
  dotted: ["˚₊· ", " ·₊˚"],
  sparkleScript: ["˚｡⋆ ", " ⋆｡˚"],
  heartStar: ["♡⋆ ", " ⋆♡"],
  mono: ["˗ˏˋ ", " ˎˊ˗"],
  aesthetic: ["⫸ ", " ⫷"],
  sparklePair: ["✧･ﾟ ", " ﾟ･✧"],
  aestheticScript: ["⋆｡°✩ ", " ✩°｡⋆"],
  cutePrefix: ["(っ◔◡◔)っ ♥ ", ""],
} satisfies Record<string, readonly [string, string]>;

export type FrameName = keyof typeof frames;

export function framed(
  transform: Transformer,
  frame: readonly [string, string],
): Transformer {
  return withAffixes(transform, frame[0], frame[1]);
}
