"use client";
import { TiHomeOutline } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [activeCart, setActiveCart] = useState(false);
  const [activeHome, setActiveHome] = useState(true);
  const { push } = useRouter();

  const goToCheckout = () => {
    setActiveCart(true);
    push("/checkout");
  };

  const goToHome = () => {
    setActiveCart(false);
    setActiveHome(true);
    push("/");
  };
  return (
    <footer className="w-full px-4 h-16 bg-slate-50 flex justify-between shadow fixed bottom-0">
      <button
        onClick={goToHome}
        className={`flex flex-col items-center w-14 active:bg-cian rounded gap-1 ${
          activeHome ? "justify-end" : "justify-center"
        }`}
      >
        <TiHomeOutline
          size="1.5rem"
          color={`${activeHome ? "#4682A9" : "#686D76"}`}
        />
        <p
          className={`text-xs text-blue font-bold ${
            activeHome ? "text-blue" : "text-gray"
          }`}
        >
          Inicio
        </p>
        {activeHome ? <p className="w-full h-1 bg-blue rounded"></p> : ""}
      </button>

      <button
        onClick={goToCheckout}
        className={`flex flex-col items-center w-14 active:bg-cian rounded gap-1 ${
          activeCart ? "justify-end" : "justify-center"
        }`}
      >
        <IoCartOutline
          size="1.5rem"
          color={`${activeCart ? "#4682A9" : "#686D76"}`}
        />
        <p
          className={`text-xs text-blue font-bold ${
            activeCart ? "text-blue" : "text-gray"
          }`}
        >
          Carrinho
        </p>
        {activeCart ? <p className="w-full h-1 bg-blue rounded"></p> : ""}
      </button>
    </footer>
  );
}
