import IconButton from "@/components/Buttons/IconButton";
import { deleteAdvertisement } from "@/lib/api/ads";
import { UpdateDog } from "@/lib/api/dogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type Props = {
  ad: any;
};
export default function AddAdCard({ ad }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id) => deleteAdvertisement(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`advertisements`);
    },
  });

  const handleRemove = async (newItem) => {
    deleteMutation.mutate(newItem);
  };
  return (
    <div className="relative w-full flex flex-col gap-3 shadow-[0px_1px_4px_1px_#ba82084e] pb-3 hover:scale-[1.01] cursor-pointer max-w-[300px] rounded-md overflow-hidden aspect-[346/442] border-yellow4 border-2">
      <div className="relative w-full  aspect-[360/282]">
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
            ad?.public_id || "placeholderdog_xyfyje"
          }.png`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Dog"
        />
      </div>
      <div className="flex flex-col  px-2 gap-5 justify-between items-start ">
        <div className="flex flex-col gap-1 w-full">
          <p className="font-semibold text-lg text-yellow1">{ad?.name}</p>{" "}
     
        </div>
        <p className="font-[400] text-xs">{ad?.date || "N/a"}</p>{" "}
      </div>
      <div className="flex flex-col gap-1">
        <Link href={`/pedigree/${ad?.name}/${ad?.id}`}>
          <IconButton label="View Dog" variant="goto" reverse />
        </Link>
        <div
          className=""
          onClick={() =>
            handleRemove(ad?.id)
          }>
          <IconButton label="Remove from ads" variant="delete" />
        </div>{" "}
      </div>
    </div>
  );
}
