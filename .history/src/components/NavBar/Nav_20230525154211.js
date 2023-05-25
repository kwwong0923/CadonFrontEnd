import React, { useContext, useState } from "react";
// Context
// import { AppContext } from "../../App";
import { AppContext } from "../../context/App.provider";

// Components
import Login from "../User/Login";
import Register from "../User/Register";
import Info from "../User/Info";
// Service
import AuthService from "../../services/auth.service";
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
  const { user } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  const [loginShown, setLoginShown] = useState(false);
  const [registerShown, setRegisterShown] = useState(false);
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
  const [infoShown, setInfoShown] = useState(false);
  const [editMessage, setEditMessage] = useState("");

  const onRegisterClickHandler = () => {
    setRegisterShown(!registerShown);
  };

  const onLoginClickHandler = () => {
    setLoginShown(!loginShown);
  };

  const onLogoutClickHandler = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  const onInfoClickHandler = () => {
    setInfoShown(!infoShown);
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
            <a
              href="#"
              onClick={onInfoClickHandler}
            >
              {currentUser.user.username}
            </a>
          </li>
        )}

        {infoShown && <Info onInfoClickHandler={onInfoClickHandler} />}
        {currentUser && (
          <li>
            <a href="#" onClick={onLogoutClickHandler}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
