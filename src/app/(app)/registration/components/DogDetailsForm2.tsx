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

type Props = {
  setActiveSlide: any;
  localStorageKey: string
  
};
const DogDetailsForm2 = ({ setActiveSlide, localStorageKey }: Props) => {
  const [dogData, setdogData] = useLocalStorage<any>(localStorageKey, {});
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");
  return (
    <>
      <Root className="bg-transparent  p1 p-10 ">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 ">
          <div className="col-span-3 lg:col-span-1 form-col w-full">
            <TextFieldInput
              name="kennel_name"
              type="text"
              label="Kennel Name"
              placeholder="Enter your Kennel Name"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  kennel_name: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="current_owner"
              type="email"
              label="Current Owner"
              placeholder="Enter current owner"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  current_owner: e.target.value,
                })
              }
            />

            <TextFieldInput
              name="color"
              type="text"
              label="colour"
              placeholder="Enter colour"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  color: e.target.value,
                })
              }
            />
            <CustomSelect
              placeholder={dogData?.breed}
              label="Breed"
              options={[
                { name: "American Bully", value: "American Bully" },
                { name: "American Bulldog", value: "American Bulldog" },
                { name: "French Bulldog", value: "French Bulldog" },
                { name: "Pitbull", value: "Pitbull" },
              ]}
              onChange={(value) => setdogData({ ...dogData, breed: value })}
            />
            <TextFieldInput
              name="afbr_no"
              type="number"
              label="AFBR NO."
              placeholder="Enter number"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  afbr_no: e.target.value,
                })
              }
            />
            <CustomSelect
              placeholder={dogData?.sex}
              label="Sex"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
              onChange={(value) => setdogData({ ...dogData, sex: value })}
            />
          </div>
          <div className="col-span-3 lg:col-span-1  form-col">
            <CustomDatePicker
              placeholderDate={dogData?.moveInDate}
              label="Date of Birth"
              onChange={(value) =>
                setdogData({ ...dogData, date_of_birth: value })
              }
            />
            <TextFieldInput
              name="age"
              type="number"
              label="age"
              placeholder="Enter age"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  age: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="place_of_birth"
              type="text"
              label="place of Birth"
              placeholder="Enter place of birth"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  place_of_birth: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="weight"
              type="number"
              label="weight"
              placeholder="Enter weight"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  weight: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="height"
              type="text"
              label="height"
              placeholder="Enter height"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  height: e.target.value,
                })
              }
            />
          </div>

          <div className="col-span-3 lg:col-span-1  form-col">
            <TextFieldInput
              name="land_of_standing"
              type="text"
              label="land of standing"
              placeholder="Enter plcae"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  land_of_standing: e.target.value,
                })
              }
            />
            <CustomTextAreaInput
              label="Any Additional Information ?"
              placeholder={dogData?.additional_information || "Message"}
              classes="h-[216px]"
              name="additional_information"
              onChange={(e) =>
                setdogData({
                  ...dogData,
                  additional_information: e.target.value,
                })
              }
            />
            {/* <Applicants /> */}
          </div>
        </div>
      </Root>
    </>
  );
};

export default DogDetailsForm2;

const Root = styled("div", {
  minHeight: "500px",
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
