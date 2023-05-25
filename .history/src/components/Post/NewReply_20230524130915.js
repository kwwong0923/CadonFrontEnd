import React, { useContext, useState, useEffect } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Services
import PostService from "../../services/post.service";
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
  const [warningMessage, setWarningMessage] = useState("");

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
  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // Function
  const replyPost = async () =>
  {
    try
    {
        let response = await PostService.reply(currentPost._id, content);
        console.log(response);
        props.onDisplayReplyHandler();
    }
    catch (err)
    {
      console.log(err);
      setWarningMessage(err.message);
    }
  }
  return (
    <Modal>
      <div className={styles.popup}>
        <p>
          <label htmlFor="content">Reply: </label>
          <textarea
            name="content"
            id="content"
            cols="56"
            rows="10"
            onChange={onContentChangeHandler}
            value={content}
          ></textarea>
        </p>
        <div className={styles.buttons}>
          <button disabled={!inputValid} onClick={replyPost}>Post</button>
          <button onClick={props.onDisplayReplyHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default NewReply;
