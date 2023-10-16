import { Heading } from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import axios from "axios";
import { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) setError(err.message);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles["head"]}>
        <Heading>Menu</Heading>
        <Search placeholder="Enter dish or ingridient" />
      </div>
      <div>
        {error && <div>{error}</div>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <div>Loading...</div>}
      </div>
    </>
  );
};
