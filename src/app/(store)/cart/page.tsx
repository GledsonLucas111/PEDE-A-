"use client";
import { Card } from "@/components/card";
import { useCartStore } from "@/globalStateCar/CartStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Checkout() {
  const { push } = useRouter();
  const items = useCartStore((state) => state.cart);
  
  useEffect(() => {}, [items]);


  function sumPrice() {
    const total: number = 0;
    const allPrice = items
      .map((item) => parseFloat(item.price))
      .reduce((acc, av) => acc + av, total);
    const formaterPrice = allPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formaterPrice;
  }
  
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex p-4 w-full bg-slate-50 items-center gap-4 font-bold fixed top-0">
        <button onClick={() => push("/")}>
          <MdArrowBackIosNew size="1.5rem" />
        </button>
        <p className="">Carrinho</p>
      </div>

      <div className="flex flex-col ">
        <Card.Root>
          <Card.Content items={items} inCart={true} quantityInCart={1}></Card.Content>
        </Card.Root>

        <div className="pb-24 flex justify-center">
        <button
          onClick={() => push("/")}
          className=" h-10 text-red rounded font-bold flex items-center justify-center"
        >
          adicionar mais itens
        </button>
        </div>

      </div>

      <footer className="w-full p-4  bg-slate-50 shadow flex items-center fixed bottom-0">
        <button className="w-full h-10 bg-green text-white active:bg-green300 rounded font-bold flex items-center justify-between px-2">
          <p className="">Continuar</p>
          <p className="">{sumPrice()}</p>
        </button>
      </footer>
    </div>
  );
}
