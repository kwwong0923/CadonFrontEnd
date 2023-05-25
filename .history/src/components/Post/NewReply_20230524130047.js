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
  const [inputValid, setInputValid] = useState(false);

  // useEffect
  // to check if the input valid
  useEffect(() => {
    if (content.length > 0) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [content]);

  // Event
  const onContentChangeHandler = (event) =>
  {
    setContent(event.target.value);
  }

  return (
    <Modal>
      <div className={styles.popup}>
        <p>
          <label htmlFor="content">Reply: </label>
          <textarea name="content" id="content" cols="56" rows="10" onChange={onContentChangeHandler} value={content}></textarea>
        </p>
        <div className={styles.buttons}>
          <button disabled={!inputValid}>Post</button>
          <button onClick={props.onDisplayReplyHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default NewReply;
