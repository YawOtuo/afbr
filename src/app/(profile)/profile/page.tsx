"use client";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TotalSales from "../components/TotalSales";
import IconButton from "@/components/Buttons/IconButton";
import RecentlyRegistered from "../components/RecentyRegistered";
import Link from "next/link";
import { Logout } from "@/lib/utils/firebase";

export default function Profile() {
  // const [dogs, setDogs] = useState()
  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(["dogs"], () => fetchDogs());
  return (
    <div className="p-10 w-full flex flex-col">

      <div className="flex flex-col gap-1">
        <p className="text-4xl font-semibold">Welcome Yaw,</p>
        <p className="text-md">What would you like to do today?</p>
        <button onClick={Logout}>Logout</button>
      </div>

      <div className="flex flex-wrap gap-5 mt-5 items-center pb-3  border-b-2 ">
        <Link href={"/registration"}>
          <IconButton label="register dog" variant="register" />
        </Link>{" "}
        {/* <IconButton label="advertise" variant="ad" /> */}
        {/* <IconButton label="saved registrations" variant="goto" reverse /> */}
        <Link href={""} className="">
          <IconButton label="view all dogs" variant="goto" reverse />
        </Link>{" "}
        <IconButton label="complete your profile" variant="goto" reverse />

      </div>

      <div className="flex gap-5 flex-col lg:flex-row justify-start items-center my-5">
        <TotalSales amount={30} filter="Dogs" />
        <TotalSales amount={30} filter="advertisements" />
        <TotalSales amount={30} filter="posts/engagements" />
      </div>
      <div className="">
        <RecentlyRegistered />
      </div>
    </div>
  );
}
