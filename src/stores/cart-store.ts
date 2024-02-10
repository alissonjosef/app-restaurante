import { ProductProps } from "@/utils/data/products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import * as cartInMemory from "./helpers/cart-in-memory";

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  removeProductFromCart: (product: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),

      removeProductFromCart: (product: string) =>
        set((state) => ({
          products: cartInMemory.remover(state.products, product),
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "app-restaurante:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
