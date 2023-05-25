import React, { useContext, Fragment } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// CSS
import styles from "./PostTopBar.module.css";
const PostTopBar = () => {
  const { post, user } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  const [currentUser, setCurrentUser] = user;

  return (
    <Fragment>
        {currentPost && (

        )}
      
    </Fragment>
  );
};

export default PostTopBar;
