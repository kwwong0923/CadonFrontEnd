import React, { useState, useEffect, useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Service
import PostService from "../../services/post.service";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewPost.module.css";
const NewPost = (props) => {
    // Context
    const { post, getPosts } = useContext(AppContext);
    const [currentPost, setCurrentPost] = post;
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

  // Use Effect
  useEffect(() => {
    if (title.length == 0) {
      setTitleWarningMessage("");
    } else if (title.length < 4 || title.length > 30) {
      setTitleWarningMessage(
        "The character of title should be between 3 to 30"
      );
    } else {
      setTitleWarningMessage("");
    }
  }, [title]);

  useEffect(() => {
    if (
      title.length > 3 &&
      !titleWarningMessage &&
      !contentWarningMessage &&
      category &&
      content
    ) {
      setInputValid(true);
    }
    else {
      setInputValid(false);
    }
  }, [title, category, content]);

  // Function
  const onCreatePost = async() =>
  {
    try
    {
        let response = await PostService.createNewPost(title, content, category);
        let _id = response.data.savedPost._id;
        let currentPost = await PostService.getPostById(_id);
        // setCurrentPost(currentPost)
        window.alert("The new post is created");
        getPosts();
        props.displayCreatePost();
    }
    catch (err)
    {
        console.log(err.response);
    }
  }
  return (
    <Modal>
      <div className={styles.popup}>
        <h1>Creating a New Post</h1>
        <p className={styles.postRow}> 
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

        <p className={styles.postRow}>
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
          <button disabled={!inputsValid} onClick={onCreatePost}>Post</button>
          <button onClick={props.displayCreatePost}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default NewPost;
