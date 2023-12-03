"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { registerWithEmailAndPassword, signInWithGoogle } from "@/lib/utils/firebase";

const SignUpForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        registerWithEmailAndPassword(values.fullname, values.email, values.password)
      },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center  gap-4 bg-gray-200 text-black p-8 w-full h-full justify-center"
    >
      <input
        id="fullname"
        name="fullname"
        className="p-[10px] w-full"
        type="text"
        onChange={formik.handleChange}
        placeholder="Full Name"
        value={formik.values.fullname}
      />
      <input
        id="email"
        name="email"
        className="p-[10px] w-full"
        type="email"
        placeholder="E-mail Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        className="p-[10px] w-full"
        placeholder="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
      <Button type="button" className="w-full" onClick={signInWithGoogle}>
        Register with Google
      </Button>
      <span className="text-black">
        Already have an account? <Link href={"/login"}>Login now.</Link>
      </span>
    </form>
  );
};
export default SignUpForm;
