"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi2";

interface CardContentProps {
  items: any[];
  url?: string;
  inCart: boolean;
  quantityInCart?: number;
}

export function CardContent({
  items,
  url,
  inCart,
}: CardContentProps) {
  const { push } = useRouter();
  return (
    <div
      className={`flex flex-col gap-5 justify-center px-2 ${
        inCart ? `pt-16` : `pb-20 pt-2`
      }`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={url ? () => push(`${url}/${item.id}`) : () => null}
          className={`items-center ${inCart?"flex  justify-between": "" }`}
        >
            <section className={`flex justify-between ${inCart? "flex-row-reverse gap-2" : ""}`}>
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
              <Image
                src={`${item.image}`}
                alt="imagem acai"
                className="min-w-24 min-h-24 max-w-24 max-h-24 rounded object-cover"
                width={100}
                height={100}
              />
            </section>
            {inCart ? (
              <section className="flex gap-1 items-center">
                <button className="h-7 text-red mr-3 text-xl text-center active:text-green">
                  <HiTrash />
                </button>
              </section>
            ) : null}
          {inCart ? null : (
            <p className="w-full border-b border-white600 pt-1"></p>
          )}
        </button>
      ))}
    </div>
  );
}
