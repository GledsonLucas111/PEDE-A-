'use client';
import { useCartStore } from "@/globalStateCar/CartStore"
import { useState } from "react";

interface ProductProps {
  params: {
    id: string,
  }
}
export default function Product(props: ProductProps) {
 const items = useCartStore((state)=> state.avaliableItems);
 const add = useCartStore((state)=> state.addToCart)
 let [quantity, setQuantity] = useState(1);

 const item = items.filter((item)=> item.id === props.params.id)

 
  return(
    <div>
      {item[0].name}
      {item[0].price}

      <footer className="w-full p-4  gap-7 bg-slate-50 shadow flex items-center justify-between fixed bottom-0">
        <div className="flex gap-4 items-center">
          <button onClick={()=> setQuantity(quantity--)} className="font-bold text-red text-2xl">-</button>
          <p>{quantity}</p>
          <button onClick={()=> setQuantity(quantity++)} className="font-bold text-red text-2xl">+</button>
        </div>
        <button className="w-full h-10 bg-green text-white active:bg-green300 rounded font-bold flex items-center justify-between px-2">
          <p className="">adicionar</p>
        </button>
      </footer>
    </div>
  )
}