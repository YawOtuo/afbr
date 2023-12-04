import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";

const Links = [
  { label: "Back", link: "/profile" },
  { label: "Admin", link: "/admin" },
  { label: "Dogs", link: "/admin/dogs" },
  { label: "Users", link: "/admin/users" },
  { label: "advertissements", link: "/admin/advertisements" },
  { label: "newly registered", link: "/admin/newly-registered" },
  { label: "notifcations", link: "/admin/notifications" },
];

const Pagination = ({ label, link }: { label: string; link: string }) => {
  return (
    <Link href={link} className="hover:scale-[1.05] hover:bg-yellow1 w-full p-3 px-10 flex gap-5 items-center ">
      <MdHomeFilled />
      <p className=" capitalize">{label}</p>
    </Link>
  );
};

export default function SideNavAdmin() {
  return (
    <div className="bg-[#ba810808] w-full flex flex-col h-full items-start py-20 justify-start gap-5">
      {Links.map((r, index) => (
        <Pagination label={r?.label} link={r?.link} key={index} />
      ))}
    </div>
  );
}
