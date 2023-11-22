import { FaArrowRightLong } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { FaShieldDog } from "react-icons/fa6";
import { RiAdvertisementFill, RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineBadge } from "react-icons/md";




type Props = {
  variant: string;
  label: string;
  reverse?: boolean;
};

export default function IconButton({ variant, label, reverse }: Props) {
  const options = {
    register: <MdOutlineBadge color="#ba8108" size="30"/>,
    ad : <RiAdvertisementLine color="#ba8108" size="30"/>,
    delete: <MdDelete color="red" />,
    delete2: <MdDelete color="#E4A951" />,
    edit: <MdModeEdit color="#E4A951" />,
    goto: <FaArrowRightLong color="#E4A951" />,
    users: <FaArrowRightLong color="#E4A951" />,
    add: <IoAdd size={30} color="#E4A951" />,
    remove: <RxCross2 size={30} color="#E4A951" />,
    reject: <MdDelete size={30} color="red" />,
    permission: <FiUsers size={30} color="grey" />,
    read: <IoCheckmarkDoneSharp size={30} color="#E4A951" />,



  };
  return (
    <button
      className={`flex gap-3 items-center justify-center uppercase hover:scale-[1.05] hover:bg-[#e4a95146] ${
        reverse && "flex-row-reverse"
      } px-3 py-2`}>
      {options[variant]}
      <p className="text-[15px] whitespace-nowrap">{label}</p>
    </button>
  );
}
