import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import "../../Variables.css";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/slices/User";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowHamburgerMenu(false);
    dispatch(userActions.exitFromProfile());
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className={`${styles.header} bg-lime-50 main-padding`}>
      <div className={`${styles.logo}`}>
        <span>TrApple</span>
      </div>

      <div className={`${styles["header-links"]} hidden md:flex`}>
        <NavLink className={`${styles["link-element"]}`} to="/">
          Home
        </NavLink>
        <NavLink className={`${styles["link-element"]}`} to="/hotels">
          Hotels
        </NavLink>
        {user.id !== 0 ? (
          <>
            <span
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`${styles["link-element"]} ${styles["profile-link"]} hover:cursor-pointer`}
            >
              <CgProfile />
            </span>
            {showProfileMenu ? (
              <div className={`${styles["profile-menu"]}`}>
                <NavLink
                  onClick={() => setShowProfileMenu(false)}
                  to="/profile"
                  className={`${styles["menu-element"]}`}
                >
                  Profile
                </NavLink>
                <NavLink
                  onClick={() => setShowProfileMenu(false)}
                  to="/favorites"
                  className={`${styles["menu-element"]}`}
                >
                  Favorites
                </NavLink>
                <span
                  onClick={handleLogout}
                  className={`${styles["menu-element"]}`}
                >
                  Logout
                </span>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <NavLink className={`${styles["link-element"]}`} to="/login">
            Login
          </NavLink>
        )}
      </div>
      <div className={`${styles["header-hamburger-links"]} block md:hidden`}>
        <span onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
          <IoMenu className="text-xl" />
        </span>
        {showHamburgerMenu ? (
          <div className={`${styles["profile-menu"]}`}>
            <NavLink
              onClick={() => setShowHamburgerMenu(false)}
              to="/"
              className={`${styles["menu-element"]}`}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShowHamburgerMenu(false)}
              to="/hotels"
              className={`${styles["menu-element"]}`}
            >
              Hotels
            </NavLink>

            {user.id !== 0 ? (
              <span
                onClick={handleLogout}
                className={`${styles["menu-element"]}`}
              >
                Logout
              </span>
            ) : (
              <NavLink
                onClick={() => setShowHamburgerMenu(false)}
                to="/login"
                className={`${styles["menu-element"]}`}
              >
                Login
              </NavLink>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
