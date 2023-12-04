"use client";

import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import UsersListViewCard from "./components/UsersListViewCard";
import { fetchusers } from "@/lib/api/users";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["all-users"], () => fetchusers());
  return (
    <div className="flex flex-col gap-5 w-full justify-start">
      <div className="w-full px-24 flex flex-col gap-5">
        {items?.map((r: any, index: any) => (
            <Link href={`/admin/users/${r?.id}`} key={index}>
              {" "}
              <UsersListViewCard key={index} user={r} />
            </Link>
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
