"use client";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./Menu-list";
import ItemsMenuMobile from "./Items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();

  const cart = useCart();
  const { lovedItem } = useLovedProducts();

  return (
    <div className="flex items-center justify-between mx-auto p-4 cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Jorge <span className="font-bold">Dev</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-2" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${
            lovedItem.length > 0 && "fill-black dark:fill-white"
          }`}
          onClick={() => router.push("/loved-products")}
        />
        <UserButton />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
