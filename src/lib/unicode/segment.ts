type GraphemeSegmenter = {
  segment(input: string): Iterable<{ segment: string }>;
};

function createSegmenter(): GraphemeSegmenter | null {
  if (typeof Intl === "undefined" || typeof Intl.Segmenter !== "function") {
    return null;
  }
  return new Intl.Segmenter(undefined, { granularity: "grapheme" });
}

const segmenter = createSegmenter();

export function splitGraphemes(input: string): string[] {
  if (input.length === 0) return [];
  if (segmenter) {
    return Array.from(segmenter.segment(input), (part) => part.segment);
  }
  return Array.from(input);
}

export function countGraphemes(input: string): number {
  return splitGraphemes(input).length;
}

export function truncateGraphemes(input: string, limit: number): string {
  if (limit <= 0) return "";
  const graphemes = splitGraphemes(input);
  if (graphemes.length <= limit) return input;
  return `${graphemes.slice(0, limit).join("")}…`;
}
