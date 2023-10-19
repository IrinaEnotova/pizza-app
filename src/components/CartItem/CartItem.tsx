import { CartItemProps } from "./CartItem.props";
import styles from "./CartItem.module.css";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

export const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.increase(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.decrease(props.id));
  };

  const remove = () => {
    dispatch(cartActions.remove(props.id));
  };

  return (
    <div className={styles["item"]}>
      <div className={styles["image"]} style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{props.name}</div>
        <div className={styles["price"]}>{props.price}&nbsp;$</div>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["minus"]} onClick={decrease}>
          <img src="./minus.svg" alt="Decrease item" />
        </button>
        <div className={styles["number"]}>{props.count}</div>
        <button className={styles["plus"]} onClick={increase}>
          <img src="./plus.svg" alt="Increase item" />
        </button>
        <button className={styles["remove"]} onClick={remove}>
          <img src="./delete.svg" alt="Remove all items" />
        </button>
      </div>
    </div>
  );
};
