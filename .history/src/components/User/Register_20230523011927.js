import React, { useState, useEffect } from "react";

// Components
import Modal from "../UI/Modal";
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Register.module.css";

const Register = (props) => {
  // State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputsValid, setInputValid] = useState(false);
  // Warning Messages
  const [warningMessage, setWarningMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  return (
    <Modal>
      <div className={styles.frame}>
        <h1 className={styles.title}>Register</h1>
        {warningMessage && <p>{warningMessage}</p>}

        <p>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={onUsernameChangeHandler}/>
        </p>


      </div>
    </Modal>
  );
};

export default Register;
