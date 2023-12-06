import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "Register",
    url: "/registration",
  },
  {
    name: "Community",
    url: "/community",
  },
  {
    name: "signup",
    url: "/sign-up",
  },
  {
    name: "login",
    url: "/login",
  },
  {
    name: "breeds",
    url: "/breeds",
  },
  {
    name: "profile",
    url: "/profile",
  },
];
export default function Navbar() {
  return (
    <div className="w-full bg-white h-[90px] flex justify-between px-10 py-5">
      <div className="flex gap-5 items-center w-full">
        <div
          className="relative w-full max-w-[76px] aspect-square
                 ">
          <Image src={"/images/logo.png"} alt="logo" fill />
        </div>
        <p className="uppercase font-semibold">afbr</p>
      </div>

      <div className="flex items-center justify-center gap-5">
        {links?.map((r, index) => (
          <Link key={index} href={r?.url} className="capitalize">
            {r?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
