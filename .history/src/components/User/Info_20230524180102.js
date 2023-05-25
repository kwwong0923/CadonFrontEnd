import React, { useState, useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Info.module.css";

const Info = (props) => {
  // AppContext
  const { user, posts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  console.log(currentUser.user);
  return (
  <Modal>
    <div className={styles.frame}>
    <h1 className={styles.title}>{currentUser.user.username} (currentUser.user.id)}</h1>


    </div>
  </Modal>);
};

export default Info;
