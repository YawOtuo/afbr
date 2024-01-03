"use client";

import { isError, useQuery } from "@tanstack/react-query";
import { fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlideControls from "../registration/components/SwiperSlideControls";
import DogCard from "@/components/DogCard.tsx";
import {
  fetchAdvertisements,
  fetchAdvertisementsApproved,
} from "@/lib/api/ads";
import HomeLoadingPulse from "./LoadingPulse";

export default function HomeRegularAds() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["regular-advertisements"], () =>
    fetchAdvertisementsApproved("regular")
  );
  const [itemChunks, setItemChunks] = useState([]);
  const [gap, setGap] = useState(9);
  useEffect(() => {
    let start = 0;
    let chunks = [];

    while (start < items?.length) {
      let addition = items?.slice(start, start + gap);
      chunks.push(addition);
      start += gap;
    }

    setItemChunks(chunks);
  }, [items, gap]);

  return (
    <div className="flex flex-col gap-10 px-5 lg:px-20 w-full mt-10">
      <p className="text-2xl font-semibold">Today&rsquo;s Advertisements</p>
      {isLoading && (
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {Array.from({ length: 9 }).map((r, index) => (
            <HomeLoadingPulse key={index} />
          ))}
        </div>
      )}

      {error && <p>Couldnt load advertisements please try again</p>}

      <div className="flex flex-col  w-full">
        <Swiper className="w-full">
          {/* <SwiperSlideControls /> */}

          {itemChunks?.map((r: any, index: any) => (
            <SwiperSlide key={index} className="w-full">
              <div className="flex gap-5 p-5 flex-wrap w-full">
                {r?.map((ele, index) => (
                  <DogCard key={index} dog={ele} maxWidth />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
