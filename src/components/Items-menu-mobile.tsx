import { Menu } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/category/cafe-molido" className="block">
          Cafe molido
        </Link>
        <Link href="/category/cafe-grano" className="block">
          Cafe en grano
        </Link>
        <Link href="/category/cafe-capsula" className="block">
          Cafe en capsula
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
