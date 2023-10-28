"use client"
import CustomSelect from "@/components/CustomSelect";
import PhoneNumberInputv2 from "@/components/PhoneInputv2";
import TextFieldInput from "@/components/TextFieldInput";
import { styled } from "@stitches/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import FormSwitch from "./FormSwitch";
import { LeaseData, MostRecentEmployment, PreferedMethodOfContact } from "./content";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import CustomTextAreaInput from "@/components/CustomTextAreaInput";
import { SelectSearchInput } from "@/components/SelectSearchInput";
import BackAndNextControls from "./BackAndNextControls";


const UserDetailsForm = () => {
  const [propertyData, setPropertyData] = useLocalStorage<any>(
    "property1",
    {
      gender: "Male",
      leaseTerm: "12 months",
      maritalStatus: "single",
      mostRecentEmployment: "employed",
      preferredMethodOfContact: "phone",
      otherApplicants: "no",
    }
  );
  const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
    useLocalStorage<any>("phoneNumberSelectedCountry");

  return (
    <Root className="dog_reg_full flex flex-col p1 p-10 ">
      <div className="grid grid-cols-3 gap-x-10 gap-y-5 ">
        <div className="col-span-3 lg:col-span-1 form-col w-full">
          <TextFieldInput
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            onChange={(e) =>
              setPropertyData({ ...propertyData, firstName: e.target.value })
            }
          />
          <TextFieldInput
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            onChange={(e) =>
              setPropertyData({ ...propertyData, lastName: e.target.value })
            }
          />
          <TextFieldInput
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                email: e.target.value,
              })
            }
          />
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
          <CustomSelect
            label="Marital Status"
            placeholder={propertyData?.maritalStatus || "Select marital status"}
            options={[
              { name: "Single", value: "single" },
              { name: "married", value: "married" },
            ]}
            onChange={(value) =>
              setPropertyData({ ...propertyData, maritalStatus: value })
            }
          />
          <PhoneNumberInputv2
            initialCountry={phoneNumberSelectedCountry}
            onChange2={(value) => setPhoneNumberSelectedCountry(value)}
            label="Phone"
            initialValue={propertyData?.phoneNumber}
            name="phoneNumber"
            onChange={(value) =>
              setPropertyData({
                ...propertyData,
                phoneNumber: value,
              })
            }
          />

          <FormSwitch
            label="Available on whatsapp"
            onChange={(value) =>
              setPropertyData({
                ...propertyData,
                availableOnWhatsapp: value,
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
              setPropertyData({
                ...propertyData,
                currentAddress1: e.target.value,
              })
            }
          />
          <TextFieldInput
            name="address2"
            type="text"
            label="address 2 ( optional )"
            placeholder="Please provide your address"
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                currentAddress2: e.target.value,
              })
            }
          />
          <CustomSelect
            options={MostRecentEmployment}
            placeholder={
              propertyData?.mostRecentEmployment || "Most Recent Employment"
            }
            label="Employment Status"
            onChange={(value) =>
              setPropertyData({
                ...propertyData,
                mostRecentEmployment: value,
              })
            }
          />
          <CustomSelect
            options={PreferedMethodOfContact}
            placeholder={propertyData?.preferredMethodOfContact || "Select"}
            label="Preferred Method Of Contact"
            onChange={(value) =>
              setPropertyData({
                ...propertyData,
                preferredMethodOfContact: value,
              })
            }
          />
          <CustomDatePicker
            placeholderDate={propertyData?.moveInDate}
            label="Desired Move In Date"
            onChange={(value) =>
              setPropertyData({ ...propertyData, moveInDate: value })
            }
          />
          <SelectSearchInput
            data={LeaseData}
            placeholder={propertyData?.leaseTerm || "Enter lease term"}
            label="Lease term"
            onChange={(value) => {
              console.log(value);
              setPropertyData({ ...propertyData, leaseTerm: value });
            }}
          />
        </div>
        <div className="col-span-3 lg:col-span-1  form-col">
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
  
</div>   
 </Root>
  );
};

export default UserDetailsForm;

const Root = styled("div", {
  minHeight: "500px",
  color:"#ba8108",
  ".form-col":{
    display:"flex",
    flexDirection:"column",
    gap:"1.5rem"
  }
});
