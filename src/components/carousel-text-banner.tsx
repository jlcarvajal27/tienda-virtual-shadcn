"use client";

import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

const dataCarouselTop = [
  {
    id: 1,
    titulo: "Descubre lo Nuevo",
    descripcion: "Explora las últimas tendencias en tecnología y diseño.",
    link: "/novedades",
  },
  {
    id: 2,
    titulo: "Ofertas Exclusivas",
    descripcion: "Aprovecha nuestras promociones limitadas por tiempo.",
    link: "/ofertas",
  },
  {
    id: 3,
    titulo: "Lo Más Vendido",
    descripcion: "Conoce los productos más populares entre nuestros clientes.",
    link: "/mas-vendido",
  },
  {
    id: 4,
    titulo: "Comprar novedades",
    descripcion: "Todas las novedades al 50% de descuento.",
    link: "/mas-vendido",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <div className="relative w-full max-w-4xl mx-auto">
        <Carousel
          className="w-full mx-auto"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="flex items-center justify-between w-full">
            <CarouselContent>
              {dataCarouselTop.map(({ id, titulo, descripcion, link }) => (
                <CarouselItem
                  key={id}
                  onClick={() => router.push(link)}
                  className="cursor-pointer "
                >
                  <Card className="shadow-none border-none bg-transparent">
                    <CardContent className="flex flex-col justify-center text-center p-2">
                      <p className="sm:text-lg text-wrap dark:text-secondary font-semibold">
                        {titulo}
                      </p>
                      <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                        {descripcion}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1 py-2"></div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTextBanner;
