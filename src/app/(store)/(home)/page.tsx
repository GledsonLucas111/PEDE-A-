"use client";
import { Card } from "@/components/card";
import Category from "@/components/category";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { useCartStore } from "@/globalStateCar/CartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";

export default function Home() {
  const items = useCartStore((state) => state.avaliableItems);
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
        <Card.Root>
          <Card.Content
            items={items}
            inCart={false}
            url="/product"
          ></Card.Content>
        </Card.Root>
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
