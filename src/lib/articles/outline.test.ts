import { describe, expect, it } from "vitest";
import type { ArticleBlock } from "@/content/articles/types";
import { buildOutline, headingSlug } from "@/lib/articles/outline";

describe("headingSlug", () => {
  it("membuat id dari huruf kecil dan tanda hubung", () => {
    expect(headingSlug("Mengapa Tampilannya Berbeda?")).toBe(
      "mengapa-tampilannya-berbeda",
    );
    expect(headingSlug("  Bio &Caption  ")).toBe("bio-caption");
  });

  it("melepas diakritik dan memberi cadangan untuk judul kosong", () => {
    expect(headingSlug("Café Unicode")).toBe("cafe-unicode");
    expect(headingSlug("✧ ⋆ ✦")).toBe("bagian");
  });
});

describe("buildOutline", () => {
  it("mengambil heading dengan indeks blok aslinya", () => {
    const blocks: ArticleBlock[] = [
      { type: "paragraph", text: "Pembuka" },
      { type: "heading", level: 2, text: "Bagian Satu" },
      { type: "heading", level: 3, text: "Detail" },
      { type: "paragraph", text: "Isi" },
    ];

    expect(buildOutline(blocks)).toEqual([
      { index: 1, id: "bagian-satu", text: "Bagian Satu", level: 2 },
      { index: 2, id: "detail", text: "Detail", level: 3 },
    ]);
  });

  it("membuat id unik untuk judul yang berulang", () => {
    const blocks: ArticleBlock[] = [
      { type: "heading", level: 2, text: "Tips" },
      { type: "heading", level: 2, text: "Tips" },
      { type: "heading", level: 2, text: "Tips" },
    ];

    expect(buildOutline(blocks).map((item) => item.id)).toEqual([
      "tips",
      "tips-2",
      "tips-3",
    ]);
  });
});
