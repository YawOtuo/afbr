"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { useState } from "react";
import { links } from "./content";
import Link from "next/link";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import ArrowDownNav from "@/components/icons/CaArrowDownNav.";

const MenuOption = ({
  name,
  sub = [], // provide default value as an empty array
  sub2 = [], // provide default value as an empty array
}: {
  name: string;
  sub?: any[];
  sub2?: any[];
}) => {
  const CollapsibleRoot = styled(Collapsible.Root, {
    width: 300,
    height: "fit-content",
    display: "flex",
    flexDirection: "column",

    "div:first-child": {
      display: "flex",
    },
    "&[data-state=open] > div:nth-child(2)": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },

    "&[data-state=open] p:first-child": {
      color: "#FCAB10",
      gap: "10px",
    },
    "&[data-state=closed]": {
      flexDirection: "row",
    },
  });

  const [open, setOpen] = useState(false);
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={`
              "flex flex-row w-full justify-between items-center cursor-pointer
              font-[600]
              ${open ? "text-[#FCAB10]" : "text-[#fff]"}
            `}
        >
          <p className={"uppercase !font-semibold"}>{name}</p>
          <ArrowDownNav color={open ? "#ddd" : "#fff"} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        {sub?.map((r, index) => (
          <Collapsible.Root key={index} className="text-white flex flex-col ">
            <Collapsible.Trigger className="text-left flex justify-between pr-20 ">
              {r?.name}
              <ArrowDownNav />
            </Collapsible.Trigger>
            <Collapsible.Content>
              {sub2?.map((r2, index) => (
                <Link href={r2?.url} key={index}>
                  {r2?.name}
                </Link>
              ))}
            </Collapsible.Content>
          </Collapsible.Root>
        ))}
      </Collapsible.Content>
    </CollapsibleRoot>
  );
};

export const MobileMenu = (props: any) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col px-4 gap-4  ${props?.className} `}
    >
      <div
        onClick={(e: any) => {
          router.push("/login");
          props?.toggleMenu();
        }}
        className="max-w-[309px] max-h-[59px] w-full aspect-[309/59]
      bg-[#305A61] border-2 border-[#D9D9D9] text-white rounded-2xl mt-6 mb-10
      font-semibold text-[24px] flex items-center justify-center
      "
      >
        Start here
      </div>
      {links.map((r, index) =>
        r?.sub ? (
          <MenuOption key={index} name={r.name} sub={r?.sub} sub2={r?.sub2} />
        ) : (
          <div
            onClick={(e: any) => {
              router.push(r?.url);
              props?.toggleMenu();
            }}
            key={index}
          >
            <p className={"uppercase !font-semibold text-[#fff]"}>{r?.name}</p>
          </div>
        )
      )}
    </div>
  );
};
