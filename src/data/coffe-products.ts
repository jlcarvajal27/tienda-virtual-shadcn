import { CoffeeProduct } from "@/interface/coffe-product-interface";

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    title: "Café Espresso",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Un espresso intenso con notas de chocolate oscuro y nuez tostada. Perfecto para amantes del sabor fuerte.",
    price: 3.5,
    category: "espresso",
    origin: "Colombia",
    taste: "nuez",
  },
  {
    id: 2,
    title: "Café Latte",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Café suave con leche cremosa y un toque dulce de vainilla natural. Ideal para cualquier momento del día.",
    price: 4.0,
    category: "latte",
    origin: "Brasil",
    taste: "Vainilla",
  },
  {
    id: 3,
    title: "Café Mocha",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Mezcla de café, leche vaporizada y chocolate. Una delicia para los amantes del dulce.",
    price: 4.5,
    category: "mocha",
    origin: "México",
    taste: "Chocolate",
  },
  {
    id: 4,
    title: "Cold Brew",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Café infusionado en frío durante 12 horas. Suave, con bajo nivel de acidez y sabor refrescante.",
    price: 3.8,
    category: "cold brew",
    origin: "Etiopía",
    taste: "Frutos",
  },
  {
    id: 5,
    title: "Café Asia",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Café negro con un sabor equilibrado y cuerpo medio. Una opción tradicional y versátil.",
    price: 3.0,
    category: "americano",
    origin: "Guatemala",
    taste: "cacao",
  },
  {
    id: 6,
    title: "Capuccino Cremoso",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "Espuma densa, leche caliente y espresso en perfecta armonía. Ideal para comenzar el día.",
    price: 4.2,
    category: "capuccino",
    origin: "Perú",
    taste: "Suave",
  },
];
