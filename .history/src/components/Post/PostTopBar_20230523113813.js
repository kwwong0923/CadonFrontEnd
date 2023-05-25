import React, {useContext} from 'react'
// Context
import { AppContext } from '../../context/App.provider'
// CSS
import styles from "./PostTopBar.module.css"
const PostTopBar = () => {
    const { post } = useContext(AppContext);
    const [currentPost, setCurrentPost] = post;
    
    return (
        <div>PostTopBar</div>
    )
}

export default PostTopBar