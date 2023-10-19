import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { MouseEvent, Suspense } from "react";
import styles from "./Product.module.css";
import Button from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

export const ProductPage = () => {
  const data = useLoaderData() as { data: Product };
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => (
            <div className={styles.product}>
              <div className={styles.head}>
                <div className={styles["head-wrapper"]}>
                  <Button className={styles.back} onClick={() => navigate("/")}>
                    <img src="../back-arrow.svg" alt="Back to menu" />
                  </Button>
                  <Heading className={styles.name}>{data.name}</Heading>
                </div>
                <Button
                  className={styles["add-to-cart"]}
                  onClick={(event: MouseEvent) => {
                    event.preventDefault();
                    dispatch(cartActions.increase(data.id));
                  }}
                >
                  <img src="../cart-btn.svg" alt="Cart" />
                  <div>Add to cart</div>
                </Button>
              </div>
              <div className={styles.content}>
                <div className={styles["image"]} style={{ backgroundImage: `url(${data.image})` }}></div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <div className={styles["field-name"]}>Price</div>
                    <div className={styles.price}>
                      {data.price / 10}&nbsp;<span className={styles.currency}>$</span>
                    </div>
                  </div>
                  <hr className={styles.hr} />
                  <div className={styles.line}>
                    <div className={styles["field-name"]}>Rating</div>
                    <div className={styles.rating}>
                      {data.rating}
                      <img src="../rating-star.svg" alt="Star" />
                    </div>
                  </div>
                  <hr className={styles.hr} />
                  <div>
                    <div className={styles["field-name"]}>Ingridients</div>
                    <ul className={styles.ingridients}>
                      {data.ingredients.map((ingridient, idx) => (
                        <li key={`ingridient-${idx}`}>{ingridient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
};
