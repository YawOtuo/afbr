import { url } from "../../../weburl";

type body = {
  transaction_name: string;
  transaction_cost: string | number;
  dog_name: string;
  username: string;
  email: string;
};

export const getTransactUrl = async (body: body) => {
  try {
    const response = await fetch(`${url}api/expresspaygh/transact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //   location: context.location,
        transaction_name: body.transaction_name,
        transaction_cost: body.transaction_cost,
        dog_name: body.dog_name,
        username: body.username,
        email: body.email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("er");
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setHasBeenPaidFor = async (id) => {
  try {
    const response = await fetch(`${url}api/dogs/has_paid_by_id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dog: {
          id: id,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("er");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendDogRegEmail = async (name, username, email) => {
  try {
    const response = await fetch(`${url}api/email/dog_registered`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          displayName: username,
          email: email,
        },
        dog: {
          name: name,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("er");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};



export const checkIfPaid = async (token) => {
  try {
    const response = await fetch(`${url}api/expresspaygh/get_transaction_status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token : token
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("er");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};