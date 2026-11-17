import { describe, expect, it } from "vitest";
import {
  accountLinks,
  exploreLinks,
  generatorLinks,
  legalLinks,
} from "@/config/navigation";
import { articles } from "@/content/articles";
import type { Article } from "@/content/articles/types";

const knownRoutes = new Set<string>([
  "/",
  ...generatorLinks.map((link) => link.href),
  ...exploreLinks.map((link) => link.href),
  ...accountLinks.map((link) => link.href),
  ...legalLinks.map((link) => link.href),
  ...articles.map((article) => `/articles/${article.slug}`),
]);

function collectLinks(article: Article): string[] {
  return article.blocks.flatMap((block) =>
    block.type === "linkList" ? block.links.map((link) => link.href) : [],
  );
}

describe("katalog artikel", () => {
  it("memakai slug yang unik dan tidak kosong", () => {
    const slugs = articles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/));
  });

  it("memakai judul dan deskripsi yang siap untuk SEO", () => {
    const titles = articles.map((article) => article.title);
    expect(new Set(titles).size).toBe(titles.length);

    articles.forEach((article) => {
      expect(article.title.length).toBeGreaterThan(15);
      expect(article.description.length).toBeGreaterThanOrEqual(70);
      expect(article.description.length).toBeLessThanOrEqual(160);
    });
  });

  it("mencantumkan tanggal terbit yang valid", () => {
    articles.forEach((article) => {
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(article.publishedAt))).toBe(false);
      if (article.updatedAt) {
        expect(article.updatedAt >= article.publishedAt).toBe(true);
      }
    });
  });

  it("memiliki isi yang cukup dan waktu baca yang dihitung", () => {
    articles.forEach((article) => {
      expect(article.blocks.length).toBeGreaterThan(8);
      expect(
        article.blocks.filter((block) => block.type === "heading").length,
      ).toBeGreaterThan(3);
      expect(
        article.blocks.filter((block) => block.type === "paragraph").length,
      ).toBeGreaterThan(3);
      expect(article.readingMinutes).toBeGreaterThanOrEqual(1);
      expect(Number.isInteger(article.readingMinutes)).toBe(true);
    });
  });

  it("menautkan hanya halaman internal yang benar-benar ada", () => {
    articles.forEach((article) => {
      const links = collectLinks(article);
      expect(links.length).toBeGreaterThan(0);
      links.forEach((href) => {
        expect(href.startsWith("/")).toBe(true);
        expect(knownRoutes.has(href)).toBe(true);
      });
    });
  });

  it("merujuk artikel terkait yang ada dan bukan dirinya sendiri", () => {
    articles.forEach((article) => {
      expect(article.related?.length).toBeGreaterThanOrEqual(2);
      article.related?.forEach((slug) => {
        expect(slug).not.toBe(article.slug);
        expect(articles.some((candidate) => candidate.slug === slug)).toBe(
          true,
        );
      });
    });
  });
});
