import React, { useState, useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Login.module.css";

const Login = (props) => {
  // AppContext
  const {user, getPosts} = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  // Event
  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser);
      setWarningMessage("");
      props.onLoginClickHandler();
      props.setRegisterSuccessfully(false);
      getPosts();
    } catch (err) {
      setWarningMessage("Username or password is incorrect");
    }
  };

  return (
    <Modal>
      <div className={styles.frame}>
        <h1 className={styles.title}>Login</h1>
        {props.registerSuccessfully && (
          <p className={styles.registerMessage}>
            Register Successfully, Please login
          </p>
        )}

        {props.editMessage && (
          <p className={styles.registerMessage}>
            {props.editMessage}
          </p>
        )}

        <p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onEmailChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="username">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onPasswordChangeHandler}
          />
        </p>

        {warningMessage && (
          <p className={styles.warningMessage}>{warningMessage}</p>
        )}

        <div className={styles.buttons}>
          <button onClick={loginHandler}>Login</button>
          <button onClick={props.onLoginClickHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
