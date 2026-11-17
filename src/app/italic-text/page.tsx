import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { GeneratorTool } from "@/components/generator/GeneratorTool";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Italic Text Generator Unicode",
  description:
    "Ubah teks menjadi huruf miring Unicode untuk bio, caption, dan nama tampilan. Tiga belas variasi italic, bold italic, dan cursive siap disalin.",
  path: "/italic-text",
});

export default function ItalicTextPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Italic Text Generator" },
        ]}
        eyebrow="Generator huruf miring"
        title="Italic Text Generator yang tetap rapi di media sosial"
        description="Huruf miring Unicode memberi kesan ringan dan elegan pada bio atau caption. Pilih dari tiga belas variasi italic, bold italic, dan cursive, lalu salin langsung."
      />

      <Container className="py-8 sm:py-10">
        <GeneratorTool scope="italic" />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat teks miring</h2>
          <ol>
            <li>
              Ketik frasa pendek yang ingin Anda miringkan. Hasil muncul
              otomatis di bawah kolom input.
            </li>
            <li>
              Gunakan tab <strong>Italic</strong> untuk gaya miring murni,{" "}
              <strong>Bold Italic</strong> untuk penekanan lebih kuat, atau{" "}
              <strong>Cursive</strong> untuk sentuhan tulisan tangan.
            </li>
            <li>
              Tekan <strong>Salin</strong> pada gaya pilihan, lalu tempel di
              bio, caption, atau nama tampilan.
            </li>
          </ol>

          <h2>Italic Unicode, bukan tombol format</h2>
          <p>
            Sama seperti bold, italic fancy text memakai karakter Unicode yang
            sudah berbentuk miring. Aplikasi tidak perlu mendukung format
            kaya untuk menampilkannya. Selama perangkat memiliki bentuk
            karakternya, teks akan terlihat miring di bio, pesan, maupun judul
            yang hanya menerima teks polos.
          </p>

          <h2>Pilihan gaya yang tersedia</h2>
          <ul>
            <li>Italic matematis dan italic sans-serif.</li>
            <li>Empat variasi bold italic, termasuk versi spasi tipis.</li>
            <li>Empat variasi cursive dengan spasi dan bingkai lembut.</li>
            <li>Italic berbintang dan italic hati untuk bio dekoratif.</li>
          </ul>

          <h2>Tips memakai teks miring</h2>
          <ul>
            <li>
              Gunakan pada frasa pendek. Teks miring yang panjang lebih sulit
              dibaca, terutama di layar kecil.
            </li>
            <li>
              Hindari mencampur terlalu banyak gaya dalam satu bio. Pilih satu
              gaya utama dan satu aksen.
            </li>
            <li>
              Uji tampilan di aplikasi tujuan. Sebagian karakter italic memiliki
              lebar berbeda dari huruf biasa.
            </li>
            <li>
              Jangan memakai gaya ini untuk nama pengguna yang perlu ditemukan
              lewat pencarian.
            </li>
          </ul>

          <h2>Catatan keterbacaan</h2>
          <p>
            Beberapa huruf italic Unicode, seperti huruf h tertentu, bisa
            terlihat mirip dengan bentuk huruf lain pada ukuran font kecil.
            TEXTORA memetakan huruf-huruf tersebut ke bentuk standar yang
            didukung luas, lalu menandai gaya dengan dukungan terbatas bila
            diperlukan. Prioritasnya tetap keterbacaan, bukan sekadar variasi.
          </p>

          <p>
            Lihat juga{" "}
            <Link href="/bold-text">Bold Text Generator</Link>,{" "}
            <Link href="/script-text">Script Text Generator</Link>, dan{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>.
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
