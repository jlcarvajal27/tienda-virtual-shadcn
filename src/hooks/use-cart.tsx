import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { CoffeeProduct } from "@/interface/coffe-product-interface";

interface CartStore {
  items: CoffeeProduct[];
  addItem: (data: CoffeeProduct) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CoffeeProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("El producto ya existe en el carrito", {
            richColors: true,
          });
        }

        set({ items: [...currentItems, data] });

        toast.success("Producto añadido al carrito");
      },
      removeItem: (id: number) => {
        const filteredItems = get().items.filter((item) => item.id !== id);
        set({ items: filteredItems });

        toast.success("Producto eliminado del carrito");
      },
      removeAll: () => {
        set({ items: [] });
        toast.info("Carrito vacío");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
