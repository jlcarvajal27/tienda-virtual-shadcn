import { CoffeeProduct } from "@/interface/coffe-product-interface";

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    title: "Café Espresso",
    slug: "cafe-espresso",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Un espresso intenso con notas de chocolate oscuro y nuez tostada. Perfecto para amantes del sabor fuerte.",
    price: 3.5,
    categorySlug: "capsula",
    origin: "Colombia",
    taste: "nuez",
  },
  {
    id: 2,
    title: "Café Latte",
    slug: "cafe-latte",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café suave con leche cremosa y un toque dulce de vainilla natural. Ideal para cualquier momento del día.",
    price: 4.0,
    categorySlug: "capsula",
    origin: "Brasil",
    taste: "Vainilla",
  },
  {
    id: 3,
    title: "Café Mocha",
    slug: "cafe-mocha",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Mezcla de café, leche vaporizada y chocolate. Una delicia para los amantes del dulce.",
    price: 4.5,
    categorySlug: "molido",
    origin: "México",
    taste: "Chocolate",
  },
  {
    id: 4,
    title: "Cold Brew",
    slug: "cold-brew",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café infusionado en frío durante 12 horas. Suave, con bajo nivel de acidez y sabor refrescante.",
    price: 3.8,
    categorySlug: "molido",
    origin: "Etiopía",
    taste: "Frutos",
  },
  {
    id: 5,
    title: "Café Asia",
    slug: "cafe-asia",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café negro con un sabor equilibrado y cuerpo medio. Una opción tradicional y versátil.",
    price: 3.0,
    categorySlug: "grano",
    origin: "Guatemala",
    taste: "cacao",
  },
  {
    id: 6,
    title: "Capuccino Cremoso",
    slug: "capuccino-cremoso",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Espuma densa, leche caliente y espresso en perfecta armonía. Ideal para comenzar el día.",
    price: 4.2,
    categorySlug: "grano",
    origin: "Perú",
    taste: "Suave",
  },
  {
    id: 7,
    title: "Cápsula Intenso",
    slug: "capsula-intenso",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Cápsulas de café intenso con aroma profundo y sabor robusto para una experiencia fuerte.",
    price: 3.9,
    categorySlug: "capsula",
    origin: "Honduras",
    taste: "especiado",
  },
  {
    id: 8,
    title: "Molido Orgánico",
    slug: "molido-organico",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café molido orgánico con notas florales y cítricas, cultivado sin pesticidas.",
    price: 4.1,
    categorySlug: "molido",
    origin: "Nicaragua",
    taste: "cítrico",
  },
  {
    id: 9,
    title: "Grano Supremo",
    slug: "grano-supremo",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Granos enteros seleccionados, frescos y listos para moler. Sabor complejo y aromático.",
    price: 4.6,
    categorySlug: "grano",
    origin: "Kenia",
    taste: "afrutado",
  },
];
