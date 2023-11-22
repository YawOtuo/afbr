import Image from "next/image";
import Link from "next/link";

export default function DogCard({ dog }) {
  return (
    <Link href={`pedigree/${dog?.name}/${dog?.id}`} className="w-full h-full">
      <div className="w-full flex flex-col gap-3 shadow-[0px_1px_4px_1px_#ba82084e] pb-3 hover:scale-[1.03] cursor-pointer">
        <div className="relative w-full h-full max-w-full aspect-square">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${dog.public_id}.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>
        <div className="flex flex-col  px-2 ">
          <p className="font-semibold text-md">{dog?.name}</p>{" "}
          <p className="font-[400] text-sm">{dog?.current_owner}</p>{" "}
          <p className="font-[400] text-xs">{dog?.breed}</p>{" "}
        </div>
      </div>
    </Link>
  );
}
