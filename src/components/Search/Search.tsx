import { forwardRef } from "react";
import styles from "./Search.module.css";
import classNames from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ className, isValid = true, ...props }, ref) {
  return (
    <div className={styles["input-wrapper"]}>
      <img className={styles["search-icon"]} src="./search.svg" alt="Search" />
      <input
        {...props}
        ref={ref}
        className={classNames(className, styles["input"], {
          [styles.invalid]: !isValid,
        })}
      />
    </div>
  );
});

export default Search;
