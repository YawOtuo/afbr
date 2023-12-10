"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs, fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import NwCard from "./components/NWCard";
import SelectDogModal from "./components/SelectDogModal";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["newly-registered"], () => fetchNewlyRegisteredDogs());
  return (
    <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10">
      <div className="flex gap-5 font-[400] items-center">
        <p>Newly Registered</p>
        <SelectDogModal />
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {items?.newDogs?.map((r: any, index: any) => (
          <NwCard key={index} dog={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
