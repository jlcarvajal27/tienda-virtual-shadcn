"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { CoffeeProduct } from "@/interface/coffe-product-interface";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: CoffeeProduct;
};

const InfoProduct = ({ product }: InfoProductProps) => {
  const { addItem, items } = useCart();

  const { addLovedItem } = useLovedProducts();

  console.log(items);
  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl"> {product.title}</h1>
        <div className="flex items-center justify-between gap-3 mt-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit ">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
            {product.origin}
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <p>{product.description}</p>
      <hr className="my-4" />
      <p className="my-4 text-2xl">{product.price}$</p>
      <div className="flex items-center  gap-3  overflow-visible-important">
        <Button
          className=" w-62 cursor-pointer"
          onClick={() => addItem(product)}
        >
          Comprar
        </Button>
        <Heart
          size={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-red-500"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
