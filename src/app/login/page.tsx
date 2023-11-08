import React from "react";
import LoginForm from "./components/loginForm";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-16 bg-[#ba8108] text-white p-9 items-center justify-center mt-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-medium ">Login Into Your Profile</h1>
        </div>
        <div className="flex ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
