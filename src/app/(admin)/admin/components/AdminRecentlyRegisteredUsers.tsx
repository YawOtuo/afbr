"use client";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { fetchDogs } from "@/lib/api/dogs";
import DogCard from "@/components/DogCard.tsx";
import IconButton from "@/components/Buttons/IconButton";
import UserCard from "./UserCard";
import { fetchusers } from "@/lib/api/users";

export default function AdminRecentlyRegisteredUsers() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["admin-recent-users"], () => fetchusers());
  return (
    <div className="py-5 w-full">
      <div className="flex gap-5 items-center">
        <p>Recently Registered Users</p>
        <Link href={"/profile/my-dogs"}>
          <IconButton variant="goto" label="See All" reverse />
        </Link>{" "}
      </div>{" "}
      <div className="grid grid-cols-2  gap-y-3 mt-5 gap-x-5">
        {items?.slice(0, 6).map((r: any, index: any) => (
          <div className="col-span-2 md:col-span-1 flex justify-start " key={index}>
            {" "}
            <Link href={"/pedigree"} className="w-full">
              {" "}
              <UserCard key={index} user={r} />
            </Link>
          </div>
        ))}
        {isLoading && <p>Loading</p>}
      </div>
    </div>
  );
}
