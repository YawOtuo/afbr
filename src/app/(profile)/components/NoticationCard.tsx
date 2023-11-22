
import { PiWarningBold } from "react-icons/pi";
import { FaInfoCircle } from "react-icons/fa";
import IconButton from "@/components/Buttons/IconButton";
import SuccessCircle from "@/components/icons/SuccessCircle";

type Props = {
  variant: string;
};

export default function NotificationCard({ variant }: Props) {
  const options = {
    success: <SuccessCircle size="30" />,
    caution: (
      <PiWarningBold
        size="30"
        color="#E4A951
    "
      />
    ),
    info: <FaInfoCircle size="30" />,
  };
  return (
    <div className="w-full hover:scale-[1.05] hover:bg-[#e4a9513e] cursor-pointer p-5">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-3 lg:gap-0">
        <div className="flex gap-4">
          <div className="">{options[variant]}</div>
          <div className="flex flex-col gap-1 w-full">
            <p className="font-semibold text-lg">Lorem ipsum</p>
            <p className="text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio temporibus, dolorem voluptatem saepe odit est provident
              eveniet amet molestias earum hic asperiores quae esse pariatur
              labore, fugiat, sunt quisquam ullam!
            </p>
          </div>
        </div>
        <IconButton label="Delete" variant="delete2" />
      </div>
    </div>
  );
}
