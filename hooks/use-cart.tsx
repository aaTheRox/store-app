import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import IProductType from "../types/product";
import IProductCart from "../types/product-cart";
import { toast } from "@/hooks/use-toast";

interface ICartStore {
  items: IProductType[];
  subtotal: () => void;
  addItem: (data: IProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      subtotal: () => {
        return 1;
      },
      addItem: (data: IProductCart) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
          return toast({
            title: "El producto ya existe en el carrito!",
            variant: "destructive",
          });
        }

        set({ items: [...get().items, data] });
        toast({ title: `Has añadido ${data.productName} al carrito` });
      },

      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast({ title: "El producto ha sido eliminado del carrito!" });
      },

      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
