export const pieces = [
  {
    slug: "arc-lounge-chair",
    categoryLabel: "Seating",
    name: "Arc Lounge Chair",
    category: "Seating",
    material: "Ivory bouclé · Solid oak",
    price: 1280,
    image: "/images/95dab5b920ec84148accdd0ca1b51ef5.jpg",
    alt: "Two ivory armchairs beside a window with a dark round table between them",
    description: "Rounded cushions and a low seat give Arc a relaxed profile. Its tactile upholstery is paired with broad oak legs that show the grain of the wood.",
  },
  {
    slug: "grove-coffee-table",
    categoryLabel: "Coffee tables",
    name: "Grove Coffee Table",
    category: "Tables",
    material: "Natural solid oak",
    price: 960,
    image: "/images/8fef273d632e98dbf3674ea68159c00f.jpg",
    alt: "Round light-topped pedestal table surrounded by olive-green chairs",
    description: "A rounded edge softens the generous oak top, which rests on three solid legs. Grove sits low enough to keep the space around it feeling open.",
  },
  {
    slug: "dune-table-lamp",
    categoryLabel: "Table lamps",
    name: "Dune Table Lamp",
    category: "Lighting",
    material: "Honed travertine",
    price: 340,
    image: "/images/f682da417bf9b39ab35c4f12311ab8c7.jpg",
    alt: "Glowing dome-shaded lamp on a wooden bedside table",
    description: "A simple dome casts a soft pool of light across the surface beneath it. The warm stone and compact proportions suit a bedside table or a quiet corner.",
  },
  {
    slug: "arc-pendant",
    categoryLabel: "Pendant lighting",
    name: "Arc Pendant",
    category: "Lighting",
    material: "Sand-finished plaster",
    price: 490,
    image: "/images/cf55287b5398911c91d7e7fe4a054e75.jpg",
    alt: "Pendant lights of different shapes suspended at staggered heights",
    description: "A suspended dome directs light toward the table below and leaves the rest of the room softly lit.",
  },
  {
    slug: "column-floor-lamp",
    categoryLabel: "Floor lamps",
    name: "Column Floor Lamp",
    category: "Lighting",
    material: "Honed travertine",
    price: 720,
    image: "/images/bfde13ee0ddd5e201a86f962ee7c21e7.jpg",
    alt: "Floor lamp with a glowing scalloped shade and rounded wooden stem",
    description: "A slim stone column lifts a warm dome shade to reading height. Its compact footprint fits beside a sofa or lounge chair.",
  },
] as const;

export type Piece = (typeof pieces)[number];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
