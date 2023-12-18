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
        direction == "right" ? "lg:flex-row-reverse bg-yellow4" : "lg:flex-row"
      } flex flex-col-reverse items-center justify-center
      py-20 gap-20 `}>
      <div className="flex flex-col gap-5 basis-[30%] justify-between">
        <div className="flex flex-col gap-7">
          <div className="border-b-2 border-b-yellow1 text-yellow1 text-3xl font-semibold">{label}</div>
          <div className="text-md">{subText}</div>
        </div>
        <Link
          href={link}
          className="rounded-3xl border-2 hover:bg-yellow4 border-yellow1 w-fit px-10 py-3">
          Register
        </Link>
      </div>
      <div className="w-full max-w-[500px] aspect-square relative rounded-full overflow-hidden  px-10">
        <Image src={image} alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 w-full mt-10">
      <RegType
        label="Adult Registration"
        image="/images/registration/adult.png"
        link="/registration/adult"
        subText="Calling all Bulldog enthusiasts! It's time to honor the regal legacy of your mature Bulldogs by registering them in our exclusive Bulldog Royalty Registry. These dignified companions embody strength, loyalty, and a charisma that commands attention. Showcase your Bulldog's majestic presence to the world. Let the legacy live on. Register your Bulldog royalty today!"
      />
      <RegType
        direction="right"
        label="Puppy Registration"
        image="/images/registration/puppy.jpeg"
        link="/registration/adult"
        subText="Embark on the journey of a lifetime with your adorable Bulldog pup! Our Puppy Bulldog Registry is the place to introduce the newest member of your family to the world. Whether they're learning to fetch or mastering their first sit, every puppy milestone is a cause for celebration. Join our registry and share the joy of puppyhood with fellow Bulldog enthusiasts. Together, let's celebrate the cuteness overload"
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
