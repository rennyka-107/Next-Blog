import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

export default function Slide({ listSlides = [], ...props }) {

  return (
    <Swiper
      {...props}
      // spaceBetween={30}
      // centeredSlides={true}
      // effect="fade"
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      // pagination={{
      //   clickable: true,
      // }}
      // grabCursor={true}
    >
      {listSlides &&
        listSlides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
    </Swiper>
  );
}
