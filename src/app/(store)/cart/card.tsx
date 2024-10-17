"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi2";

interface CardContentProps {
  items: any[];
  removeCart?: (id: string) => any;
}

export function CardCart({ items, removeCart }: CardContentProps) {
  return (
    <div className="`flex flex-col gap-5 justify-center px-2 pt-16">
      {items.map((item) => (
        <div key={item.id} className="items-center flex  justify-between">
          <section className="flex justify-between gap-2 ">
              <Image
                src={item.image}
                alt="imagem acai"
                className="min-w-24 min-h-24 max-w-24 max-h-24 rounded object-cover ml-2"
                width={100}
                height={100}
              />
            <div className="flex flex-col items-start">
              <p className="text-gray font-bold">{item.name}</p>
              <p className="text-gray text-start">{item.description}</p>
              <p className="text-green ">
                {JSON.parse(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </section>
          <section className="flex gap-1 items-center">
            <button className="h-7 text-red mr-3 text-xl text-center active:text-green">
              <HiTrash />
            </button>
          </section>
        </div>
      ))}
    </div>
  );
}
