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
const DogDetailsForm = () => {
  const [propertyData, setPropertyData] = useLocalStorage<any>("property1", {
    gender: "Male",
    leaseTerm: "12 months",
    maritalStatus: "single",
    mostRecentEmployment: "employed",
    preferredMethodOfContact: "phone",
    otherApplicants: "no",
  });
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");
  return (
    <Root className="dog_reg_full  p1 p-10 ">
      <div className="grid grid-cols-3 gap-x-10 gap-y-5 ">
        <div className="col-span-3 lg:col-span-1 form-col w-full">
          <TextFieldInput
            type="text"
            name="firstName"
            label="Registration Name"
            placeholder="Enter name"
            onChange={(e) =>
              setPropertyData({ ...propertyData, firstName: e.target.value })
            }
          />

          <TextFieldInput
            name="email"
            type="email"
            label="Kennel Name"
            placeholder="Enter your Kennel Name"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
          <TextFieldInput
            name="email"
            type="email"
            label="Current Owner"
            placeholder="Enter current owner"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />

          <CustomSelect
            placeholder={propertyData?.gender}
            label="Breed"
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
            ]}
            onChange={(value) =>
              setPropertyData({ ...propertyData, gender: value })
            }
          />
          <TextFieldInput
            name="email"
            type="number"
            label="AFBR NO."
            placeholder="Enter number"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="col-span-3 lg:col-span-1  form-col">
          <CustomSelect
            placeholder={propertyData?.gender}
            label="Gender"
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
            ]}
            onChange={(value) =>
              setPropertyData({ ...propertyData, gender: value })
            }
          />

          <CustomDatePicker
            placeholderDate={propertyData?.moveInDate}
            label="Date of Birth"
            onChange={(value) =>
              setPropertyData({ ...propertyData, moveInDate: value })
            }
          />
          <TextFieldInput
            name="email"
            type="text"
            label="place of Birth"
            placeholder="Enter plcae"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
          <TextFieldInput
            name="email"
            type="text"
            label="weight"
            placeholder="Enter plcae"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
          <TextFieldInput
            name="email"
            type="text"
            label="height"
            placeholder="Enter plcae"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="col-span-3 lg:col-span-1  form-col">
          <TextFieldInput
            name="email"
            type="text"
            label="land of standing"
            placeholder="Enter plcae"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
          <CustomTextAreaInput
            label="Any Additional Information ?"
            placeholder={propertyData?.reasonsForMoving || "Message"}
            classes="h-[216px]"
            name="additionalInformation"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                reasonsForMoving: e.target.value,
              })
            }
          />
          {/* <Applicants /> */}
        </div>
      </div>
      <div className="mt-5">
        <BackAndNextControls/>
  
</div>       </Root>
  );
};

export default DogDetailsForm;

const Root = styled("div", {
  minHeight: "500px",
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
