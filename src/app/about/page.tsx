import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tentang TEXTORA",
  description:
    "TEXTORA adalah platform fancy text generator berbasis Unicode yang dibangun untuk pengguna Indonesia dan internasional. Kenali tujuan dan prinsipnya.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Tentang" },
        ]}
        eyebrow="Tentang kami"
        title="Tentang TEXTORA"
        description="TEXTORA dibuat untuk satu alasan sederhana: teks yang menonjol seharusnya mudah dibuat, tanpa mengorbankan privasi dan keterbacaan."
      />

      <Container size="narrow" className="py-10 sm:py-14">
        <Prose>
          <h2>Apa itu TEXTORA?</h2>
          <p>
            TEXTORA adalah platform fancy text generator berbasis Unicode untuk
            pengguna Indonesia dan internasional. Nama ini menggabungkan ide
            tentang teks dan tampilan yang lebih ekspresif. Tagline kami,
            <em> Make Every Text Stand Out</em>, merangkum tujuannya: membantu
            Anda membuat teks yang sesuai konteks, tanpa alat yang rumit.
          </p>
          <p>
            Selain generator teks, TEXTORA akan menyediakan alat simbol,
            nickname, bio Instagram, emoji, dan angka, ditambah panduan yang
            menjelaskan cara memakainya dengan tepat.
          </p>

          <h2>Prinsip yang kami pegang</h2>
          <ul>
            <li>
              <strong>Privasi di depan.</strong> Generator berjalan di browser.
              Teks tidak dikirim ke server dan tidak dipakai untuk analitik.
            </li>
            <li>
              <strong>Jujur soal batasan.</strong> Tidak semua perangkat
              menampilkan karakter Unicode dengan cara yang sama. Kami menandai
              gaya yang dukungannya terbatas.
            </li>
            <li>
              <strong>Tanpa kontrol palsu.</strong> Fitur hanya muncul setelah
              benar-benar berfungsi. Kami tidak memasang tombol atau formulir
              yang tidak melakukan apa pun.
            </li>
            <li>
              <strong>Keterbacaan tetap utama.</strong> Variasi gaya boleh
              banyak, tetapi teks harus tetap bisa dibaca manusia dan pembaca
              layar.
            </li>
          </ul>

          <h2>Status pengembangan</h2>
          <p>
            Versi saat ini adalah fondasi situs: struktur halaman, design
            system, navigasi, tema terang dan gelap, serta artikel pertama
            tentang Unicode. Generator teks dan alat pendukung akan ditambahkan
            bertahap. Kami memilih merilis fondasi yang stabil lebih dulu
            daripada menampilkan demo yang setengah berfungsi.
          </p>

          <h2>Hubungi kami</h2>
          <p>
            Pertanyaan, koreksi konten, atau masukan bisa dikirim melalui{" "}
            <Link href="/contact">halaman kontak</Link>. Kami juga terbuka pada
            laporan bug yang menyebutkan perangkat dan langkah reproduksinya.
          </p>
        </Prose>
      </Container>
    </>
  );
}
