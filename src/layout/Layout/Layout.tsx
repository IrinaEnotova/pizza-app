import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

export const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles["avatar"]} src="./avatar.png" alt="User's avatar" />
          <div className={styles["name"]}>Irina Enotova</div>
          <div className={styles["email"]}>IrinaEnotova@example.com</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="./menu-icon.svg" alt="Menu icon" />
            Menu
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="./cart-icon.svg" alt="Cart icon" />
            Cart
          </Link>
        </div>
        <Button className={styles["logout"]}>
          <img src="./logout.svg" alt="Logout icon" />
          Logout
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
