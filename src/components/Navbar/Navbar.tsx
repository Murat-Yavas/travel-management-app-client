import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import "../../Variables.css";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/slices/User";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.exitFromProfile());
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <nav className={`${styles.header} bg-lime-50 main-padding`}>
          <div className={`${styles.logo}`}>
            <span>TrApple</span>
          </div>

          <div className={`${styles["header-links"]}`}>
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
                      to="/profile"
                      className={`${styles["menu-element"]}`}
                    >
                      Profile
                    </NavLink>
                    <NavLink
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
