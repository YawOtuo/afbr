import { url } from "../../../weburl";

export const fetchPosts = async () => {
  const response = await fetch(`${url}api/posts`);
  return response.json();
};

export const likePost = async (id) => {
  const response = await fetch(`${url}api/posts/like/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });

  return response.json();
};

export const fetchPostsByUser = async (id) => {
  const response = await fetch(`${url}api/posts/getdoguser/${id}`);
  return response.json();
};

export const fetchPostOne = async (id) => {
  const response = await fetch(`${url}api/posts/${id}`);
  return response.json();
};

export const fetchPostPedigree = async (id) => {
  const response = await fetch(`${url}api/posts/pedigree/${id}`);
  return response.json();
};

export const AddPost = async (body) => {
  const response = await fetch(`${url}api/posts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};

export const SearchForPost = async (query: string) => {
  const response = await fetch(`${url}api/posts/search/${query}`);
  return response.json();
};

export const deletePost = async (body) => {
  const response = await fetch(`${url}api/posts/c/cloudinary`, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};
