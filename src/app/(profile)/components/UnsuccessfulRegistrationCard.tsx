"use client"
import IconButton from "@/components/Buttons/IconButton";
import { getTransactUrl } from "@/lib/api/expresspay";
import { useLocalStorage } from "@uidotdev/usehooks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UnsuccessfulRegistrationCard({ dog, index }: any) {
  const [dogUnfinishedRegistrations, setDogUnfinishedRegistrations] =
    useLocalStorage<any>("dog-unfinished-registrations", []);

  const handleDelete = () => {
    const updatedRegistrations = dogUnfinishedRegistrations.filter(
      (_, indextoDelete) => indextoDelete !== index
    );

    setDogUnfinishedRegistrations(updatedRegistrations);
  };
  return (
    <div className="border-4 bg-slate-100 animate-pulse  max-w-[300px] aspect-[346/442] rounded-md overflow-hidden w-full">
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col items-start justify-center p-3 gap-1">
          <span className="font-semibold">{dog?.name}</span>
          <p className="text-xs"> {dog?.date_registered}</p>
        </div>{" "}
        <div className="flex flex-col items-start gap-1 px-5">
          <p className="text-sm"> USD {dog?.price}</p>
          {dog?.transactUrlResponse && (
            <Link href={dog?.transactUrlResponse}>
              <IconButton variant="goto" label="Pay Again" />
            </Link>
          )}
          <button onClick={handleDelete}>
            <IconButton variant="delete" label="Cancel" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
