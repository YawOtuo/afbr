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
import { useState } from "react";
import DogCard from "@/components/DogCard.tsx";
import IconButton from "@/components/Buttons/IconButton";

type Props = {
  setActiveSlide: any;
};
const DogDetailsForm1 = ({ setActiveSlide }: Props) => {
  const [dogData, setdogData] = useLocalStorage<any>("dog-data", {});
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");
  const [sire, setSire] = useState();
  const [dam, setDam] = useState();
  const [changeSire, setChangeSire] = useState(true);
  const [changeDam, setChangeDam] = useState(true);

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
              {sire && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-center justify-start">
                    <p>Sire</p>
                    <div onClick={() => setChangeSire(true)}>
                      <IconButton label="change" />
                    </div>{" "}
                  </div>{" "}
                  {sire && <DogCard dog={sire} />}
                </div>
              )}
              {dam && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-center justify-start">
                    <p>Dam</p>
                    <div onClick={() => setChangeDam(true)}>
                      <IconButton label="change" />
                    </div>{" "}
                  </div>{" "}
                  {dam && <DogCard dog={dam} />}
                </div>
              )}
            </div>
            {changeSire && (
              <SelectSireDam
                label="sire"
                onSelect={(value) => {
                  setChangeSire(false);
                  setSire(value);
                }}
              />
            )}
            {changeDam && (
              <SelectSireDam
                label="dam"
                onSelect={(value) => {
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
