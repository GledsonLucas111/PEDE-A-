import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Category() {
  const CategoryItems = [
    "Açai puro",
    "Acai + complemetos",
    "Açai + cremes",
    "Cremes sem complementos",
    "Barcas",
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {CategoryItems.map((category) => {
        return <SwiperSlide>{category}</SwiperSlide>;
      })}
    </Swiper>
  );
}
