"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardContentProps {
  items: any[];
  url?: string;
}

export function Card({ items, url }: CardContentProps) {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-5 justify-center px-2 $ pb-20 pt-2">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => push(`${url}/${item.id}`)}
          className="items-center"
        >
          <section className="flex justify-between">
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
              src={item.image}
              alt="imagem acai"
              className="min-w-24 min-h-24 max-w-24 max-h-24 rounded object-cover ml-2"
              width={100}
              height={100}
            />
          </section>
          <p className="w-full border-b border-white600 pt-1"></p>
        </div>
      ))}
    </div>
  );
}
