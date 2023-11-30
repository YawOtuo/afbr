import React from "react";
import LoginForm from "./components/loginForm";

const Page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-16 bg-[#ba8108] text-white p-9 items-center justify-center ">
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

export default Page;
