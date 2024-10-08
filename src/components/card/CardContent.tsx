'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardContentProps {
  items: any[];
  url?: string;
  inCart: boolean;
}

export function CardContent({ items, url, inCart }: CardContentProps) {
  const { push } = useRouter();
  console.log(url)
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={url? ()=> push(`${url}/${item.id}`): ()=> push("")}>
          <div className={`flex w-full justify-between ${inCart ? `` : ``}`}>
            <div className="flex flex-col justify-between">
              <p className="text-gray font-bold">{item.name}</p>
              <p className="text-gray">{item.description}</p>
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
            ``
          ) : (
            <p className="w-full border-b border-white600 pt-1"></p>
          )}
        </div>
      ))}
    </div>
  );
}
