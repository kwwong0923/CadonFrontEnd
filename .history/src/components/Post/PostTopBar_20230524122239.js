import React, { useContext, Fragment, useState } from "react";
// Context
import { AppContext } from "../../context/App.provider";
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

  const onDisplayReplyHandler = () =>
  {
    setNewReplyIsShown(!newReplyIsShown);
  }
  return (
    <Fragment>
      {currentPost && (
        <div className={styles.postBar}>
          <h1>{currentPost.title}</h1>
          {currentUser && <button>&#128151;</button>}
          {currentUser && <button onClick={onDisplayReplyHandler}>&#128172;</button>}
        </div>        
      )}
    </Fragment>
  );
};

export default PostTopBar;
