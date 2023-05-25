import React, { useState, useContext } from "react";
// Context
import { AppContext } from "../../App";
// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Login.module.css";

const Login = (props) => {
    // AppContext
    const [currentUser, setCurrentUser] = useContext(AppContext);
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState();

  // Event
  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async() => 
  {
    try
    {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser);
      setWarningMessage("");
      props.onLoginClickHandler();
      props.setRegisterSuccessfully(false);
    }
    catch (err)
    {
      setWarningMessage("Username or password is incorrect");
    }
  }

  return (
    <Modal>
      <div className={styles.frame}>
        <h1 className={styles.title}>Login</h1>
      </div>
    </Modal>
  );
};

export default Login;
