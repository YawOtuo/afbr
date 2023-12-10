"use client";

import { fetchAdvertisements } from "@/lib/api/ads";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FeaturedDogForToday() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["advertisements"], () => fetchAdvertisements());
  return (
    <div className="w-full relative ">
      <Swiper pagination className="w-full h-full">
        {items?.map((r, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-[100vh] ">
              <Image
                src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
                  r?.public_id || "placeholderdog_xyfyje"
                }.png`}
                alt="dog i,age"
                fill
                objectFit="cover"
              />
            </div>{" "}
            <div className="absolute bottom-0 bg-yellow3 w-full p-5 flex flex-col gap-5 justify-between">
              <p className="text-white text-sm">Featured dog for today</p>
              <div>
                <p className="text-yellow1 text-3xl font-semibold">
                  {r?.name}
                </p>
                <p className="text-white">{r?.breed}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
