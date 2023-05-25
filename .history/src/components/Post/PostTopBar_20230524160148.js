import React, { useContext, Fragment, useState } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Services
import PostService from "../../services/post.service";
// Component
import NewReply from "./NewReply";
// CSS
import styles from "./PostTopBar.module.css";
const PostTopBar = () => {
  const { post, user, checkIfSaved } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  const [currentUser, setCurrentUser] = user;
  // Local State
  const [newReplyIsShown, setNewReplyIsShown] = useState(false);
  const [isSaved, setIsSaved ] = useState(checkIfSaved);
  const onDisplayReplyHandler = () => {
    setNewReplyIsShown(!newReplyIsShown);
  };

  const onSavePostHandler = async() =>
  {
    try
    {
      // Update BackEnd
      await PostService.savePost(currentPost._id);
      // Update FrontEnd
      currentUser.user.savedPost.push(currentPost._id);
    }
    catch (err)
    {
      console.log(err);
    }
  }
  return (
    <Fragment>
      {currentPost && (
        <div className={styles.postBar}>
          <h1>{currentPost.title}</h1>
          {isSaved && <button>isSaved</button>}
          {!isSaved && currentUser && <button onClick={onSavePostHandler}>&#128151;</button>}
          {currentUser && (
            <button onClick={onDisplayReplyHandler}>&#128172;</button>
          )}
        </div>
      )}
      {newReplyIsShown && <NewReply onDisplayReplyHandler={onDisplayReplyHandler}/>}
    </Fragment>
  );
};

export default PostTopBar;
