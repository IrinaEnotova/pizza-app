import { Heading } from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { FormEvent } from "react";

export const Login = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={styles["login"]}>
      <Heading>Login</Heading>
      <form className={styles["form"]} onSubmit={submit}>
        <div className={styles["field"]}>
          <label htmlFor="email">Your email</label>
          <Input id="email" placeholder="Email" />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Your password</label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <Button appearance="big">Login</Button>
      </form>
      <div className={styles["links"]}>
        <div>Do not have an account?</div>
        <div>
          <Link to="/auth/register">Register</Link>
        </div>
      </div>
    </div>
  );
};
