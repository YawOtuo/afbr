"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logInWithEmailAndPassword, signInWithGoogle } from "@/lib/utils/firebase";
import { redirect } from "next/navigation";

const Page = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      logInWithEmailAndPassword(values.email, values.password)
      .then((res) => redirect('/profile'))
      .catch((err) => console.log(err))
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center  gap-4 bg-gray-200 p-8 w-full h-full justify-center text-black"
    >
      <input
        id="email"
        name="email"
        className="p-[10px] w-full text-black"
        type="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        className="p-[10px] w-full"
        placeholder="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit" className="w-full">
        Login
      </Button>
      <Button type="button" onClick={signInWithGoogle} className="w-full">
        Login with Google
      </Button>
      <Link href={"#"}>Forgot Password</Link>
      <span className="text-black">
        Already have an account? <Link href={"/sign-up"}>Register now.</Link>
      </span>
    </form>
  );
};
export default Page;
