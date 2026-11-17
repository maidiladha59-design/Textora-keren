import type { ArticleSource } from "@/content/articles/types";

export const teksKerenWhatsApp: ArticleSource = {
  slug: "cara-membuat-teks-keren-di-whatsapp",
  title: "Cara Membuat Teks Keren di WhatsApp yang Tetap Rapi",
  description:
    "Bedanya format bawaan WhatsApp dan karakter Unicode, langkah menyalin fancy text, serta batasan yang perlu diketahui sebelum mengganti nama profil.",
  category: "WhatsApp",
  publishedAt: "2026-11-14",
  related: [
    "apa-itu-unicode",
    "mengapa-karakter-unicode-tampil-sebagai-kotak",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "WhatsApp tidak menyediakan tombol khusus untuk membuat huruf tebal, miring, atau bergaya tulisan tangan. Teks keren di aplikasi ini muncul dari dua jalur berbeda: format bawaan yang ditulis dengan tanda baca, dan karakter Unicode yang bentuknya memang sudah bergaya. Keduanya punya tempat masing-masing, dan mencampurnya tanpa rencana justru sering membuat pesan sulit dibaca.",
    },
    { type: "heading", level: 2, text: "Dua cara menebalkan teks di WhatsApp" },
    {
      type: "paragraph",
      text: "Cara pertama adalah format bawaan. WhatsApp membaca beberapa tanda baca khusus dan mengubahnya menjadi format saat pesan dikirim. Format ini hanya berlaku di kolom yang mendukung pemformatan, umumnya isi percakapan. Nama profil, nama grup, dan sebagian kolom pengaturan tidak memprosesnya.",
    },
    {
      type: "list",
      items: [
        "*teks* untuk huruf tebal.",
        "_teks_ untuk huruf miring.",
        "~teks~ untuk teks yang dicoret.",
        "```teks``` untuk teks monospace.",
      ],
    },
    {
      type: "paragraph",
      text: "Cara kedua adalah karakter Unicode. Setiap huruf diganti dengan karakter lain yang bentuknya sudah tebal, miring, atau kursif, sehingga teks tetap terlihat bergaya meski kolomnya tidak mendukung format. Inilah yang dihasilkan generator fancy text. Karena bentuknya melekat pada karakter, gaya ini tidak bisa dimatikan dengan tombol pemformatan.",
    },
    { type: "heading", level: 2, text: "Kapan karakter Unicode lebih cocok" },
    {
      type: "paragraph",
      text: "Gunakan karakter Unicode di tempat yang tidak menerima format bawaan tetapi tetap menerima teks biasa. Contohnya nama profil, nama grup, status, nama kontak yang Anda simpan, dan bagian keterangan pada katalog bisnis. Di kolom seperti ini, tanda baca format hanya akan tampil sebagai karakter biasa.",
    },
    {
      type: "list",
      items: [
        "Nama profil dan nama grup yang ingin terlihat berbeda di daftar percakapan.",
        "Status singkat atau teks pengumuman yang dibaca tanpa pemformatan.",
        "Nama kontak pribadi yang ingin Anda bedakan dari kontak lain.",
        "Keterangan produk atau katalog yang hanya menerima teks polos.",
      ],
    },
    {
      type: "callout",
      title: "Simpan versi asli dulu",
      text: "Sebelum mengganti nama profil atau nama grup, salin nama lama ke catatan. Sebagian karakter bergaya sulit diketik ulang secara manual jika Anda berubah pikiran.",
    },
    { type: "heading", level: 2, text: "Langkah menyalin fancy text ke WhatsApp" },
    {
      type: "list",
      ordered: true,
      items: [
        "Buka TEXTORA dan pilih alat yang sesuai, misalnya Fancy Text Generator atau Bold Text.",
        "Ketik nama atau frasa pendek. Hindari kalimat panjang karena nama tampilan punya batas karakter sendiri.",
        "Pilih gaya yang masih terbaca, lalu tekan tombol salin pada kartu hasil.",
        "Tempel di kolom WhatsApp yang dituju, lalu periksa tampilannya sebelum menyimpan.",
        "Minta satu orang lain membuka profil atau grup Anda untuk memastikan karakternya tampil normal di perangkat berbeda.",
      ],
    },
    { type: "heading", level: 2, text: "Batasan yang perlu diingat" },
    {
      type: "list",
      items: [
        "Nama yang ditulis dengan karakter bergaya biasanya tidak ditemukan lewat pencarian biasa.",
        "Pembaca layar dapat mengeja huruf bergaya dengan cara yang berbeda dari huruf biasa.",
        "Sebagian karakter memakan ruang lebih lebar, sehingga nama bisa terpotong di layar kecil.",
        "Perangkat lama atau versi aplikasi yang belum diperbarui bisa menampilkan kotak pengganti.",
        "Tidak ada tombol untuk mengembalikan karakter bergaya menjadi huruf biasa; Anda perlu mengetik ulang atau membuat ulang teksnya.",
      ],
    },
    { type: "heading", level: 2, text: "Agar nama tetap bisa dicari" },
    {
      type: "paragraph",
      text: "Pencarian di WhatsApp bergantung pada teks yang tersimpan. Jika seluruh nama ditulis dengan huruf bergaya, orang yang mengetik nama biasa mungkin tidak menemukan Anda. Pola yang lebih aman adalah mempertahankan setidaknya satu kata dalam huruf biasa, misalnya nama depan, lalu memakai gaya hanya pada bagian hiasan.",
    },
    { type: "heading", level: 2, text: "Apakah teks berubah saat pesan dikirim?" },
    {
      type: "paragraph",
      text: "Tidak. WhatsApp menyimpan dan meneruskan teks apa adanya. Perbedaan tampilan berasal dari perangkat yang membuka pesan, bukan dari server yang mengubah karakter. Jika penerima melihat kotak atau tanda tanya, biasanya perangkatnya tidak memiliki bentuk karakter tersebut, bukan karena pesannya rusak.",
    },
    {
      type: "paragraph",
      text: "Untuk percakapan sehari-hari, format bawaan WhatsApp lebih aman karena tetap bisa dibaca oleh semua perangkat dan bisa dimatikan kapan saja. Karakter Unicode paling berguna untuk nama dan judul singkat yang ingin menonjol tanpa mengorbankan keterbacaan.",
    },
    {
      type: "linkList",
      title: "Alat dan panduan terkait",
      links: [
        { label: "Fancy Text Generator", href: "/fancy-text-generator" },
        { label: "Bold Text Generator", href: "/bold-text" },
        { label: "Italic Text Generator", href: "/italic-text" },
        {
          label: "Apa itu Unicode?",
          href: "/articles/apa-itu-unicode",
        },
        {
          label: "Mengapa karakter tampil sebagai kotak?",
          href: "/articles/mengapa-karakter-unicode-tampil-sebagai-kotak",
        },
      ],
    },
  ],
};
