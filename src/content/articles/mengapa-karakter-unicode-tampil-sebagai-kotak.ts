import type { ArticleSource } from "@/content/articles/types";

export const karakterKotak: ArticleSource = {
  slug: "mengapa-karakter-unicode-tampil-sebagai-kotak",
  title: "Mengapa Karakter Unicode Tampil sebagai Kotak atau Tanda Tanya?",
  description:
    "Penyebab karakter fancy text tampil sebagai kotak, cara menguji apakah teksnya rusak, dan gaya Unicode yang paling aman dipakai.",
  category: "Troubleshooting",
  publishedAt: "2026-11-17",
  related: [
    "apa-itu-unicode",
    "simbol-aesthetic-untuk-bio-dan-caption",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Salah satu pertanyaan paling sering muncul setelah menyalin fancy text adalah: mengapa sebagian huruf berubah menjadi kotak kosong atau tanda tanya? Jawaban singkatnya, teks Anda hampir selalu utuh. Yang bermasalah adalah perangkat atau aplikasi yang tidak memiliki bentuk untuk karakter tersebut.",
    },
    { type: "heading", level: 2, text: "Kotak kosong bukan teks yang rusak" },
    {
      type: "paragraph",
      text: "Kotak kosong sering disebut tofu. Itu adalah tanda bahwa sistem menemukan kode karakter, tetapi tidak memiliki gambar atau glyph untuk menampilkannya. Kode aslinya tetap tersimpan. Jika teks yang sama dibuka di perangkat lain yang mendukung karakter itu, tampilannya akan normal.",
    },
    {
      type: "callout",
      title: "Coba dulu sebelum menghapus",
      text: "Salin teks yang bermasalah ke catatan atau aplikasi lain. Jika tampil normal di sana, teks tidak rusak dan tidak perlu dibuat ulang.",
    },
    { type: "heading", level: 2, text: "Penyebab yang paling sering" },
    {
      type: "list",
      items: [
        "Font sistem tidak memiliki bentuk untuk karakter yang dipakai.",
        "Versi sistem operasi atau aplikasi terlalu lama untuk karakter yang lebih baru.",
        "Aplikasi menyaring atau menormalkan karakter, misalnya pada kolom username.",
        "Aplikasi memakai font sendiri yang cakupannya lebih sempit daripada font sistem.",
        "Karakter penggabung ditumpuk terlalu banyak sehingga tampilan rusak.",
      ],
    },
    {
      type: "paragraph",
      text: "Normalisasi perlu diperhatikan. Sebagian layanan mengubah teks sebelum menyimpan, misalnya mengubah huruf bergaya kembali menjadi huruf biasa atau membuang karakter yang tidak diizinkan. Dalam kasus itu, karakter tidak hilang saat disalin, tetapi memang tidak pernah tersimpan.",
    },
    { type: "heading", level: 2, text: "Cara menguji dengan cepat" },
    {
      type: "list",
      ordered: true,
      items: [
        "Tempel teks di aplikasi catatan bawaan perangkat.",
        "Buka catatan yang sama di perangkat atau browser lain.",
        "Tempel juga ke aplikasi tujuan, karena aplikasi berbeda bisa memakai font berbeda.",
        "Bandingkan hasilnya. Jika hanya satu perangkat bermasalah, penyebabnya ada di perangkat tersebut.",
        "Jika semua perangkat menampilkan kotak, pilih gaya lain yang lebih umum.",
      ],
    },
    { type: "heading", level: 2, text: "Gaya yang paling aman" },
    {
      type: "paragraph",
      text: "Huruf tebal, miring, dan kursif matematis berasal dari blok Mathematical Alphanumeric Symbols yang sudah lama ada di Unicode. Dukungannya cukup luas di perangkat modern. Gaya dengan simbol kurung, lingkaran, atau ornamen dekoratif biasanya lebih berisiko karena karakter tambahannya tidak selalu tersedia di semua font.",
    },
    {
      type: "list",
      items: [
        "Paling aman: bold, italic, bold italic, dan script dasar.",
        "Cukup aman: small caps, monospace, dan huruf lebar penuh.",
        "Lebih berisiko: karakter kurung dekoratif, ornamen, dan tanda penggabung bertumpuk.",
        "Paling berisiko: kombinasi banyak simbol dan emoji dalam satu nama pendek.",
      ],
    },
    { type: "heading", level: 2, text: "Kapan sebaiknya menghindari fancy text" },
    {
      type: "list",
      items: [
        "Username dan alamat surel, karena harus bisa diketik dan dicari.",
        "Nama akun resmi atau kolom yang membutuhkan verifikasi identitas.",
        "Kata kunci penting dalam judul artikel atau dokumen.",
        "Teks yang dibaca oleh pembaca layar sebagai informasi utama.",
        "Dokumen kerja, kode, atau data yang akan diolah sistem lain.",
      ],
    },
    { type: "heading", level: 2, text: "Jika teks sudah terlanjur dipakai" },
    {
      type: "paragraph",
      text: "Tidak ada tombol yang bisa mengubah huruf Unicode bergaya kembali menjadi huruf biasa. Solusinya adalah mengetik ulang teks dengan huruf standar atau membuat ulang hasilnya dari generator. Simpan versi biasa di catatan sebelum mengganti nama profil atau nickname agar Anda punya cadangan.",
    },
    {
      type: "paragraph",
      text: "Di TEXTORA, setiap gaya diberi penanda bila dukungannya terbatas. Penanda itu bukan larangan, melainkan pengingat agar Anda menguji tampilan sebelum memakai gaya tersebut di tempat yang penting.",
    },
    {
      type: "linkList",
      title: "Alat dan panduan terkait",
      links: [
        { label: "Fancy Text Generator", href: "/fancy-text-generator" },
        { label: "Bold Text Generator", href: "/bold-text" },
        { label: "Italic Text Generator", href: "/italic-text" },
        { label: "Apa itu Unicode?", href: "/articles/apa-itu-unicode" },
        {
          label: "Simbol aesthetic untuk bio dan caption",
          href: "/articles/simbol-aesthetic-untuk-bio-dan-caption",
        },
      ],
    },
  ],
};
