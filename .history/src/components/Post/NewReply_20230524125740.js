import React, { useContext, useState, useEffect } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewReply.module.css";

const NewReply = (props) => {
  const { post } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  // Local State
  const [content, setContent] = useState("");

  // useEffect
  // to check if the input valid
  return (
    <Modal>
      <div className={styles.popup}>
        <p>
          <label htmlFor="content">Reply: </label>
          <textarea name="content" id="content" cols="56" rows="10"></textarea>
        </p>
        <div className={styles.buttons}>
          <button>Post</button>
          <button onClick={props.onDisplayReplyHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default NewReply;
