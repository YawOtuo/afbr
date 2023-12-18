import SwiperSlideControls from "@/app/(app)/registration/components/SwiperSlideControls";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideControlsDog from "./SwiperSlideControls";

type Props = {
  variant: "single" | "multiple" | "placeholder";
  images?: string | string[];
};
function DogImages({ variant, images }: Props) {
  const variants: any = {
    single: (
      <div className="relative w-full max-w-[600px] aspect-square rounded-lg border-[6px] border-white overflow-hidden ">
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${images || "placeholderdog_xyfyje"}.png`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Dog"
        />
      </div>
    ),
    multiple: (
      <div className="w-full">
        <Swiper className="w-full" spaceBetween={50}>
          {Array.isArray(images) &&
            images?.map((url, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="relative w-full max-w-[600px] aspect-square rounded-lg border-[6px] border-white overflow-hidden ">
                  <Image
                    src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${url}.png`}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    alt="Dog"
                  />
                </div>
              </SwiperSlide>
            ))}
          <SwiperSlideControlsDog />
        </Swiper>
      </div>
    ),
    placeholder: (
      <div className="bg-yellow4 w-[400px] aspect-square rounded-md animate animate-pulse flex items-center justify-center">
        Loading
      </div>
    ),
  };
  return (
    <div className="w-full max-w-[600px] flex items-center justify-center">
      {variants[variant]}
    </div>
  );
}

export default DogImages;
