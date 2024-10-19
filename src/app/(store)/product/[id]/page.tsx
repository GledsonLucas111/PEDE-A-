"use client";

import { Footer } from "@/components/footer";
import { useCartStore } from "@/globalStateCar/CartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface ProductProps {
  params: {
    id: string;
  };
}
export default function Product(props: ProductProps) {
  const items = useCartStore((state) => state.available);
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
      <button
        className="h-10 w-10 fixed top-0 bg-slate-50 rounded-full flex items-center justify-center m-2"
        onClick={() => push("/")}
      >
        <p className="text-2xl text-primary"><MdArrowBackIosNew/></p>
      </button>
      <img
        className="min-w-full max-w-0 min-h-80 max-h-0 object-cover shadow-lg border-white600 "
        src={item[0].image}
        alt={item[0].name}
      />

      <div className="flex pl-5 pt-4 flex-col">
        <p className="block font-bold text-lg text-gray400">{item[0].name}</p>
        <p className="text-gray font-bold">{item[0].description}</p>
        <p className="text-gray400 ">
          {JSON.parse(item[0].price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <Footer.Root>
        <div className="flex gap-4 items-center px-5">
          <button
            onClick={() =>
              setQuantity(quantity > 1 ? quantity - 1 : quantity = 1)
            }
            className={`font-bold text-2xl ${quantity === 1?"text-gray":"text-primary"}`}
 
          >
            <p>-</p>
          </button>
          <p className="font-bold text-gray400">{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="font-bold text-primary text-2xl"
          >
            <p>+</p>
          </button>
        </div>
        <Footer.Actions
          sumPrice={sumPrice}
          text="Adicionar"
          addToCart={() => addToCart(item[0])}
        />
      </Footer.Root>
    </div>
  );
}
