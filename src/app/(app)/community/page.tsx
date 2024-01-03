"use client";
import { fetchDogs } from "@/lib/api/dogs";
import { fetchPosts } from "@/lib/api/posts";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./components/PostCard";
import AddAPost from "./components/AddAPost";

export default function Page() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["posts"], () => fetchPosts());
  return (
    <div className="flex gap-5 px-5 justify-center">
      <div className="flex flex-col-reverse lg:flex-row order-2 lg:order-1 gap-10 justify-center w-full">
        {isLoading && <p>Loading</p>}
        <div className="w-full lg:max-w-[50%] flex flex-col gap-5">
          <p className=" text-xl">AFBR LATEST POST</p>
          {posts?.map((r, index: number) => (
            <PostCard key={index} post={r} />
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <AddAPost />
        </div>
      </div>
    </div>
  );
}
