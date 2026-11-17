import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { GeneratorTool } from "@/components/generator/GeneratorTool";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Fancy Text Generator 100+ Gaya Unicode",
  description:
    "Ubah teks biasa menjadi lebih dari 100 gaya Unicode: bold, italic, script, fraktur, dan lainnya. Pratinjau langsung, salin sekali klik, diproses di browser.",
  path: "/fancy-text-generator",
});

export default function FancyTextGeneratorPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Fancy Text Generator" },
        ]}
        eyebrow="Generator utama"
        title="Fancy Text Generator: dari teks biasa menjadi teks keren"
        description="Ketik teks Anda sekali, lalu lihat lebih dari 100 gaya Unicode muncul langsung. Salin gaya favorit untuk WhatsApp, Instagram, TikTok, Discord, atau nama game."
      />

      <Container className="py-8 sm:py-10">
        <GeneratorTool scope="all" />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara memakai generator ini</h2>
          <ol>
            <li>
              Ketik atau tempel teks pada kolom <strong>Teks untuk diubah</strong>.
              Hasil muncul otomatis tanpa perlu menekan tombol.
            </li>
            <li>
              Pilih kategori di atas daftar hasil, atau biarkan pada{" "}
              <strong>Semua</strong> untuk melihat seluruh gaya.
            </li>
            <li>
              Tekan <strong>Salin</strong> pada gaya yang Anda sukai, lalu
              tempel di aplikasi tujuan. Tombol akan menampilkan tanda berhasil
              setelah teks tersalin.
            </li>
          </ol>

          <h2>Apa itu fancy text?</h2>
          <p>
            Fancy text adalah teks yang memakai karakter Unicode dengan bentuk
            berbeda dari huruf Latin biasa. Huruf-huruf tersebut bukan font
            khusus, melainkan karakter tersendiri yang sudah disediakan oleh
            standar Unicode. Karena itu, hasilnya bisa disalin ke WhatsApp,
            Instagram, TikTok, Discord, atau kolom nama game tanpa memasang
            aplikasi tambahan.
          </p>
          <p>
            Anda bisa membaca penjelasan lebih lengkap di{" "}
            <Link href="/articles/apa-itu-unicode">
              artikel dasar Unicode
            </Link>
            . Untuk memahami batas dukungan antar perangkat, lihat juga bagian
            catatan kompatibilitas di bawah.
          </p>

          <h2>Gaya yang tersedia</h2>
          <p>
            TEXTORA menyediakan lebih dari 100 preset yang benar-benar berbeda,
            bukan sekadar variasi nama. Kategori utamanya:
          </p>
          <ul>
            <li>Bold, italic, dan bold italic matematis.</li>
            <li>Script, cursive, fraktur, dan double-struck.</li>
            <li>Monospace, small caps, superscript, dan subscript.</li>
            <li>Circled, negative circled, squared, dan bubble.</li>
            <li>Wide, upside down, reverse, mirror, dan spaced.</li>
            <li>Aesthetic, cute, gothic, glitch, dan dekoratif.</li>
          </ul>
          <p>
            Setiap hasil menampilkan nama gaya, pratinjau, dan tombol salin.
            Gaya yang dukungan karakternya lebih terbatas diberi label{" "}
            <strong>Dukungan terbatas</strong> agar Anda bisa menguji dulu di
            perangkat tujuan.
          </p>

          <h2>Kapan sebaiknya memakai fancy text?</h2>
          <ul>
            <li>Bio dan nama tampilan yang ingin terlihat berbeda.</li>
            <li>Caption, status, dan judul kreatif di media sosial.</li>
            <li>Nama tampilan game yang mendukung karakter Unicode.</li>
            <li>Hiasan pada catatan pribadi atau pesan yang tidak kritis.</li>
          </ul>
          <p>
            Sebaliknya, hindari gaya Unicode untuk informasi penting seperti
            alamat, nomor kontak, atau kata kunci pencarian. Sebagian platform
            menormalkan karakter saat pencarian, sehingga akun dengan nama
            bergaya bisa lebih sulit ditemukan.
          </p>

          <h2>Bagaimana teks Anda diproses?</h2>
          <p>
            Seluruh proses berjalan di browser. Saat Anda mengetik, karakter
            dipetakan satu per satu menjadi bentuk Unicode yang dipilih, dengan
            dukungan pemecahan grapheme agar emoji dan huruf beraksen tidak
            rusak. Tidak ada teks yang dikirim ke server dan tidak ada akun yang
            diperlukan. Favorit dan riwayat yang Anda buat disimpan hanya di
            browser ini.
          </p>

          <h2>Catatan kompatibilitas</h2>
          <p>
            Tampilan karakter bergantung pada font yang tersedia di perangkat.
            Sebagian gaya, terutama simbol dekoratif, superscript, subscript,
            dan kombinasi glitch, mungkin tampil berbeda atau tidak lengkap di
            perangkat lama. Pratinjau di halaman ini membantu Anda memeriksa
            hasil sebelum menyalinnya, tetapi pengujian di aplikasi tujuan tetap
            disarankan.
          </p>

          <p>
            <strong>Alat terkait:</strong>{" "}
            <Link href="/bold-text">Bold Text</Link>,{" "}
            <Link href="/italic-text">Italic Text</Link>,{" "}
            <Link href="/script-text">Script Text</Link>, dan{" "}
            <Link href="/symbols">Symbol Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "cara-membuat-teks-keren-di-whatsapp",
            "apa-itu-unicode",
          ]}
        />
      </Container>
    </>
  );
}
