export const categories = [
  {
    id: "bold",
    label: "Bold",
    description: "Huruf tebal matematis untuk penekanan yang kuat.",
  },
  {
    id: "italic",
    label: "Italic",
    description: "Huruf miring klasik dan sans-serif yang ringan.",
  },
  {
    id: "bold-italic",
    label: "Bold Italic",
    description: "Gabungan tebal dan miring untuk judul pendek.",
  },
  {
    id: "script",
    label: "Script",
    description: "Gaya kursif yang menyerupai tulisan tangan.",
  },
  {
    id: "cursive",
    label: "Cursive",
    description: "Variasi script dengan spasi dan aksen dekoratif.",
  },
  {
    id: "fraktur",
    label: "Fraktur",
    description: "Huruf bergaya gotik dari blok matematika Unicode.",
  },
  {
    id: "double-struck",
    label: "Double Struck",
    description: "Huruf berongga ganda dengan kesan teknis.",
  },
  {
    id: "monospace",
    label: "Monospace",
    description: "Huruf selebar tetap seperti kode terminal.",
  },
  {
    id: "small-caps",
    label: "Small Caps",
    description: "Huruf kapital kecil untuk tampilan rapi.",
  },
  {
    id: "superscript",
    label: "Superscript",
    description: "Huruf dan angka kecil di posisi atas.",
  },
  {
    id: "subscript",
    label: "Subscript",
    description: "Huruf dan angka kecil di posisi bawah.",
  },
  {
    id: "circled",
    label: "Circled",
    description: "Huruf dan angka di dalam lingkaran.",
  },
  {
    id: "negative-circled",
    label: "Circled Negatif",
    description: "Lingkaran gelap dengan huruf terang.",
  },
  {
    id: "squared",
    label: "Squared",
    description: "Huruf kapital di dalam kotak.",
  },
  {
    id: "bubble",
    label: "Bubble",
    description: "Huruf bulat seperti gelembung percakapan.",
  },
  {
    id: "wide",
    label: "Wide",
    description: "Karakter selebar penuh khas alfabet Asia Timur.",
  },
  {
    id: "upside-down",
    label: "Terbalik",
    description: "Teks yang dibalik dan diputar 180 derajat.",
  },
  {
    id: "reverse",
    label: "Reverse",
    description: "Urutan huruf dibalik tanpa mengubah bentuk.",
  },
  {
    id: "mirror",
    label: "Mirror",
    description: "Huruf dicerminkan seperti pantulan.",
  },
  {
    id: "spaced",
    label: "Spasi",
    description: "Teks dengan jarak antarhuruf yang renggang.",
  },
  {
    id: "glitch",
    label: "Glitch",
    description: "Efek coret dan garis acak bergaya glitch.",
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    description: "Kombinasi huruf bergaya dengan dekorasi lembut.",
  },
  {
    id: "cute",
    label: "Cute",
    description: "Gaya lucu dengan hati dan aksen kecil.",
  },
  {
    id: "gothic",
    label: "Gothic",
    description: "Fraktur tebal dengan ornamen klasik.",
  },
  {
    id: "decorative",
    label: "Dekoratif",
    description: "Teks polos dengan bingkai simbol sederhana.",
  },
] as const;

export type Category = (typeof categories)[number];
export type CategoryId = Category["id"];

export const categoryIds: readonly CategoryId[] = categories.map(
  (category) => category.id,
);

const categoryLookup = new Map<CategoryId, Category>(
  categories.map((category) => [category.id, category]),
);

export function getCategory(id: CategoryId): Category {
  const category = categoryLookup.get(id);
  if (!category) {
    throw new Error(`Kategori tidak dikenal: ${id}`);
  }
  return category;
}
