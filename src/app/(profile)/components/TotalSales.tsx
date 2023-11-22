import { styled } from "@stitches/react";

type Props = {
  filter : string
  amount : string | number
}

const TotalSales = ({filter, amount}: Props) => {
  return (
    <Root className="flex flex-col items-center justify-center gap-3 w-full md:max-w-[182px] 
    max-h-[101px] md:max-h-[109px] cursor-pointer hover:scale-[1.05] hover:bg-[#e4a95146]">

      <p className="text-[#6e4f1f] font-bold text-2xl">GHS {amount}</p>
      <p className="capitalize">Total {filter}</p>

    </Root>
  );
};

const Root = styled("div", {
  aspectRatio: "182/109",
  // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
});
export default TotalSales;
