"use client";
import React, { useEffect } from "react";
import LoginForm from "./components/loginForm";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/utils/firebase";

export default function Page() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log(user);
      router.push("/profile");
    }
  }, [user, loading]);
  return (
    <div className="w-full   bg-[#d9d9d967] flex items-center justify-center pt-2">
      <div className="flex flex-col lg:flex-row  text-white items-start justify-center h-full w-full">
        <div className="relative w-full  bg-no-repeat bg-cover h-[30vh] lg:h-[90vh] lg:max-w-[724px] bg--left-top bg-[url('/images/signup.png')]"></div>

        <div className="flex  w-full lg:max-w-[40%] lg:h-[90vh] ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
