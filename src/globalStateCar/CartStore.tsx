import { create } from "zustand";

const initialProducts =[{
  id: "1",
  name: 'PRODUTO 1',
  description: '',
  price: '29.99',
  image: '/images/acai1.jpeg',
},
{
  id: "2",
  name: 'PRODUTO 2',
  description: '',
  price: '15.00',
  image: '/images/acai-2.jpg',
},
{
  id: "3",
  name: 'PRODUTO 3',
  description: '',
  price: '10.99',
  image: '/images/acai1.jpeg',
},
{
  id: "4",
  name: 'PRODUTO 4',
  description: '',
  price: '31.50',
  image: '/images/acai-2.jpg',
},
{
  id: "5",
  name: 'PRODUTO 5',
  description: '',
  price: '26.00',
  image: '/images/acai1.jpeg',
},
{
  id: "6",
  name: 'PRODUTO 6',
  description: '',
  price: '24.00',
  image: '/images/acai-2.jpg',
},
]

type Product = {
  id: string,
  name: string,
  description?: string,
  price: string,
  image?: string,
}

type CartStore = {
  avaliableItems: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    avaliableItems: initialProducts,
    addToCart: (product: Product) =>  set((state)=> ({cart: [...state.cart, product]})),
    removeFromCart: (id: string) =>  set((state)=> ({cart: state.cart.filter((item) => item.id !== id)}))
  }

})