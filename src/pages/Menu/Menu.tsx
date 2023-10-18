import { Heading } from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { useState, useEffect, ChangeEvent } from "react";
import styles from "./Menu.module.css";
import axios from "axios";
import { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: { name },
      });
      setProducts(data);
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) setError(err.message);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles["head"]}>
        <Heading>Menu</Heading>
        <Search placeholder="Enter dish or ingridient" onChange={updateFilter} />
      </div>
      <div>
        {error && <div>{error}</div>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <div>Loading...</div>}
        {!isLoading && products.length === 0 && <>Products are not found</>}
      </div>
    </>
  );
};

export default Menu;
