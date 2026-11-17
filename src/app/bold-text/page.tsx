import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { GeneratorTool } from "@/components/generator/GeneratorTool";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Bold Text Generator Unicode",
  description:
    "Buat huruf tebal Unicode yang bisa ditempel ke WhatsApp, Instagram, dan nama game. Sepuluh variasi bold, bold italic, dan bold sans siap disalin.",
  path: "/bold-text",
});

export default function BoldTextPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Bold Text Generator" },
        ]}
        eyebrow="Generator huruf tebal"
        title="Bold Text Generator untuk huruf tebal di mana saja"
        description="Ketikan Anda diubah menjadi huruf tebal Unicode yang tetap terlihat tebal di kolom tanpa format. Sepuluh variasi bold, bold italic, dan bold sans tersedia langsung di bawah."
      />

      <Container className="py-8 sm:py-10">
        <GeneratorTool scope="bold" />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat teks tebal</h2>
          <ol>
            <li>
              Masukkan teks pada kolom input. Fokuskan pada nama, judul, atau
              frasa pendek agar hasilnya mudah dibaca.
            </li>
            <li>
              Pilih kategori <strong>Bold</strong> untuk gaya tebal murni atau{" "}
              <strong>Bold Italic</strong> untuk penekanan ganda.
            </li>
            <li>
              Tekan <strong>Salin</strong>, lalu tempel di kolom yang
              sebelumnya hanya menerima teks polos.
            </li>
          </ol>

          <h2>Mengapa hurufnya bisa tebal tanpa tombol bold?</h2>
          <p>
            Aplikasi seperti WhatsApp dan Instagram punya tombol format teks,
            tetapi tidak semua kolom mendukungnya. Nama tampilan, bio, dan nama
            game biasanya hanya menerima teks polos. Bold Unicode menyiasati
            hal ini dengan memakai karakter yang memang didesain tebal, misalnya
            dari blok Mathematical Alphanumeric Symbols. Setiap huruf diganti
            dengan pasangan tebalnya, sehingga teks tetap berupa teks biasa.
          </p>

          <h2>Variasi yang tersedia</h2>
          <ul>
            <li>
              <strong>Bold</strong> dan <strong>Bold Sans</strong> untuk gaya
              klasik dan modern.
            </li>
            <li>
              <strong>Bold Spasi Tipis</strong> untuk tampilan yang lebih
              lapang.
            </li>
            <li>
              <strong>Bold Berbintang</strong> untuk judul dekoratif.
            </li>
            <li>
              <strong>Bold Bergaris Bawah</strong> dan <strong>Bold Coret</strong>{" "}
              untuk penekanan tambahan.
            </li>
            <li>
              Empat gaya bold italic, termasuk versi sans dan berkurung.
            </li>
          </ul>

          <h2>Kapan bold text paling berguna?</h2>
          <p>
            Gunakan untuk judul bio, nama tampilan, atau bagian penting dalam
            caption yang tidak mendukung format kaya. Di WhatsApp, teks tebal
            membantu nama kontak atau status menonjol di daftar percakapan. Di
            Instagram dan TikTok, bold Unicode sering dipakai pada teks
            pembuka caption atau nama akun kreatif. Karena terlihat lebih
            berat, teks tebal juga membantu menonjolkan kata kunci visual di
            daftar komentar atau pesan.
          </p>

          <h2>Batasannya</h2>
          <ul>
            <li>
              Huruf tebal Unicode bukan format teks. Membatalkan format di
              aplikasi tidak akan mengubahnya kembali menjadi huruf biasa.
            </li>
            <li>
              Sebagian platform membatasi karakter pada kolom nama pengguna,
              sehingga gaya ini mungkin ditolak saat disimpan.
            </li>
            <li>
              Pembaca layar dapat mengeja karakter bergaya dengan cara berbeda.
              Untuk informasi penting, tetap gunakan huruf biasa.
            </li>
            <li>
              Perangkat lama bisa menampilkan bentuk alternatif bila karakter
              tebal tidak tersedia di font sistem.
            </li>
          </ul>

          <p>
            Ingin membandingkan dengan gaya lain? Buka{" "}
            <Link href="/italic-text">Italic Text</Link>,{" "}
            <Link href="/script-text">Script Text</Link>, atau{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "cara-membuat-teks-keren-di-whatsapp",
            "mengapa-karakter-unicode-tampil-sebagai-kotak",
          ]}
        />
      </Container>
    </>
  );
}
