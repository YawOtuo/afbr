import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const footerLinks = [
    {
      name: "about us",
      url: "/about",
    },
    {
      name: "posts",
      url: "/community",
    },
    // {
    //   name: "breeds",
    //   url: "/breeds",
    // },
  ];

  const size = 45;

  const socials = [
    {
      icon: <FaFacebook size={size} />,
      url: "/https://www.facebook.com/groups/1103803533338705/?ref=share/",
    },
    {
      icon: <FaInstagram size={size} />,
      url: "/https://africanbullyregistry.com/",
    },

    {
      icon: <FaLinkedin size={size} />,
      url: "/https://www.linkedin.com/company/african-bully-registry",
    },
  ];
  return (
    <footer className="flex flex-col gap-5  bg-footerDark text-white ">
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center py-5 border-b-2 bg-[#333]">
        {footerLinks.map((r, index) => (
          <Link href={r?.url} key={index} className="text-md capitalize">
            {r?.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-16 items-center justify-center py-10 border-b-1 text-center">
        <p className="text-2xl font-semibold">
          Get connected with us on social networks
        </p>
        <div className="flex gap-10">
          {socials.map((r, index) => (
            <Link href={r?.url} key={index} className="text-md capitalize">
              {r?.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center py-5">
        <p className="text-2xl font-semibold">Get in contact with us</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex gap-5 items-center">
            <FaPhone size="20" />
            <p>+ 233 24 233 1674</p>
            <p>+233 20 377 5123</p>
          </div>
          <div className="flex gap-5 items-center">
            <MdOutlineMailOutline size="20" />
            <p>africanbullyregistry@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  text-center items-center justify-center gap-5 py-5">
        <FaRegCopyright size="15" />
        <p>2021 Copyright : The African Bully Registry</p>
      </div>
    </footer>
  );
}

export default Footer;
