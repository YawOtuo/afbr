import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchDogs, fetchDogsByUser } from "@/lib/api/dogs";
import DogCard from "@/components/DogCard.tsx";
import IconButton from "@/components/Buttons/IconButton";
import { useSelector } from "react-redux";

export default function RecentlyRegistered() {
  const userSqlData = useSelector((state) => state?.users?.userSqlData);

  const {
    isLoading: userDogsIsLoading,
    error: userDogsIsLoadingError,
    data: recentDogs,
  } = useQuery(
    ["dogs", userSqlData?.id], // Pass userSqlData?.id as part of the query key
    () => fetchDogsByUser(userSqlData?.id),
    {
      enabled: !!userSqlData?.id, // Enable the query only if userSqlData?.id is truthy
    }
  );
  return (
    <div className="py-5 w-full">
      <div className="flex gap-5 items-center">
        <p>Recently Registered</p>
        <Link href={"/profile/my-dogs"}>
          <IconButton variant="goto" label="See All" reverse />
        </Link>{" "}
      </div>{" "}
      <div className="flex mt-5 gap-5 justify-start w-full">
        {recentDogs?.slice(0, 3).map((r: any, index: any) => (
          <DogCard key={index} dog={r} />
        ))}
      </div>
    </div>
  );
}
