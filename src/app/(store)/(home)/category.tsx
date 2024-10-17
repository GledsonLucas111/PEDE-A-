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
    <div className="bg-white600 p-1">
      <Swiper slidesPerView={2}>
        {categoryItems.map((category) => {
          return (
            <SwiperSlide className="" key={category}>
              <a
                className={`font-bold text-sm  whitespace-nowrap ${category === "Açai no copo"? "text-purple": "text-gray400"}`}
                href={`#${category}`}
              >
                {category}
                
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
