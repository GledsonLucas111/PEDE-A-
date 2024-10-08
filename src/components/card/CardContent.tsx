"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardContentProps {
  items: any[];
  url?: string;
  inCart: boolean;
  quantityInCart?: number;
}

export function CardContent({ items, url, inCart, quantityInCart }: CardContentProps) {
  const { push } = useRouter();
  return (
    <div
      className={`flex flex-col gap-5 justify-center  ${
        inCart ? `pt-16` : `pb-20 pt-2`
      }`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={url ? () => push(`${url}/${item.id}`) : () => push("")}
        >
          <div
            className={`flex w-full justify-between   ${
              inCart ? `flex-row-reverse gap-2` : ``
            }`}
          >
            {inCart ? (
              <div className="flex gap-1 items-center">
                <button className="border h-7">deletar</button>
              </div>
            ) : null}
            <div className="flex flex-col justify-between items-start">
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
          </div>
          {inCart ? (
            null
          ) : (
            <p className="w-full border-b border-white600 pt-1"></p>
          )}
        </button>
      ))}
    </div>
  );
}
