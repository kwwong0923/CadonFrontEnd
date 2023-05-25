import React, { useContext, Fragment } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Services
import PostService from "../../services/post.service";
// CSS
import styles from "./PostReply.module.css";
const PostReply = (props) => {
  const { post, getPosts, refreshCurrentPost } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  // Date
  const date = new Date(props.reply.date);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const onReplyLikeHandler = async () =>
  {
    try
    {
      await PostService.likeReply(currentPost._id, props.index);
      getPosts();
      refreshCurrentPost();
    }
    catch (err)
    {
      console.log(err);
    }
  }

  const onReplyLikeHandler = async () =>
  {
    try
    {
      await PostService.likeReply(currentPost._id, props.index);
      getPosts();
      refreshCurrentPost();
    }
    catch (err)
    {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <div className={styles.reply}>
        <div className={styles.info}>
          <h3>
            #{props.index + 1} {props.reply.userId.username}
          </h3>
          <div className={styles.detailsInfo}>
            <p>
              {props.reply.like.length} <button onClick={onReplyLikeHandler}>&#128077;</button>
            </p>
            <p>
              {props.reply.dislike.length} <button>&#128078;</button>
            </p>
            <p className={styles.date}>{shortDate}</p>
          </div>
        </div>
        <div className={styles.content}>
          <p>{props.reply.content}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PostReply;
