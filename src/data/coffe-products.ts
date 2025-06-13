import { CoffeeProduct } from "@/interface/coffe-product-interface";

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    title: "Café Espresso",
    slug: "cafe-espresso",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Un espresso intenso con notas de chocolate oscuro y nuez tostada. Perfecto para amantes del sabor fuerte.",
    price: 1050,
    categorySlug: "capsula",
    origin: "Colombia",
    taste: "nuez",
  },
  {
    id: 2,
    title: "Café Latte",
    slug: "cafe-latte",
    images: [
      "https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café suave con leche cremosa y un toque dulce de vainilla natural. Ideal para cualquier momento del día.",
    price: 977,
    categorySlug: "capsula",
    origin: "Brasil",
    taste: "Vainilla",
  },
  {
    id: 3,
    title: "Café Mocha",
    slug: "cafe-mocha",
    images: [
      "https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Mezcla de café, leche vaporizada y chocolate. Una delicia para los amantes del dulce.",
    price: 500,
    categorySlug: "molido",
    origin: "México",
    taste: "Chocolate",
  },
  {
    id: 4,
    title: "Cold Brew",
    slug: "cold-brew",
    images: [
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café infusionado en frío durante 12 horas. Suave, con bajo nivel de acidez y sabor refrescante.",
    price: 800,
    categorySlug: "molido",
    origin: "Etiopía",
    taste: "Frutos",
  },
  {
    id: 5,
    title: "Café Asia",
    slug: "cafe-asia",
    images: [
      "https://images.unsplash.com/photo-1621267860478-dbdd589372db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café negro con un sabor equilibrado y cuerpo medio. Una opción tradicional y versátil.",
    price: 600,
    categorySlug: "grano",
    origin: "Guatemala",
    taste: "cacao",
  },
  {
    id: 6,
    title: "Cappuccino Cremoso",
    slug: "capuccino-cremoso",
    images: [
      "https://plus.unsplash.com/premium_photo-1673459683929-3f3574de7e75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Espuma densa, leche caliente y espresso en perfecta armonía. Ideal para comenzar el día.",
    price: 490,
    categorySlug: "grano",
    origin: "Perú",
    taste: "Suave",
  },
  {
    id: 7,
    title: "Cápsula Intenso",
    slug: "capsula-intenso",
    images: [
      "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Cápsulas de café intenso con aroma profundo y sabor robusto para una experiencia fuerte.",
    price: 390,
    categorySlug: "capsula",
    origin: "Honduras",
    taste: "suave",
  },
  {
    id: 8,
    title: "Molido Orgánico",
    slug: "molido-organico",
    images: [
      "https://images.unsplash.com/photo-1495862433577-132cf20d7902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Café molido orgánico con notas florales y cítricas, cultivado sin pesticidas.",
    price: 410,
    categorySlug: "molido",
    origin: "Nicaragua",
    taste: "cítrico",
  },
  {
    id: 9,
    title: "Grano Supremo",
    slug: "grano-supremo",
    images: [
      "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Granos enteros seleccionados, frescos y listos para moler. Sabor complejo y aromático.",
    price: 460,
    categorySlug: "grano",
    origin: "Kenia",
    taste: "afrutado",
  },
];
