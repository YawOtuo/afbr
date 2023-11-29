import ImageOptionsPopover from "./ImageOptionsPopover";

type Props = {
  remove: () => void;
  makeBannerImage: () => void;

  addCaption: () => void;
  file: any;
};

export default function BannerImage({
  file,
  makeBannerImage,
  addCaption,
  remove,
}: Props) {
  return (
    <div
      className="w-full h-full min-h-[298px] xl:min-h-[500px] rounded-2xl p-5 flex flex-col gap-6"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/daurieb51/image/upload/v1701274495/${file?.public_id}.jpg)`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundColor: "100%",

        backgroundRepeat: "no-repeat",
      }}>
      <div className="max-w-[137px] max-h-[54px] w-full aspect-[137/54] text-[16px] font-[400] bg-white flex items-center justify-center rounded-2xl text-black">
        Banner Image
      </div>
      <ImageOptionsPopover
        bannerImage={false}
        remove={remove}
        makeBannerImage={makeBannerImage}
        addCaption={addCaption}
      />
    </div>
  );
}
