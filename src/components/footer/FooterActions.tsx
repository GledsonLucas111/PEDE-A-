interface ButtonProps {
  sumPrice: () => any;
  text: string;
}
export default function FooterActions({ sumPrice, text }: ButtonProps) {
  return (
    <button className={`w-full h-10 bg-green text-white active:bg-green300 rounded font-bold flex items-center justify-between px-2 `}>
      <p className="">{text}</p>
      <p className="">{sumPrice()}</p>
    </button>
  );
}
