"use client";
import Category from "@/app/(store)/(home)/category";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { useCartStore } from "@/globalStateCar/CartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { Card } from "./card";

export default function Home() {
  const items = useCartStore((state) => state.available);
  const [activeHome, setActiveHome] = useState(true);
  const [activeCart, setActiveCart] = useState(false);
  const { push } = useRouter();
  const category = [
    "Bolos",
    "Fatias",
    "Copo da felicidade",
    "Bolo no pote",
    "Brownies",
  ];
  let newItems: any = [];

  function goToHome() {
    setActiveHome(true);
    setActiveCart(false);
    push("/");
  }
  function goToCart() {
    setActiveCart(true);
    setActiveHome(false);
    push("/cart");
  }
  function filterItems() {
    for (let i = 0; i < category.length; i++) {
      newItems.push(items.filter((item) => item.category?.toLocaleLowerCase() === category[i]?.toLocaleLowerCase()));
    }
    return newItems;
  }

  return (
    <div className="flex flex-col h-full justify-between ">
      <Header />
      <Category categoryItems={category} />
      <div className="flex flex-col h-full">
        {filterItems().map((items: any) => {
          return <Card items={items} key={items[0]?.id}/>;
        })}
      </div>

      <Footer.Root>
        <Footer.Button
          goTo={goToHome}
          active={activeHome}
          icon={<TiHomeOutline />}
          text="Inicio"
        ></Footer.Button>
        <Footer.Button
          goTo={goToCart}
          active={activeCart}
          icon={<IoCartOutline />}
          text="Carrinho"
        ></Footer.Button>
      </Footer.Root>
    </div>
  );
}
