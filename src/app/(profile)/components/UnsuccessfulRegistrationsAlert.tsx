"use client";

import IconButton from "@/components/Buttons/IconButton";
import { fetchDogOne } from "@/lib/api/dogs";
import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";
import { useEffect } from "react";
import UnsuccessfulRegistrationCard from "./UnsuccessfulRegistrationCard";
import { checkIfPaid, setHasBeenPaidFor } from "@/lib/api/expresspay";

export default function UnsuccessfulRegistrationsAlert({ searchParams }: any) {
  let dogUnfinishedRegistrations: any;
  let setDogUnfinishedRegistrations: any;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [dogUnfinishedRegistrations, setDogUnfinishedRegistrations] =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useLocalStorage("dog-unfinished-registrations", []);
  }

  let finishedRegistrations: any;
  let setFinishedRegistration: any;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [finishedRegistrations, setFinishedRegistration] = useLocalStorage(
      "finished-registrations",
      []
    );
  }

  useEffect(() => {
    if (dogUnfinishedRegistrations && dogUnfinishedRegistrations.length > 0) {
      const fetchOperations = dogUnfinishedRegistrations.map(
        async (element: any) => {
          const r = await fetchDogOne(element?.id);

          if (r?.hasBeenPaidFor) {
            if (!finishedRegistrations.some((dog: any) => dog.id === r.id)) {
              setFinishedRegistration((prevRegistrations: any) => [
                ...prevRegistrations,
                r,
              ]);
            }
            setDogUnfinishedRegistrations((prevRegistrations: any) =>
              prevRegistrations.filter((dogObj: any) => dogObj.id !== r?.id)
            );
          } else {
            console.log("here");
            checkIfPaid(r?.expresspay_token).then((res) => {
              console.log(typeof res);
              console.log(res);
              if (res?.result == 1) {
                console.log(r?.id);
                setHasBeenPaidFor(r?.id);
              }
            });
          }
        }
      );

      const handleFetchOperations = async () => {
        await Promise.all(fetchOperations);
      };

      handleFetchOperations();
    }
  }, [dogUnfinishedRegistrations]);

  return (
    <div>
      {(dogUnfinishedRegistrations as any[])?.length > 0 && (
        <div className="flex flex-col gap-5 items-start justify-center py-5 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-yellow1 font-semibold">Notification</p>
            <p>Please confirm payment for the following dogs</p>
            <p>
              Please check your mobile mobile account for payments if you have
              already initiated the payment process
            </p>
          </div>

          <div className="flex gap-5 items-center justify-start w-full flex-wrap">
            {dogUnfinishedRegistrations?.map((info: any, index: number) => (
              <UnsuccessfulRegistrationCard
                key={index}
                dog={info}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
