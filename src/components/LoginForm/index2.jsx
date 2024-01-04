import { useState } from "react";
import classNames from "classname";
import styles from "./LoginForm.module.css";

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function LiginForm1() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginChange({ target: { value } }) {
    setLogin(value);
  }
  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLogin("");
    setPassword("");
  }

  // const loginClassName = `${styles.formInput} ${
  //   LOGIN_FORM_REG_EXP.login.test(login) ? styles.valid : styles.invalid
  // }`;
  const loginClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(login),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(login),
  });
  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(password),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(password),
  });
  // const passwordClassName = `${styles.formInput} ${
  //   LOGIN_FORM_REG_EXP.password.test(password) ? styles.valid : styles.invalid
  // }`;
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Dorm</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={loginClassName}>
          {""}
          <span className={styles.labelCaption}>Login:</span>
          <input
            className={styles.formInput}
            type="email"
            value={login}
            onChange={handleLoginChange}
            placeholder="your@email"
            name="login"
            autoFocus
          />
        </label>
        <label className={passwordClassName}>
          {""}
          <span className={styles.labelCaption}>Password:</span>
          <input
            className={styles.formInput}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="123455"
            name="password"
          />
        </label>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LiginForm1;
