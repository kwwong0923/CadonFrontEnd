import React from "react";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewPost.module.css";
const NewPost = () => {
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
  return <Modal>
    
  </Modal>;
};

export default NewPost;
