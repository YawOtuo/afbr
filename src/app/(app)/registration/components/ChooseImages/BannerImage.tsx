import Image from "next/image";
import ImageOptionsPopover from "./ImageOptionsPopover";

type Props = {
  remove: () => void;
  makeBannerImage: () => void;

  addCaption: () => void;
  public_id: any;
};

export default function BannerImage({
  public_id,
  makeBannerImage,
  addCaption,
  remove,
}: Props) {
  return (
    <div
      className="w-full h-full] rounded-2xl p-5 flex flex-col gap-6 relative"
      // style={{
      //   backgroundImage: `url(https://res.cloudinary.com/daurieb51/image/upload/v1701274495/${public_id}.jpg)`,
      //   backgroundPosition: "50%",
      //   backgroundSize: "cover",
      //   backgroundColor: "100%",

      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="relative w-full h-full  min-h-[298px] xl:min-h-[500px">
        {" "}
        <Image
          fill
          objectFit="cover"
          alt="Dog image"
          src={`https://res.cloudinary.com/daurieb51/image/upload/v1701274495/${public_id}.png`}
        />
      </div>

      <div className="flex flex-col gap-10 absolute top-10 left-10">
        <div className="max-w-[137px] max-h-[54px] w-full aspect-[137/54] text-[16px] font-[400] bg-white flex items-center justify-center rounded-2xl text-black">
          Banner Image
        </div>
        <div>
          <ImageOptionsPopover
            bannerImage={false}
            remove={remove}
            makeBannerImage={makeBannerImage}
            addCaption={addCaption}
            
          />
        </div>
      </div>
    </div>
  );
}
