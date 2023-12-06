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
import { AddDog } from "@/lib/api/dogs";
import Progress from "@/components/Progress";

export default function RegisterForm({ setOpen }: { setOpen: any }) {
  const [progressValue, setProgressValue] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dogData, setuserData] = useLocalStorage<any>("dog-data", {});
  const leaseRef = useRef<any>();
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlide, setFirstSlide] = useState(true);
  const [dogUnfinishedRegistrations, setDogUnfinishedRegistrations] =
    useLocalStorage<any>("dog-unfinished-registrations", []);
  const [registrationInfo, setRegistrationInfo] = useLocalStorage(
    "dog-registration-info"
  );
  const [ready, setReady] = useState(false);

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
    firstSlide && setOpen(false);
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

        setDogUnfinishedRegistrations((prev) => [...prev, updatedDogInfo]);
        setReady(transactUrlResponse);
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    }
  };

  const views = [
    <DogDetailsForm1 key={"dog-details"} setActiveSlide={setActiveSlide} />,
    <DogDetailsForm2 key={"dog-details"} setActiveSlide={setActiveSlide} />,
    <ChooseImages key={"dog-images"} />,
    <UserDetailsForm key={"user"} setActiveSlide={setActiveSlide} />,
  ];

  return (
    <div className="w-full " ref={leaseRef}>
      <div className="w-full mt-10">
        <Progress value={progressValue} />
      </div>{" "}
      <Formik initialValues={{ ...dogData }}>
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
