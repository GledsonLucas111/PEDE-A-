import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-white" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
