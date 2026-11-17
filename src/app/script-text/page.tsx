import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { GeneratorTool } from "@/components/generator/GeneratorTool";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Script Text Generator Kursif",
  description:
    "Buat tulisan kursif dan script Unicode untuk bio, undangan digital, dan nama tampilan. Sebelas variasi script dan cursive siap disalin.",
  path: "/script-text",
});

export default function ScriptTextPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Script Text Generator" },
        ]}
        eyebrow="Generator tulisan kursif"
        title="Script Text Generator untuk sentuhan tulisan tangan"
        description="Gaya script memberi kesan hangat dan personal. Sebelas variasi script, bold script, dan cursive tersedia lengkap dengan pratinjau dan tombol salin."
      />

      <Container className="py-8 sm:py-10">
        <GeneratorTool scope="script" />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat tulisan script</h2>
          <ol>
            <li>
              Ketik nama, judul, atau frasa pendek pada kolom input. Gaya
              kursif paling terbaca pada teks yang tidak terlalu panjang.
            </li>
            <li>
              Pilih kategori <strong>Script</strong> untuk huruf kursif klasik
              atau <strong>Cursive</strong> untuk variasi dengan spasi dan
              dekorasi.
            </li>
            <li>
              Tekan <strong>Salin</strong> pada salah satu hasil, lalu tempel di
              bio, judul undangan, atau nama tampilan.
            </li>
          </ol>

          <h2>Asal-usul gaya script</h2>
          <p>
            Unicode menyediakan blok Mathematical Script untuk kebutuhan
            penulisan matematika. Blok ini berisi huruf-huruf bergaya kursif
            yang menyerupai tulisan tangan. Sebagian huruf memiliki bentuk
            berbeda dari huruf Latin biasa, dan setiap huruf tetap merupakan
            karakter tunggal yang bisa disalin seperti teks pada umumnya.
          </p>

          <h2>Gaya yang tersedia</h2>
          <ul>
            <li>Script reguler untuk kesan lembut dan elegan.</li>
            <li>Bold script untuk judul yang lebih tegas.</li>
            <li>Variasi dengan spasi tipis atau spasi penuh.</li>
            <li>
              Bingkai bintang, bunga, hati, dan ombak untuk tampilan dekoratif.
            </li>
          </ul>

          <h2>Cocok untuk apa?</h2>
          <p>
            Teks script sering dipakai untuk bio aesthetic, judul undangan
            digital, nama toko kecil, atau caption pernikahan. Karena bentuknya
            dekoratif, gaya ini paling baik dipakai pada frasa pendek. Untuk
            paragraf atau instruksi, huruf biasa masih lebih mudah dibaca.
          </p>

          <h2>Kenapa dukungannya lebih terbatas?</h2>
          <p>
            Tidak semua perangkat menyertakan seluruh bentuk blok Mathematical
            Script. Android lama, sebagian browser, dan aplikasi dengan font
            bawaan terbatas bisa menampilkan karakter pengganti atau bentuk
            yang berbeda. TEXTORA menandai preset dengan dukungan terbatas agar
            Anda bisa memeriksa hasilnya dulu di perangkat tujuan.
          </p>
          <p>
            Untuk melihat perbedaan dukungan secara umum, baca bagian{" "}
            <Link href="/articles/apa-itu-unicode">
              mengapa teks bisa tampil sebagai kotak
            </Link>{" "}
            di artikel Unicode kami.
          </p>

          <p>
            Bandingkan juga dengan{" "}
            <Link href="/italic-text">Italic Text</Link>,{" "}
            <Link href="/bold-text">Bold Text</Link>, dan{" "}
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
