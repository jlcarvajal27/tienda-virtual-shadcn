import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { CoffeeProduct } from "@/interface/coffe-product-interface";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemsProductProps {
  product: CoffeeProduct;
}

const LovedItemsProduct = ({ product }: LovedItemsProductProps) => {
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckOut = () => {
    addItem(product);
    removeLovedItem(product.id);
  };
  console.log(product);
  console.log(product.price);
  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/products/${product.slug}`)}>
        <img
          src={product.images[1]}
          alt={product.title}
          className="w-24 h-24 rounded-md overflow-hidden sm:w-auto sm:h-32 "
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="font-semibold">{product.price} $</p>
          <div className="flex items-center  justify-between mt-2">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
              {product.taste}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
              {product.origin}
            </p>
          </div>
          <Button
            className="mt-5 rounded-full cursor-pointer"
            onClick={() => addToCheckOut()}
          >
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center cursor-pointer bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X
              size={20}
              onClick={() => removeLovedItem(product.id)}
              className="dark:text-black"
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemsProduct;
