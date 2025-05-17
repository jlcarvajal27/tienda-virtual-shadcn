"use client";

import { use, useEffect, useState } from "react";
import SkeletonSchema from "./skeletonSchema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CoffeeProduct } from "@/interface/coffe-product-interface";
import { coffeeProducts } from "@/data/coffe-products";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";

const FeaturedProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CoffeeProduct[]>([]);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts(coffeeProducts);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8"> Productos destacados </h3>
      <Carousel>
        <CarouselContent className="ml-2 md:ml-4">
          {isLoading ? (
            <SkeletonSchema grid={3} />
          ) : (
            products.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <img src={product.image} alt={product.title} />
                      <div className="absolute w-full px-6 transition duration-200 opacity-0 group hover:opacity-100 bottom-5">
                        <div className="flex justify-center gap-x-6">
                          <IconButton
                            onClick={() => router.push("/")}
                            icon={<Expand size={20} />}
                            className="text-gray-600 cursor-pointer"
                          />

                          <IconButton
                            onClick={() => router.push("/")}
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600 cursor-pointer"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex justify-between gap-4 px-8">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                          {product.origin}
                        </p>
                        <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                          {product.taste}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProduct;
