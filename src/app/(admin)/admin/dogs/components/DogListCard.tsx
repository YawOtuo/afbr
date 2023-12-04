import IconButton from "@/components/Buttons/IconButton";
import Image from "next/image";

type Props = {
  dog: any;
};
export default function DogListViewCard({ dog }: Props) {
  return (
    <div className="flex justify-between gap-5 w-full items-center">
      <div className="flex gap-5 w-full items-center">
        <div className="relative w-full h-full max-w-[100px] aspect-square border-2 border-yellow4">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              dog.public_id || "placeholderdog_xyfyje"
            }.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>
        {dog?.name}
      </div>

      <IconButton variant="goto" label="View" reverse/>
    </div>
  );
}
