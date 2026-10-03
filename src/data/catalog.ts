import { images } from "./images";

export type CatalogCategory = {
  slug: string;
  name: string;
  group: "knit" | "woven" | "sweater" | "outerwear" | "technical";
  description: string;
  image: string;
  gallery: string[];
  products: string[];
  materials: string[];
  fabrications: string[];
};
export type CatalogDivision = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  categories: CatalogCategory[];
};

const base = [
  {
    slug: "knit-tops",
    name: "Knit Tops",
    group: "knit",
    description:
      "Everyday and seasonal knit tops developed around the buyer brief.",
    image: images.products.circularKnits,
    gallery: [images.products.circularKnits],
    products: [
      "T-Shirts",
      "Polo Shirts",
      "Vests",
      "Tank Tops",
      "Hoodies",
      "Sweatshirts",
      "Knit Shirts",
      "Nightwear",
    ],
    materials: ["Cotton", "CVC", "PC", "Viscose", "Cotton / Elastane"],
    fabrications: [
      "Single Jersey",
      "Piqué",
      "Slub",
      "Interlock",
      "1×1 Rib",
      "2×2 Rib",
      "French Terry",
      "Fleece",
    ],
  },
  {
    slug: "knit-bottoms",
    name: "Knit Bottoms",
    group: "knit",
    description: "Comfort-led knit trousers, shorts and coordinated separates.",
    image: images.products.men,
    gallery: [images.products.men],
    products: ["Joggers", "Knit Trousers", "Shorts", "Lounge Bottoms"],
    materials: ["Cotton", "CVC", "Viscose", "Blends"],
    fabrications: ["Single Jersey", "French Terry", "Fleece", "Rib"],
  },
  {
    slug: "sweaters",
    name: "Sweaters",
    group: "sweater",
    description:
      "Flat-knit styles across core and seasonal layering programmes.",
    image: images.products.men,
    gallery: [images.products.men],
    products: [
      "Pullovers",
      "Cardigans",
      "Tank Tops",
      "Hooded Knitwear",
      "Accessories",
    ],
    materials: ["Cotton", "Acrylic", "Wool", "Polyester", "Fancy Yarns"],
    fabrications: ["1.5–14 gauge options listed by Fashion Texa"],
  },
  {
    slug: "woven-tops",
    name: "Woven Tops",
    group: "woven",
    description:
      "Structured tops for casual, formal and fashion-led collections.",
    image: images.products.woven,
    gallery: [images.products.woven],
    products: ["Casual Shirts", "Formal Shirts", "Dress Shirts", "Overshirts"],
    materials: ["Cotton", "Linen", "Viscose", "Poly Blends"],
    fabrications: ["Poplin", "Oxford", "Dobby", "Flannel", "Chambray"],
  },
  {
    slug: "woven-bottoms",
    name: "Woven Bottoms",
    group: "woven",
    description:
      "Versatile bottoms spanning tailored, casual and utility directions.",
    image: images.products.woven,
    gallery: [images.products.woven],
    products: ["Trousers", "Shorts", "Chinos", "Denim", "Cargo Styles"],
    materials: ["Cotton", "Denim", "Corduroy", "Blends"],
    fabrications: ["Twill", "Canvas", "Poplin", "Dobby"],
  },
  {
    slug: "jackets",
    name: "Jackets",
    group: "outerwear",
    description:
      "Lightweight and seasonal outer layers, subject to brief validation.",
    image: images.products.overview,
    gallery: [images.products.overview],
    products: ["Lightweight Jackets", "Casual Outerwear", "Seasonal Outerwear"],
    materials: ["Cotton", "Polyester", "Blends"],
    fabrications: ["Woven", "Quilted options to be validated"],
  },
] satisfies CatalogCategory[];

const adapt = (division: string, editorial: Record<string, string>) => {
  const visualSet = Object.values(editorial);
  return base.map((c, i) => ({
    ...c,
    image: editorial[c.slug] || c.image,
    gallery: [
      editorial[c.slug] || c.image,
      visualSet[(i + 1) % visualSet.length],
    ],
    description: `${division} — ${c.description.toLowerCase()}`,
  }));
};

export const catalog: CatalogDivision[] = [
  {
    slug: "men",
    name: "Men",
    eyebrow: "MENSWEAR",
    description:
      "Structured essentials, knitwear, woven programmes and outer layers.",
    image: images.products.editorial.men["knit-tops"],
    categories: adapt("Menswear", images.products.editorial.men),
  },
  {
    slug: "women",
    name: "Women",
    eyebrow: "WOMENSWEAR",
    description:
      "Fluid silhouettes, fashion tops, dresses, separates and knitwear.",
    image: images.products.editorial.women["knit-tops"],
    categories: adapt("Womenswear", images.products.editorial.women),
  },
  {
    slug: "boys",
    name: "Boys",
    eyebrow: "BOYSWEAR",
    description:
      "Commercial childrenswear categories presented for professional buyers.",
    image: images.products.editorial.boys["knit-tops"],
    categories: adapt("Boyswear", images.products.editorial.boys),
  },
  {
    slug: "girls",
    name: "Girls",
    eyebrow: "GIRLSWEAR",
    description:
      "A broad girlswear structure across knit, woven and seasonal categories.",
    image: images.products.editorial.girls["knit-tops"],
    categories: adapt("Girlswear", images.products.editorial.girls),
  },
];

export const specialized = [
  {
    slug: "socks",
    name: "Socks",
    group: "sweater",
    description: "Dress, athletic and casual knit sock directions.",
    image: images.products.real.specialized.socks,
    gallery: [images.products.real.specialized.socks, images.products.socks],
    products: ["Dress Socks", "Athletic Socks", "Casual Socks"],
    materials: ["Cotton", "Polyester", "Blends"],
    fabrications: ["Rib", "Jersey knit", "Cushioned constructions"],
  },
  {
    slug: "technical",
    name: "Technical / High Visibility",
    group: "technical",
    description:
      "A visual framework for technical and high-visibility apparel; exact specifications require client validation.",
    image: images.products.editorial.technical[0],
    gallery: images.products.editorial.technical.slice(1),
    products: [
      "High Visibility Jackets",
      "Safety Vests",
      "Technical Trousers",
      "Protective Outerwear",
    ],
    materials: ["Technical materials — validation required"],
    fabrications: [
      "Construction and certification details — validation required",
    ],
  },
] satisfies CatalogCategory[];

export const findDivision = (slug?: string) =>
  catalog.find((d) => d.slug === slug);
export const findCategory = (division?: string, slug?: string) =>
  findDivision(division)?.categories.find((c) => c.slug === slug);
export const allCatalogItems = [
  ...catalog.flatMap((d) =>
    d.categories.map((c) => ({ ...c, division: d.slug, divisionName: d.name })),
  ),
  ...specialized.map((c) => ({
    ...c,
    division: "specialized",
    divisionName: "Specialized",
  })),
];
