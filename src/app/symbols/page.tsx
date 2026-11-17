import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { GlyphExplorer } from "@/components/glyphs/GlyphExplorer";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";
import { symbolCategories, symbols } from "@/lib/symbols/data";

export const metadata: Metadata = createMetadata({
  title: "Symbol Generator Aesthetic & Gaming",
  description:
    "Salin simbol Unicode aesthetic, hati, bintang, panah, bunga, gaming, dan matematika. Cari berdasarkan nama, pilih kategori, atau susun beberapa simbol.",
  path: "/symbols",
});

export default function SymbolsPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Symbol Generator" },
        ]}
        eyebrow="Koleksi simbol Unicode"
        title="Symbol Generator untuk mempercantik teks dan profil"
        description="Cari simbol berdasarkan nama, tap untuk menyalin, atau tambahkan beberapa simbol ke area susun. Semua berjalan di browser; favorit dan riwayat hanya tersimpan di perangkat Anda."
      />

      <Container className="py-8 sm:py-10">
        <GlyphExplorer
          categories={symbolCategories}
          items={symbols}
          source="symbols"
          idPrefix="symbol"
          composerTitle="Susunan simbol"
          composerPlaceholder="Klik ikon + pada simbol, atau ketik sendiri di sini…"
        />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara memakai koleksi simbol</h2>
          <ol>
            <li>
              Ketik nama simbol pada kolom pencarian, misalnya{" "}
              <strong>hati</strong>, <strong>bintang</strong>, atau{" "}
              <strong>panah</strong>.
            </li>
            <li>
              Pilih kategori di atas daftar hasil untuk mempersempit pilihan.
              Tekan tombol simbol untuk menyalin satu karakter.
            </li>
            <li>
              Gunakan ikon <strong>+</strong> untuk menambahkan karakter ke
              susunan, lalu salin seluruh susunan dengan satu tombol.
            </li>
          </ol>

          <h2>Kategori yang tersedia</h2>
          <ul>
            <li>Aesthetic: bintang kecil, kilau, dan aksen minimal.</li>
            <li>Cinta dan Hati: ornamen klasik serta hati berwarna.</li>
            <li>Bintang dan Panah: penanda arah dan aksen judul.</li>
            <li>Bunga: bentuk floral untuk undangan dan bio.</li>
            <li>Gaming: kontroler, trofi, pedang, dan perisai.</li>
            <li>Dekoratif dan Matematika: pembatas, kurung, dan tanda hitung.</li>
          </ul>

          <h2>Simbol Unicode, bukan gambar</h2>
          <p>
            Setiap simbol adalah karakter teks yang bisa ditempel ke caption,
            bio, nama tampilan, atau judul yang hanya menerima teks polos.
            Ukuran dan bentuknya mengikuti font perangkat. Karena itu, simbol
            yang sama bisa terlihat sedikit berbeda di Android, iPhone, atau
            Windows.
          </p>
          <p>
            Beberapa perangkat lama tidak memiliki bentuk simbol tertentu dan
            menampilkannya sebagai kotak. Uji hasil di aplikasi tujuan sebelum
            memakai simbol pada nama yang penting.
          </p>

          <h2>Tips menempatkan simbol</h2>
          <ul>
            <li>Gunakan satu atau dua simbol sebagai aksen, bukan pengganti huruf.</li>
            <li>Hindari simbol pada nama yang perlu ditemukan lewat pencarian.</li>
            <li>Periksa kontras dan ukuran di layar ponsel sebelum dipakai publik.</li>
            <li>Untuk rangkaian panjang, gunakan area susun agar mudah disunting.</li>
          </ul>

          <p>
            Butuh ekspresi bergambar? Buka{" "}
            <Link href="/emoji">Emoji Generator</Link>. Untuk gaya huruf,
            gunakan <Link href="/fancy-text-generator">Fancy Text Generator</Link>
            , <Link href="/nickname-generator">Nickname Generator</Link>, atau{" "}
            <Link href="/instagram-bio-generator">Instagram Bio Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "simbol-aesthetic-untuk-bio-dan-caption",
            "mengapa-karakter-unicode-tampil-sebagai-kotak",
          ]}
        />
      </Container>
    </>
  );
}
