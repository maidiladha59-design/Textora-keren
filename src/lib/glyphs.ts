export interface GlyphCategory {
  id: string;
  label: string;
  description: string;
}

export interface GlyphItem {
  value: string;
  name: string;
  category: string;
  keywords: readonly string[];
}

export function filterGlyphs(
  items: readonly GlyphItem[],
  category: string,
  query: string,
): GlyphItem[] {
  const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");

  return items.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    if (normalizedQuery.length === 0) return true;

    return [item.name, ...item.keywords].some((term) =>
      term.toLocaleLowerCase("id-ID").includes(normalizedQuery),
    );
  });
}
