import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import "../../Variables.css";

const Navbar = () => {
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
            <NavLink className={`${styles["link-element"]}`} to="/login">
              Login
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
