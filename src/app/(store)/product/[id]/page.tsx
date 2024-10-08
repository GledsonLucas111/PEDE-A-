"use client";
import { useCartStore } from "@/globalStateCar/CartStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface ProductProps {
  params: {
    id: string;
  };
}
export default function Product(props: ProductProps) {
  const items = useCartStore((state) => state.avaliableItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const { push } = useRouter();
  let [quantity, setQuantity] = useState(1);

  const item = items.filter((item) => item.id === props.params.id);

  function sumPrice() {
    // formata preco e multiplica pela quantidade de items selecionados
    const priceFormated = parseFloat(item[0].price) * quantity;

    return priceFormated.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="flex flex-col">
      <button className="h-10 w-10 fixed top-0 bg-white rounded-full flex items-center justify-center m-2" onClick={()=> push("/")}><MdArrowBackIosNew size="1.5rem"/></button>
      <img
        className="min-w-full max-w-0 min-h-80 max-h-0 object-cover shadow-lg border-white600 "
        src={item[0].image}
        alt={item[0].name}
      />

      <div className="flex pl-5 pt-4 flex-col">
        <p className="block font-bold text-lg">{item[0].name}</p>
        <p>{item[0].description}</p>
        <p className=" ">
          {JSON.parse(item[0].price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <footer className="w-full p-4  gap-7 bg-slate-50 shadow flex items-center justify-between fixed bottom-0">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setQuantity(quantity--)}
            className="font-bold text-red text-2xl"
          >
            <p>-</p>
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => setQuantity(quantity++)}
            className="font-bold text-red text-2xl"
          >
            <p>+</p>
          </button>
        </div>
        <button className="w-full h-10 bg-green text-white active:bg-green300 rounded font-bold flex items-center justify-between px-2" onClick={()=> addToCart(item[0])}>
          <p className="">Adicionar</p>
          <p className="">{sumPrice()}</p>
        </button>
      </footer>
    </div>
  );
}
