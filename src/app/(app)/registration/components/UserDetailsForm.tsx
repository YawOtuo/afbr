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
import BackAndNextControls from "./BackAndNextControls";
import SlideEnter from "@/components/SlideEnter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddDog } from "@/lib/api/dogs";
import { UpdateUser } from "@/lib/api/users";
import { useState } from "react";


type Props = {
  setActiveSlide : any
}

const UserDetailsForm = ({setActiveSlide} : any) => {
  const [dogData, setuserData] = useLocalStorage<any>("dog-data", {});
  const [userData, setUserData] = useState({});
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");

  const handleChange = () => {
    AddDog({
      user: {
        uid: "jHzIOAPwX8ajKDglIlKL3UZVC8r1",
      },
      dog: dogData,
    }).then((res) => console.log(res));

    UpdateUser(userData, 94).then((res) => console.log(res));
  };
  return (
    <>
      <Root className="bg-transparent flex flex-col p1 p-10 ">
        <p className="text-white font-semibold">Please confirm your details</p>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 ">
          <div className="col-span-3 lg:col-span-1 form-col w-full">
            <TextFieldInput
              type="text"
              name="username"
              label="Full Name"
              placeholder="Enter your full name"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />

            <TextFieldInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
            <CustomSelect
              placeholder={userData?.gender}
              label="Gender"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
              onChange={(value) => setUserData({ ...userData, gender: value })}
            />

            <PhoneNumberInputv2
              initialCountry={phoneNumberSelectedCountry}
              onChange2={(value) => setPhoneNumberSelectedCountry(value)}
              label="Phone"
              initialValue={userData?.phone_number}
              name="phoneNumber"
              onChange={(value) =>
                setUserData({
                  ...userData,
                  phone_number: value,
                })
              }
            />
          </div>
          <div className="col-span-3 lg:col-span-1  form-col">
            <TextFieldInput
              name="address1"
              type="text"
              label="address 1"
              placeholder="Please provide your address"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  contact_address: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="address2"
              type="text"
              label="address 2 ( optional )"
              placeholder="Please provide your address"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  currentAddress2: e.target.value,
                })
              }
            />
          </div>
          <div className="col-span-3 lg:col-span-1  form-col">
            <CustomTextAreaInput
              label="Any Additional Information ?"
              placeholder={userData?.additionalInformation || "Message"}
              classes="h-[216px]"
              name="additionalInformation"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  additionalInformation: e.target.value,
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

export default UserDetailsForm;

const Root = styled("div", {
  minHeight: "500px",
  color: "#ba8108",
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
