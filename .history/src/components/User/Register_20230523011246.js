import React, { useState, useEffect } from "react";

// Components
import Modal from "../UI/Modal";
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputsValid, setInputValid] = useState(false);
  return (
    <Modal>
        <h1 className="register-title">Register</h1>
        {warningMessage && (
          <p>{warningMessage}</p>
        )}
        <p>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={onUsernameChangeHandler}
          />
        </p>
        {usernameMessage && <p className="warning-message">{usernameMessage}</p>}

        <p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onEmailChangeHandler}
          />
        </p>
        {emailMessage && <p className="warning-message">{emailMessage}</p>}

        <p>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="confirmPassword">Confirm: </label>
          <input
            id="confirm-password"
            type="password"
            name="confirmPassword"
            onChange={onConfirmPasswordChangeHandler}
          />
        </p>
        {passwordMessage && (
          <p className="warning-message">{passwordMessage}</p>
        )}
        <div className="register-buttons">
          <button disabled={inputsValid} onClick={onRegisterClickHandler}>Register</button>
          <button onClick={props.hideRegisterHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
