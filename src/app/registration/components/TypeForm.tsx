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
import CountryInput from "@/components/CountryInput";
import SwiperSlideControls from "./SwiperSlideControls";
import BackAndNextControls from "./BackAndNextControls";
const TypeForm = () => {
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
    <Root className="dog_reg_full text-yellow1 flex flex-col items-center justify-center p1 w-full ">
          <div className=" items-center justify-center form-col w-full max-w-[50%]">
            <CustomSelect
              label="Registration Type"
              placeholder={
                propertyData?.maritalStatus || "Select marital status"
              }
              options={[
                { name: "Domestic", value: "domestic" },
                { name: "International", value: "international" },
              ]}
              onChange={(value) =>
                setPropertyData({ ...propertyData, maritalStatus: value })
              }
            />
            <CountryInput label="Country" onChange={()=> {
              console.log('ere')
            }} />
        </div>
        <div className="mt-5">
        <BackAndNextControls/>
  
</div>       </Root>
  );
};

export default TypeForm;

const Root = styled("div", {
  minHeight: "500px",
  color: "#ba8108",
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
