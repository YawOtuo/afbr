"use client";
import { fetchDogs } from "@/lib/api/dogs";
import { fetchPosts } from "@/lib/api/posts";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./components/PostCard";

export default function Page() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["posts"], () => fetchPosts());
  return (
    <div className="flex flex-col gap-5 px-5 ">
      <div className="grid grid-cols-4 ">
        <div></div>
        <div className="col-span-4 lg:col-span-2 flex flex-col w-full gap-5 lg;gap-10">
          {posts?.map((r, index: number) => (
            <PostCard key={index} post={r} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
