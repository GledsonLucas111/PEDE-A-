"use client";

import { ReactNode } from "react";

interface FooterRootProps {
  children: ReactNode;
}
export default function FooterRoot({ children }: FooterRootProps) {
  return <div className="w-full px-4 h-14 bg-slate-50 flex justify-between items-center shadow fixed bottom-0 gap-4">{children}</div>;
}
