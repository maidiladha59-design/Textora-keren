import { describe, expect, it } from "vitest";
import type { ArticleBlock } from "@/content/articles/types";
import {
  countWords,
  estimateReadingMinutes,
  WORDS_PER_MINUTE,
} from "@/lib/articles/readingTime";

describe("countWords", () => {
  it("menghitung kata dan angka, bukan tanda baca", () => {
    expect(countWords("Teks keren 2026, siap!" )).toBe(4);
    expect(countWords("   ")).toBe(0);
    expect(countWords("✧ ⋆ ✦")).toBe(0);
  });

  it("tetap mengenali kata berhuruf non-Latin", () => {
    expect(countWords("こんにちは 世界")).toBe(2);
  });
});

describe("estimateReadingMinutes", () => {
  it("minimal satu menit untuk konten pendek", () => {
    const blocks: ArticleBlock[] = [{ type: "paragraph", text: "Halo." }];
    expect(estimateReadingMinutes(blocks)).toBe(1);
  });

  it("membulatkan ke atas berdasarkan jumlah kata", () => {
    const words = Array.from({ length: WORDS_PER_MINUTE + 1 }, () => "kata").join(" ");
    const blocks: ArticleBlock[] = [{ type: "paragraph", text: words }];
    expect(estimateReadingMinutes(blocks)).toBe(2);
  });

  it("menghitung teks pada semua jenis blok", () => {
    const blocks: ArticleBlock[] = [
      { type: "heading", level: 2, text: "Dua kata" },
      { type: "list", items: ["satu dua tiga"] },
      { type: "callout", title: "Catatan", text: "empat lima" },
      { type: "linkList", title: "Alat terkait", links: [{ label: "Fancy Text Generator", href: "/fancy-text-generator" }] },
      { type: "divider" },
    ];
    const expected = Math.ceil(13 / WORDS_PER_MINUTE);
    expect(estimateReadingMinutes(blocks)).toBe(Math.max(1, expected));
  });
});
