import type { GlyphCategory, GlyphItem } from "../glyphs";

export type SymbolCategoryId =
  | "aesthetic"
  | "love"
  | "star"
  | "arrow"
  | "heart"
  | "flower"
  | "gaming"
  | "decorative"
  | "math";

export const symbolCategories: readonly GlyphCategory[] = [
  {
    id: "aesthetic",
    label: "Aesthetic",
    description: "Bintang kecil, kilau, dan aksen minimal.",
  },
  {
    id: "love",
    label: "Cinta",
    description: "Hati klasik dan ornamen bertema kasih.",
  },
  {
    id: "star",
    label: "Bintang",
    description: "Bintang berujung lima sampai delapan.",
  },
  {
    id: "arrow",
    label: "Panah",
    description: "Panah tunggal, ganda, dan lengkung.",
  },
  {
    id: "heart",
    label: "Hati",
    description: "Hati berwarna untuk bio dan caption.",
  },
  {
    id: "flower",
    label: "Bunga",
    description: "Bunga garis, kelopak, dan ornamen floral.",
  },
  {
    id: "gaming",
    label: "Gaming",
    description: "Simbol untuk nickname dan status pemain.",
  },
  {
    id: "decorative",
    label: "Dekoratif",
    description: "Kotak, titik, dan penanda untuk menyusun teks.",
  },
  {
    id: "math",
    label: "Matematika",
    description: "Tanda hitung dan simbol ilmiah umum.",
  },
];

