import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchInventories } from "../../../lib/api/inventory";
import Link from "next/link";
import { fetchDogs } from "@/lib/api/dogs";
import DogCard from "@/components/DogCard.tsx";
import IconButton from "@/components/Buttons/IconButton";

export default function RecentlyRegistered() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["dogs"], () => fetchDogs());
  return (
    <div className="py-5 w-full">
      <div className="flex gap-5 items-center">
        <p>Recently Registered</p>
        <Link href={"/profile/my-dogs"}>
          <IconButton variant="goto" label="See All" reverse />
        </Link>{" "}
      </div>{" "}
      <div className="grid grid-cols-3  gap-y-3 mt-5 gap-x-5">
        {items?.slice(0, 3).map((r: any, index: any) => (
          <div className="col-span-3 md:col-span-1" key={index}>
            {" "}
            <Link href={"/pedigree"}>
              {" "}
              <DogCard key={index} dog={r} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
