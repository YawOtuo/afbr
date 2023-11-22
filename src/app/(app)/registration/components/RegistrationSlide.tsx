"use client";
import { styled } from "@stitches/react";

import CountryInput from "@/components/CountryInput";
import SelectRegistration from "./SelectRegistration";
import styles from "./index.module.css";

const Pagination = ({ label }: { label: string }) => {
  return (
    <div>
      <p
        className="text-lg text-white
      font-[400]
      text-md">
        {label}
      </p>
    </div>
  );
};

export const RegistrationSlide = ({ type }) => {
  return (
    <Root>
      <div
        className={`relative font-[800] bg-cover text-[40px] min-h-[70vh] items-center bg-no-repeat flex flex-col justify-center gap-10 w-full`}
        style={{
          backgroundImage: "url('/images/litter-registrations-1.png')",
        }}>
        <div className="text-white text-uppercase ">{type}</div>
        <div className="absolute bottom-0 right-0 w-full items-end justify-end px-10 flex  flex-col">
          <Pagination label="Adult Registration" />
          <Pagination label="Puppy Registration" />
          <Pagination label="Litter Registration" />
        </div>
      </div>
      <div className="w-full my-5 pt-5  pb-20  text-left px-5 mx-5 flex flex-col gap-10">
        <div className="pt-5 mt-5 register-text">
          <span className="brand-yellow-font">Register</span> your litter with
          us today
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <div>
            <p>Please select your country</p>
            <CountryInput />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <SelectRegistration label={"Domestic Registration"} />
          <SelectRegistration label={"International Registration"} />
        </div>
      </div>
    </Root>
  );
};

const Root = styled("section", {
  ".register-text": {
    fontSize: "48px",
  },
});
export const NavigationButton = styled("button", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "224px",
  borderRadius: "0.5rem",
  fontWeight: "600",
  fontSize: "16px",
  height: "52px",
  aspectRatio: "224/52",

  "@media screen and (max-width:1024px)": {
    fontSize: "13px",
    aspectRatio: "195/48",
    minHeight: "48px",
    maxWidth: "100%",
  },
});
