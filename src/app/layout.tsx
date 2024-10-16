import type { Metadata } from "next";
import "./globals.css";
import {Lato} from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "PEDE AI",
  description: "APP DE PEDIDOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${lato.className}`}  suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
