import styles from "./Heading.module.css";
import { HeadingProps } from "./Heading.props";
import classNames from "classnames";

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={classNames(className, styles["h1"])} {...props}>
      {children}
    </h1>
  );
};
