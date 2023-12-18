"use client";
import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  count?: number;
};
const SwiperSlideControlsDog = ({ count }: Props) => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState("domestic");

  useEffect(() => {
    const handleSlideChange = () => {
      // console.log('Slide changed:', swiper.activeIndex);
      setActiveIndex(swiper.activeIndex);
    };

    if (swiper) {
      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <Root className="w-full">
      <div className=" flex justify-center gap-3">
        <button
          className="p-2
        hover:bg-gray-500
        "
          onClick={() => {
            swiper.slidePrev();
            setActive("intenational");
          }}>
          <MdKeyboardArrowLeft size={40} color="white" />
        </button>

        <button
          className="p-2 hover:bg-gray-500"
          onClick={() => {
            swiper.slideNext();
            setActive("intenational");
          }}>
          <MdKeyboardArrowRight size={40} color="white" />
        </button>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  "& .arrow": {
    maxWidth: "24px",
    maxHeight: "24px",
    width: "24px",
    height: "24px",
    color: "white",
  },
  "div:first-child": {
    gap: "2%",
  },
  "& .arrow-container": {
    maxWidth: "83px",
    maxHeight: "83px",
    width: "83px",
    height: "83px",
    backgroundColor: "#DDB771",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width:500px)": {
      width: "61px",
      height: "61px",
    },
  },
});

export default SwiperSlideControlsDog;
