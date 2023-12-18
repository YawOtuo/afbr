import Image from "next/image";

type PedProps = {
  name?: string;
  image?: string;
  size: number;
  end?: boolean;
};

export const Ped = ({ name, image, size, end }: PedProps) => {
  const imageSize = size * 60;
  return (
    <div className="w-full">
      {name && (
        <div className="flex items-center justify-center w-full hover:scale-[1.05] cursor-pointer ">
          <div
            className={`relative w-full aspect-square border-[2px] rounded-md lg:rounded-2xl border-yellow1 overflow-hidden basis-[50%] shrink-0  `}
            style={{
              maxWidth: `${imageSize}px`,
            }}>
            <Image
              src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
                image || "placeholderdog_xyfyje"
              }.png`}
              fill
              objectFit="cover"
              objectPosition="center"
              alt="Dog"
            />
          </div>
          <div
            className={`flex flex-wrap  w-full ${
              !end && "border-y-yellow1 border-y-[1px]"
            } items-center shrink-1 justify-center lg:py-10 h-[75%] px-1 lg:font-semibold overf`}>
            <p className="text-white text-[10px] md:text-[13px]  lg:text-md">
              {name}
            </p>
          </div>
        </div>
      )}
      {!name && (
        <div className="flex items-center justify-center w-full hover:scale-[1.05] cursor-pointer ">
          <div
            className={`relative w-full aspect-square border-[2px] rounded-md lg:rounded-2xl border-yellow1 overflow-hidden basis-[50%] shrink-0 flex items-center justify-center text-xs animate animate-pulse `}
            style={{
              maxWidth: `${imageSize}px`,
            }}>
                Loading
          </div>
          <div
            className={`flex flex-wrap  w-full ${
              !end && "border-y-yellow1 border-y-[1px]"
            } items-center shrink-1 justify-center lg:py-10 h-[75%] px-1 lg:font-semibold overf`}>
            <p className="text-white text-[10px] md:text-[13px]  lg:text-md">
              {name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
