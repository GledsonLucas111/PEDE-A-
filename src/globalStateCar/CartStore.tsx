import { initialItems } from "@/data/dataProducts";
import { create } from "zustand";

export type Item = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
};


type CartStore = {
  available: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    available: initialItems,
    addToCart: (item: Item) =>
      set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id: string) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
