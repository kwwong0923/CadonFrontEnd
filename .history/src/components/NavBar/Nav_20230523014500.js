import React, { useContext, useState } from "react";
// Context
import { AppContext } from "../../App";
// Components
import Login from "../User/Login";
import Register from "../User/Register";
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
  const [currentUser, setCurrentUser] = useContext(AppContext);
  const [loginShown, setLoginShown] = useState(false);
  const [registerShown, setRegisterShown] = useState(false);
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
  const onRegisterClickHandler = () => {
    setRegisterShown(!registerShown);
  };

  const onLoginClickHandler = () => {
    setLoginShown(!loginShown);
  };
  return (
    <nav className={styles.nav}>
      <ul>
        {!currentUser && (
          <li>
            <a href="#" onClick={onLoginClickHandler}>
              Login
            </a>
          </li>
        )}
        {loginShown && (
          <Login
            registerSuccessfully={registerSuccessfully}
            onLoginClickHandler={onLoginClickHandler}
          />
        )}

        <li>
          <a href="#" onClick={onRegisterClickHandler}>
            Register
          </a>
        </li>
        {registerShown && (
          <Register
            onRegisterClickHandler={onRegisterClickHandler}
            setRegisterSuccessfully={setRegisterSuccessfully}
            onLoginClickHandler={onLoginClickHandler}
          />
        )}

        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
