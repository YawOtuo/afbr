import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchusers } from "@/lib/api/users";
import { is } from "date-fns/locale";
import { UpdateDog } from "@/lib/api/dogs";

type Props = {
  id : number
  setOpen : any
}

const ChangeOwner = ({id, setOpen} : Props) => {

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["users"], () => fetchusers());


  const updateMutation = useMutation((newItem) => UpdateDog(newItem, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`dog-${id}`);
    },
  });

  const handleUpdate = async (newItem) => {
    updateMutation.mutate(newItem);
    setOpen(false)
  };
  return (
    <div>
      {isLoading && <p>Loading</p>}
      {users?.map((r, index) => (
        <div key={index}
        className="w-full border-b hover:bg-yellow4 py-1 cursor-pointer px-1"
        onClick={() => handleUpdate({user : r?.id})}>{r?.username}</div>
      ))}
    </div>
  );
};

export default ChangeOwner;
