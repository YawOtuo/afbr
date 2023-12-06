"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation.js";
import { usePathname } from "next/navigation.js";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi2";
import { useAssets } from "@/lib/hooks/useAssets";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./NavMenu.tsx";

const NavbarTest = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <nav
      className={`w-full px-8 py-2 z-[100] max-h-[70px] 
        bg-white
      } `}>
      <div className="flex items-start justify-between ">
        <Menu
          isOpen={props.isMenuOpen}
          layout
          toggleMenu={() => props?.toggleMenu((r: boolean) => !r)}
        />
        <Link href={"/"} className="w-full h-full">
          <div
            className="relative w-full max-w-[60px] aspect-square
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
            <GiHamburgerMenu size="50" color="black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTest;
