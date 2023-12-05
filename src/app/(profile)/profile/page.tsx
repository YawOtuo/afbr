"use client";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogOne, fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TotalSales from "../components/TotalSales";
import IconButton from "@/components/Buttons/IconButton";
import RecentlyRegistered from "../components/RecentyRegistered";
import Link from "next/link";
import { Logout } from "@/lib/utils/firebase";
import { useSelector } from "react-redux";
import LargeButtons from "../components/LargeButtons";
import RecentlyRegisteredSm from "../components/RecentlyRegisteredSm";
import UnsuccessfulRegistrationsAlert from "../components/UnsuccessfulRegistrationsAlert";
import SuccessfulRegistrationsAlert from "../components/SuccessfulRegistrationsAlert";

type Props = {};

export default function Profile({ searchParams }: any) {
  // const [dogs, setDogs] = useState()
  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(["dogs"], () => fetchDogs());
  const userSqlData = useSelector((state) => state?.users?.userSqlData);

  return (
    <div className="p-10 px-5 lg:px-10 w-full flex flex-col">
      <div className="">
        <UnsuccessfulRegistrationsAlert searchParams={searchParams}/>
      </div>

      <div className="">
        <SuccessfulRegistrationsAlert />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-4xl font-semibold">
          Welcome {userSqlData?.username},
        </p>
        <p className="text-md">What would you like to do today?</p>
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          {" "}
          <LargeButtons
            name="Register Dog"
            variant="register"
            url="/registration"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <LargeButtons name="Become a member" variant="member" />
        </div>{" "}
        <div></div>
        <div className="col-span-3 lg:col-span-1" c>
          <LargeButtons name="Share a post" variant="post" url="community" />
        </div>{" "}
        <div className="col-span-3 lg:col-span-1">
          <LargeButtons name="Complete your profile" variant="profile" />
        </div>{" "}
      </div>

      <div className="flex gap-24 flex-col lg:flex-row justify-start items-center my-5 border-y-2 ">
        <TotalSales amount={30} filter="Dogs" />
        <TotalSales amount={30} filter="advertisements" />
        <TotalSales amount={30} filter="posts/engagements" />
      </div>
      <div className="hidden lg:flex">
        <RecentlyRegistered />
      </div>
      <div className="lg:hidden">
        <RecentlyRegisteredSm />
      </div>
    </div>
  );
}
