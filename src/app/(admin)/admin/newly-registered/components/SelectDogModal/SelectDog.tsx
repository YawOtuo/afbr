import IconButton from "@/components/Buttons/IconButton";
import { SearchForDog, UpdateDog } from "@/lib/api/dogs";
import { fetchusers } from "@/lib/api/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

type Props = {
  setOpen: any;
};
function SelectDog({ setOpen }: Props) {
  const queryClient = useQueryClient();
  const [keyword, setKeyWord] = useState("");
  const {
    isLoading,
    error: itemError,
    data: results,
  } = useQuery(["search", keyword], () => SearchForDog(keyword), {
    enabled: !!keyword,
  });

  const updateMutation = useMutation(
    (newItem) => UpdateDog(newItem, newItem.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`newly-registered`);
      },
    }
  );

  const handleUpdate = async (id, otherProperties) => {
    updateMutation.mutate({ id, ...otherProperties });
    // setOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter dog"
        onChange={(e) => setKeyWord(e.target.value)}
      />
      {isLoading && <p>Loading</p>}
      <div className="flex flex-wrap gap-5">
        {(results || [])
          .filter((r) => r?.newly_registered !== "yes")
          .map((r, index) => (
            <div
              key={index}
              className={`w-full border-2 py-1 cursor-pointer px-1 max-w-[300px] aspect-[346/442]  flex flex-col gap-3`}>
              <div className="relative w-full  aspect-[360/282]">
                <Image
                  src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
                    r?.public_id || "placeholderdog_xyfyje"
                  }.png`}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="Dog"
                />
              </div>
              {r?.name}
              <IconButton
                label="Mark as newly registered"
                variant="add"
                onClick={() => handleUpdate(r.id, { newly_registered: "yes" })}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SelectDog;
