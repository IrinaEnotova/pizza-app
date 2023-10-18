import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

export const ProductCard = ({ id, title, description, image, price, rating }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const add = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(cartActions.add(id));
  };

  return (
    <Link to={`/product/${id}`} className={styles["link"]}>
      <div className={styles["card"]}>
        <div className={styles["head"]} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles["price"]}>
            {price}&nbsp;
            <span className={styles["currency"]}>$</span>
          </div>
          <button className={styles["add-to-cart"]} onClick={add}>
            <img src="./cart-btn.svg" alt="Add to cart" />
          </button>
          <div className={styles["rating"]}>
            {rating}&nbsp;
            <img src="./rating-star.svg" alt="Star" />
          </div>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["title"]}>{title}</div>
          <div className={styles["description"]}>{description}</div>
        </div>
      </div>
    </Link>
  );
};
