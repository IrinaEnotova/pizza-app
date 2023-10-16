import { useParams } from "react-router-dom";
import styles from "./Product.module.css";

export const Product = () => {
  const { id } = useParams();

  return <>Product - {id}</>;
};
