import React from "react";
import SignUpForm from "./components/signupForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full   bg-[#d9d9d967] flex items-center justify-center pt-2">
      <div className="flex flex-col lg:flex-row  text-white items-start justify-center h-full w-full">
        <div className="relative w-full  bg-no-repeat bg-cover h-[30vh] lg:h-[90vh] lg:max-w-[724px] bg--left-top bg-[url('/images/signup.png')]">
  
        </div>

        <div className="flex  w-full lg:max-w-[40%] lg:h-[90vh] ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
