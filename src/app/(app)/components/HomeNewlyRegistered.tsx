"use client";

import { useQuery } from "@tanstack/react-query";
import HomeNewlyRegisteredCard from "./HomeNewlyRegisteredCard";
import { fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewlyRegisteredSwiperSlideControls from "./NewlyRegisteredSwiperSlideControls";
import SwiperSlideControls from "../registration/components/SwiperSlideControls";

export default function HomeNewlyRegistered() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["newly-registered"], () => fetchNewlyRegisteredDogs());
  const [itemChunks, setItemChunks] = useState([]);
  const [gap, setGap] = useState(9);
  useEffect(() => {
    let start = 0;
    let chunks = [];

    while (start < items?.newDogs?.length) {
      let addition = items?.newDogs?.slice(start, start + gap);
      chunks.push(addition);
      start += gap;
    }

    setItemChunks(chunks);
  }, [items, gap]);
  return (
    <div className="flex flex-col gap-10 px-5 lg:px-20 w-full">
      <p className="text-2xl font-semibold">
        See the newly registered dogs on the block
      </p>
      {isLoading && <p>Loading</p>}

      <div className="flex flex-col  w-full">
        <Swiper className="w-full">
          <SwiperSlideControls />

          {itemChunks?.map((r: any, index: any) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                {r?.map((ele, index) => (
                  <HomeNewlyRegisteredCard key={index} image={ele?.public_id} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
