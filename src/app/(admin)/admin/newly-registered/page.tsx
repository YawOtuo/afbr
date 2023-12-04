"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["adverts"], () => fetchDogs());
  return (
    <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10">
      <div className="flex gap-5 font-[400] items-center">
        <p>Newly Registered</p>
        <IconButton label="add" variant="add"/>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {items?.slice(0, 3)?.map((r: any, index: any) => (
          <Link href={`/admin/dogs/${r?.id}`} key={index} className="w-full">
            {" "}
            <DogCard key={index} dog={r} />
          </Link>
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
