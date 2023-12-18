"use client";
import { styled } from "@stitches/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { RegistrationSlide } from "../components/RegistrationSlide";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Page() {
  return (
    <Root className="w-full">

      <RegistrationSlide type="adult" />

    </Root>
  );
}

const Root = styled("section", {
  ".swiper": {
    width: "100%",
    height: "100%",
  },
});