export const symbols: readonly GlyphItem[] = [
  {
    value: "✦",
    name: "Bintang empat",
    category: "aesthetic",
    keywords: ["bintang", "kilau", "star", "aesthetic"],
  },
  {
    value: "✧",
    name: "Kilau kecil",
    category: "aesthetic",
    keywords: ["kilau", "sparkle", "bintang", "aesthetic"],
  },
  {
    value: "⋆",
    name: "Bintang kecil",
    category: "aesthetic",
    keywords: ["bintang", "star", "kecil", "aesthetic"],
  },
  {
    value: "⊹",
    name: "Plus bertitik",
    category: "aesthetic",
    keywords: ["plus", "titik", "silang", "aesthetic"],
  },
  {
    value: "✩",
    name: "Bintang garis",
    category: "aesthetic",
    keywords: ["bintang", "star", "garis", "outline"],
  },
  {
    value: "༄",
    name: "Pusaran Tibet",
    category: "aesthetic",
    keywords: ["pusaran", "tibet", "angin", "aesthetic"],
  },
  {
    value: "୨୧",
    name: "Pita kecil",
    category: "aesthetic",
    keywords: ["pita", "bow", "lucu", "aesthetic"],
  },
  {
    value: "⌁",
    name: "Petir garis",
    category: "aesthetic",
    keywords: ["petir", "kilat", "garis", "energi"],
  },
  {
    value: "〰",
    name: "Gelombang panjang",
    category: "aesthetic",
    keywords: ["gelombang", "garis", "wave", "aesthetic"],
  },
  {
    value: "❃",
    name: "Bunga bertepi",
    category: "aesthetic",
    keywords: ["bunga", "floral", "aesthetic", "ornamen"],
  },

  {
    value: "♡",
    name: "Hati garis",
    category: "love",
    keywords: ["hati", "love", "heart", "garis"],
  },
  {
    value: "♥",
    name: "Hati penuh",
    category: "love",
    keywords: ["hati", "love", "heart", "penuh"],
  },
  {
    value: "❥",
    name: "Hati panah",
    category: "love",
    keywords: ["hati", "panah", "love", "arrow"],
  },
  {
    value: "❣",
    name: "Hati seru",
    category: "love",
    keywords: ["hati", "seru", "love", "exclamation"],
  },
  {
    value: "ღ",
    name: "Hati Georgia",
    category: "love",
    keywords: ["hati", "georgia", "love", "lengkung"],
  },
  {
    value: "۵",
    name: "Hati Arab",
    category: "love",
    keywords: ["hati", "arab", "love", "angka"],
  },
  {
    value: "☙",
    name: "Hati floral kiri",
    category: "love",
    keywords: ["hati", "bunga", "floral", "love"],
  },
  {
    value: "❦",
    name: "Hati floral",
    category: "love",
    keywords: ["hati", "bunga", "floral", "love"],
  },
  {
    value: "❤",
    name: "Hati klasik",
    category: "love",
    keywords: ["hati", "classic", "love", "merah"],
  },
  {
    value: "💌",
    name: "Surat cinta",
    category: "love",
    keywords: ["surat", "cinta", "love", "letter"],
  },

  {
    value: "★",
    name: "Bintang penuh",
    category: "star",
    keywords: ["bintang", "star", "penuh", "favorit"],
  },
  {
    value: "☆",
    name: "Bintang kosong",
    category: "star",
    keywords: ["bintang", "star", "kosong", "outline"],
  },
  {
    value: "✶",
    name: "Bintang enam",
    category: "star",
    keywords: ["bintang", "star", "enam", "kilau"],
  },
  {
    value: "✷",
    name: "Bintang delapan",
    category: "star",
    keywords: ["bintang", "star", "delapan", "kilau"],
  },
  {
    value: "✸",
    name: "Bintang tebal",
    category: "star",
    keywords: ["bintang", "star", "tebal", "bold"],
  },
  {
    value: "✹",
    name: "Bintang bersinar",
    category: "star",
    keywords: ["bintang", "star", "sinar", "shine"],
  },
  {
    value: "✪",
    name: "Bintang lingkaran",
    category: "star",
    keywords: ["bintang", "star", "lingkaran", "badge"],
  },
  {
    value: "✫",
    name: "Bintang terbuka",
    category: "star",
    keywords: ["bintang", "star", "terbuka", "outline"],
  },
  {
    value: "✬",
    name: "Bintang bertepi",
    category: "star",
    keywords: ["bintang", "star", "tepi", "outline"],
  },
  {
    value: "✭",
    name: "Bintang garis tebal",
    category: "star",
    keywords: ["bintang", "star", "garis", "tebal"],
  },

  {
    value: "→",
    name: "Panah kanan",
    category: "arrow",
    keywords: ["panah", "arrow", "kanan", "tunjuk"],
  },
  {
    value: "←",
    name: "Panah kiri",
    category: "arrow",
    keywords: ["panah", "arrow", "kiri", "kembali"],
  },
  {
    value: "↑",
    name: "Panah atas",
    category: "arrow",
    keywords: ["panah", "arrow", "atas", "naik"],
  },
  {
    value: "↓",
    name: "Panah bawah",
    category: "arrow",
    keywords: ["panah", "arrow", "bawah", "turun"],
  },
  {
    value: "↔",
    name: "Panah dua arah",
    category: "arrow",
    keywords: ["panah", "arrow", "dua", "arah"],
  },
  {
    value: "↕",
    name: "Panah vertikal",
    category: "arrow",
    keywords: ["panah", "arrow", "vertikal", "atas bawah"],
  },
  {
    value: "⇒",
    name: "Panah ganda kanan",
    category: "arrow",
    keywords: ["panah", "arrow", "ganda", "kanan"],
  },
  {
    value: "⇐",
    name: "Panah ganda kiri",
    category: "arrow",
    keywords: ["panah", "arrow", "ganda", "kiri"],
  },
  {
    value: "⇔",
    name: "Panah ganda dua arah",
    category: "arrow",
    keywords: ["panah", "arrow", "ganda", "dua arah"],
  },
  {
    value: "➜",
    name: "Panah tebal",
    category: "arrow",
    keywords: ["panah", "arrow", "tebal", "bold"],
  },

  {
    value: "❤️",
    name: "Hati merah",
    category: "heart",
    keywords: ["hati", "heart", "merah", "love"],
  },
  {
    value: "💖",
    name: "Hati berkilau",
    category: "heart",
    keywords: ["hati", "heart", "kilau", "sparkle"],
  },
  {
    value: "💘",
    name: "Hati panah cinta",
    category: "heart",
    keywords: ["hati", "heart", "panah", "cinta"],
  },
  {
    value: "💝",
    name: "Hati hadiah",
    category: "heart",
    keywords: ["hati", "heart", "hadiah", "gift"],
  },
  {
    value: "💗",
    name: "Hati tumbuh",
    category: "heart",
    keywords: ["hati", "heart", "tumbuh", "berdenyut"],
  },
  {
    value: "💓",
    name: "Hati berdenyut",
    category: "heart",
    keywords: ["hati", "heart", "denyut", "beat"],
  },
  {
    value: "💞",
    name: "Hati berputar",
    category: "heart",
    keywords: ["hati", "heart", "putar", "dua"],
  },
  {
    value: "💕",
    name: "Dua hati",
    category: "heart",
    keywords: ["hati", "heart", "dua", "love"],
  },
  {
    value: "🖤",
    name: "Hati hitam",
    category: "heart",
    keywords: ["hati", "heart", "hitam", "black"],
  },
  {
    value: "🤍",
    name: "Hati putih",
    category: "heart",
    keywords: ["hati", "heart", "putih", "white"],
  },

  {
    value: "❀",
    name: "Bunga lima kelopak",
    category: "flower",
    keywords: ["bunga", "flower", "kelopak", "floral"],
  },
  {
    value: "✿",
    name: "Bunga penuh",
    category: "flower",
    keywords: ["bunga", "flower", "penuh", "floral"],
  },
  {
    value: "❁",
    name: "Bunga bertepi",
    category: "flower",
    keywords: ["bunga", "flower", "tepi", "outline"],
  },
  {
    value: "✾",
    name: "Bunga enam kelopak",
    category: "flower",
    keywords: ["bunga", "flower", "enam", "floral"],
  },
  {
    value: "✽",
    name: "Bunga tebal",
    category: "flower",
    keywords: ["bunga", "flower", "tebal", "bold"],
  },
  {
    value: "✼",
    name: "Bunga garis",
    category: "flower",
    keywords: ["bunga", "flower", "garis", "outline"],
  },
  {
    value: "⚘",
    name: "Bunga tunggal",
    category: "flower",
    keywords: ["bunga", "flower", "tunggal", "tangkai"],
  },
  {
    value: "🌸",
    name: "Sakura",
    category: "flower",
    keywords: ["bunga", "flower", "sakura", "jepang"],
  },
  {
    value: "🌺",
    name: "Hibiscus",
    category: "flower",
    keywords: ["bunga", "flower", "hibiscus", "tropis"],
  },
  {
    value: "🌻",
    name: "Bunga matahari",
    category: "flower",
    keywords: ["bunga", "flower", "matahari", "sunflower"],
  },

  {
    value: "🎮",
    name: "Kontroler",
    category: "gaming",
    keywords: ["game", "gaming", "kontroler", "controller"],
  },
  {
    value: "🕹️",
    name: "Joystick",
    category: "gaming",
    keywords: ["game", "gaming", "joystick", "arcade"],
  },
  {
    value: "🎯",
    name: "Target",
    category: "gaming",
    keywords: ["game", "gaming", "target", "akurasi"],
  },
  {
    value: "🏆",
    name: "Trofi",
    category: "gaming",
    keywords: ["game", "gaming", "trofi", "juara"],
  },
  {
    value: "🥇",
    name: "Medali emas",
    category: "gaming",
    keywords: ["game", "gaming", "medali", "juara"],
  },
  {
    value: "🎲",
    name: "Dadu",
    category: "gaming",
    keywords: ["game", "gaming", "dadu", "acak"],
  },
  {
    value: "👾",
    name: "Alien pixel",
    category: "gaming",
    keywords: ["game", "gaming", "alien", "retro"],
  },
  {
    value: "⚔️",
    name: "Pedang silang",
    category: "gaming",
    keywords: ["game", "gaming", "pedang", "perang"],
  },
  {
    value: "🛡️",
    name: "Perisai",
    category: "gaming",
    keywords: ["game", "gaming", "perisai", "shield"],
  },
  {
    value: "🔥",
    name: "Api",
    category: "gaming",
    keywords: ["game", "gaming", "api", "fire"],
  },

  {
    value: "❖",
    name: "Berlian garis",
    category: "decorative",
    keywords: ["berlian", "diamond", "dekoratif", "ornamen"],
  },
  {
    value: "◆",
    name: "Belah ketupat penuh",
    category: "decorative",
    keywords: ["belah ketupat", "diamond", "penuh", "dekoratif"],
  },
  {
    value: "◇",
    name: "Belah ketupat kosong",
    category: "decorative",
    keywords: ["belah ketupat", "diamond", "kosong", "dekoratif"],
  },
  {
    value: "▰",
    name: "Blok penuh",
    category: "decorative",
    keywords: ["blok", "kotak", "penuh", "bar"],
  },
  {
    value: "▱",
    name: "Jajar genjang kosong",
    category: "decorative",
    keywords: ["jajar genjang", "blok", "kosong", "bar"],
  },
  {
    value: "▸",
    name: "Segitiga kanan",
    category: "decorative",
    keywords: ["segitiga", "kanan", "penunjuk", "dekoratif"],
  },
  {
    value: "◂",
    name: "Segitiga kiri",
    category: "decorative",
    keywords: ["segitiga", "kiri", "penunjuk", "dekoratif"],
  },
  {
    value: "●",
    name: "Lingkaran penuh",
    category: "decorative",
    keywords: ["lingkaran", "titik", "penuh", "bullet"],
  },
  {
    value: "○",
    name: "Lingkaran kosong",
    category: "decorative",
    keywords: ["lingkaran", "kosong", "bullet", "dekoratif"],
  },
  {
    value: "■",
    name: "Kotak penuh",
    category: "decorative",
    keywords: ["kotak", "penuh", "square", "dekoratif"],
  },

  {
    value: "+",
    name: "Tambah",
    category: "math",
    keywords: ["matematika", "tambah", "plus", "hitung"],
  },
  {
    value: "−",
    name: "Kurang",
    category: "math",
    keywords: ["matematika", "kurang", "minus", "hitung"],
  },
  {
    value: "×",
    name: "Kali",
    category: "math",
    keywords: ["matematika", "kali", "times", "hitung"],
  },
  {
    value: "÷",
    name: "Bagi",
    category: "math",
    keywords: ["matematika", "bagi", "divide", "hitung"],
  },
  {
    value: "=",
    name: "Sama dengan",
    category: "math",
    keywords: ["matematika", "sama", "equals", "hitung"],
  },
  {
    value: "≠",
    name: "Tidak sama dengan",
    category: "math",
    keywords: ["matematika", "tidak sama", "not equal"],
  },
  {
    value: "≈",
    name: "Kira-kira",
    category: "math",
    keywords: ["matematika", "kira", "approx", "hampir"],
  },
  {
    value: "≤",
    name: "Kurang dari sama dengan",
    category: "math",
    keywords: ["matematika", "kurang", "maksimum", "batas"],
  },
  {
    value: "≥",
    name: "Lebih dari sama dengan",
    category: "math",
    keywords: ["matematika", "lebih", "minimum", "batas"],
  },
  {
    value: "∞",
    name: "Tak hingga",
    category: "math",
    keywords: ["matematika", "tak hingga", "infinity"],
  },
  {
    value: "∑",
    name: "Sigma",
    category: "math",
    keywords: ["matematika", "sigma", "jumlah", "sum"],
  },
  {
    value: "√",
    name: "Akar",
    category: "math",
    keywords: ["matematika", "akar", "root", "kuadrat"],
  },
];

export const symbolItems = symbols;
