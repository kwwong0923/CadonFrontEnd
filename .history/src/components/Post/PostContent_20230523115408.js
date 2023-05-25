import React, { useContext } from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostContent.module.css"
const PostContent = () => {
    const { user, post } = userContext(AppContext);
    const [ currentUser, setCurrentUser ] = user;
    const [ currentUser, setCurrentUser ] = user;
  return (
    <div>PostContent</div>
  )
}

export default PostContent