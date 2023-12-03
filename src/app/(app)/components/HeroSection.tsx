"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSection() {
  return (
    <div className="w-full h-[30vh] lg:h-[100vh]  ">
      <Swiper className="w-full h-full">
        <SwiperSlide>
          <div className="bg-[url('/images/hero1.jpg')] w-full  h-full bg-no-repeat bg-cover lg:bg-cover bg-right lg:bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/hero2.jpg')] w-full  h-full bg-no-repeat bg-contain lg:bg-cover bg-right lg:bg-center"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
