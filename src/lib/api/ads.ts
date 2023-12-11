import { url } from "../../../weburl";

export const fetchAdvertisements = async (query?: string) => {
  if (query == "all" || !query) {
    const response = await fetch(`${url}api/advertisements`);
    return response.json();
  } else {
    const response = await fetch(`${url}api/advertisements?type=${query}`);
    return response.json();
  }
};

export const fetchAdvertisementsApproved = async (query?: string) => {
  if (query == "all" || !query) {
    const response = await fetch(`${url}api/advertisements/approved`);
    return response.json();
  } else {
    const response = await fetch(`${url}api/advertisements/approved?type=${query}`);
    return response.json();
  }
};

export const fetchAdvertisementsUnapproved = async (query?: string) => {
  if (query == "all" || !query) {
    const response = await fetch(`${url}api/advertisements/unapproved`);
    return response.json();
  } else {
    const response = await fetch(`${url}api/advertisements/unapproved?type=${query}`);
    return response.json();
  }
};

export const fetchAdvertisementsByUser = async (id? : number, query?: string ) => {
  if (query == "all" || !query) {
    const response = await fetch(`${url}api/advertisements/users/${id}`);
    return response.json();
  } else {
    const response = await fetch(`${url}api/advertisements/users/${id}?type=${query}`);
    return response.json();
  }
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
