import React, { useContext, Fragment } from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostContent.module.css"
const PostContent = () => {
    const { user, post } = useContext(AppContext);
    const [ currentUser, setCurrentUser ] = user;
    const [ currentPost, setCurrentPost ] = post;
  return (
    <Fragment>
        {currentPost && (
            div.styles
        )}
    </Fragment>
  )
}

export default PostContent