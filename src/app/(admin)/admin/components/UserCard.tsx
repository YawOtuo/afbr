import Image from "next/image";

type Props = {
  user: any;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="flex gap-5 items-center justify-start hover:bg-yellow4 w-full">
      <div className="relative w-[100px] h-[100px]">
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
            user?.public_id || "placeholderdog_xyfyje"
          }.png`}
          fill
          alt="USer"
        />
      </div>
      {user?.username || "N/a"}
    </div>
  );
}
