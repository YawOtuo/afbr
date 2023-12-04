"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import NoPlaceHolder from "@/components/NoPlaceHolder";
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
        <p>Notifcations</p>
        <IconButton label="add" variant="add" />
      </div>

      <div className="flex gap-5 w-full">
        <div className="w-full h-full min-h-[50vh]">
          <NoPlaceHolder label="notifications" />
        </div>
      </div>
    </div>
  );
}
