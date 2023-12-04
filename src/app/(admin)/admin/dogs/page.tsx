"use client";

import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import DogListViewCard from "./components/DogListCard";
import Link from "next/link";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["all-dogs"], () => fetchDogs());
  return (
    <div className="flex flex-col gap-5 w-full justify-start">
      <div className="w-full px-24 flex flex-col gap-5">
        {items?.map((r: any, index: any) => (
            <Link href={`/admin/dogs/${r?.id}`} key={index}>
            {" "}
              <DogListViewCard key={index} dog={r} />
            </Link>
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
