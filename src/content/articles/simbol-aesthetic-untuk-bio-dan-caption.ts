import type { ArticleSource } from "@/content/articles/types";

export const simbolAesthetic: ArticleSource = {
  slug: "simbol-aesthetic-untuk-bio-dan-caption",
  title: "Simbol Aesthetic untuk Bio dan Caption: Cara Memilih dan Menyalin",
  description:
    "Jenis simbol aesthetic yang umum dipakai, cara menyalinnya tanpa rusak, dan alasan sebagian simbol tampil berbeda di aplikasi tertentu.",
  category: "Simbol",
  publishedAt: "2026-11-12",
  related: [
    "bio-instagram-aesthetic-150-karakter",
    "mengapa-karakter-unicode-tampil-sebagai-kotak",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Simbol aesthetic seperti bintang kecil, hati berongga, bunga, dan panah bukan gambar. Semuanya karakter Unicode yang bisa disalin seperti huruf biasa. Karena itu, simbol dapat ditempel ke bio, caption, nama tampilan, atau dokumen tanpa mengunggah gambar dan tanpa menginstal font.",
    },
    { type: "heading", level: 2, text: "Jenis simbol yang sering dipakai" },
    {
      type: "list",
      items: [
        "Bintang dan kilau untuk penanda baris atau pemisah singkat.",
        "Hati berongga dan hati kecil untuk nuansa lembut tanpa warna.",
        "Bunga dan sulur untuk tema floral atau vintage.",
        "Panah untuk mengarahkan perhatian ke tautan atau ajakan.",
        "Garis dan titik pemisah untuk merapikan daftar di bio.",
        "Kurung, sayap, dan mahkota untuk nama tampilan atau nickname game.",
        "Angka dan huruf dalam lingkaran untuk label atau nomor urut.",
      ],
    },
    {
      type: "paragraph",
      text: "Karena semua simbol ini berada di standar Unicode, tidak ada satu gaya visual yang dipaksakan. Perangkat memakai font sistem untuk menggambarnya. Bentuknya bisa sedikit berbeda antara Android, iOS, Windows, dan aplikasi tertentu, meskipun karakternya sama.",
    },
    { type: "heading", level: 2, text: "Cara menyalin simbol dengan aman" },
    {
      type: "list",
      ordered: true,
      items: [
        "Buka Symbol Generator dan pilih kategori yang sesuai.",
        "Tekan tombol salin pada kartu simbol, bukan menyalin dari gambar atau tangkapan layar.",
        "Tempel di catatan lebih dulu untuk memastikan simbolnya ikut tersalin.",
        "Periksa spasi di sekitar simbol; spasi berlebih sering membuat bio terlihat berantakan.",
        "Tempel ke aplikasi tujuan dan lihat hasilnya sebelum menyimpan.",
      ],
    },
    {
      type: "callout",
      title: "Jangan salin dari gambar",
      text: "Simbol yang terlihat di tangkapan layar bukan teks. Menyalin gambar hanya menghasilkan gambar, bukan karakter yang bisa ditempel ke kolom teks.",
    },
    { type: "heading", level: 2, text: "Simbol, emoji, dan tanda penggabung" },
    {
      type: "paragraph",
      text: "Emoji adalah karakter berwarna yang biasanya digambar khusus oleh sistem. Simbol aesthetic umumnya berupa karakter hitam-putih yang mengikuti warna teks. Ada juga tanda penggabung, yaitu karakter tak terlihat yang menempel pada huruf di depannya untuk menambah garis atau aksen.",
    },
    {
      type: "paragraph",
      text: "Tanda penggabung bisa menghasilkan efek dekoratif, tetapi juga berisiko. Jika ditumpuk terlalu banyak, teks dapat menutupi baris lain, sulit dibaca, atau ditolak oleh aplikasi. Untuk bio dan caption, lebih aman memakai simbol yang berdiri sendiri daripada menumpuk tanda penggabung.",
    },
    { type: "heading", level: 2, text: "Mengapa simbol bisa hilang atau menjadi kotak" },
    {
      type: "list",
      items: [
        "Font perangkat tidak memiliki bentuk untuk simbol tersebut.",
        "Aplikasi menyaring karakter yang tidak diizinkan, terutama di kolom username.",
        "Simbol dianggap tidak valid oleh sistem validasi nickname game.",
        "Baris menjadi terlalu tinggi karena simbol tertentu butuh ruang ekstra.",
        "Teks disalin melalui aplikasi yang membuang karakter di luar rentang tertentu.",
      ],
    },
    {
      type: "paragraph",
      text: "Jika simbol tampil normal di satu aplikasi tetapi menjadi kotak di aplikasi lain, kemungkinan besar masalahnya ada pada dukungan font atau penyaringan aplikasi, bukan pada teks yang rusak. Uji di dua perangkat sebelum memakai simbol pada nama akun yang penting.",
    },
    { type: "heading", level: 2, text: "Menempatkan simbol agar tidak mengganggu" },
    {
      type: "list",
      items: [
        "Letakkan simbol di awal atau akhir baris, bukan di tengah kata.",
        "Gunakan satu jenis pemisah per baris agar tampilan konsisten.",
        "Batasi hiasan pada nama tampilan; pertahankan kata kunci dalam huruf biasa.",
        "Hindari simbol yang mudah tertukar dengan huruf, seperti tanda yang mirip huruf I atau angka 1.",
        "Ingat bahwa pembaca layar dapat membacakan nama simbol; jangan menaruh informasi penting hanya sebagai simbol.",
      ],
    },
    { type: "heading", level: 2, text: "Simbol untuk nickname game" },
    {
      type: "paragraph",
      text: "Game biasanya membatasi jenis dan jumlah simbol. Simbol yang lolos di bio Instagram belum tentu diterima di kolom nickname. Periksa penghitung karakter, pilih hiasan yang sederhana, dan siapkan versi cadangan tanpa simbol jika nama ditolak saat disimpan.",
    },
    {
      type: "paragraph",
      text: "Simbol paling berguna ketika jumlahnya sedikit. Satu bintang di akhir bio atau satu panah sebelum tautan sering cukup untuk memberi karakter tanpa mengorbankan keterbacaan.",
    },
    {
      type: "linkList",
      title: "Alat dan panduan terkait",
      links: [
        { label: "Symbol Generator", href: "/symbols" },
        { label: "Emoji Generator", href: "/emoji" },
        { label: "Fancy Text Generator", href: "/fancy-text-generator" },
        {
          label: "Bio Instagram aesthetic dalam 150 karakter",
          href: "/articles/bio-instagram-aesthetic-150-karakter",
        },
        {
          label: "Mengapa karakter tampil sebagai kotak?",
          href: "/articles/mengapa-karakter-unicode-tampil-sebagai-kotak",
        },
      ],
    },
  ],
};
