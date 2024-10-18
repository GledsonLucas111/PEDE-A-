"use client";

interface ButtonProps {
  sumPrice: () => any;
  addToCart?: () => any;
  text: string;
}
export default function FooterActions({ sumPrice, text, addToCart }: ButtonProps) {
  return (
    <button className={`w-full h-10 bg-primary text-white active:bg-green300 rounded font-bold flex items-center justify-between px-2 `} onClick={addToCart}>
      <p className="">{text}</p>
      <p className="">{sumPrice()}</p>
    </button>
  );
}
