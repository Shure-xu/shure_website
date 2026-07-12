export const workCategories = [
  {
    slug: "dynamic",
    label: "Dynamic",
    title: "Dynamic Design",
    href: "/works/dynamic",
    image: "/images/h6-dynamic-design.png",
    teaser: "Motion, interaction, and expressive digital moments.",
    description:
      "Dynamic design projects focus on movement, interaction, transitions, and small behaviors that make a digital experience feel alive.",
    projects: [
      {
        title: "Motion Notes",
        summary:
          "A study of page transitions, cursor feedback, and gentle interface motion for a personal digital studio.",
        tags: ["MOTION", "INTERACTION"],
      },
      {
        title: "Live Signals",
        summary:
          "A modular visual system for animated updates, state changes, and playful micro-interactions.",
        tags: ["DYNAMIC", "SYSTEM"],
      },
      {
        title: "Opening Scene",
        summary:
          "A first-screen rhythm experiment that uses loading, reveal timing, and hover states to set the tone.",
        tags: ["WEB", "EXPERIENCE"],
      },
    ],
  },
  {
    slug: "brand",
    label: "Brand",
    title: "Brand Design",
    href: "/works/brand",
    image: "/images/h6-brand-design.png",
    teaser: "Identity, tone, and visual systems for clear expression.",
    description:
      "Brand design projects organize voice, structure, and identity into systems that can be recognized, repeated, and extended.",
    projects: [
      {
        title: "Field Notes",
        summary:
          "A brand narrative structure that turns scattered ideas into a homepage people can understand quickly.",
        tags: ["BRAND", "NARRATIVE"],
      },
      {
        title: "Soft Lab",
        summary:
          "A lightweight identity and content system for creators who need their work, notes, and services to connect.",
        tags: ["SYSTEM", "CONTENT"],
      },
      {
        title: "Studio Voice",
        summary:
          "A tone and messaging kit for keeping personal, product, and portfolio language aligned.",
        tags: ["VOICE", "STRATEGY"],
      },
    ],
  },
  {
    slug: "visual",
    label: "Visual",
    title: "Visual Design",
    href: "/works/visual",
    image: "/images/h6-visual-design.png",
    teaser: "Editorial layouts, color, composition, and visual direction.",
    description:
      "Visual design projects explore composition, contrast, image treatment, and editorial systems for memorable digital pages.",
    projects: [
      {
        title: "Open Signal",
        summary:
          "An editorial page direction using strong blocks, magazine-like rhythm, and clear next-step hierarchy.",
        tags: ["VISUAL", "EDITORIAL"],
      },
      {
        title: "Mood Index",
        summary:
          "A visual prototype for tracking daily mood, inspiration, and small creative experiments.",
        tags: ["INTERFACE", "MOOD"],
      },
      {
        title: "Color Studies",
        summary:
          "A set of visual explorations balancing bright accents, quiet surfaces, and readable content structure.",
        tags: ["COLOR", "LAYOUT"],
      },
    ],
  },
] as const;

export type WorkCategory = (typeof workCategories)[number];
export type WorkCategorySlug = WorkCategory["slug"];

export function getWorkCategory(slug: string) {
  return workCategories.find((category) => category.slug === slug);
}
