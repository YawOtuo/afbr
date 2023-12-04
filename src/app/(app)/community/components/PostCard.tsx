import Image from "next/image";

type Props = {
  post: any;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="flex flex-col w-full h-full gap-2 shadow-[0_7px_29px_0_#63636e33]">
      <div className="flex items-center justify-between p-5">
        <p className="text-xs">Post by: {post?.username}</p>
        <p className="text-xs">{post?.timestamp}</p>
      </div>
      <div className={`${!post?.content && "hidden"} p-5`}>{post?.content}</div>
      <div className="w-full h-full">
        <div className="relative w-full aspect-[627/418]">
          <Image
          objectFit="cover"
            fill
            alt="post image"
            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${
              post?.image_public_id || "placeholderdog_xyfyje"
            }.png`}
          />
        </div>
      </div>
    </div>
  );
}
