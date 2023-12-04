"use client";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs, fetchDogsByUser } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const userSqlData = useSelector((state) => state.users.userSqlData);

  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(
    ["dogs", userSqlData?.id], // Pass userSqlData?.id as part of the query key
    () => fetchDogsByUser(userSqlData?.id),
    {
      enabled: !!userSqlData?.id, // Enable the query only if userSqlData?.id is truthy
    }
  );

  return (
    <div className="p-10 px-5 lg:px-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10 items-center justify-center
  ">
        {dogs?.map((r, index) => (
          <div key={index} className="col-span-2 lg:col-span-1">
            <DogCard dog={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
