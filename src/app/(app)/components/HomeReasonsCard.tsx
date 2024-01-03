"use client";
import { styled } from "@stitches/react";
import CaHomeHandShake from "./icons/CaHomeHandShake";
import CaHomeIdentity from "./icons/CaHomeIdentity";
import CaHomePublic from "./icons/CaHomePublic";

type Props = {
  variant: "identity" | "community" | "public";
  title: string;
  subText: string;
};

export default function HomeReasonsCard({ variant, title, subText }: Props) {
  return (
    <Root
      className="flex flex-col gap-10  p-10 lg:p-20 items-center rounded-2xl h-fit max-w-[470px] lg:max-w-full cursor-pointer hover:bg-yellow4 hover:scale-[1.02] text-center
    ">
      <div className="flex items-center justify-center">
        {variant == "identity" && <CaHomeIdentity />}

        {variant == "community" && <CaHomeHandShake />}
        {variant == "public" && <CaHomePublic />}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="">
          <p className="font-semibold text-xl ">{title}</p>
        </div>
        <div>
          {/* <p>{subText}</p> */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            eius, non necessitatibus amet repudiandae quas possimus quibusdam
            aut alias fugit veritatis fuga tempora assumenda nostrum enim.
            Dolorem, voluptas. Laboriosam, veniam.
          </p>
        </div>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
});
