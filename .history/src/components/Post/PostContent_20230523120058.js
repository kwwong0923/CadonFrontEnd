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
    const date = new Date(props.currentPost.date);
    const shortDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  return (
    <Fragment>
        {currentPost && (
            <div className={styles.content}>
                <div className={styles.info}>
                    <h3>{currentPost.creator.username}</h3>
                    <div className={styles.detailsInfo}>
                        <p>
                            {currentPost.like.length}
                            <button>&#128077;</button>
                        </p>
                        <p>
                            {currentPost.dislike.length}
                            <button>&#128078;</button>
                        </p>
                    </div>
                </div>
            </div>
        )}
    </Fragment>
  )
}

export default PostContent