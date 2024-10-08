import { create } from "zustand";

const initialItems =[{
  id: "1",
  name: 'PRODUTO 1',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '29.99',
  image: '/images/acai1.jpeg',
},
{
  id: "2",
  name: 'PRODUTO 2',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '15.00',
  image: '/images/acai-2.jpg',
},
{
  id: "3",
  name: 'PRODUTO 3',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '10.99',
  image: '/images/acai1.jpeg',
},
{
  id: "4",
  name: 'PRODUTO 4',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '31.50',
  image: '/images/acai-2.jpg',
},
{
  id: "5",
  name: 'PRODUTO 5',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '26.00',
  image: '/images/acai1.jpeg',
},
{
  id: "6",
  name: 'PRODUTO 6',
  description: 'Os melhores momentos da vida pedem um açaí',
  price: '24.00',
  image: '/images/acai-2.jpg',
},
]

type Item = {
  id: string,
  name: string,
  description?: string,
  price: string,
  image?: string,
}

type CartStore = {
  avaliableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    avaliableItems: initialItems,
    addToCart: (Item: Item) =>  set((state)=> ({cart: [...state.cart, Item]})),
    removeFromCart: (id: string) =>  set((state)=> ({cart: state.cart.filter((item) => item.id !== id)}))
  }

})