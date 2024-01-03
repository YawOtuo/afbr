import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { AddPost, likePost } from "@/lib/api/posts";


type Props = {
  post: any;
};

export default function PostCard({ post }: Props) {
  const queryClient = useQueryClient();

  const addLike = useMutation((id) => likePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`posts`);
    },
  });

  const handleAddLike = async (id) => {
    addLike.mutate(id);
  };
  return (
    <div className="flex flex-col w-full gap-2 shadow-[0_7px_29px_0_#63636e33]">
      <div className="flex items-center justify-between p-5">
        <p className="text-xs">Post by: {post?.username}</p>
        <p className="text-xs">{post?.timestamp}</p>
      </div>
      <div className={`${!post?.content && "hidden"} p-5`}>{post?.content}</div>
      <div className="w-full h-full">
        {post?.image_public_id && (
          <div className="relative w-full aspect-[627/418]">
            <Image
              objectFit="cover"
              fill
              alt="post image"
              src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${post?.image_public_id}.png`}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl">{post?.likes}</p>{" "}
        <button className="flex items-center justify-center " onClick={() => {
          likePost(post?._id)
        }}>
          <IoMdHeart size="34" color="red" />
        </button>
      </div>
    </div>
  );
}
