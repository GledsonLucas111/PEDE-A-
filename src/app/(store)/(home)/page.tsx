import CardProduct from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {

  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="pb-20 flex flex-col h-full" >
        <div>
        </div>
        <div>
          <div>
          <CardProduct />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
