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
  return <Modal></Modal>;
};

export default NewPost;
