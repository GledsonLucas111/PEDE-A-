"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// swiper modules

export default function Category() {
  const CategoryItems = [
    "Açai no copo",
    "Açai na tigela",
    "Açaí sem complementos",
    "Cremes",
    "Barcas",
  ];

  return (
    <div className="bg-white600 p-1">
      <Swiper
        slidesPerView={2}
      >
        {CategoryItems.map((category) => {
          return <SwiperSlide className=""><button className="font-bold text-sm text-gray400 whitespace-nowrap">{category}</button></SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
