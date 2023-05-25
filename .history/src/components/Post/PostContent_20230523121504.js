import React, { useContext, Fragment } from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostContent.module.css"
const PostContent = () => {
    const { user, post } = useContext(AppContext);
    const [ currentUser, setCurrentUser ] = user;
    const [ currentPost, setCurrentPost ] = post;

    // Date
    let date = new Date();
    let shortDate = "";
    if (currentPost)
    {
        date = new Date(currentPost.date);
        shortDate = date.toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
    }
    
  return (
    <Fragment>
        {currentPost && (
            <Fragment></Fragment>
            
        )}
    </Fragment>
  )
}

export default PostContent