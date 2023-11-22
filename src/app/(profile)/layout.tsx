import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import "../globals.css";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Providers from "@/lib/utils/provider";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className={montserrat.className}>
      <div className="grid grid-cols-5">
        <div className="">
          <Navbar2 />
        </div>
        <div className="col-span-4 flex flex-col">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </body>
  );
}