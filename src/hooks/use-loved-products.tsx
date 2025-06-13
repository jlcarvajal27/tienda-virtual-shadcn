import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { CoffeeProduct } from "@/interface/coffe-product-interface";

interface UseLovedProductType {
  lovedItem: CoffeeProduct[];
  addLovedItem: (data: CoffeeProduct) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductType>(
    (set, get) => ({
      lovedItem: [],
      addLovedItem: (data: CoffeeProduct) => {
        const currentLovedItems = get().lovedItem;
        const existingItems = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItems) {
          return toast.error("El producto ya existe en la lista de Fav", {
            richColors: true,
          });
        }

        set({
          lovedItem: [...get().lovedItem, data],
        });

        toast.success("producto añadido a la lista ");
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItem: [...get().lovedItem.filter((item) => item.id !== id)],
        });
        toast.success("producto se ha eliminado de la lista ");
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
