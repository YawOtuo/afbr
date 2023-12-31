"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { fetchDogs, fetchNewlyRegisteredDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import SelectDogModal from "./components/SelectDogModal";
import { fetchAdvertisements } from "@/lib/api/ads";
import { useState } from "react";
import AdminAddAdCard from "./components/AdminAddAdCard";

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
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["advertisements"], () => fetchAdvertisements());
  const {
    isLoading: isLoading2,
    error: error2,
    data: special,
  } = useQuery(["special-advertisements"], () =>
    fetchAdvertisements("special")
  );
  const {
    isLoading: isLoading3,
    error: error3,
    data: regular,
  } = useQuery(["regular-advertisements"], () =>
    fetchAdvertisements("regular")
  );
  const [type, setType] = useState("all");

  const views = {
    all: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {items?.map((r: any, index: any) => (
          <AdminAddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    ),
    special: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {special?.map((r: any, index: any) => (
          <AdminAddAdCard key={index} ad={r} />
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    ),
    regular: (
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {regular?.map((r: any, index: any) => (
          <AdminAddAdCard key={index} ad={r} />
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
