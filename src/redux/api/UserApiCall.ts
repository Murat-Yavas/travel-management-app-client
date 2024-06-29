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
    if (!response.ok) throw new Error("Failed to register");
    const result = await response.json();
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
  dispatch(userActions.toggleIsLoginLoading(true));
  try {
    const response = await fetch(`http://localhost:8081/users/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInInfo),
    });
    if (!response.ok) throw new Error("Failed to login");
    const result = await response.json();
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("userId", result.userId);
    dispatch(userActions.toggleIsLoginLoading(false));
    dispatch(userActions.toggleIsLoginError(false));
  } catch (error) {
    dispatch(userActions.toggleIsLoginLoading(false));
    dispatch(userActions.toggleIsLoginError(true));
  }
};

export const loadUser = async (dispatch: any) => {
  try {
    const response = await fetch(
      `http://localhost:8081/users/${localStorage.getItem("userId")}`,
      {
        method: "GET",
        headers: <any>{
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      }
    );
    if (!response.ok) throw new Error("Failed to load user");
    const result = await response.json();
    dispatch(userActions.getUserInfo(result));
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (
  dispatch: any,
  userInfo: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
  }
) => {
  try {
    const response = await fetch(`http://localhost:8081/users/${userInfo.id}`, {
      method: "PUT",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) throw new Error("Failed to update user");
    const result = await response.json();
    dispatch(userActions.editUserInfo(result));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (dispatch: any) => {
  try {
    const response = await fetch(
      `http://localhost:8081/users/${localStorage.getItem("userId")}`,
      {
        method: "DELETE",
        headers: <any>{
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      }
    );
    if (!response.ok) throw new Error("Failed to update user");
    const result = await response.json();
    dispatch(userActions.deleteUserInfo());
  } catch (error) {
    console.log(error);
  }
};
