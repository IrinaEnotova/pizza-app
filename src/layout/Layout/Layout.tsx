import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import classNames from "classnames";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user.slice";

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };

  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["inner-sidebar"]}>
          <div className={styles["user"]}>
            <img className={styles["avatar"]} src="./avatar.png" alt="User's avatar" />
            <div className={styles["name"]}>Irina Enotova</div>
            <div className={styles["email"]}>IrinaEnotova@example.com</div>
          </div>
          <div className={styles["menu"]}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(styles["link"], {
                  [styles.active]: isActive,
                })
              }
            >
              <img src="./menu-icon.svg" alt="Menu icon" />
              Menu
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                classNames(styles["link"], {
                  [styles.active]: isActive,
                })
              }
            >
              <img src="./cart-icon.svg" alt="Cart icon" />
              Cart
            </NavLink>
          </div>
          <Button className={styles["logout"]} onClick={logout}>
            <img src="./logout.svg" alt="Logout icon" />
            Logout
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
