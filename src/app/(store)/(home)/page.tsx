'use client';
import { Card } from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useCartStore } from "@/globalStateCar/CartStore";

export default function Home() {
const items = useCartStore((state) => state.avaliableItems);

  return (
    <div className="flex flex-col h-full justify-between ">
      <Header />
      <div className="flex flex-col h-full" >
          <Card.Root>
            <Card.Content items={items} inCart={false} url="/product"></Card.Content>
          </Card.Root>
      </div>
      <Footer />
    </div>
  );
}
