"use client";
import { Footer } from "@/components/footer";
import { useCartStore } from "@/globalState/GlobalState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { CardCart } from "./card";

export default function Checkout() {
  const { push } = useRouter();
  const items = useCartStore((state) => state.cart);
  const removeCart = useCartStore((state) => state.removeFromCart)

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
          <p className="text-2xl text-gray400"><MdArrowBackIosNew /></p>
        </button>
        <p className="text-gray400">Carrinho</p>
      </div>

      <div className="flex flex-col ">
        <CardCart items={items} removeCart={removeCart}/>

        <div className="pb-24  flex justify-center">
        <button
          onClick={() => push("/")}
          className=" h-10 text-red rounded font-bold flex items-center justify-center"
        >
          adicionar mais itens
        </button>
        </div>

      </div>

      <Footer.Root>
        <Footer.Actions sumPrice={sumPrice} text="Confirmar" />
      </Footer.Root>
    </div>
  );
}
