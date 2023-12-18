"use client"
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import "../globals.css";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Providers from "@/lib/utils/provider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const userData = useSelector((state) => state.users.userData);

  useEffect(() => {
    !userData && router.push('/login')
  }, [userData]);
  return (
    <body className={montserrat.className}>
      <div className="grid grid-cols-5">
        <div className="hidden lg:flex">
          <Navbar2 />
        </div>
        <div className="col-span-5 lg:col-span-4 flex flex-col">
          <Navbar />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </body>
  );
}
