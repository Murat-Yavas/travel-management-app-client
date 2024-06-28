import { useState } from "react";
import styles from "./Auth.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser, logInUser } from "../../redux/api/UserApiCall";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showInputMessage, setShowInputMessage] = useState("");
  const [buttonText, setButtonText] = useState<String | React.JSX.Element>(
    "Login"
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      password === "" ||
      email === "" ||
      phoneNumber === ""
    ) {
      setShowInputMessage("Inputs cannot be left blank!");
    } else {
      setShowInputMessage("");
      const registerInfo = {
        firstname,
        lastname,
        password,
        email,
        phoneNumber,
      };
      createUser(dispatch, registerInfo);

      alert("You have successfully registered. You can now login.");
    }
  };

  const signInUser = () => {
    const spinner = (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
    );
    setButtonText(spinner);

    if (firstname === "" || password === "") {
      setShowInputMessage("Inputs cannot be left blank!");
    } else {
      setShowInputMessage("");
      const signInInfo = { firstname, password };
      logInUser(dispatch, signInInfo);

      setTimeout(() => {
        if (localStorage.getItem("accessToken") !== null) navigate("/");
        else {
          setButtonText("Login");
          alert("You have entered wrong username or password");
        }
      }, 1000);
    }
  };

  const goToLoginPage = () => {
    setIsRegistered(true);
    setShowInputMessage("");
  };

  const goToRegisterPage = () => {
    setIsRegistered(false);
    setShowInputMessage("");
  };

  return (
    <div className={`${styles["auth"]}`}>
      <div className={`${styles["auth-form"]} `}>
        {!isRegistered ? (
          <>
            <div className="text-red-700">{showInputMessage}</div>
            <div className="flex items-center justify-between max-w-80 h-7 my-4">
              <span>Don't have an account?</span>
              <span>
                <FaArrowRightLong />
              </span>
              <span
                className={`${styles["header-button"]} cursor-pointer hover:text-lime-300`}
                onClick={goToLoginPage}
              >
                REGISTER
              </span>
            </div>
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>

            <div className="mt-8">
              <button
                disabled={firstname === "" || password === "" ? true : false}
                onClick={signInUser}
                type="submit"
                className="flex w-full justify-center items-center h-11 rounded-md border border-lime-300 bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-lime-300 hover:text-white duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {buttonText}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-red-700">{showInputMessage}</div>
            <div className="flex items-center justify-between max-w-80 h-7 my-4">
              <span>Already registered?</span>
              <span>
                <FaArrowRightLong />
              </span>
              <span
                className={`${styles["header-button"]} cursor-pointer hover:text-lime-300`}
                onClick={goToRegisterPage}
              >
                LOGIN
              </span>
            </div>
            <div className="mb-5 flex justify-between">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                  className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>

            <div className="mt-8">
              <button
                disabled={
                  firstname === "" ||
                  lastname === "" ||
                  password === "" ||
                  email === "" ||
                  phoneNumber === ""
                    ? true
                    : false
                }
                onClick={registerUser}
                type="submit"
                className="flex w-full justify-center rounded-md border border-lime-300 bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-lime-300 hover:text-white duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
