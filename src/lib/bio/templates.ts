import { createMapTransformer } from "../unicode/engine";
import {
  boldSerif,
  fraktur,
  script,
  smallCaps,
} from "../unicode/maps/latin";

export const BIO_LIMIT = 150;

export type BioCategoryId =
  | "simple"
  | "aesthetic"
  | "gaming"
  | "cool"
  | "cute"
  | "professional"
  | "minimalist";

export interface BioCategory {
  id: BioCategoryId;
  label: string;
  description: string;
}

export const bioCategories: readonly BioCategory[] = [
  {
    id: "simple",
    label: "Simple",
    description: "Satu atau dua baris tanpa dekorasi berlebihan.",
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    description: "Simbol halus dan huruf ringan.",
  },
  {
    id: "gaming",
    label: "Gaming",
    description: "Istilah singkat dengan gaya tegas.",
  },
  {
    id: "cool",
    label: "Cool",
    description: "Kalimat percaya diri yang tetap ringkas.",
  },
  {
    id: "cute",
    label: "Cute",
    description: "Nada hangat dengan emoji secukupnya.",
  },
  {
    id: "professional",
    label: "Professional",
    description: "Jelas, ringkas, dan tanpa hiasan berlebihan.",
  },
  {
    id: "minimalist",
    label: "Minimalist",
    description: "Kata kunci dan spasi yang lapang.",
  },
];

export interface BioInput {
  name: string;
  role: string;
  action: string;
}

export interface BioTemplate {
  id: string;
  name: string;
  category: BioCategoryId;
  build: (input: BioInput) => string;
}

const scriptName = createMapTransformer(script);
const boldName = createMapTransformer(boldSerif);
const frakturName = createMapTransformer(fraktur);
const smallCapsName = createMapTransformer(smallCaps);

function inline(...parts: readonly string[]): string {
  return parts.filter((part) => part.trim().length > 0).join(" ");
}

