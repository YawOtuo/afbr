import { url } from "../../../weburl";

export const fetchDogs = async () => {
  const response = await fetch(`${url}api/dogs`);
  return response.json();
};

export const fetchDogOne = async (id) => {
  const response = await fetch(`${url}api/dogs/${id}`);
  return response.json();
};

export const fetchDogPedigree = async (id) => {
  const response = await fetch(`${url}api/dogs/pedigree/${id}`);
  return response.json();
};


export const AddDog = async (body) => {
  const response = await fetch(`${url}api/dogs`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};

export const SearchForDog = async (query:string) => {
  const response = await fetch(`${url}api/dogs/search/${query}`);
  return response.json();
};


export const deleteDogImage = async (body) => {
  const response = await fetch(`${url}api/dogs/c/cloudinary`, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};
