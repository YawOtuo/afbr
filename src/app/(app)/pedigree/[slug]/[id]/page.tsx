"use client";
import { fetchDogOne, fetchDogPedigree } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

type Props = {
  dog?: any;
};

type PedProps = {
  name?: string;
  image?: string;
  size: number;
};

const Ped = ({ name, image, size }: PedProps) => {
  const imageSize = size * 60;
  return (
    <div className="flex items-center justify-center w-full hover:scale-[1.05] cursor-pointer ">
      <div
        className={`relative w-full aspect-square border-[2px] rounded-md lg:rounded-2xl border-yellow1 overflow-hidden basis-[50%] shrink-0  `}
        style={{
          maxWidth: `${imageSize}px`,
        }}>
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
            image || "njtlrseqbnvylw8i1t0f"
          }.png`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Dog"
        />
      </div>
      <div className="flex flex-wrap border-y-[1px] w-full border-y-yellow1 items-center shrink-1 justify-center lg:py-10 h-[75%] px-1 lg:font-semibold overf">
        <p className="text-white text-[10px] md:text-[13px]  lg:text-md">
          {name}
        </p>
      </div>
    </div>
  );
};
export default function Page({}) {
  const params = useParams();
  const {
    isLoading,
    error,
    data: dog,
  } = useQuery([`dog/pedigree/${params.id}`], () =>
    fetchDogPedigree(params.id)
  );
  return (
    <div className="flex flex-col items-center justify-center dog_reg_full mt-20">
      <div className="w-full h-full flex items-center justify-center bg-pedyellow py-20 gap-20">
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <p className="text-3xl font-bold capitalize">{dog?.maindog.name}</p>

          <div className="relative w-full h-full max-w-[400px] aspect-square rounded-lg border-[6px] border-white overflow-hidden ">
            <Image
              src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${dog?.maindog.public_id}.png`}
              fill
              objectFit="cover"
              objectPosition="center"
              alt="Dog"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center basis-[50%]">
          <p>{dog?.maindog.name}</p>
          <p> {dog?.maindog.name}</p>
          <p> {dog?.maindog.name}</p>
          <p> {dog?.maindog.name}</p>
          <p> {dog?.maindog.name}</p>
        </div>
      </div>
      <div className="w-full py-20 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-x-1 lg:gap-x-5 px-5 lg:px-10">
          <div className="flex items-center flex-co justify-centerl">
            <Ped
              name={dog?.sire.name}
              image={dog?.sire.public_id}
              size={5}
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <Ped name={dog?.siresire.name} image={dog?.siresire.public_id} size={3} />
            <Ped name={dog?.siredam.name} image={dog?.siredam.public_id} size={3} />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <Ped
              name={dog?.siresiresire.name}
              image={dog?.siresiresire.public_id}
              size={2}
            />
            <Ped
              name={dog?.siresiredam.name}
              image={dog?.siresiredam.public_id}
              size={2}
            />
            <Ped
              name={dog?.siredamsire.name}
              image={dog?.siredamsire.public_id}
              size={2}
            />
            <Ped
              name={dog?.siredamdam.name}
              image={dog?.siredamdam.public_id}
              size={2}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1 lg:gap-x-5 px-5 lg:px-10">
          <div className="flex items-center flex-co justify-centerl">
            <Ped
              name={dog?.dam.name}
              image={dog?.dam.public_id}
              size={5}
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <Ped name={dog?.damsire.name} image={dog?.damsire.public_id} size={3} />
            <Ped name={dog?.damdam.name} image={dog?.damdam.public_id} size={3} />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <Ped
              name={dog?.damsiresire.name}
              image={dog?.damsiresire.public_id}
              size={2}
            />
            <Ped
              name={dog?.damsiredam.name}
              image={dog?.damsiredam.public_id}
              size={2}
            />
            <Ped
              name={dog?.damdamsire.name}
              image={dog?.damdamsire.public_id}
              size={2}
            />
            <Ped
              name={dog?.damdamdam.name}
              image={dog?.damdamdam.public_id}
              size={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
