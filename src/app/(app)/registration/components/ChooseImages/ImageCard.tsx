import ImageOptionsPopover from "./ImageOptionsPopover";


type Props = {
    remove: () => void;
    makeBannerImage: () => void;
  
    addCaption: () => void;
    public_id :any
  };

export const ImageCard = ({ public_id, remove, makeBannerImage, addCaption } :Props) => {
    return (
      <div
        className="rounded-2xl w-full aspect-[328/232] max-w-[628px] p-5"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/daurieb51/image/upload/v1701274495/${public_id}.png)`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundColor: "100%",
          backgroundRepeat: "no-repeat",
        }}>
  
        <ImageOptionsPopover remove={remove} makeBannerImage={makeBannerImage} addCaption={addCaption}/>
  
      </div>
    );
  };