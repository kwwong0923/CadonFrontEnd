import React, { useState, useEffect, useContext } from "react";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewPost.module.css";
const NewPost = (props) => {
  // Local State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [inputsValid, setInputValid] = useState(false);

  // Warning Message
  const [titleWarningMessage, setTitleWarningMessage] = useState("");
  const [contentWarningMessage, setContentWarningMessage] = useState("");

  // Event Handler
  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onCategoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  return (
    <Modal>
      <div className={styles.popup}>
        <h1>Creating a New Post</h1>
      </div>
      <p>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={onTitleChangeHandler}
        />
      </p>
      {titleWarningMessage && <p>{titleWarningMessage}</p>}

      <p className={styles.selection}>
        <label htmlFor="category">Category: </label>
        <select
          className="new-post-selection-bar"
          name="category"
          id="category"
          onChange={onCategoryChangeHandler}
        >
          <option></option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Game">Game</option>
          <option value="News">News</option>
          <option value="Sport">Sport</option>
          <option value="Music">Music</option>
          <option value="Other">Other</option>
        </select>
      </p>

      <p>
        <label htmlFor="content">Content: </label>
        <textarea
          name="content"
          id="content"
          cols="39"
          rows="10"
          onChange={onContentChangeHandler}
        ></textarea>
      </p>

      <div className={styles.buttons}>
        <button disabled={!inputsValid} onClick={createNewPost}>
          Post
        </button>
        <button onClick={props.hideNewPostHandler}>Cancel</button>
      </div>
    </Modal>
  );
};

export default NewPost;
