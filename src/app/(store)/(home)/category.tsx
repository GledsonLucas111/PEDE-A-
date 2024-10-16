"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// swiper modules

export default function Category() {
  const CategoryItems = [
    "Açai puro",
    "Acai + complemetos",
    "Açai + cremes",
    "Cremes sem complementos",
    "Barcas",
  ];

  return (
    <div className="bg-white600">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
      >
        {CategoryItems.map((category) => {
          return <div><SwiperSlide className=""><p className="font-bold text-sm">{category}</p></SwiperSlide></div>;
        })}
      </Swiper>
    </div>
  );
}
