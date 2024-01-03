"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeNewlyRegisteredCard from "./HomeNewlyRegisteredCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { fetchAdvertisementsApproved } from "@/lib/api/ads";
import DogCard from "@/components/DogCard.tsx";

export default function HomeRegularAdsSm() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["regular-advertisements"], () =>
    fetchAdvertisementsApproved("regular")
  );
  return (
    <div className="w-full px-5 mt-5">
      <p className="text-lg font-semibold mb-2">Today&rsquo;s Advertisements</p>

      {isLoading && <p>Loading</p>}

      <Swiper spaceBetween={25} className="">
        {items?.map((r, index) => (
          <SwiperSlide key={index}>
            <DogCard dog={r} maxWidth/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
