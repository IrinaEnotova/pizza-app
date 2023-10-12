import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(styles["button"], styles["accent"])}>
      {children}
    </button>
  );
};

export default Button;
