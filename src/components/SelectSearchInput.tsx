"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ErrorMessage, Field } from "formik";
import { styled } from "@stitches/react";

type DataItem = {
  value: string;
  label: string;
};

type Props = {
  data: DataItem[];
  placeholder: string;
  label:string
  onChange: (value: any) => void
};


export function SelectSearchInput({ data, placeholder, label, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Root className="bg-transparent">
      <div
        className={`font-[400] capitalize`}>
        <label>{label}</label>
        
        
      </div>
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild className="rounded-[32px] border-yellow1 border-2" >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between  whitespace-nowrap h-[52px] bg-transparent rounded-[32px] !border-yellow1 border-2">
            {value
              ? data.find((data) => data.value === value)?.label
              :  placeholder }
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit p-0 z-[200] bg-white " >
          <Command >
            <CommandInput placeholder="Search data..." />
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup  >
              {data.map((data) => (
                <CommandItem
               
                  key={data.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setValue(currentValue === value ? currentValue : "");
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === data.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {data.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </Root>
  );
}
const Root = styled("div", {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.9375rem",
    ".form-input": {
      height: "52px",
      padding: "15px",
      fontSize: " 0.8125rem",

    },
  });