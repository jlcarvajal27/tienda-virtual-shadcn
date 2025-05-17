"use client";

import { useParams } from "next/navigation";
import { coffeeProducts } from "@/data/coffe-products";

export default function page() {
  const params = useParams();
  const slug = params.categorySlug;

  const filteredProducts = coffeeProducts.filter(
    (product) => product.categorySlug === slug
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">Cafe {slug}</h1>
      <hr className="mb-10" />

      {filteredProducts.length === 0 ? (
        <p>No hay productos disponibles para esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="dark:bg-dark rounded shadow p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-500">
                {product.origin} – {product.taste}
              </p>
              <p className="text-gray-700 dark:text-white">
                {product.description}
              </p>
              <p className="font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
