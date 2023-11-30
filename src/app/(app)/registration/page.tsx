import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

type RegTypeProps = {
  image: string;
  direction?: string;
  label: string;
  link: string;
  subText: string;
};

const RegType = ({
  image,
  direction = "left",
  label,
  link,
  subText,
}: RegTypeProps) => {
  return (
    <div
      className={`${
        direction == "right" ? "lg:flex-row-reverse bg-yellow1" : "lg:flex-row"
      } flex flex-col-reverse items-center justify-center
      hover:scale-[1.05] py-20 gap-20 `}>
      <div className="flex flex-col gap-5 basis-[30%] justify-between">
        <div className="flex flex-col gap-3">
          <div className="border-b-2 border-b-yellow1">{label}</div>
          <div className="text-md">{subText}</div>
        </div>
        <Link
          href={link}
          className="rounded-3xl border-2 border-yellow1 w-fit px-10 py-3">
          Register
        </Link>
      </div>
      <div className="w-full max-w-[400px] aspect-square relative rounded-full overflow-hidden">
        <Image src={image} alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 w-full mt-10 px-5 ">
      <RegType
        label="Adult Registration"
        image="/images/registration/adult.png"
        link="/registration/adult"
        subText="Lorem"
      />
      <RegType
        direction="right"
        label="Puppy Registration"
        image="/images/registration/puppy.jpeg"
        link="/registration/adult"
        subText="Lorem"
      />{" "}
      {/* <RegType
        label="Litter Registration"
        image="/images/registration/litter.jpeg"
        link="/registration/adult"
        subText="Lorem"
      /> */}
    </div>
  );
}
