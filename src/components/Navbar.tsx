"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./Menu-list";
import ItemsMenuMobile from "./Items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();
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
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />

        <User
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/user")}
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
