"use client";

import { useQuery } from "@tanstack/react-query";
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
      {isLoading && <p>Loading</p>}

      <div className="flex flex-col  w-full">
        <Swiper className="w-full">
          {/* <SwiperSlideControls /> */}

          {itemChunks?.map((r: any, index: any) => (
            <SwiperSlide key={index} className="w-full">
              <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-full">
                {r?.map((ele, index) => (
                  <DogCard key={index} dog={ele} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
