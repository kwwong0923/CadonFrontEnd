import React from "react";
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
    </Modal>
  );
};

export default NewPost;
