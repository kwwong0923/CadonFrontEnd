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
  const { post, user } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  const [currentUser, setCurrentUser] = user;
  // Local State
  const [newReplyIsShown, setNewReplyIsShown] = useState(false);

  const onDisplayReplyHandler = () => {
    setNewReplyIsShown(!newReplyIsShown);
  };

  const onSavePostHandler = () =>
  {
    PostService.savePost(currentPost._id);
  }
  return (
    <Fragment>
      {currentPost && (
        <div className={styles.postBar}>
          <h1>{currentPost.title}</h1>
          {currentUser && <button onClick={onSavePostHandler}>&#128151;</button>}
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