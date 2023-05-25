import React, {useContext} from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostTopBar.module.css"
const PostTopBar = () => {
    const { post, user } = useContext(AppContext);
    const [currentPost, setCurrentPost] = post;
    const [currentUser, setCurrentUser] = user;

    return (
        <div className={styles.postBar}>
            <h1>{currentPost.title}</h1>
            {currentUser && <button>&#128151;</button>}
            {currentUser && <button>&#128172;</button>}
        </div>
    )
}

export default PostTopBar