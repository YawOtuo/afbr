import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import IconButton from "@/components/Buttons/IconButton";
import { LiaEdit } from "react-icons/lia";

import { useSelector } from "react-redux";
import AddPostRoot from "./AddPostRoot";

type Props = {};
const AddAPost = ({ type }: Props) => {
  const [open, setOpen] = useState<any>();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="flex flex-col gap-1 p-5 shadow-md w-fit sticky top-10 right-20 rounded-md items-center justify-center">
          <LiaEdit size="50" color="#ba8108" />
          <p className="text-xs font-semibold whitespace-nowrap">Share a post</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[#00000083] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open] z-[2000] :animate-contentShow fixed top-[50%] left-[50%] h-[50vh] w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-scroll ">
          <AddPostRoot setOpen={setOpen} />

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddAPost;
