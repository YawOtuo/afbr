import Image from "next/image";
import Link from "next/link";

export default function DogCard({ dog }) {
  return (
    <Link
      href={`pedigree/${dog?.name}/${dog?.id}`}
      className="w-full h-[full]  aspect-[346/442]">
      <div className="w-full flex flex-col gap-3 shadow-[0px_1px_4px_1px_#ba82084e] pb-3 hover:scale-[1.01] cursor-pointer">
        <div className="relative w-full h-full max-w-full aspect-[360/282]">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${dog.public_id || "placeholderdog_xyfyje"}.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>
        <div className="flex flex-col  px-2 gap-5 justify-between items-end ">
          <div className="flex flex-col gap-1 w-full">
            <p className="font-semibold text-lg text-yellow1">{dog?.name}</p>{" "}
            <p className="font-[400] text-sm">{dog?.current_owner || "N?A"}</p>{" "}
          </div>
          <p className="font-[400] text-xs">{dog?.date || "N/a"}</p>{" "}
        </div>
      </div>
    </Link>
  );
}
