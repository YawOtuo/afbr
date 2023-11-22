"use client";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Profile() {
  // const [dogs, setDogs] = useState()
  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(["dogs"], () => fetchDogs());
  return (
    <div className="p-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10 items-center justify-center
  ">
        {dogs?.map((r, index) => (
          <div key={index} className="col-span-1">
            <DogCard dog={r} />
          </div>
        ))}
      </div>
      gdf
    </div>
  );
}
