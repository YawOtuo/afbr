"use client";
import { fetchDogOne, fetchDogPedigree } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import DogImages from "./components/DogImages";
import { Ped } from "./components/Ped";

export default function Page() {
  const params = useParams();
  const {
    isLoading,
    error,
    data: dog,
  } = useQuery([`dog/pedigree/${params.id}`], () =>
    fetchDogPedigree(params.id)
  );
  return (
    <div className="flex flex-col items-center justify-center dog_reg_full ">
      <div className="w-full h-full flex items-center justify-center bg-pedyellow py-20 gap-20">
        <div className="flex flex-col gap- h-full items-center justify-center">
          <p className="text-3xl font-bold capitalize mb-5">
            {dog?.maindog.name}
          </p>

          {!dog?.maindog?.public_id_array && dog?.maindog && (
            <DogImages variant="single" images={dog?.maindog?.public_id} />
          )}
          {dog?.maindog?.public_id_array && (
            <DogImages
              variant="multiple"
              images={[
                dog?.maindog?.public_id,
                ...JSON.parse(dog?.maindog?.public_id_array),
              ]}
            />
          )}
          {!dog?.maindog && <DogImages variant="placeholder" />}
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
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
            <Ped name={dog?.sire.name} image={dog?.sire.public_id} size={5} />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <Ped
              name={dog?.siresire.name}
              image={dog?.siresire.public_id}
              size={3}
            />
            <Ped
              name={dog?.siredam.name}
              image={dog?.siredam.public_id}
              size={3}
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <Ped
              name={dog?.siresiresire.name}
              image={dog?.siresiresire.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.siresiredam.name}
              image={dog?.siresiredam.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.siredamsire.name}
              image={dog?.siredamsire.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.siredamdam.name}
              image={dog?.siredamdam.public_id}
              size={2}
              end
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1 lg:gap-x-5 px-5 lg:px-10">
          <div className="flex items-center flex-co justify-centerl">
            <Ped name={dog?.dam.name} image={dog?.dam.public_id} size={5} />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <Ped
              name={dog?.damsire.name}
              image={dog?.damsire.public_id}
              size={3}
            />
            <Ped
              name={dog?.damdam.name}
              image={dog?.damdam.public_id}
              size={3}
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <Ped
              name={dog?.damsiresire.name}
              image={dog?.damsiresire.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.damsiredam.name}
              image={dog?.damsiredam.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.damdamsire.name}
              image={dog?.damdamsire.public_id}
              size={2}
              end
            />
            <Ped
              name={dog?.damdamdam.name}
              image={dog?.damdamdam.public_id}
              size={2}
              end
            />
          </div>
        </div>
      </div>
    </div>
  );
}
