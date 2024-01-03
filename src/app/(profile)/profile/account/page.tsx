"use client";

import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import NoPlaceHolder from "@/components/NoPlaceHolder";
import { fetchDogs } from "@/lib/api/dogs";
import { fetchUserOne } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Page() {
  const userSqlData = useSelector((state) => state?.users?.userSqlData);

  const {
    isLoading,
    error,
    data: user,
  } = useQuery(["user"], () => fetchUserOne(userSqlData?.id), {
    enabled: !!userSqlData?.id, // Enable the query only if userSqlData?.id is truthy
  });
  return (
    <div className="flex flex-col gap-5 w-full justify-start px-5 lg:px-10 py-5 items-center">
      <div className="flex flex-col items-center gap-1 w-full">
        <div className="relative w-full max-w-[250px] aspect-square rounded-full overflow-hidden border-2">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              user?.public_id || "placeholderdog_xyfyje"
            }.png`}
            fill
            alt="USer"
          />{" "}
        </div>
        <p>{user?.username}</p>
      </div>
      {user && (
        <div className="flex flex-col">
          <div className="flex gap-5">
            <Detail
              label="Email"
              icon={<MdOutlineMailOutline/>}
              value={user?.email}
            />

            <Detail
              label="Phone"
              icon={<MdOutlineLocalPhone/>}
              value={user?.phone_number}
            />
          </div>
          <IconButton label="Edit Details" variant="edit" />
        </div>
      )}
      {
        isLoading && <p>Loading...</p>
      }
    </div>
  );
}
type DetailProps = {
  label: string;
  icon: any;
  value: string;
};

const Detail = ({ label, icon, value }: DetailProps) => {
  return (
    <div className="flex gap-1 items-center">
      {icon} {label}: <span className="text-[#333] font-semibold">{value}</span>
    </div>
  );
};
