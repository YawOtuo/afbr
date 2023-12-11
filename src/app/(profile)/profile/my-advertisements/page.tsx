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

  const {
    isLoading,
    error,
    data: items,
  } = useQuery(
    ["advertisements-user"],
    () => fetchAdvertisementsByUser(userSqlData?.id),
    {
      enabled: !!userSqlData?.id,
    }
  );

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
  const [type, setType] = useState("all");

  const views = {
    all: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {items?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    ),
    special: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {special?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    ),
    regular: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {regular?.map((r: any, index: any) => (
          <AddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    ),
  };
  return (
    <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10">
      <div className="flex gap-5 font-[400] items-center">
        <div className="flex gap-5">
          <Tab
            name="All"
            onClick={() => setType("all")}
            active={type == "all"}
          />
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

      <div>{views[type]}</div>
    </div>
  );
}
