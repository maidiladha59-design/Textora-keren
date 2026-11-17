import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { NumberTool } from "@/components/numbers/NumberTool";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Number Style Generator Unicode",
  description:
    "Ubah angka menjadi gaya Unicode: bold, circled, superscript, subscript, double-struck, monospace, wide, dan keycap. Huruf, spasi, dan tanda baca tetap utuh.",
  path: "/number-generator",
});

export default function NumberGeneratorPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Number Style Generator" },
        ]}
        eyebrow="Angka bergaya"
        title="Number Style Generator untuk angka yang lebih ekspresif"
        description="Ketik tanggal, nomor urut, atau angka apa pun, lalu salin versi bold, circled, superscript, dan tujuh gaya lainnya. Hanya angka yang diubah."
      />

      <Container className="py-8 sm:py-10">
        <NumberTool />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat angka bergaya</h2>
          <ol>
            <li>
              Ketik angka pada kolom input, misalnya{" "}
              <strong>2026</strong> atau <strong>No. 07</strong>.
            </li>
            <li>
              Sepuluh gaya muncul otomatis. Bandingkan bentuknya, lalu tekan{" "}
              <strong>Salin</strong> pada gaya yang dipilih.
            </li>
            <li>
              Tempel hasilnya ke judul, daftar, bio, atau nama tampilan. Huruf
              dan tanda baca di sekitar angka tetap dipertahankan.
            </li>
          </ol>

          <h2>Gaya angka yang tersedia</h2>
          <ul>
            <li>Bold, Bold Sans, Double Struck, dan Monospace.</li>
            <li>Circled dan Circled Negatif untuk daftar kecil.</li>
            <li>Superscript dan Subscript untuk posisi atas atau bawah.</li>
            <li>Wide untuk tampilan selebar penuh.</li>
            <li>Keycap untuk angka dengan bingkai seperti tombol keyboard.</li>
          </ul>

          <h2>Kapan gaya angka berguna?</h2>
          <p>
            Gaya angka paling cocok untuk penanda daftar, nomor undangan,
            tanggal pada judul kreatif, atau nama tampilan yang memakai angka.
            Untuk data yang harus dibaca mesin, seperti kode transaksi, nomor
            telepon, atau alamat, tetap gunakan angka biasa.
          </p>

          <h2>Urutan dan tanda baca tetap terjaga</h2>
          <p>
            Hanya digit 0 sampai 9 yang dipetakan. Huruf, spasi, titik, koma,
            tanda hubung, dan kurung tidak berubah. Gaya seperti keycap memakai
            rangkaian kode tambahan, sehingga jumlah karakter dapat berbeda dari
            angka aslinya.
          </p>

          <h2>Kompatibilitas</h2>
          <p>
            Sebagian gaya angka memerlukan dukungan font khusus. Perangkat lama
            bisa menampilkan bentuk yang berbeda atau karakter pengganti.
            TEXTORA menandai gaya dengan dukungan terbatas, dan Anda tetap bisa
            menguji hasilnya di platform tujuan sebelum dipakai pada nama
            publik.
          </p>

          <p>
            Lihat juga{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>,{" "}
            <Link href="/symbols">Symbol Generator</Link>, dan{" "}
            <Link href="/nickname-generator">Nickname Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "mengapa-karakter-unicode-tampil-sebagai-kotak",
            "apa-itu-unicode",
          ]}
        />
      </Container>
    </>
  );
}
