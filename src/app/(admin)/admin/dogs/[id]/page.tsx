"use client";

import IconButton from "@/components/Buttons/IconButton";
import { fetchDogOne } from "@/lib/api/dogs";
import { fetchdogOne } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ChangeOwnerModal from "../components/ChangeOwnerModal";

type UProps = {
  label: string;
  value: string;
};
const DogInfo = ({ label, value }: UProps) => {
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
    data: dog,
  } = useQuery([`dog-${params.id}`], () => fetchDogOne(params.id));
  return (
    <div className="w-full flex flex-col items-start justify-center px-5 lg:px-10">
      <div className="w-full flex flex-col lg:flex-row gap-5 items-center border-b justify-start border-b-yellow1 pb-10">
        <div className="relative w-full h-full max-w-[400px] aspect-square rounded-full border-4 border-yellow4 overflow-hidden ">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              dog?.public_id || "placeholderdog_xyfyje"
            }.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>

        <div className="flex flex-col gap-5 items-start justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-3xl text-yellow1">
                {dog?.name || "N|A"}
              </p>
              <p className="font-bold text-yellow1">( #{dog?.afbr_no} )</p>
            </div>
            <div className="flex gap-5 items-center flex-wrap">
              <p className="">
                User:
                <span className="font-semibold"> {dog?.user}</span>
              </p>
              <ChangeOwnerModal id={dog?.id} />
            </div>
          </div>

          <div className="flex gap-5 flex-wrap">
            <IconButton variant="edit" label="edit" />
            <Link href={`/pedigree/${dog?.name}/${dog?.id}`}>
              <IconButton variant="goto" label="view pedigree" reverse />
            </Link>{" "}
            <IconButton variant="delete" label="delete" />
          </div>
        </div>
      </div>
      <div className="w-full py-5 ">
        <div className="grid grid-cols-2  w-full items-center justify-center">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
            <DogInfo label="name" value={dog?.name} />
            <DogInfo label="age" value={dog?.age} />
            <DogInfo label="breed" value={dog?.breed} />
            <DogInfo label="current owner" value={dog?.current_owner} />
            <DogInfo label="kennel name" value={dog?.kennel_name} />
            <DogInfo label="height" value={dog?.height} />
            <DogInfo label="weight" value={dog?.weight} />
            <DogInfo label="date registered" value={dog?.date_registered} />
            <DogInfo label="expresspay token" value={dog?.expresspay_token} />
            <DogInfo
              label="expresspay order id"
              value={dog?.expresspay_order_id}
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
            <DogInfo label="sex" value={dog?.sex} />
            <DogInfo label="sire" value={dog?.sire} />

            <DogInfo label="dam" value={dog?.dam} />
            <DogInfo label="place of birth" value={dog?.place_of_birth} />
            <DogInfo label="land of standing" value={dog?.land_of_standing} />
            <DogInfo label="colour" value={dog?.color} />
            <DogInfo label="has been paid for" value={dog?.hasBeenPaidFor} />
          </div>
        </div>
      </div>
    </div>
  );
}