function compose(...lines: readonly string[]): string {
  return lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const bioTemplates: readonly BioTemplate[] = [
  {
    id: "simple-tiga-baris",
    name: "Tiga baris",
    category: "simple",
    build: ({ name, role, action }) => compose(name, role, action),
  },
  {
    id: "simple-titik",
    name: "Pemisah titik",
    category: "simple",
    build: ({ name, role, action }) =>
      compose(role ? `${name} • ${role}` : name, action),
  },
  {
    id: "simple-garis",
    name: "Garis vertikal",
    category: "simple",
    build: ({ name, role, action }) =>
      compose(name, inline(role, "|", action)),
  },
  {
    id: "simple-hubung",
    name: "Tanda hubung",
    category: "simple",
    build: ({ name, role, action }) =>
      compose(role ? `${name} — ${role}` : name, action),
  },

  {
    id: "aesthetic-script",
    name: "Aesthetic script",
    category: "aesthetic",
    build: ({ name, role, action }) =>
      compose(
        `✧ ${scriptName(name)} ✧`,
        role,
        action ? `⋆ ${action}` : "",
      ),
  },
  {
    id: "aesthetic-kilau",
    name: "Kilau lembut",
    category: "aesthetic",
    build: ({ name, role, action }) =>
      compose(
        `˚｡⋆ ${scriptName(name)} ⋆｡˚`,
        inline(role, "⟡", action),
      ),
  },
  {
    id: "aesthetic-bintang",
    name: "Bintang malam",
    category: "aesthetic",
    build: ({ name, role, action }) =>
      compose(`⋆｡°✩ ${name} ✩°｡⋆`, role, action),
  },
  {
    id: "aesthetic-hati",
    name: "Hati aesthetic",
    category: "aesthetic",
    build: ({ name, role, action }) =>
      compose(name, inline(role, "♡", action)),
  },

  {
    id: "gaming-mahkota",
    name: "Mahkota",
    category: "gaming",
    build: ({ name, role, action }) =>
      compose(`♛ ${boldName(name)} ♛`, role, action ? `➳ ${action}` : ""),
  },
  {
    id: "gaming-kurung",
    name: "Kurung siku",
    category: "gaming",
    build: ({ name, role, action }) =>
      compose(`【 ${name} 】`, role, action ? `🎮 ${action}` : ""),
  },
  {
    id: "gaming-sayap",
    name: "Sayap",
    category: "gaming",
    build: ({ name, role, action }) =>
      compose(`༺ ${frakturName(name)} ༻`, role, action ? `⚔ ${action}` : ""),
  },
  {
    id: "gaming-trofi",
    name: "Trofi",
    category: "gaming",
    build: ({ name, role, action }) =>
      compose(role ? `${name} • ${role}` : name, action ? `🏆 ${action}` : ""),
  },

  {
    id: "cool-panah",
    name: "Panah",
    category: "cool",
    build: ({ name, role, action }) =>
      compose(name, role, action ? `↳ ${action}` : ""),
  },
  {
    id: "cool-tebal",
    name: "Garis tebal",
    category: "cool",
    build: ({ name, role, action }) =>
      compose(`— ${boldName(name)} —`, role, action),
  },
  {
    id: "cool-miring",
    name: "Pemisah miring",
    category: "cool",
    build: ({ name, role, action }) =>
      compose(inline(name, "/", role), action),
  },
  {
    id: "cool-titik",
    name: "Titik tegas",
    category: "cool",
    build: ({ name, role, action }) =>
      compose(`${name} •`, role, action),
  },

  {
    id: "cute-wajah",
    name: "Wajah lucu",
    category: "cute",
    build: ({ name, role, action }) =>
      compose(
        `(っ◔◡◔)っ ♥ ${name}`,
        inline(role, "♡"),
        action ? `⋆ ${action}` : "",
      ),
  },
  {
    id: "cute-hati",
    name: "Hati ganda",
    category: "cute",
    build: ({ name, role, action }) =>
      compose(`♡ ${name} ♡`, role, action ? `✨ ${action}` : ""),
  },
  {
    id: "cute-bunga",
    name: "Bunga kecil",
    category: "cute",
    build: ({ name, role, action }) =>
      compose(`${smallCapsName(name)} 🌷`, role, action),
  },
  {
    id: "cute-pita",
    name: "Pita",
    category: "cute",
    build: ({ name, role, action }) =>
      compose(`୨୧ ${name} ୨୧`, role, action),
  },

  {
    id: "professional-ringkas",
    name: "Ringkas",
    category: "professional",
    build: ({ name, role, action }) => compose(name, role, action),
  },
  {
    id: "professional-satu-baris",
    name: "Profil satu baris",
    category: "professional",
    build: ({ name, role, action }) =>
      compose(inline(name, "·", role), action),
  },
  {
    id: "professional-jabatan",
    name: "Jabatan",
    category: "professional",
    build: ({ name, role, action }) =>
      compose(name, role ? `${role}.` : "", action),
  },
  {
    id: "professional-kontak",
    name: "Kontak",
    category: "professional",
    build: ({ name, role, action }) =>
      compose(name, role, action ? `Kontak: ${action}` : ""),
  },

  {
    id: "minimalist-garis",
    name: "Garis tipis",
    category: "minimalist",
    build: ({ name, role, action }) =>
      compose(name, role, action ? `— ${action}` : ""),
  },
  {
    id: "minimalist-titik",
    name: "Titik pemisah",
    category: "minimalist",
    build: ({ name, role, action }) =>
      compose(name, role ? `· ${role}` : "", action),
  },
  {
    id: "minimalist-inti",
    name: "Inti saja",
    category: "minimalist",
    build: ({ name, role }) => compose(inline(name, "·", role)),
  },
  {
    id: "minimalist-frasa",
    name: "Satu frasa",
    category: "minimalist",
    build: ({ name, role, action }) =>
      compose(inline(name, "—", role, action)),
  },
];

export interface BioSuggestion {
  id: string;
  templateName: string;
  category: BioCategoryId;
  text: string;
  count: number;
}

export function countCharacters(text: string): number {
  return Array.from(text).length;
}

export function generateBios(
  input: BioInput,
  category: "all" | BioCategoryId,
): BioSuggestion[] {
  const cleanInput: BioInput = {
    name: input.name.trim(),
    role: input.role.trim(),
    action: input.action.trim(),
  };

  if (cleanInput.name.length === 0) return [];

  const templates =
    category === "all"
      ? bioTemplates
      : bioTemplates.filter((template) => template.category === category);

  const seen = new Set<string>();
  const suggestions: BioSuggestion[] = [];

  for (const template of templates) {
    const text = template.build(cleanInput);
    if (text.length === 0 || seen.has(text)) continue;
    seen.add(text);
    suggestions.push({
      id: template.id,
      templateName: template.name,
      category: template.category,
      text,
      count: countCharacters(text),
    });
  }

  return suggestions;
}
