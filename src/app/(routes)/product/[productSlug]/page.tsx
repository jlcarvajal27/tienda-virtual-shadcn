"use client";

import { useParams } from "next/navigation";
import React from "react";
import CarouselProduct from "../components/carousel-product";
import InfoProduct from "../components/info-product";
import { coffeeProducts } from "@/data/coffe-products";

export default function Page() {
  const params = useParams();
  const slug = params.productSlug;

  const product = coffeeProducts.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-center py-20">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={product} />
        </div>
      </div>
    </div>
  );
}
