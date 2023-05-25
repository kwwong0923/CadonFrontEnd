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

  // Event
  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
    if (username.length > 50) {
      setUsernameMessage("The length of username is greater than 50");
    } else {
      setUsernameMessage("");
    }
  };

  // Event on change, and check is it match the email format
  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
    if (!isEmailValid(email) && email.length > 1) {
      setEmailMessage("The email format isn't correct");
    } else {
      setEmailMessage("");
    }
  };
  return (
    <Modal>
      <div className={styles.frame}>
        <h1 className={styles.title}>Register</h1>
        {warningMessage && <p>{warningMessage}</p>}
        
        <p>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={onUsernameChangeHandler}
          />
        </p>
        {usernameMessage && (
          <p className={styles.warningMessage}>{usernameMessage}</p>
        )}

        <p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onEmailChangeHandler}
          />
        </p>
        {emailMessage && (
          <p className={styles.warningMessage}>{emailMessage}</p>
        )}
      </div>
    </Modal>
  );
};

export default Register;
