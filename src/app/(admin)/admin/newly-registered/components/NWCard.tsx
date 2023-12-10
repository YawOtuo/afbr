import IconButton from "@/components/Buttons/IconButton";
import { UpdateDog } from "@/lib/api/dogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type Props = {
  dog: any;
};
export default function NwCard({ dog }: Props) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation((newItem) => UpdateDog(newItem, dog?.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`dog-${id}`);
    },
  });

  const handleUpdate = async (newItem) => {
    updateMutation.mutate(newItem);
  };
  return (
    <div className="relative w-full flex flex-col gap-3 shadow-[0px_1px_4px_1px_#ba82084e] pb-3 hover:scale-[1.01] cursor-pointer max-w-[300px] rounded-md overflow-hidden aspect-[346/442]">
      <div className="relative w-full  aspect-[360/282]">
        <Image
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
            dog?.public_id || "placeholderdog_xyfyje"
          }.png`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Dog"
        />
      </div>
      <div className="flex flex-col  px-2 gap-5 justify-between items-end ">
        <div className="flex flex-col gap-1 w-full">
          <p className="font-semibold text-lg text-yellow1">{dog?.name}</p>{" "}
          <p className="font-semibold text-lg text-yellow1">
            {dog?.current_owner}
          </p>{" "}
        </div>
        <p className="font-[400] text-xs">{dog?.date_registered || "N/a"}</p>{" "}
      </div>
      <div className="flex flex-col gap-1">
        <Link href={`/pedigree/${dog?.name}/${dog?.id}`}>
          <IconButton label="View Dog" variant="goto" reverse />
        </Link>
        <div
          className=""
          onClick={() =>
            handleUpdate({
              newly_registered: "no",
            })
          }>
          <IconButton label="Remove from newly registered" variant="delete" />
        </div>{" "}
      </div>
    </div>
  );
}
