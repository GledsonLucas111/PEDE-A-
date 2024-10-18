"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

// swiper modules

interface CategoryProps {
  categoryItems: string[];
}
export default function Category({ categoryItems }: CategoryProps) {
  const [active, setActive] = useState("");
  return (
    <div className="bg-white600 ">
      <Swiper slidesPerView={3} className="">
        {categoryItems.map((category) => {
          return (
            <SwiperSlide key={category} >
              <a
                className={`font-bold text-sm  whitespace-nowrap ${category === "Bolos"? "text-brown ": "text-gray400"}`}
                href={`#${category}`}
              >
                {category}
                
              </a>
              {category === "Bolos"? <p className="w-full border-2 rounded-xl border-brown "/>: null}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
