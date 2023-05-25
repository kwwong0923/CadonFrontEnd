import React, { useContext, Fragment } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Components
import PostReply from "./PostReply";
// CSS
import styles from "./PostContent.module.css";
const PostContent = () => {
  const { user, post } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  const [currentPost, setCurrentPost] = post;

  // Date
  let date = new Date();
  let shortDate = "";
  if (currentPost) {
    date = new Date(currentPost.date);
    shortDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  const onLikeHandler = async () =>
  {
    try
    {

    }
    catch (err)
    {
      
    }
  }

  return (
    <Fragment>
      {currentPost && (
        <Fragment>
          <div className={styles.post}>
            <div className={styles.info}>
              <h3>{currentPost.creator.username}</h3>
              <div className={styles.detailsInfo}>
                <p>
                  {currentPost.like.length} <button onClick={onLikeHandler}>&#128077;</button>
                </p>
                <p>
                  {currentPost.dislike.length} <button>&#128078;</button>
                </p>
                <p className={styles.date}>{shortDate}</p>
              </div>
            </div>
            <div className={styles.content}>
              <p>{currentPost.content}</p>
            </div>
          </div>
          <div>
            {currentPost.reply.map((reply, index) => {
                return <PostReply key={index} index={index + 1} reply = {reply}/>
            })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PostContent;
