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

export default function RegisterForm() {
  const [progressValue, setProgressValue] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dogData, setuserData] = useLocalStorage<any>("dog-data", {});
  const leaseRef = useRef<any>();

  const scrollToTop = () => {
    if (leaseRef.current) {
      leaseRef.current.scrollIntoView();
    }
  };
  useEffect(() => {
    const value = (activeSlide / views.length) * 100;
    console.log(value);
    setProgressValue(value + 1);
  }, [activeSlide]);

  const handleBack = () => {
    // firstSlide && setOpen(false);
    if (activeSlide > 0) {
      setActiveSlide((init) => init - 1);

      scrollToTop();
    }
  };

  const handleForward = () => {
    // activeSlide > 13 &&
    //   submitListing(user?.profileData?.id, listingFormData, true);
    if (activeSlide < views.length - 1) {
      setActiveSlide((init) => init + 1);

      scrollToTop();
    }
  };

  const views = [
    <DogDetailsForm1 key={"dog-details"} setActiveSlide={setActiveSlide} />,
    <DogDetailsForm2 key={"dog-details"} setActiveSlide={setActiveSlide} />,
    <ChooseImages key={'dog-images'}/>,
    <UserDetailsForm key={"user"} setActiveSlide={setActiveSlide} />,
  ];

  return (
    <div className="w-full">
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
          } col-span-1 bg-[#DDB771]  text-white font-semibold rounded-lg`}
          onClick={handleForward}>
          {/* {firstSlide && "Get Started"} */}
          {/* {!firstSlide && !lastSlide && "Continue"} */}
          {/* {lastSlide && "Submit"} */}
          Continue
        </NavigationButton>
      </div>
    </div>
  );
}
