import IconButton from "@/components/Buttons/IconButton";
import { addAdvertisement } from "@/lib/api/ads";
import { SearchForDog, SearchForDogByUser, UpdateDog } from "@/lib/api/dogs";
import { fetchusers } from "@/lib/api/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  setOpen: any;
  type: "special" | "regular"
};

//what is userSqlData.is null
function SelectDog({ setOpen, type }: Props) {
  const queryClient = useQueryClient();
  const [keyword, setKeyWord] = useState("");
  const userSqlData = useSelector((state) => state.users.userSqlData);

  const {
    isLoading,
    error: itemError,
    data: results,
  } = useQuery(["search", keyword], () => SearchForDogByUser(userSqlData?.id, keyword), {
    enabled: !!keyword,
  });

  const updateMutation = useMutation((newItem) => addAdvertisement(newItem), {
    onSuccess: () => {
      queryClient.invalidateQueries(`advertisements`);
    },
  });

  const handleCreate = async (data) => {
    updateMutation.mutate(data);
    setOpen(false);
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
                label="Advertise"
                variant="add"
                onClick={() => handleCreate({ dog: r?.id, type: type, date: new Date(), user_id : userSqlData?.id })}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SelectDog;
