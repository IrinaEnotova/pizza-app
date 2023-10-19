import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Success.module.css";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.success}>
      <img src="./pizza.png" alt="Order is ready!" />
      <div className={styles.text}>Your order has been successfully checkouted!</div>
      <Button appearance="big" onClick={() => navigate("/")}>
        Order more!
      </Button>
    </div>
  );
};
