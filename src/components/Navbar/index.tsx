"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation.js";
import { usePathname } from "next/navigation.js";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi2";
import { useAssets } from "@/lib/hooks/useAssets";
import Menu from "./NavMenu.tsx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <nav
      className={`w-full px-8 py-4  z-[100] max-h-[100px] 
        bg-[#212020]
      } `}>
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl h-full">
        <Menu
          isOpen={props.isMenuOpen}
          layout
          toggleMenu={() => props?.toggleMenu((r: boolean) => !r)}
        />
        <Link href={"/"} className="w-full h-full">
          <div
            className="relative w-full max-w-[76px] aspect-square
              md:max-w-[92px] 
              2xl:max-w-[150px] 
             ">
            <Image src={"/images/logo.png"} alt="logo" fill />
          </div>
        </Link>
        <div className="flex items-center lg:gap-[73px] md:gap-[31px] w-full justify-end">
          <button
            onClick={(e: any) => {
              router.push("/registration");
            }}
            className={`hidden lg:block w-full 2xl:aspect-[387/75]
            aspect-[278/55]
            2xl:max-w-[387px] max-w-[278px]
            rounded-[32px] border-2 border-[#fff] bg-yellow3 text-white text-base font-semibold }`}>
            Register your dog
          </button>

          <button onClick={(e: any) => props?.toggleMenu((r: boolean) => !r)}>
            <GiHamburgerMenu size="50" color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
