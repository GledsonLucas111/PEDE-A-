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

  const goToHome = () => {
    setActiveHome(true);
    setActiveCart(false);
    push("/");
  };
  const goToCart = () => {
    setActiveCart(true);
    setActiveHome(false);
    push("/cart");
  };

  return (
    <div className="flex flex-col h-full justify-between ">
      <Header />
      <Category />
      <div className="flex flex-col h-full">
        <Card items={items} url="/product" />
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
