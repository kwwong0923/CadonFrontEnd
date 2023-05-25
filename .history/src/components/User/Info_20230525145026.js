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
  const [passwordEditIsShown, setPasswordEditIsShown] = useState(false);

  const date = new Date(currentUser.user.date);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
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
            <button>Username</button>
            <button>Password</button>
          </div>
        </div>

        {passwordEditIsShown && (
          <div>
            <label htmlFor="username">New Username: </label>
            <input type="text" name="username" id="" />
          </div>
        )}

        <div className={styles.buttons}>
          <button onClick={props.onInfoClickHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Info;
