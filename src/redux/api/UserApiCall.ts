import { userActions } from "../slices/User";

export const createUser = async (
  dispatch: any,
  registerInfo: {
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    phoneNumber: string;
  }
) => {
  try {
    const response = await fetch(`http://localhost:8081/users/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    });
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const logInUser = async (
  dispatch: any,
  signInInfo: {
    firstname: string;
    password: string;
  }
) => {
  try {
    const response = await fetch(`http://localhost:8081/users/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInInfo),
    });
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
