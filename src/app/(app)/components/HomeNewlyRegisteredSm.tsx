"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeNewlyRegisteredCard from "./HomeNewlyRegisteredCard";

export default function HomeNewlyRegisteredSm() {
  return (
    <div className="w-full px-5">
      <p className="text-md font-semibold mb-5">See the newly registered dogs on the block</p>
      <Swiper spaceBetween={25}>
        <SwiperSlide>
          <HomeNewlyRegisteredCard image={"/images/testdog.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <HomeNewlyRegisteredCard
            image={
              "https://res.cloudinary.com/daurieb51/image/upload/v1695976909/ryw2tirvpu9sgifhx8no.jpg"
            }
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <HomeNewlyRegisteredCard
            image={
              "https://res.cloudinary.com/daurieb51/image/upload/v1689031930/fjgwst2glwih9libefzy.jpg"
            }
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <HomeNewlyRegisteredCard image="https://res.cloudinary.com/daurieb51/image/upload/v1684248154/xtyxhwwspmtpxzylwmkq.jpg" />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <HomeNewlyRegisteredCard image={"/images/testdog.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
