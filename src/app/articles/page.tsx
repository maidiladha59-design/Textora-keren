import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { articles } from "@/content/articles";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Artikel & Panduan",
  description:
    "Panduan Unicode, teks keren WhatsApp, nickname game, simbol, dan bio Instagram dari TEXTORA. Penjelasan praktis sebelum memakai fancy text.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Artikel" },
        ]}
        eyebrow="Pusat belajar"
        title="Artikel & panduan teks Unicode"
        description="Penjelasan yang membantu Anda memakai teks keren dengan sadar: cara kerja Unicode, kompatibilitas perangkat, batas karakter platform, dan tips untuk media sosial."
      />

      <Container className="py-10 sm:py-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            Setiap panduan ditulis untuk dipakai, bukan sekadar mengisi arsip.
          </p>
          <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium">
            {articles.length} artikel
          </span>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} headingLevel="h2" />
            </li>
          ))}
        </ul>

        <section className="mt-10 rounded-3xl border border-border bg-surface-muted/40 p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
            Cara kami menulis panduan
          </h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-3">
            <li>
              Setiap alat diuji langsung di browser sebelum artikelnya
              dipublikasikan.
            </li>
            <li>
              Batas platform ditulis sebagai batas umum yang dapat berubah
              kapan saja.
            </li>
            <li>
              Artikel hanya terbit setelah selesai, tanpa halaman kosong di
              arsip.
            </li>
          </ul>
        </section>
      </Container>
    </>
  );
}
