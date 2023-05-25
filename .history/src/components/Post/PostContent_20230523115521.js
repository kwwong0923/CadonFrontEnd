import React, { useContext } from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostContent.module.css"
const PostContent = () => {
    const { user, post } = useContext(AppContext);
    const [ currentUser, setCurrentUser ] = user;
    const [ currentPost, setCurrentPost ] = post;
  return (
    {currentPost && (
        
    )}
    <div></div>
  )
}

export default PostContent