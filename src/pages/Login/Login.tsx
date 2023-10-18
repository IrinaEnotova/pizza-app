import { Heading } from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FormEvent, useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { login, userActions } from "../../store/user.slice";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles["login"]}>
      <Heading>Login</Heading>
      {loginErrorMessage && <div className={styles["error"]}>{loginErrorMessage}</div>}
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
