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

  // Local State
  const [newUsername, setNewUsername] = useState("");
  const [usernameEditIsShown, setUsernameEditIsShown] = useState(false);
  const [passwordEditIsShown, setPasswordEditIsShown] = useState(false);
  const [cancelEnable, setCancelEnable] = useState(true);
  const date = new Date(currentUser.user.date);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const onUsernameClickHandler = () => {
    setUsernameEditIsShown(!usernameEditIsShown);
    setPasswordEditIsShown(false);
    setCancelEnable(false);
  }

  const onPasswordClickHandler = () =>
  {
    setPasswordEditIsShown
  }
  return (
    <Modal>
      <div className={styles.frame}>
        <h1 className={styles.title}>User Info</h1>

        <div className={styles.userInfo}>
          <div className={styles.subject}>
            <p>User ID</p>
            <p>Username</p>
            <p>Join Date</p>
            <p>Post Num</p>
          </div>

          <div className={styles.value}>
            <p>{currentUser.user.id}</p>
            <p>{currentUser.user.username}</p>
            <p>{shortDate}</p>
            <p>{currentUser.user.ownedPost.length}</p>
          </div>
        </div>

        <div className={styles.edit}>
          <p>Edit</p>
          <div>
            <button onClick={onUsernameClickHandler}>Username</button>
            <button onClick={onPasswordClickHandler}>Password</button>
          </div>
        </div>

        {usernameEditIsShown && (
          <div>
            <label htmlFor="username">New Username: </label>
            <input type="text" name="username" id="username" />
          </div>
        )}

        {passwordEditIsShown && (
          <div>
            <label htmlFor="password">New Password: </label>
            <input type="password" name="password" id="password" />
          </div>
        )}

        <div className={styles.buttons}>
          <button onClick={props.onInfoClickHandler} disabled={!cancelEnable}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Info;
