"use client";
import { TiHomeOutline } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [activeHome, setActiveHome] = useState(true);
  const [activeCart, setActiveCart] = useState(false);
  const { push } = useRouter();

  const goToCart = () => {
    setActiveCart(true);
    setActiveHome(false);
    push("/cart");
  };

  const goToHome = () => {
    setActiveHome(true);
    setActiveCart(false);
    push("/");
  };

  return (
    <footer className="w-full px-4 h-16 bg-slate-50 flex justify-between shadow fixed bottom-0 ">
      <button
        onClick={goToHome}
        className={`flex flex-col items-center w-14 active:bg-cian rounded gap-1 ${
          activeHome ? "justify-end" : "justify-center"
        }`}
      >
        <TiHomeOutline
          size="1.5rem"
          color={`${activeHome ? "#440487" : "#686D76"}`}
        />
        <p
          className={`text-xs font-bold ${
            activeHome ? "text-purple" : "text-gray"
          }`}
        >
          Inicio
        </p>
        {activeHome ? <p className="w-full h-1 bg-purple rounded"></p> : ""}
      </button>

      <button
        onClick={goToCart}
        className={`flex flex-col items-center w-14 active:bg-cian rounded gap-1 ${
          activeCart ? "justify-end" : "justify-center"
        }`}
      >
        <IoCartOutline
          size="1.5rem"
          color={`${activeCart ? "#440487" : "#686D76"}`}
        />
        <p
          className={`text-xs font-bold ${
            activeCart ? "text-purple" : "text-gray"
          }`}
        >
          Carrinho
        </p>
        {activeCart ? <p className="w-full h-1 bg-purple rounded"></p> : ""}
      </button>
    </footer>
  );
}
