import React, { useContext, useState } from "react";
// Context
import { AppContext } from "../../App";
// Components
import Login from "../User/Login";
import Register from "../User/Register";
// Service
import AuthService from "../../services/auth.service";
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
  const [currentUser, setCurrentUser} = useContext(AppContext);
  const [loginShown, setLoginShown] = useState(false);
  const [registerShown, setRegisterShown] = useState(false);
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
  const onRegisterClickHandler = () => {
    setRegisterShown(!registerShown);
  };

  const onLoginClickHandler = () => {
    setLoginShown(!loginShown);
  };

  const onLogoutClickHandler = () => 
  {
    AuthService.logout();
    setCurrentUser(null);
  }
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

        {!currentUser && (
          <li>
            <a href="#" onClick={onRegisterClickHandler}>
              Register
            </a>
          </li>
        )}
        {registerShown && (
          <Register
            onRegisterClickHandler={onRegisterClickHandler}
            setRegisterSuccessfully={setRegisterSuccessfully}
            onLoginClickHandler={onLoginClickHandler}
          />
        )}

        {currentUser && (
            <li>
                <a href="#">{currentUser.user.username}</a>
            </li>
        )}
        {currentUser && (
          <li>
            <a href="#" onClick={onLogoutClickHandler}>Logout</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
