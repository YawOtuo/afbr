"use client";
import CustomSelect from "@/components/CustomSelect";
import PhoneNumberInputv2 from "@/components/PhoneInputv2";
import TextFieldInput from "@/components/TextFieldInput";
import { styled } from "@stitches/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import FormSwitch from "./FormSwitch";
import {
  LeaseData,
  MostRecentEmployment,
  PreferedMethodOfContact,
} from "./content";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import CustomTextAreaInput from "@/components/CustomTextAreaInput";
import { SelectSearchInput } from "@/components/SelectSearchInput";
import CustomRadioInput from "@/components/CustomRadioInput";
import SwiperSlideControls from "./SwiperSlideControls";
import BackAndNextControls from "./BackAndNextControls";
import SlideEnter from "@/components/SlideEnter";
import SelectSireDam from "./SelectSireDam";
import { useEffect, useState } from "react";
import DogCard from "@/components/DogCard.tsx";
import IconButton from "@/components/Buttons/IconButton";
import {
  addLocalStorageKey,
  editLocalStorageKey,
} from "@/lib/utils/definitions";
import { useQuery } from "@tanstack/react-query";
import { fetchDogOne } from "@/lib/api/dogs";

type Props = {
  setActiveSlide: any;
  localStorageKey: string;
  edit: boolean;
};
const DogDetailsForm1 = ({ setActiveSlide, localStorageKey }: Props) => {
  const [dogData, setdogData] = useLocalStorage<any>(localStorageKey, {});
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");
  const [sire, setSire] = useState();
  const [dam, setDam] = useState();
  const [changeSire, setChangeSire] = useState(true);
  const [changeDam, setChangeDam] = useState(true);
  const [isEdit, setIsEdit] = useState(localStorageKey === editLocalStorageKey);

  const {
    isLoading: sireIsLoading,
    error: sireError,
    data: sireResults,
  } = useQuery([`dog-${dogData?.sire}`], () => fetchDogOne(dogData?.sire), {
    enabled: !!dogData?.sire && isEdit,
  });
  const {
    isLoading: damIsLoading,
    error: damError,
    data: damResults,
  } = useQuery([`dog-${dogData?.dam}`], () => fetchDogOne(dogData?.dam), {
    enabled: !!dogData?.dam && isEdit,
  });

  useEffect(() => {
    if (localStorageKey == addLocalStorageKey) {
      setSire(dogData?.sireData);
      setDam(dogData?.damData);
    }
    if (localStorageKey == editLocalStorageKey) {
      setIsEdit(true);
    }
  }, [localStorageKey]);

  useEffect(() => {
    if (isEdit) {
      setSire(sireResults);
      console.log(sireResults);
      setDam(damResults);
    }
  }, [isEdit, damResults, sireResults]);

  return (
    <>
      <Root className="bg-transparent  p1 p-10 min-h-[60vh]">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 ">
          <div className="col-span-3 lg:col-span-2 form-col w-full">
            <TextFieldInput
              type="text"
              name="name"
              label="Registration Name"
              placeholder="Enter name"
              onChange={(e) => setdogData({ ...dogData, name: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              {isEdit && sireIsLoading && <p>Loading Sire details</p>}
              {sire && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-center justify-start">
                    <p>Sire</p>
                    <div onClick={() => setSire(undefined)}>
                      <IconButton label="change" variant="edit"/>
                    </div>{" "}
                  </div>{" "}
                  {sire && <DogCard dog={sire} />}
                </div>
              )}
              {isEdit && damIsLoading && <p>Loading Dam details</p>}

              {dam && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-center justify-start">
                    <p>Dam</p>
                    <div onClick={() => setDam(undefined)}>
                      <IconButton label="change" variant="edit" />
                    </div>{" "}
                  </div>{" "}
                  {dam && <DogCard dog={dam} />}
                </div>
              )}
            </div>
            {!sire && (
              <SelectSireDam
                label="sire"
                onSelect={(value) => {
                  setdogData((prev) => ({
                    ...prev,
                    sire: value?.id,
                    sireData: value,
                  }));
                  setChangeSire(false);
                  setSire(value);
                }}
              />
            )}
            {!dam && (
              <SelectSireDam
                label="dam"
                onSelect={(value) => {
                  setdogData((prev) => ({
                    ...prev,
                    dam: value?.id,
                    damData: value,
                  }));
                  setChangeDam(false);
                  setDam(value);
                }}
              />
            )}{" "}
          </div>
        </div>
      </Root>
    </>
  );
};

export default DogDetailsForm1;

const Root = styled("div", {
  minHeight: "500px",
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
