import type { CategoryId } from "./categories";
import { splitGraphemes } from "./segment";

export type Transformer = (input: string) => string;
export type Compatibility = "wide" | "limited";
export type CharacterMap = Readonly<Record<string, string>>;

export interface StylePreset {
  id: string;
  name: string;
  category: CategoryId;
  transform: Transformer;
  tags: string[];
  compat?: Compatibility;
}

export function mapCharacters(input: string, map: CharacterMap): string {
  if (input.length === 0) return "";

  let output = "";

  for (const character of input) {
    const mapped = map[character];
    if (mapped !== undefined) {
      output += mapped;
      continue;
    }

    const decomposed = character.normalize("NFD");
    if (decomposed !== character) {
      const [base, ...marks] = Array.from(decomposed);
      const mappedBase = map[base];
      if (mappedBase !== undefined) {
        output += mappedBase + marks.join("");
        continue;
      }
    }

    output += character;
  }

  return output;
}

export function createMapTransformer(map: CharacterMap): Transformer {
  return (input) => mapCharacters(input, map);
}

export function spaceGraphemes(input: string, separator = " "): string {
  if (input.length === 0) return "";

  return splitGraphemes(input)
    .map((grapheme) => ({ grapheme, isWhitespace: /^\s$/u.test(grapheme) }))
    .reduce((output, { grapheme, isWhitespace }, index) => {
      if (index > 0 && !isWhitespace) return output + separator + grapheme;
      return output + (isWhitespace ? " " : grapheme);
    }, "");
}

export function addCombiningMarks(
  input: string,
  markSets: readonly (readonly string[])[],
): string {
  if (input.length === 0 || markSets.length === 0) return input;

  return splitGraphemes(input)
    .map((grapheme, index) => {
      if (grapheme.trim() === "") return grapheme;
      const marks = markSets[index % markSets.length];
      return grapheme + marks.join("");
    })
    .join("");
}

export function withCombiningMarks(
  transform: Transformer,
  markSets: readonly (readonly string[])[],
): Transformer {
  return (input) => addCombiningMarks(transform(input), markSets);
}

export function reverseGraphemes(input: string): string {
  return splitGraphemes(input).reverse().join("");
}

export function createFlippedTransformer(map: CharacterMap): Transformer {
  return (input) => {
    if (input.length === 0) return "";
    return splitGraphemes(input)
      .map((grapheme) => mapCharacters(grapheme, map))
      .reverse()
      .join("");
  };
}

export function spaced(transform: Transformer, separator = " "): Transformer {
  return (input) => spaceGraphemes(transform(input), separator);
}

export function withAffixes(
  transform: Transformer,
  prefix: string,
  suffix: string,
): Transformer {
  return (input) => {
    if (input.trim() === "") return "";
    return `${prefix}${transform(input)}${suffix}`;
  };
}

export function combine(
  ...transforms: readonly Transformer[]
): Transformer {
  return (input) => transforms.reduce((value, transform) => transform(value), input);
}
