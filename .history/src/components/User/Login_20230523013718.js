import React, { useState, use } from "react";
// Context
import { AppContext } from "../../App";
// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Login.module.css";

const Login = () => {
    // AppContext
    const [currentUser, setCurrentUser] = AppContext()
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
    //   props.setCurrentUser(AuthService.getCurrentUser);
      setWarningMessage("");
    //   props.hideLoginHandler();
    //   props.setRegisterSuccessfully(false);
    }
    catch (err)
    {
      setWarningMessage("Username or password is incorrect");
    }
  }

  return (
    <Modal>
      <div className={styles.frame}></div>
    </Modal>
  );
};

export default Login;
