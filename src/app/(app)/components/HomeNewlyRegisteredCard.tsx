import Image from "next/image";

type Props = {
  image: string;
};

export default function HomeNewlyRegisteredCard({ image }: Props) {
  return (
    <div className="w-full rounded-2xl shadow-md overflow-hidden">
      <div className="relative w-full aspect-[458/352] ">
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
            image || "placeholderdog_xyfyje"
          }.png`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Dog"
        />{" "}
      </div>
    </div>
  );
}
