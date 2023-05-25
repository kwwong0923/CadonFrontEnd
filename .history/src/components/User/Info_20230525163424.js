import React, { useState, useContext, useEffect } from "react";
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
  const { user, posts, getPosts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;

  // Local State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Pop-up
  const [usernameEditIsShown, setUsernameEditIsShown] = useState(false);
  const [passwordEditIsShown, setPasswordEditIsShown] = useState(false);
  // Valid
  const [cancelEnable, setCancelEnable] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);
  // Warning Message
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const date = new Date(currentUser.user.date);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Username
  const onUsernameClickHandler = () => {
    setUsernameEditIsShown(!usernameEditIsShown);
    setPasswordEditIsShown(false);
    setCancelEnable(false);
  };

  const onUsernameCancelClickHandler = () => {
    setUsernameEditIsShown(!usernameEditIsShown);
    setCancelEnable(true);
    setUsernameErrorMessage("");
  };

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const editUsername = async () => {
    try {
      let response = await AuthService.editUsername(
        currentUser.user._id,
        username
      );
      AuthService.logout();
      setCurrentUser(null);
      props.onInfoClickHandler();
      props.setEditMessage("The username is changed, please login again");
      props.onLoginClickHandler();
      getPosts();
    } catch (err) {
      if (err.response.status == 400) {
        setUsernameErrorMessage("The user have been used");
        setUsername("");
      }
      console.log(err.response);
    }
  };

  // Password
  const onPasswordClickHandler = () => {
    setPasswordEditIsShown(!passwordEditIsShown);
    setUsernameEditIsShown(false);
    setCancelEnable(false);
  };

  const onPasswordCancelClickHandler = () => {
    setPasswordEditIsShown(!passwordEditIsShown);
    setCancelEnable(true);
  };

  const onPasswordChangeHandler = (event) =>
  {
    setPassword(event.target.value);
  }

  const onConfirmPasswordChangeHandler = (event) =>
  {
    setConfirmPassword(event.target.value);
  }

  // check if the password and confirm password are matching
  useEffect(() =>
  {
    if (password != confirmPassword)
    {
      setPasswordErrorMessage("There passwords must be same");
    }
    else
    {
      setPasswordErrorMessage("");
      setPasswordValid(true);
    }
  }, [password, confirmPassword])

  const editPassword = async () =>
  {
    try
    {
      let response = await AuthService.
    }
    catch (err)
    {

    }
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
          <div className={styles.editWindow}>
            <div className={styles.editContent}>
              <label htmlFor="username">New Username: </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={onUsernameChangeHandler}
                value={username}
              />
            </div>

            {usernameErrorMessage && (
              <p className={styles.warningMessage}>{usernameErrorMessage}</p>
            )}

            <div className={styles.buttons}>
              <button onClick={editUsername}>Edit</button>
              <button onClick={onUsernameCancelClickHandler}>Cancel</button>
            </div>
          </div>
        )}

        {passwordEditIsShown && (
          <div className={styles.editWindow}>
            <div className={styles.editContent}>
              <label htmlFor="password">New Password: </label>
              <input
                className={styles.password}
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChangeHandler}
                value={password}
              />
            </div>
            <div className={styles.editContent}>
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={onConfirmPasswordChangeHandler}
                value={confirmPassword}
              />
            </div>

            {passwordErrorMessage && (
              <p className={styles.warningMessage}>{passwordErrorMessage}</p>
            )}
            <div className={styles.buttons}>
              <button onClick={editPassword} disabled={!passwordValid}>Edit</button>
              <button onClick={onPasswordCancelClickHandler}>Cancel</button>
            </div>
          </div>
        )}

        <div className={styles.buttons}>
          <button onClick={props.onInfoClickHandler} disabled={!cancelEnable}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Info;
