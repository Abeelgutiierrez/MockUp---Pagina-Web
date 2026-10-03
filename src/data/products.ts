import { images } from "./images";

export type ProductItem = {
  name: string;
  meta?: string;
  to?: string;
  image?: string;
  position?: string;
};
export type GenderData = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  categories: ProductItem[];
  heroImage: string;
  tone?: string;
};
export const materials = [
  "Cotton",
  "CVC",
  "Viscose",
  "Linen",
  "Denim",
  "Fleece",
  "Jersey",
  "Piqué",
  "French Terry",
  "Twill",
  "Canvas",
  "Satin",
  "Wool",
  "Polyester",
  "Blends",
];

export const genders: Record<string, GenderData> = {
  men: {
    slug: "men",
    title: "MEN",
    subtitle: "Menswear sourcing across essential and seasonal categories.",
    intro:
      "A structured category view designed for buyers developing core, seasonal and technical menswear programmes.",
    heroImage: images.products.men,
    categories: [
      {
        name: "Circular Knits",
        meta: "T-shirts · polos · sweatshirts",
        to: "/products/men/circular-knits",
        image: images.products.circularKnits,
      },
      {
        name: "Woven Tops",
        meta: "Casual · formal · overshirts",
        to: "/products/men/woven",
        image: images.products.woven,
      },
      {
        name: "Woven Bottoms",
        meta: "Trousers · shorts",
        image: images.products.woven,
        position: "center",
      },
      {
        name: "Flat Knits",
        meta: "Pullovers · cardigans",
        image: images.products.men,
        position: "right",
      },
      {
        name: "Outerwear",
        meta: "Jackets · layered pieces",
        image: images.products.overview,
        position: "right",
      },
      {
        name: "Technical / Activewear",
        meta: "Scope to be validated",
        image: images.products.men,
      },
    ],
  },
  women: {
    slug: "women",
    title: "WOMEN",
    subtitle: "Flexible apparel sourcing for modern womenswear collections.",
    intro:
      "A visual framework for versatile womenswear development across knit, woven and layered categories.",
    heroImage: images.products.women,
    categories: [
      {
        name: "Circular Knits",
        meta: "Tops · dresses · sweatshirts",
        to: "/products/women/circular-knits",
        image: images.products.womenKnits,
      },
      { name: "Dresses", meta: "Knit · woven", image: images.products.women },
      {
        name: "Blouses",
        meta: "Lightweight woven",
        image: images.products.women,
        position: "top",
      },
      {
        name: "Woven Bottoms",
        meta: "Trousers · skirts",
        image: images.products.woven,
      },
      {
        name: "Flat Knits",
        meta: "Pullovers · cardigans",
        image: images.products.circularKnits,
      },
      {
        name: "Outerwear",
        meta: "Seasonal layers",
        image: images.products.overview,
        position: "right",
      },
    ],
  },
  kids: {
    slug: "kids",
    title: "KIDS",
    subtitle: "Reliable sourcing for childrenswear collections.",
    intro:
      "A buyer-focused architecture for boys’ and girls’ collections, kept clear, practical and distinctly B2B.",
    heroImage: images.products.kids,
    categories: [
      {
        name: "Boys",
        meta: "Knits · woven · sweaters",
        image: images.products.kids,
        position: "right",
      },
      {
        name: "Girls",
        meta: "Knits · woven · sweaters",
        image: images.products.kids,
        position: "left",
      },
      {
        name: "Basics",
        meta: "Everyday programmes",
        image: images.products.kids,
      },
      {
        name: "Outerwear",
        meta: "Seasonal layers",
        image: images.products.kids,
        position: "right",
      },
      {
        name: "Sweaters",
        meta: "Multiple gauges listed by Fashion Texa",
        image: images.products.circularKnits,
      },
    ],
    tone: "light",
  },
};

export const categories = {
  "men/circular-knits": {
    heroImage: images.products.circularKnits,
    eyebrow: "MEN / CIRCULAR KNITS",
    title: "Versatile knitwear.\nBuilt for everyday collections.",
    intro:
      "Fashion Texa presents sourcing and development across a wide range of circular knit apparel.",
    items: [
      {
        name: "T-Shirts",
        meta: "Jersey / Cotton / CVC",
        to: "/products/men/circular-knits/t-shirts",
        image: images.products.tshirts,
      },
      {
        name: "Polo Shirts",
        meta: "Piqué / Cotton blends",
        image: images.products.circularKnits,
        position: "center",
      },
      { name: "Tank Tops", meta: "Jersey / Rib", image: images.products.men },
      {
        name: "Hoodies",
        meta: "Fleece / French Terry",
        image: images.products.circularKnits,
        position: "right",
      },
      {
        name: "Sweatshirts",
        meta: "French Terry / Fleece",
        image: images.products.circularKnits,
        position: "right",
      },
      {
        name: "Nightwear",
        meta: "Jersey / Blends",
        image: images.products.overview,
      },
    ],
    fabrics: [
      "Cotton",
      "CVC",
      "PC",
      "Viscose",
      "Single jersey",
      "Piqué",
      "Interlock",
      "Rib",
      "French Terry",
      "Fleece",
      "Blends",
    ],
  },
  "men/woven": {
    heroImage: images.products.woven,
    eyebrow: "MEN / WOVEN",
    title: "Structured apparel.\nFlexible sourcing.",
    intro:
      "A category framework for woven tops, bottoms and lighter outer layers.",
    items: [
      {
        name: "Casual Shirts",
        meta: "Poplin / Oxford",
        image: images.products.woven,
        position: "left",
      },
      {
        name: "Formal Shirts",
        meta: "Cotton / Blends",
        image: images.products.woven,
        position: "left",
      },
      {
        name: "Trousers",
        meta: "Twill / Canvas",
        image: images.products.woven,
        position: "center",
      },
      {
        name: "Shorts",
        meta: "Cotton / Linen",
        image: images.products.woven,
        position: "center",
      },
      {
        name: "Jackets",
        meta: "Structured woven",
        image: images.products.woven,
        position: "right",
      },
    ],
    fabrics: [
      "Cotton",
      "Poplin",
      "Oxford",
      "Twill",
      "Canvas",
      "Linen",
      "Blends",
    ],
  },
  "women/circular-knits": {
    heroImage: images.products.womenKnits,
    eyebrow: "WOMEN / CIRCULAR KNITS",
    title: "Fluid essentials.\nDesigned around the brief.",
    intro:
      "A flexible presentation of circular knit categories for modern womenswear collections.",
    items: [
      {
        name: "T-Shirts",
        meta: "Jersey / Cotton",
        image: images.products.women,
      },
      {
        name: "Tops",
        meta: "Jersey / Rib",
        image: images.products.women,
        position: "top",
      },
      {
        name: "Dresses",
        meta: "Jersey / Blends",
        image: images.products.women,
        position: "center",
      },
      {
        name: "Sweatshirts",
        meta: "French Terry",
        image: images.products.circularKnits,
      },
      {
        name: "Hoodies",
        meta: "Fleece / French Terry",
        image: images.products.circularKnits,
        position: "right",
      },
      {
        name: "Nightwear",
        meta: "Soft jersey",
        image: images.products.overview,
      },
    ],
    fabrics: [
      "Cotton",
      "CVC",
      "Viscose",
      "Jersey",
      "Rib",
      "French Terry",
      "Fleece",
      "Blends",
    ],
  },
} as const;

export const productImage = images.products.overview;
