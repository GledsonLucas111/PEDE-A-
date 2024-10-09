import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}
export default function CardRoot({ children }: CardRootProps) {
  return <div className="flex flex-col gap-2 pt-2 px-2 h-full">{children}</div>;
}
