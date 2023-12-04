"use client";

import IconButton from "@/components/Buttons/IconButton";
import { fetchDogOne } from "@/lib/api/dogs";
import { fetchUserOne } from "@/lib/api/users";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

type UProps = {
    label : string,
    value: string
}
const UserInfo = ({label, value}: UProps) => {
  return (
    <div className="capitalize">
      {label} : <span className="text-gray-600 font-semibold">{value}</span>
    </div>
  );
};

export default function Page() {
  const params = useParams();
  const {
    isLoading,
    error,
    data: user,
  } = useQuery([`user-${params.id}`], () => fetchUserOne(params.id));
  return (
    <div className="w-full flex flex-col items-start justify-center px-5 lg:px-10">
      <div className="w-full flex flex-col lg:flex-row gap-5 items-center border-b justify-start border-b-yellow1 pb-10">
        <div className="relative w-full h-full max-w-[400px] aspect-square rounded-full border-4 border-yellow4 overflow-hidden ">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              user?.public_id || "person_sywvrt"
            }.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>

        <div className="flex flex-col gap-5 items-start">
          <p>{user?.username || "N|A"}</p>
          <IconButton variant="goto" label="All Dogs" reverse />
        </div>
      </div>
      <div className="w-full py-5 ">
        <div className="grid grid-cols-2  w-full">
          <div className="col-span-2 lg:col-span-1 ">
            <UserInfo label="username" value={user?.username}/>
            <UserInfo label="email" value={user?.email}/>

          </div>
          <div className="col-span-2 lg:col-span-1 ">
            <UserInfo label="phone number" value={user?.phone_number}/>
            <UserInfo label="contact_address" value={user?.contact_address}/>

          </div>
        </div>
      </div>
    </div>
  );
}
