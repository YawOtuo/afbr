import { styled } from "@stitches/react";
import { Field } from "formik";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionTypes = {
  name: string;
  value: string;
};
type Props = {
  placeholder?: string;
  label: string;
  options: OptionTypes[];
  onChange: (value: any) => void;
  fadeText?: boolean;
};

const CustomSelect = ({
  label,
  options,
  onChange,
  placeholder,
  fadeText,
}: Props) => {
  return (
    <Root className="w-full bg-transparent">
      <label>{label}</label>
      <Select onValueChange={onChange} >
        <SelectTrigger className={`w-full form-input capitalize "} bg-transparent text-white rounded-[32px] border-yellow1 border-2`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="z-[2000]">
          {options.map((r, index) => (
            <SelectItem key={index} value={r?.value} className="capitalize">
              {r?.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Root>
  );
};

const Root = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",

    option: {
      minHeight: "50px",
    },
  },
});

export default CustomSelect;
