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
const [categoryItem, setCategoryItems] = useState(categoryItems[0])
  
  return (
    <div className="bg-white600">
      <Swiper slidesPerView={3}>
        {categoryItems.map((category) => {
          return (
            <SwiperSlide key={category}>
              <a
                className={`font-bold text-sm whitespace-nowrap ${category === categoryItem? "text-brown ": "text-gray400"}`}
                href={`#${category}`}
                onClick={()=>setCategoryItems(category)}
              >
                {category}
              </a>
              {category === categoryItem? <p className="w-full border-2 border-brown "/>: null}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
