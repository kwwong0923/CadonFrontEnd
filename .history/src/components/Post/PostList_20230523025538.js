import React, {useContext, useEffect} from 'react'
// Context
import { AppContext } from '../../App';
// CSS
import styles from "./PostList.module.css"
const PostList = () => {
    const {posts} = useContext(AppContext);
  return (
    <div>PostList</div>
  )
}

export default PostList