import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { FavoritesList } from "@/components/saved/FavoritesList";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Favorit",
  description:
    "Simpan hasil favorit dari generator TEXTORA di perangkat Anda tanpa akun. Buka kembali, salin, atau hapus favorit kapan saja.",
  path: "/favorites",
});

export default function FavoritesPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Favorit" },
        ]}
        eyebrow="Koleksi pribadi"
        title="Favorit"
        description="Tempat untuk menyimpan hasil generator yang ingin Anda pakai lagi. Favorit disimpan di browser, bukan di server."
      />

      <Container className="py-8 sm:py-10">
        <FavoritesList />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara menyimpan favorit</h2>
          <p>
            Setiap kartu hasil generator memiliki tombol hati. Tekan tombol itu
            untuk menyimpan teks beserta nama gaya dan alat asalnya. Tekan lagi
            untuk melepasnya dari favorit. Ikon hati yang terisi menandakan
            bahwa hasil tersebut sudah tersimpan.
          </p>

          <h2>Hanya di perangkat ini</h2>
          <p>
            Favorit disimpan di <code>localStorage</code> browser dan tidak
            dikirim ke server. Data tidak tersinkron antar perangkat, sehingga
            favorit di ponsel tidak otomatis muncul di komputer. Mode privat
            atau pembersihan data situs dapat menghapusnya.
          </p>

          <h2>Mengelola daftar</h2>
          <p>
            Anda dapat menghapus satu favorit kapan saja. Tombol hapus semua
            akan meminta konfirmasi terlebih dahulu. Daftar dibatasi maksimal
            100 entri agar penggunaan penyimpanan tetap terkendali; bila
            penyimpanan browser gagal, TEXTORA menampilkan pesan dan generator
            tetap bisa dipakai.
          </p>

          <h2>Aman untuk teks pribadi?</h2>
          <p>
            Teks tetap berada di perangkat, tetapi hindari menyimpan kata sandi,
            kode verifikasi, atau informasi sensitif lain di fitur apa pun yang
            memakai penyimpanan browser.
          </p>

          <p>
            Lihat juga <Link href="/history">Riwayat</Link> dan{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
