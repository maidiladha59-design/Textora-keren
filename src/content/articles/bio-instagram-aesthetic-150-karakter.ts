import type { ArticleSource } from "@/content/articles/types";

export const bioInstagram: ArticleSource = {
  slug: "bio-instagram-aesthetic-150-karakter",
  title: "Bio Instagram Aesthetic: Menyusun 150 Karakter yang Bekerja",
  description:
    "Struktur bio Instagram dalam batas 150 karakter, pengaruh emoji dan baris baru, serta cara menguji bio sebelum menyimpannya.",
  category: "Bio Instagram",
  publishedAt: "2026-11-15",
  related: [
    "simbol-aesthetic-untuk-bio-dan-caption",
    "apa-itu-unicode",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Bio Instagram adalah ruang kecil yang harus memuat banyak hal: siapa Anda, apa yang Anda lakukan, dan mengapa orang perlu mengikuti atau menghubungi Anda. Dengan batas sekitar 150 karakter, setiap kata dan setiap baris baru berhitung. Bio yang baik bukan yang paling banyak hiasannya, melainkan yang paling cepat dipahami.",
    },
    { type: "heading", level: 2, text: "Apa yang dihitung Instagram" },
    {
      type: "paragraph",
      text: "Kolom bio Instagram umumnya menerima sekitar 150 karakter, termasuk spasi dan baris baru. Kolom nama dan username punya batas sendiri yang lebih pendek. Emoji bisa dihitung berbeda karena sebagian tersusun dari beberapa kode Unicode, dan huruf bergaya juga tetap dihitung satu per satu meskipun tampak lebih lebar.",
    },
    {
      type: "paragraph",
      text: "Generator bio di TEXTORA memakai jumlah kode Unicode pada teks yang akan disalin. Angka itu membantu memperkirakan panjang sebenarnya, tetapi bukan jaminan bahwa Instagram akan menghitungnya persis sama. Jika bio mendekati batas, uji di aplikasi sebelum menyimpan.",
    },
    { type: "heading", level: 2, text: "Struktur bio yang mudah dibaca" },
    {
      type: "list",
      ordered: true,
      items: [
        "Baris identitas: nama atau nama brand dalam huruf biasa agar mudah dicari.",
        "Baris peran: satu kalimat pendek tentang apa yang Anda lakukan.",
        "Baris bukti atau kata kunci: bidang, lokasi, atau keahlian utama.",
        "Baris ajakan: satu tindakan yang jelas, misalnya mengirim pesan atau membuka tautan.",
        "Satu tautan penting saja; daftar tautan panjang lebih baik diletakkan di halaman terpisah.",
      ],
    },
    {
      type: "callout",
      title: "Kerangka sederhana",
      text: "Nama · peran. Kata kunci utama. Ajakan singkat. Tambahkan satu emoji di akhir baris bila perlu, bukan di setiap kata.",
    },
    { type: "heading", level: 2, text: "Emoji: secukupnya, bukan pengganti kata" },
    {
      type: "paragraph",
      text: "Emoji membantu memberi jeda visual dan menandai baris. Namun emoji yang tersusun dari beberapa kode bisa memakan lebih banyak ruang daripada yang terlihat. Emoji keluarga, bendera, atau profesi sering merupakan gabungan beberapa karakter. Jika bio Anda berisi banyak emoji seperti itu, sisa ruang untuk teks bisa lebih kecil dari perkiraan.",
    },
    {
      type: "paragraph",
      text: "Selain panjang, pertimbangkan keterbacaan. Pembaca layar membacakan emoji dengan namanya, sehingga deretan emoji bisa terdengar berulang. Gunakan emoji untuk menandai bagian, bukan untuk menggantikan kata penting.",
    },
    { type: "heading", level: 2, text: "Mengapa bio terasa pendek tetapi terpotong" },
    {
      type: "list",
      items: [
        "Baris baru dan spasi ikut dihitung sebagai karakter.",
        "Huruf bergaya dari Unicode bisa memakan ruang lebih lebar meski dihitung satu karakter.",
        "Emoji gabungan bisa dihitung sebagai beberapa kode.",
        "Tautan panjang memakan ruang yang seharusnya dipakai untuk kata kunci.",
      ],
    },
    { type: "heading", level: 2, text: "Cek sebelum menyimpan" },
    {
      type: "list",
      ordered: true,
      items: [
        "Tulis bio di catatan atau editor, bukan langsung di aplikasi.",
        "Hitung panjangnya dengan generator dan perhatikan angka terhadap batas 150.",
        "Salin ke kolom bio Instagram, lalu simpan.",
        "Buka profil dari akun lain atau mode penjelajahan privat untuk melihat tampilan sebenarnya.",
        "Simpan salinan bio lama dan bio baru di catatan agar mudah dikembalikan.",
      ],
    },
    { type: "heading", level: 2, text: "Kesalahan yang sering terjadi" },
    {
      type: "list",
      items: [
        "Menulis seluruh bio dengan huruf hias sehingga nama tidak muncul di pencarian.",
        "Menjejalkan terlalu banyak emoji sampai baris terpotong.",
        "Memakai kalimat panjang tanpa satu pun informasi yang bisa diingat.",
        "Mengganti bio terlalu sering tanpa menyimpan versi sebelumnya.",
        "Menaruh tautan yang tidak bisa dibuka di aplikasi seluler.",
      ],
    },
    {
      type: "paragraph",
      text: "Bio yang bekerja biasanya sederhana: satu identitas, satu keahlian, satu ajakan. Hiasan Unicode sebaiknya memperkuat kesan itu, bukan menutupinya. Jika ragu, bandingkan dua versi dan pilih yang lebih mudah dibaca dalam sekali lihat.",
    },
    {
      type: "linkList",
      title: "Alat dan panduan terkait",
      links: [
        {
          label: "Instagram Bio Generator",
          href: "/instagram-bio-generator",
        },
        { label: "Emoji Generator", href: "/emoji" },
        { label: "Symbol Generator", href: "/symbols" },
        {
          label: "Simbol aesthetic untuk bio dan caption",
          href: "/articles/simbol-aesthetic-untuk-bio-dan-caption",
        },
        { label: "Nickname Generator", href: "/nickname-generator" },
      ],
    },
  ],
};
