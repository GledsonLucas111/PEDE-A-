"use client";

interface ButtonProps {
  goTo: () => void;
  active: boolean;
  icon: any;
  text: string;
}
export default function FooterButton({ goTo, active, icon, text }: ButtonProps) {
  return (
    <button
      onClick={goTo}
      className={`flex flex-col items-center w-14 active:bg-cian rounded ${
        active ? "justify-end" : "justify-center"
      }`}
    >
      <p
        className={`text-2xl  ${
          active ? "text-primary" : "text-gray"
        }`}
      >
        {icon}
      </p>
      <p
        className={`text-xs ${active ? "text-primary" : "text-gray"}`}
      >
        {text}
      </p>
      {active ? <p className="w-14 h-1 bg-primary rounded-sm bottom-0 fixed"></p> : ""}
    </button>
  );
}
