"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs, fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchAdvertisements, fetchAdvertisementsByUser } from "@/lib/api/ads";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/utils/firebase";
import { useSelector } from "react-redux";
import SelectDogModal from "./components/SelectDogModal";
import AddAdCard from "./components/AddAdCard";
import NoPlaceHolder from "@/components/NoPlaceHolder";

type TabProps = {
  name: string;
  onClick: any;
  active: boolean;
};

const Tab = ({ name, onClick, active }: TabProps) => {
  return (
    <button onClick={onClick} className={`${active && "bg-yellow4"} px-5 py-2`}>
      {name}
    </button>
  );
};
export default function Page() {
  const userSqlData = useSelector((state) => state.users.userSqlData);

  // const {
  //   isLoading,
  //   error,
  //   data: items,
  // } = useQuery(
  //   ["advertisements-user"],
  //   () => fetchAdvertisementsByUser(userSqlData?.id),
  //   {
  //     enabled: !!userSqlData?.id,
  //   }
  // );

  const {
    isLoading: isLoadingSpecial,
    error: errorSpecial,
    data: special,
  } = useQuery(
    ["special-advertisements-user"],
    () => fetchAdvertisementsByUser(userSqlData?.id, "special"),
    {
      enabled: !!userSqlData?.id,
    }
  );

  const {
    isLoading: isLoadingRegular,
    error: errorRegular,
    data: regular,
  } = useQuery(
    ["regular-advertisements-user"],
    () => fetchAdvertisementsByUser(userSqlData?.id, "regular"),
    {
      enabled: !!userSqlData?.id,
    }
  );
  const [type, setType] = useState("special");

  const views = {
    // all: (
    //   <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
    //     {items?.map((r: any, index: any) => (
    //       <AddAdCard key={index} ad={r} />
    //     ))}
    //     {isLoading && <p>Loading</p>}
    //   </div>
    // ),
    special: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {special?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoadingSpecial && <p>Loading</p>}

        {special?.length > 0 ? (
          <div>{views[type]}</div>
        ) : (
          <div className="w-full h-[50vh]">
            <NoPlaceHolder label="ads created" />
          </div>
        )}
      </div>
    ),
    regular: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {regular?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoadingRegular && <p>Loading</p>}

        {regular?.length > 0 ? (
          <div>{views[type]}</div>
        ) : (
          <div className="w-full h-[50vh]">
            <NoPlaceHolder label="ads created" />
          </div>
        )}
      </div>
    ),
  };
  return (
    <div>
      <div className="p-5 bg-yellow4 mb-5">
        <p className="font-semibold text-xl">My Advertisements</p>
        <div className="flex flex-col gap-1 mt-1">
          <p>Tell the world about your dog with  <span className="text-yellow1 font-bold">regular</span> advertisements</p>

          <p>
            Want better? Get your dog on the biggest screen on our website with 
            <span className="text-yellow1 font-bold"> special</span> advertisements
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 font-[400] items-start">
            <div className="flex gap-5 justify-start">
              {/* <Tab
                name="All"
                onClick={() => setType("all")}
                active={type == "all"}
              /> */}
              <Tab
                name="Special"
                onClick={() => setType("special")}
                active={type == "special"}
              />
              <Tab
                name="Regular"
                onClick={() => setType("regular")}
                active={type == "regular"}
              />
            </div>
            {type !== "all" && <SelectDogModal type={type} />}
          </div>
        </div>

        <div>{views[type]}</div>
      </div>
    </div>
  );
}
