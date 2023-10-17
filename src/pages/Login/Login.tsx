import { Heading } from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../helpers/API";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export const Login = () => {
  const [error, setError] = useState<string | null>();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      console.log(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      }
    }
  };

  return (
    <div className={styles["login"]}>
      <Heading>Login</Heading>
      {error && <div className={styles["error"]}>{error}</div>}
      <form className={styles["form"]} onSubmit={submit}>
        <div className={styles["field"]}>
          <label htmlFor="email">Your email</label>
          <Input id="email" name="email" placeholder="Email" required />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Your password</label>
          <Input id="password" name="password" type="password" placeholder="Password" required />
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
