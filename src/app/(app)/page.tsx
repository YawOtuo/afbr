/* eslint-disable react/no-unescaped-entities */
import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import HomeReasonsCard from "./components/HomeReasonsCard";
import HomeNewlyRegistered from "./components/HomeNewlyRegistered";
import CaTickStyled from "./components/icons/CaTickStyled";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-col  px-5 lg:px-20 py-24">
        <p className="text-yellow1 text-3xl lg:text-6xl font-bold text-center px-5 ">
          The African Bully Registry
        </p>

        <p className="text-[1.5rem] font-semibold text-center">
          Africa's Premier Bully Registry
        </p>
      </div>
      <div className="flex items-center justify-center bg-[url('/images/dedicated.jpeg')] bg-no-repeat bg-cover h-[90vh] px-5 lg:px-24 bg-center">
        <p className="text-lg md:text-[2.5rem] font-bold text-white py-24">
          Dedicated to connecting bully breeds across the globe
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-10  py-24 lg:py-0 lg:h-[80vh] px-5 lg:px-24">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 items-start justify-center">
          <p className="text-3xl lg:text-6xl ">
            <span className="text-yellow1">Register</span> your dog with us
            today
          </p>
          <Link href={"/registration"}>
            <div className="flex gap-2 items-center">
              <p>REGISTER</p>
              <FaArrowRightLong color="#ba8108" />
            </div>{" "}
          </Link>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 items-start lg:items-center justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex gap-6">
              <CaTickStyled />
              <p>American Bully</p>
            </div>{" "}
            <div className="flex gap-6">
              <CaTickStyled />
              <p>American Bulldog</p>
            </div>{" "}
            <div className="flex gap-6">
              <CaTickStyled />
              <p>French Bully</p>
            </div>{" "}
            <div className="flex gap-6">
              <CaTickStyled />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              nesciunt iusto quia ab quibusdam reiciendis eveniet et sapiente,
              nulla iste, facere error deserunt illo voluptatum assumenda! Ex
              maiores at eveniet?
            </p>

            <p className="w-full">Join us</p>
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-col gap-20 items-center lg:items-start justify-center  py-24 lg:h-[100vh] ">
        <p className="text-3xl font-bold px-20 text-yellow1">
          What's in store for you?
        </p>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 px-5 lg:px-10   lg:py-0 items-center justify-center">
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <HomeReasonsCard variant="identity" title="A verifiable identity" subText=""/>
          </div>{" "}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <HomeReasonsCard variant="community" title="A trusted community"subText="" />
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
      <div className="my-20">
        <HomeNewlyRegistered />
      </div>{" "}
    </main>
  );
}
