import { useQuery } from "@tanstack/react-query";
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
      <div className="flex mt-5 gap-5 justify-start w-full">
        {items?.slice(0, 3).map((r: any, index: any) => (
          <DogCard key={index} dog={r} />
        ))}
      </div>
    </div>
  );
}
