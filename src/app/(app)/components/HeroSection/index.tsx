"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="w-full h-[30vh] lg:h-[80vh]  ">
      <Swiper
        className="w-full h-full"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
        <SwiperSlide>
          <div
            className={`bg-[url('/images/hero1.jpg')] w-full  h-full bg-no-repeat bg-cover lg:bg-cover bg-right lg:bg-center`}>
            <div className={`${styles.homeMessage} w-[60%] `}>
              <p className={`${styles.title}`}>
                Welcome to The AFBR – Where Elegance Meets Strength
              </p>
              <p className={`${styles.subTitle}`}>
                Join Africa&apos;s Premier Bully Registry and be part of a community
                that celebrates the grace and power of Bulldog breeds.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/hero2.jpg')] w-full  h-full bg-no-repeat bg-contain lg:bg-cover bg-right lg:bg-center">
            <div className={`${styles.homeMessage} w-[60%]`}>
              <p className={`${styles.title}`}>African bully registry</p>
              <p className={`${styles.subTitle}`}>
                Making the bully community well respected. Africa&apos;s Premier
                Bully Registry connecting bully breeds across Africa and around
                the globe{" "}
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
