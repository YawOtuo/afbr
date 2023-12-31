/* eslint-disable react/no-unescaped-entities */
import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import HomeReasonsCard from "./components/HomeReasonsCard";
import HomeNewlyRegistered from "./components/HomeNewlyRegistered";
import CaTickStyled from "./components/icons/CaTickStyled";
import FeaturedDogForToday from "./components/FeaturedFogForToday";
import HeroSection from "./components/HeroSection";
import HomeNewlyRegisteredSm from "./components/HomeNewlyRegisteredSm";
import HomeRegularAds from "./components/HomeRegularAds";
import HomeRegularAdsSm from "./components/HomeRegularAdsSm";
import { TiTickOutline } from "react-icons/ti";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex w-full flex-col  px-5 lg:px-20  py-10 lg:py-24">
        <p className="text-yellow1 text-3xl lg:text-6xl font-bold text-center px-5 ">
          The African Bully Registry
        </p>

        <p className="text-[1.5rem] font-semibold text-center">
          Africa's Premier Bully Registry
        </p>
      </div>
      <FeaturedDogForToday />
      <div className="hidden lg:flex">
        <HomeRegularAds />
      </div>
      <div className="lg:hidden">
        <HomeRegularAdsSm />
      </div>
      <div className="grid grid-cols-2 gap-y-10  py-24 lg:py-0 lg:h-[80vh] px-5 lg:px-24">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 items-start justify-center">
          <p className="text-3xl lg:text-6xl ">
            <span className="text-yellow1">Register</span> your dog with us
            today
          </p>
          <Link href={"/registration"} className="mt-20 ">
            <div className="flex gap-2 items-center text-2xl">
              <p>REGISTER</p>
              <FaArrowRightLong color="#ba8108" />
            </div>{" "}
          </Link>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 items-start lg:items-center justify-center">
          <div className="flex flex-col gap-5 font-semibold">
            <div className="flex gap-6 items-center">
              <TiTickOutline color="green" size="50" />
              <p>American Bully</p>
            </div>{" "}
            <div className="flex gap-6 items-center">
              <TiTickOutline color="green" size="50" />
              <p>American Bulldog</p>
            </div>{" "}
            <div className="flex gap-6  items-center">
              <TiTickOutline color="green" size="50" />
              <p>French Bully</p>
            </div>{" "}
            <div className="flex gap-6  items-center">
              <TiTickOutline color="green" size="50" />
              <p>Pitbull</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center bg-yellow1 py-24 lg:py-0 lg:h-[100vh] text-white">
        <div className="col-span-2 lg:col-span-1 relative w-full aspect-[632/395]">
          <Image src={"/images/crowd.png"} alt="Crowd" fill objectFit="cover" />
        </div>{" "}
        <div className="col-span-2 lg:col-span-1 flex justify-center w-full px-5 lg:px-20">
          <div className=" flex flex-col items-end justify-center gap-5">
            <p className="text-3xl lg:text-[3rem] w-full">
              Join the <span className="font-bold">community</span> of bull dog
              owners today
            </p>
            <p className="w-full">
              Connect with Bulldog enthusiasts from around the globe, sharing
              your passion for these remarkable breeds. Join a worldwide network
              of Bulldog lovers, exchanging knowledge and experiences with
              fellow enthusiasts.
            </p>
            <Link href={"/sign-up"} className="w-full flex gap-5  justify-start items-center font-bold">
              <p className="">Join us today</p>
              <FaArrowRightLong color="white" />

            </Link>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-col gap-20 items-center lg:items-start justify-center  py-24 lg:h-[100vh] ">
        <p className="text-3xl font-bold px-5 lg:px-20 text-yellow1">
          What's in store for you?
        </p>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 px-5 lg:px-10   lg:py-0 items-center justify-center">
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <HomeReasonsCard
              variant="identity"
              title="A verifiable identity"
              subText=""
            />
          </div>{" "}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <HomeReasonsCard
              variant="community"
              title="A trusted community"
              subText=""
            />
          </div>{" "}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <HomeReasonsCard
              variant="public"
              title="A public platform to advertise"
              subText=""
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex my-20 w-full">
        <HomeNewlyRegistered />
      </div>{" "}
      <div className="lg:hidden mb-10 ">
        <HomeNewlyRegisteredSm />
      </div>

      <Footer/>
    </main>
  );
}
