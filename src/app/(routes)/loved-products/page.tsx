"use client";

import { useLovedProducts } from "@/hooks/use-loved-products";
import React from "react";
import LovedItemsProduct from "./components/loved-items-products";

export default function page() {
  const { lovedItem } = useLovedProducts();

  return (
    <div className="max-w-4xl py-4 p-6 mx-auto  sm:py-32 sm:px-24">
      <h1 className="text-2xl font-semibold">Productos que te gustaron </h1>

      <div>
        <div>
          {lovedItem.length === 0 && (
            <p className="text-center">
              No hay productos en la lista de favoritos
            </p>
          )}
          <ul>
            {lovedItem.map((item) => (
              <LovedItemsProduct product={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
