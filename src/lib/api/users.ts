import { url } from "../../../weburl";

export const fetchusers = async () => {
  const response = await fetch(`${url}api/users`);
  return response.json();
};

export const fetchUserOne = async (id) => {
  const response = await fetch(`${url}api/users/getone/${id}`);
  return response.json();
};


export const AddUser = async (body) => {
  const response = await fetch(`${url}api/users`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};


export const UpdateUser = async (body, id) => {
    const response = await fetch(`${url}api/users/${id}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    });
    console.log(body)
    return response.json();
  };

export const SearchForUser = async (query:string) => {
  const response = await fetch(`${url}api/users/search/s?query=${query}`);
  return response.json();
};
