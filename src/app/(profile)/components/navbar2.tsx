import Link from "next/link";

const Links = [
  { label: "Dashboard", link: "/profile" },
  { label: "My Dogs", link: "/my-dogs" },
  { label: "Messages", link: "" },
  { label: "Notifications", link: "/notifications" },
  { label: "Account", link: "" },
];

const Pagination = ({ label, link }: { label: string; link: string }) => {
  return (
    <Link href={link} className="hover:scale-[1.05] hover:bg-yellow1 w-full p-3 px-10">
      <p className=" font">{label}</p>
    </Link>
  );
};

export default function Navbar2() {
  return (
    <div className="bg-[#e2d9bb7f] w-full flex flex-col h-full items-start py-20 justify-start gap-5">
      {Links.map((r, index) => (
        <Pagination label={r?.label} link={r?.link} key={index} />
      ))}
    </div>
  );
}