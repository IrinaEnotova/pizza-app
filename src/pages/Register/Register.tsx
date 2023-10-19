import { Heading } from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { FormEvent, useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { register, userActions } from "../../store/user.slice";

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = event.target as typeof event.target & RegisterForm;
    const { email, password, name } = target;
    await sendRegister(email.value, password.value, name.value);
  };

  const sendRegister = async (email: string, password: string, name: string) => {
    dispatch(register({ email, password, name }));
  };

  return (
    <div className={styles["register"]}>
      <Heading>Register</Heading>
      {registerErrorMessage && <div className={styles["error"]}>{registerErrorMessage}</div>}
      <form className={styles["form"]} onSubmit={submit}>
        <div className={styles["field"]}>
          <label htmlFor="email">Your email</label>
          <Input id="email" name="email" placeholder="Email" required />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Your password</label>
          <Input id="password" name="password" type="password" placeholder="Password" required />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="name">Your name</label>
          <Input id="name" name="name" placeholder="Name" required />
        </div>
        <Button appearance="big">Sign in</Button>
      </form>
      <div className={styles["links"]}>
        <div>Already have an account?</div>
        <div>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
