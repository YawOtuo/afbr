import IconButton from "@/components/Buttons/IconButton";
import Image from "next/image";

type Props = {
  user: any;
};
export default function UsersListViewCard({ user }: Props) {
  return (
    <div className="flex justify-between gap-5 w-full items-center">
      <div className="flex gap-5 w-full items-center">
        <div className="relative w-full h-full max-w-[100px] aspect-square border-2 border-yellow4 rounded-full overflow-hidden">
          <Image
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              user?.public_id || "placeholderdog_xyfyje"
            }.png`}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="Dog"
          />
        </div>
        {user?.username}
      </div>

      <IconButton variant="goto" label="View" reverse/>
    </div>
  );
}
