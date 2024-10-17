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
    <div
      className={`flex flex-col justify-center px-4 py-2 gap-2 ${
        items[0].category === "Barca" ? "pb-20" : null
      }`}
    >
      <a className="font-bold text-lg text-gray400 my-2" id={items[0].category}>
        {items[0]?.category} <p className="w-full border text-white600" />
      </a>

      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => push(`product/${item.id}`)}
          className="items-center "
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
