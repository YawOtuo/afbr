import { fetchDogs } from "@/lib/api/dogs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-yellow1 pt-10 lg:pt-0 text-white">
        <div className="flex-[1_0_50%] flex flex-col items-center justify-center pl-10 gap-5">
          <p className="text-2xl w-full">
            Join the <span className="font-bold">community</span> of bull dog
            owners today
          </p>
          <p className="w-full">Connect with dog owners across the globe</p>
          <p className="w-full">Connect</p>
        </div>{" "}
        <div className="relative w-full aspect-[632/395]">
          <Image src={"/images/crowd.png"} alt="Crowd" fill />
        </div>{" "}
      </div>
  
    </main>
  );
}
