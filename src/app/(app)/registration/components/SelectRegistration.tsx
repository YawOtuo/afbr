import Link from "next/link";
import RegisterModal from "./RegisterModal";

type Props = {
  label: string;
  subText?: string;
  active: boolean;
  price: string;
};
export default function SelectRegistration({
  label,
  subText,
  active,
  price,
}: Props) {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">{label}</p>
        <p>{subText}</p>
        <p>
          <span className="text-xs ">Price:</span> {price}
        </p>
      </div>
      {active && (
        <Link href={"/registration/add"}>
          <button className="inline-flex h-[35px] items-center justify-center rounded-3xl px-20 py-7 font-medium leading-none  bg-yellow1 text-white hover:scale-[1.05]">
            Register
          </button>
        </Link>
      )}
    </div>
  );
}
