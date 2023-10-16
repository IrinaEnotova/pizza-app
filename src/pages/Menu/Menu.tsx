import { Heading } from "../../components/Heading/Heading";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <>
      <div className={styles["head"]}>
        <Heading>Menu</Heading>
        <Search placeholder="Enter dish or ingridient" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Delicious"
          description="Salami, arugula, tomatoes, olives"
          rating={4.5}
          price={30}
          image="./product-demo.png"
        />
      </div>
    </>
  );
};
