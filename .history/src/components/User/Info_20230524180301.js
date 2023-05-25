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
    <h1 className={styles.title}>User Info</h1>
    <p className={styles.row}>
      <p>User ID:</p>
      <p>{currentUser.user.id}</p>
    </p>

    <p className={styles.row}>
      <p>Username:</p>
      <p>{currentUser.user.id}</p>
    </p>



    </div>
  </Modal>);
};

export default Info;
