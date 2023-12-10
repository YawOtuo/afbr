import { url } from "../../../weburl";

export const fetchAdvertisements = async () => {
  const response = await fetch(`${url}api/advertisements`);
  return response.json();
};

export const fetchAdvertisementById = async (id) => {
  const response = await fetch(`${url}api/advertisements/${id}`);
  return response.json();
};

export const addAdvertisement = async (body) => {
  const response = await fetch(`${url}api/advertisements`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateAdvertisement = async (body, id) => {
  const response = await fetch(`${url}api/advertisements/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteAdvertisement = async (id) => {
  const response = await fetch(`${url}api/advertisements/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

// Additional functions as needed...
