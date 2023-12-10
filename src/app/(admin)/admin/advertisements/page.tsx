"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs, fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import SelectDogModal from "./components/SelectDogModal";
import AddAdCard from "./components/AddAdCard";
import { fetchAdvertisements } from "@/lib/api/ads";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["advertisements"], () => fetchAdvertisements());
  return (
    <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10">
      <div className="flex gap-5 font-[400] items-center">
        <p className="font-semibold">Special Advertissements</p>
        <SelectDogModal />
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {items?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
