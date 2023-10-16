import { Heading } from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <>
      <div className={styles["head"]}>
        <Heading>Menu</Heading>
        <Search placeholder="Enter dish or ingridient" />
      </div>
    </>
  );
};
