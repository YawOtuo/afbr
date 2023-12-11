import IconButton from "@/components/Buttons/IconButton";
import { deleteAdvertisement, updateAdvertisement } from "@/lib/api/ads";
import { UpdateDog } from "@/lib/api/dogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type Props = {
  ad: any;
};
export default function AdminAddAdCard({ ad }: Props) {
  const queryClient = useQueryClient();

  const acceptMutation = useMutation((data) => updateAdvertisement(data, ad?.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`advertisements`);
    },
  });

  const handleAccept = async (newItem) => {
    acceptMutation.mutate(newItem);
  };

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
      <div
        className={`absolute top-0 right-0 capitalize text-xs px-2 py-1 z-[50] ${
          ad?.approved == "yes" ? "bg-green-400" : "bg-yellow4"
        } `}>
        {ad?.approved == "yes" ? "Approved" : "Pending"}
      </div>
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
      <div className="flex flex-col  px-2 gap-1 justify-between items-start ">
        <div className="flex flex-col gap-1 w-full">
          <p className="font-semibold text-lg text-yellow1">{ad?.name}</p>{" "}
        </div>
        <p className="font-[400] text-xs">{ad?.date || "N/a"}</p>{" "}
      </div>
      <div className="flex flex-col gap-1">
        <Link href={`/pedigree/${ad?.name}/${ad?.id}`}>
          <IconButton label="View Dog" variant="goto" reverse />
        </Link>
        <div className="flex flex-wrap gap-4 items-center">
          {ad?.approved !== "yes" && (
            <div className="" onClick={() => handleAccept({ approved: "yes"})}>
              <IconButton label="Accept" variant="add" />
            </div>
          )}
          <div className="" onClick={() => handleRemove(ad?.id)}>
            <IconButton label="Remove/reject ads" variant="delete" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
