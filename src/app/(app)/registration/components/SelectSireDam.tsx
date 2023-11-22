import IconButton from "@/components/Buttons/IconButton";
import DogCard from "@/components/DogCard.tsx";
import { SearchForDog, fetchDogs } from "@/lib/api/dogs";
import { styled } from "@stitches/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  label: string;
  onSelect?: any;
};

export default function SelectSireDam({ label, onSelect }: Props) {
  const [searchInput, setSearchInput] = useState();
  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(
    [`search-dogs-${searchInput}`],
    () => SearchForDog(searchInput),
    {
      enabled: !!searchInput,
    }
  );

  return (
    <div className="flex flex-col">
      <TextFieldInput
        type="text"
        name={label}
        label={label}
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value);
          setSearchInput(e.target.value);
        }}
      />

      <div className="grid grid-cols-4 gap-x-5 gap-y-5 mt-10">
        {searchInput && isLoading && <p>Loading</p>}
        {dogs?.map((r, index) => (
          <div key={index}>
            <DogCard dog={r} />
            <div
              className=""
              onClick={() => {
                setSearchInput("");
                onSelect(r);
              }}>
              <IconButton label="Select" variant="success" />
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

type TextFieldInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: any) => void;
};

const TextFieldInput = ({
  label,
  type,
  name,
  placeholder,
  onChange,
}: TextFieldInputProps) => {
  return (
    <TFormDiv className={`font-[400]   capitalize w-full`}>
      <label className="text-[16px]">{label}</label>

      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          className="form-input w-full bg-transparent border-[2px] border-[#ba8108] rounded-[32px]"
        />
      </div>
    </TFormDiv>
  );
};
const TFormDiv = styled("div", {
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
