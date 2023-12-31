"use client";
import { IoFootstepsOutline } from "react-icons/io5";
import { ReactNode, use, useEffect, useState } from "react";
import Navbar from "../Navbar/index2";

const CoreMenu = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reduceHeight, setReduceHeight] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setReduceHeight(true);
      }, 1000);

      clearTimeout(1000);
    }
    setReduceHeight(false);
  }, [isMenuOpen]);

  return (
    <div
      className={`
    ${reduceHeight ? "max-h-[100vh]" : ""}
   overflow-hidden  `}>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={() => {
          window.scrollTo({
            top: 0,
          });
          setIsMenuOpen((r) => !r);
        }}
      />
      <div
        className={` ${
          isMenuOpen ? "overflow-y-hidden brightness-50" : "opacity-100"
        }
        transition-all duration-[100ms] 
        
        
        `}>
        {children}

      </div>
    </div>
  );
};

export default CoreMenu;
