import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { PiBoneBold } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Links = [
  { label: "Home", link: "/profile", icon: <MdHomeFilled /> },
  { label: "My Dogs", link: "/profile/my-dogs", icon: <PiBoneBold /> },
  { label: "Advertisements", link: "/profile/my-advertisements", icon: <TfiWrite /> },

  { label: "Socials", link: "/profile/socials", icon: <TfiWrite /> },

  { label: "Messages", link: "/profile/messages", icon: <FaRegMessage /> },

  {
    label: "Notifications",
    link: "/profile/notifications",
    icon: <IoIosNotificationsOutline />,
  },
  { label: "Account", link: "/profile/account", icon: <CiSettings /> },
];

const Pagination = ({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: any;
}) => {
  return (
    <Link
      href={link}
      className="hover:scale-[1.05] hover:bg-yellow4 w-full p-3 px-10 flex gap-5 items-center ">
      {icon}
      <p className=" font">{label}</p>
    </Link>
  );
};

export default function Navbar2() {
  return (
    <div className="bg-[#ba810808] w-full flex flex-col h-full items-start py-20 justify-start gap-1">
      {Links.map((r, index) => (
        <Pagination
          label={r?.label}
          link={r?.link}
          key={index}
          icon={r?.icon}
        />
      ))}
    </div>
  );
}
