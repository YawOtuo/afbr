"use client";
import { Logout } from "@/lib/utils/firebase";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userSqlData = useSelector((state) => state.users.userSqlData);

  return (
    <div className="border-b-yellow4 border-b-2 h-[52px] w-full flex items-center justify-between px-10 py-2">
      <div className="flex gap-5 items-center w-full">
        <div className="relative w-full max-w-[50px] aspect-square rounded-full overflow-hidden border-2 border-yellow1">
          <Image
            alt="Image"
            fill
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              userSqlData?.public_id || "placeholderdog_xyfyje"
            }.png`}
          />
        </div>
        <p className="font-semibold">{userSqlData?.username}</p>
      </div>{" "}
      <button onClick={Logout}>Logout</button>
    </div>
  );
}
