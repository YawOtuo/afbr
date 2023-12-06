import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/lib/redux/reducers/users";
import CoreMenu from "@/components/CoreMenu";
// import CoreMenu from "@/components/CoreMenu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="hidden lg:flex">
          <Navbar />
        </div>{" "}
        <div className="hidden lg:flex flex-col">{children}</div>{" "}
        <div className="lg:hidden">
          <CoreMenu>{children}</CoreMenu>
        </div>
      </body>
    </html>
  );
}
