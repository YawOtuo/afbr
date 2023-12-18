"use client";
import { useEffect, useRef, useState } from "react";
import DogDetailsForm from "./DogDetailsForm1";
import TypeForm from "./TypeForm";
import UserDetailsForm from "./UserDetailsForm";
import { useLocalStorage } from "@uidotdev/usehooks";
import { NavigationButton } from "./RegistrationSlide";
import { Form, Formik } from "formik";
import DogDetailsForm2 from "./DogDetailsForm2";
import DogDetailsForm1 from "./DogDetailsForm1";
import ChooseImages from "./ChooseImages";
import { getTransactUrl } from "@/lib/api/expresspay";
import { AddDog, UpdateDog, fetchDogOne } from "@/lib/api/dogs";
import Progress from "@/components/Progress";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  addLocalStorageKey,
  editLocalStorageKey,
} from "@/lib/utils/definitions";

type Props = {
  edit?: boolean;
  dog?: number;
};
export default function RegisterForm({ edit, dog }: Props) {
  const searchParams = useSearchParams();
  const [localStorageKey, setLocalStorageKey] = useState();
  const [progressValue, setProgressValue] = useState<number>(3);
  const [activeSlide, setActiveSlide] = useState(2);
  const [dogData, setDogData] = useLocalStorage<any>(localStorageKey, {});
  const leaseRef = useRef<any>();
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlide, setFirstSlide] = useState(true);
  const [editDog, setEditDog] = useState();

  const [dogUnfinishedRegistrations, setDogUnfinishedRegistrations] =
    useLocalStorage<any>("dog-unfinished-registrations", []);
  const [registrationInfo, setRegistrationInfo] = useLocalStorage(
    "dog-registration-info"
  );
  const [ready, setReady] = useState(false);
  const dog_id = searchParams.get("dog");
  const router = useRouter();

  useEffect(() => {
    console.log(dog_id);
    if (searchParams.get("edit")) {
      setLocalStorageKey(editLocalStorageKey);
    } else {
      setLocalStorageKey(addLocalStorageKey);
    }
  }, [dog_id]);

  useEffect(() => {
    if (localStorageKey == editLocalStorageKey) {
      fetchDogOne(dog_id)
        .then((res) => {
          setDogData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [localStorageKey]);

  useEffect(() => {
    if (ready) {
      window.location = ready;
    }
  }, [ready]);

  const scrollToTop = () => {
    if (leaseRef.current) {
      leaseRef.current.scrollIntoView();
    }
  };
  useEffect(() => {
    const value = (activeSlide / views.length) * 100;
    setProgressValue(value + 5);
    activeSlide == 0 ? setFirstSlide(true) : setFirstSlide(false);
    activeSlide == 3 && setLastSlide(true);
  }, [activeSlide]);

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide((init) => init - 1);

      scrollToTop();
    }
  };

  const handleForward = async () => {
    if (activeSlide < views.length - 1) {
      setActiveSlide((prevSlide) => prevSlide + 1);
      scrollToTop();
    }

    if (activeSlide === 3) {
      try {
        if (localStorageKey == addLocalStorageKey) {
          const addDogResponse = await AddDog({
            dog: dogData,
            user: { uid: "jHzIOAPwX8ajKDglIlKL3UZVC8r1" },
          });

          const transactUrlResponse = await getTransactUrl({
            transaction_name: registrationInfo?.type,
            // transaction_cost: registrationInfo?.price,
            transaction_cost: 0.1,
            dog_name: dogData?.name,
            username: "Yaw",
            email: "yotuo2003@gmail.com",
          });

          const updatedDogInfo = {
            ...addDogResponse,
            transactUrlResponse,
            type: registrationInfo?.type,
            price: registrationInfo?.price,
            email: "yto2@",
            username: "yaw",
          };

          setDogUnfinishedRegistrations((prev) => {
            if (prev === undefined || prev === null || !Array.isArray(prev)) {
              return [updatedDogInfo];
            }

            return [...prev, updatedDogInfo];
          });
          setReady(transactUrlResponse);
        }
        if (localStorageKey == editLocalStorageKey) {
          const editDogResponse = await UpdateDog(dogData, dogData?.id);
          if (editDogResponse) {
            router.push("/profile");
          }
        }
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    }
  };

  const views = [
    <DogDetailsForm1
      key={"dog-details"}
      setActiveSlide={setActiveSlide}
      localStorageKey={localStorageKey}
    />,
    <DogDetailsForm2
      key={"dog-details"}
      setActiveSlide={setActiveSlide}
      localStorageKey={localStorageKey}
    />,
    <ChooseImages key={"dog-images"} localStorageKey={localStorageKey} />,
    <UserDetailsForm
      key={"user"}
      setActiveSlide={setActiveSlide}
      localStorageKey={localStorageKey}
    />,
  ];

  return (
    <div
      className="w-full min-h-[90vh] flex flex-col justify-between"
      ref={leaseRef}>
      <Formik initialValues={{ ...dogData }} enableReinitialize={true}>
        <Form>{views[activeSlide]}</Form>
      </Formik>
      <div
        className={`${
          "hideLeft" && ""
            ? "hidden"
            : "grid grid-cols-2 lg:flex lg:justify-end lg:items-center w-full gap-1 px-7 py-7 border-t-[1px] border-t-[#C1C1C1] z-[3000] relative"
        }`}>
        <NavigationButton
          className={` ${
            "hideLeft" && "hidden"
          } col-span-1  border-[1px] border-[#AD842A] font-semibold text-[#AD842A] rounded-lg`}
          onClick={handleBack}>
          {"firstSlide" ? "Back" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            "hideRight" && "hidden"
          } col-span-1 bg-[#DDB771]  text-black font-semibold rounded-lg`}
          onClick={handleForward}>
          {firstSlide && "Get Started"}
          {!firstSlide && !lastSlide && "Continue"}
          {lastSlide && "Submit"}
        </NavigationButton>
      </div>
    </div>
  );
}
