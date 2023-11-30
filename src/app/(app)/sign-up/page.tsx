import React from "react";
import SignUpForm from "./components/signupForm";

export default function Page () {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-12 bg-[#ba8108] text-white p-9 items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-medium ">
            Sign Up With The African Bully Registry
          </h1>
          <p>Join the Global Community of Bulldog Owners today, at no cost</p>
        </div>
        <div className="flex ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

