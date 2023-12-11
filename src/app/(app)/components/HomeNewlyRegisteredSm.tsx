"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeNewlyRegisteredCard from "./HomeNewlyRegisteredCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNewlyRegisteredDogs } from "@/lib/api/dogs";

export default function HomeNewlyRegisteredSm() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["newly-registered"], () => fetchNewlyRegisteredDogs());
  return (
    <div className="w-full px-5">
      <p className="text-md font-semibold mb-5">
        See the newly registered dogs on the block
      </p>
      <Swiper spaceBetween={25}>
        {items?.newDogs?.map((r, index) => (
          <SwiperSlide key={index}>
            <HomeNewlyRegisteredCard image={r?.public_id}/>
          </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
}
