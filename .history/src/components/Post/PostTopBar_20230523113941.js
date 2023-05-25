import React, {useContext} from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostTopBar.module.css"
const PostTopBar = () => {
    const { post, user } = useContext(AppContext);
    const [currentPost, setCurrentPost] = post;

    return (
        <div className={styles.postBar}>
            <h1>{currentPost.title}</h1>

        </div>
    )
}

export default PostTopBar