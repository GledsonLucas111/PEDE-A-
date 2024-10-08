"use client";
import { useCartStore } from "@/globalStateCar/CartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardProduct() {
  const products = useCartStore((state) => state.avaliableItems);
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-2 pt-2 px-5 h-full">
      {products.map((product) => (
        <div key={product.id} onClick={() => push(`/product/${product.id}`)}>
          <div className="flex w-full justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-gray font-bold">{product.name}</p>
              <p className="text-green ">
                {JSON.parse(product.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <img
              src={product.image}
              alt="imagem acai"
              className="w-24 h-24 rounded object-cover"
            />
          </div>
          <p className="w-full border-b border-gray pt-1"></p>
        </div>
      ))}
    </div>
  );
}
