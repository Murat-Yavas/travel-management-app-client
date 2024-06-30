import styles from "./Profile.module.css";
import "../../Variables.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { deleteUser, editUser } from "../../redux/api/UserApiCall";
import { userActions } from "../../redux/slices/User";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [sidebarOption, setSidebarOption] = useState("account");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    const userInfo = {
      id: user.id,
      firstname,
      lastname,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    console.log(userInfo);
    editUser(dispatch, userInfo);
  };

  const handleDelete = () => {
    deleteUser(dispatch);
    dispatch(userActions.exitFromProfile());
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={`${styles["user-profile"]} md:flex px-52 py-8`}>
      <div className={`${styles.sidebar} flex-auto md:w-4/12`}>
        <div
          onClick={() => setSidebarOption("account")}
          className={`${styles["sidebar-element"]} ${
            sidebarOption === "account"
              ? "text-black border-solid border-l-4 border-black"
              : "text-gray-400"
          } mb-4 `}
        >
          Your account
        </div>
        <div
          onClick={() => setSidebarOption("registered")}
          className={`${styles["sidebar-element"]} ${
            sidebarOption != "account"
              ? "text-black border-solid border-l-4 border-black"
              : "text-gray-400"
          }`}
        >
          Recently registered tours and hotels
        </div>
      </div>

      <div className={`${styles["main-content"]} flex-auto md:w-8/12`}>
        {sidebarOption === "account" ? (
          <div className={`${styles["account-section"]}`}>
            <div>
              <div className="text-3xl font-bold mb-8">Your Account</div>
            </div>
            <div>
              <div className="mb-4">Personal Information</div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                className="w-full rounded-md border mb-2 border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
                className="w-full rounded-md border mb-2 border-lime-300 bg-transparent py-3 px-6 text-base font-medium text-black outline-none focus:border-lime-300 focus:shadow-md"
              />
            </div>
            <div className="mt-8 flex items-center">
              <button
                onClick={handleUpdate}
                type="submit"
                className="flex justify-center flex-auto w-8/12 items-center mr-8 rounded-md border border-lime-300 bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-lime-300 hover:text-white duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update personal information
              </button>

              <span
                onClick={handleDelete}
                className="flex-auto w-4/12 hover:text-lime-300 hover:cursor-pointer"
              >
                Delete my account
              </span>
            </div>
          </div>
        ) : (
          <div className={`${styles["recently-registered"]}`}>
            <div className="text-3xl font-bold mb-8">
              Recently registered tours and hotels
            </div>
            <div className={`${styles["registered-options"]}`}>
              <span>Tours</span>
              <span>Hotels</span>
            </div>
            <div className={`${styles["registered-info"]} flex`}>
              <div className="flex-auto w-4/12">Tour Image</div>
              <div className="flex-auto w-8/12">
                <div>Tour Name</div>
                <div>Date & Time</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
