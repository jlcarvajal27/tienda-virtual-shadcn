"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { coffeeProducts } from "@/data/coffe-products";
import Image from "next/image";

const CarouselProduct = () => {
  const product = coffeeProducts[0];

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {product.images.map((imgUrl, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[16/9] sm:h-[280px]">
                <Image
                  src={imgUrl}
                  alt={`${product.title} image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
