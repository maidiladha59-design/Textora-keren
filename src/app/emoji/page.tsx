import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { GlyphExplorer } from "@/components/glyphs/GlyphExplorer";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";
import { emojiCategories, emojis } from "@/lib/emoji/data";

export const metadata: Metadata = createMetadata({
  title: "Emoji Generator & Kombinasi Siap Salin",
  description:
    "Cari dan salin emoji tematik untuk caption, bio, dan status. Kategori senyum, cinta, alam, hewan, makanan, gaming, perayaan, serta kombinasi aesthetic.",
  path: "/emoji",
});

export default function EmojiPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Emoji Generator" },
        ]}
        eyebrow="Emoji dan kombinasi"
        title="Emoji Generator untuk caption yang lebih hidup"
        description="Cari emoji berdasarkan nama atau suasana, salin satu karakter, atau susun rangkaian emoji untuk caption dan bio. Semua diproses di browser."
      />

      <Container className="py-8 sm:py-10">
        <GlyphExplorer
          categories={emojiCategories}
          items={emojis}
          source="emoji"
          idPrefix="emoji"
          composerTitle="Susunan emoji"
          composerPlaceholder="Klik ikon + pada emoji, atau susun sendiri di sini…"
          searchPlaceholder="Cari nama emoji…"
        />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara memakai emoji generator</h2>
          <ol>
            <li>
              Cari emoji lewat nama, misalnya <strong>hati</strong>,{" "}
              <strong>kucing</strong>, atau <strong>kopi</strong>.
            </li>
            <li>
              Pilih kategori untuk melihat kelompok tertentu. Tekan emoji untuk
              langsung menyalinnya.
            </li>
            <li>
              Gunakan ikon <strong>+</strong> untuk memasukkan beberapa emoji ke
              susunan, lalu salin hasilnya sekaligus.
            </li>
          </ol>

          <h2>Kategori yang tersedia</h2>
          <ul>
            <li>Senyum: ekspresi sehari-hari dan reaksi ringan.</li>
            <li>Cinta: hati berwarna dan simbol kasih.</li>
            <li>Alam dan Hewan: tumbuhan, cuaca, serta satwa populer.</li>
            <li>Makanan: makanan, minuman, dan camilan.</li>
            <li>Gaming: kontroler, trofi, dan elemen kompetitif.</li>
            <li>Benda dan Perayaan: benda sehari-hari serta momen spesial.</li>
            <li>Kombinasi: rangkaian emoji siap tempel.</li>
          </ul>

          <h2>Mengapa emoji terlihat berbeda?</h2>
          <p>
            Emoji adalah karakter Unicode yang bentuknya digambar oleh font
            perangkat. Emoji yang sama bisa memiliki desain berbeda di Android,
            iPhone, Windows, atau aplikasi tertentu. Perbedaan ini normal dan
            bukan tanda teks rusak.
          </p>
          <p>
            Kombinasi emoji tertentu tersusun dari beberapa kode. Saat disalin,
            rangkaian tersebut tetap satu kesatuan, tetapi aplikasi lama bisa
            menampilkannya sebagai beberapa emoji terpisah.
          </p>

          <h2>Tips memakai emoji</h2>
          <ul>
            <li>Gunakan emoji sebagai aksen, bukan pengganti kata penting.</li>
            <li>Batasi jumlahnya agar caption tetap nyaman dibaca.</li>
            <li>Periksa tampilan di platform target, terutama untuk rangkaian panjang.</li>
            <li>Hindari emoji yang maknanya bisa berbeda antar budaya.</li>
          </ul>

          <p>
            Untuk simbol teks tanpa warna, buka{" "}
            <Link href="/symbols">Symbol Generator</Link>. Anda juga bisa
            memakai <Link href="/instagram-bio-generator">Bio Instagram</Link>{" "}
            atau membaca{" "}
            <Link href="/articles/apa-itu-unicode">dasar Unicode</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "bio-instagram-aesthetic-150-karakter",
            "cara-membuat-teks-keren-di-whatsapp",
          ]}
        />
      </Container>
    </>
  );
}
