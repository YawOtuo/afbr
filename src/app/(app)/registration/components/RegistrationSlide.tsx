"use client";
import { styled } from "@stitches/react";

import CountryInput from "@/components/CountryInput";
import SelectRegistration from "./SelectRegistration";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocalStorage } from "@uidotdev/usehooks";

const Pagination = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link href={url} className="text-white text-lg font-[400]">
      {label}
    </Link>
  );
};

const prices = {
  "adult-international": "USD 35.00",
  "adult-international-cost": 35.0,

  "adult-domestic": "USD 30.00",
  "adult-domestic-cost": 30.0,

  "puppy-international": "USD 30.00",
  "puppy-international-cost": 30.0,

  "puppy-domestic": "USD 25.00",
  "puppy-domestic-cost": 25.0,
};

export const RegistrationSlide = ({ type }) => {
  const [country, setCountry] = useState("");
  let registrationInfo;
  let setRegistrationInfo;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [registrationInfo, setRegistrationInfo] = useLocalStorage(
      "dog-registration-info"
    );
  }

  useEffect(() => {
    if (prices && type) {
      setRegistrationInfo((prevRegistrationInfo) => ({
        ...prevRegistrationInfo,
        price:
          prices[
            `${type}-${
              country === "republic of ghana" ? "domestic" : "international"
            }-cost`
          ],
        type: `${type} registration`,
        country: `${
          country === "republic of ghana" ? "domestic" : "international"
        }`,
      }));
    }
  }, [type, country]);

  return (
    <Root className="w-full">
      <div
        className={`relative font-[800] bg-cover text-[40px] h-[70vh] items-center bg-no-repeat flex flex-col justify-center gap-10 w-full`}
        style={{
          backgroundImage: "url('/images/litter-registrations-1.png')",
        }}>
        <div className="text-white capitalize ">{type} registration</div>
        <div className="absolute bottom-0 right-0 w-full items-end justify-end px-10 flex  flex-col">
          {type != "adult" && (
            <Pagination label="Adult Registration" url="/registration/adult" />
          )}{" "}
          {type != "puppy" && (
            <Pagination label="Puppy Registration" url="/registration/puppy" />
          )}
          {/* {type != "litter" && <Pagination label="Litter Registration" url="/registration/litter"/>} */}
        </div>
      </div>
      <div className="w-full my-5 pt-5  pb-20  text-left px-5 mx-5 flex flex-col gap-10">
        <div className="pt-5 mt-5 register-text">
          <span className="brand-yellow-font">Register</span> your {type} with
          us today
        </div>
        <div className="flex flex-col gap-3 w-[50%]">
          <div>
            <CountryInput
              label="Please select your country"
              onChange={(value) => setCountry(value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <SelectRegistration
            label={"Domestic Registration"}
            active={country == "republic of ghana"}
            subText="This includes users in the region of Ghana"
            price={prices[`${type}-domestic`]}
          />

          <SelectRegistration
            label={"International Registration"}
            active={country != "republic of ghana"}
            subText="This includes users outside the region of Ghana"
            price={prices[`${type}-international`]}
          />
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
