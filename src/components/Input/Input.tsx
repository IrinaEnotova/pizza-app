import { forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
import { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, isValid = true, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(className, styles["input"], {
        [styles.invalid]: !isValid,
      })}
    />
  );
});

export default Input;
