"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "https://res.cloudinary.com/daurieb51/image/upload/v1686491827/scfgx9yzpizrpccuuq6s.jpg",
  "https://res.cloudinary.com/daurieb51/image/upload/v1690358198/o4avzhunnrzm4mp3j6tq.jpg",
  "https://res.cloudinary.com/daurieb51/image/upload/v1689031930/fjgwst2glwih9libefzy.jpg",
];
export default function FeaturedDogForToday() {
  return (
    <div className="w-full relative ">
      <Swiper pagination className="w-full h-full">
        {images?.map((r, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-[100vh] ">
              <Image src={r} alt="dog i,age" fill objectFit="cover" />
            </div>{" "}
            <div className="absolute bottom-0 bg-yellow3 w-full p-5 flex flex-col gap-5 justify-between">
              <p className="text-white text-sm">Featured dog for today</p>
              <div>
                <p className="text-yellow1 text-3xl font-semibold">
                  African Bully Styles
                </p>
                <p className="text-white">American Bully</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
