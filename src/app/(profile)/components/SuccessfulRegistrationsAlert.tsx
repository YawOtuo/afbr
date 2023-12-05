"use client";

import IconButton from "@/components/Buttons/IconButton";
import { fetchDogOne } from "@/lib/api/dogs";
import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessfulRegistrationsAlert({ searchParams }: any) {
  let finishedRegistrations;
  let setFinishedRegistration;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [finishedRegistrations, setFinishedRegistration] = useLocalStorage(
      "finished-registrations"
    );
  }

  useEffect(() => {}, []);

  return (
    <div>
      {(finishedRegistrations as any[]).length > 0 && (
        <div className="flex flex-col gap-5 items-start justify-center py-5 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-green-600 font-semibold">
              Congratulations
            </p>
            <p>You have some new dogs. Check them out!!!</p>
          </div>

          <div className="flex gap-5 items-center justify-start w-full flex-wrap">
            {finishedRegistrations?.map((dog: any, index: number) => (
              <div
                className="border-4 border-green-600 bg-white  max-w-[300px] aspect-[346/442] rounded-md overflow-hidden w-full"
                key={index}>
                <div className="relative w-full aspect-[360/282]">
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
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col items-start justify-center p-3 gap-1">
                    <span className="font-semibold">{dog?.name}</span>
                    <p className="text-xs">{dog?.afbr_no}</p>
                    <p className="text-xs"> {dog?.breed}</p>
                  </div>{" "}
                  <div className="flex flex-col items-start gap-1">
                    <Link href={`/pedigree/${dog?.name}/${dog?.id}`}>
                      <IconButton variant="goto" label="View Pedigree" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
