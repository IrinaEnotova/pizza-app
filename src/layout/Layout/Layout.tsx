import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import classNames from "classnames";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
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
        <Button className={styles["logout"]}>
          <img src="./logout.svg" alt="Logout icon" />
          Logout
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
