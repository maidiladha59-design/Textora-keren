import { apaItuUnicode } from "@/content/articles/apa-itu-unicode";
import { bioInstagram } from "@/content/articles/bio-instagram-aesthetic-150-karakter";
import { teksKerenWhatsApp } from "@/content/articles/cara-membuat-teks-keren-di-whatsapp";
import { karakterKotak } from "@/content/articles/mengapa-karakter-unicode-tampil-sebagai-kotak";
import { nicknameGame } from "@/content/articles/nickname-game-keren-dan-batas-karakter";
import { simbolAesthetic } from "@/content/articles/simbol-aesthetic-untuk-bio-dan-caption";
import type { Article, ArticleSource } from "@/content/articles/types";
import { estimateReadingMinutes } from "@/lib/articles/readingTime";

export type { Article, ArticleBlock } from "@/content/articles/types";

const sources: readonly ArticleSource[] = [
  apaItuUnicode,
  teksKerenWhatsApp,
  nicknameGame,
  bioInstagram,
  simbolAesthetic,
  karakterKotak,
];

export const articles: readonly Article[] = sources
  .map((source) => ({
    ...source,
    readingMinutes: estimateReadingMinutes(source.blocks),
  }))
  .sort(
    (a, b) =>
      b.publishedAt.localeCompare(a.publishedAt) ||
      a.title.localeCompare(b.title),
  );

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getLatestArticles(limit = 3): readonly Article[] {
  return articles.slice(0, Math.max(0, limit));
}

export function getRelatedArticles(
  article: Article,
  limit = 2,
): readonly Article[] {
  const bySlug = new Map(
    articles.map((candidate) => [candidate.slug, candidate]),
  );
  const candidates = [
    ...(article.related ?? []),
    ...articles
      .filter(
        (candidate) =>
          candidate.slug !== article.slug &&
          candidate.category === article.category,
      )
      .map((candidate) => candidate.slug),
    ...articles
      .filter((candidate) => candidate.slug !== article.slug)
      .map((candidate) => candidate.slug),
  ];

  const related: Article[] = [];
  for (const slug of candidates) {
    const candidate = bySlug.get(slug);
    if (!candidate || candidate.slug === article.slug) continue;
    if (related.some((item) => item.slug === candidate.slug)) continue;

    related.push(candidate);
    if (related.length === limit) break;
  }

  return related;
}
