import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import IconButton from "@/components/Buttons/IconButton";
import ChangeOwner from "../../../dogs/components/ChangeOwnerModal/ChangeOwner";
import SelectDog from "./SelectDog";

type Props = {
    
};
const SelectDogModal = ({  }: Props) => {
  const [open, setOpen] = useState<any>()
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          Add Dog
        </button>
    
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[#00000083] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open] z-[2000] :animate-contentShow fixed top-[50%] left-[50%] h-[80vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-scroll ">
          <SelectDog  setOpen={setOpen}/>

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

export default SelectDogModal;
