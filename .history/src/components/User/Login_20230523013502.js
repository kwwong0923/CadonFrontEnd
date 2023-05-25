import React, { useState } from "react";

// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Login.module.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState();
  

  return (
    <Modal>
        <div className={styles.frame}>

        </div>
    </Modal>
  )
};

export default Login;
