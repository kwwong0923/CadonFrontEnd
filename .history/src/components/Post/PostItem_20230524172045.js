import React, { useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// CSS
import styles from "./PostItem.module.css";
const PostItem = (props) => {
  const { post } = useContext(AppContext);
  const [currentPost, setCurrentPost] = post;
  // the data from mongodb is a string
  const date = new Date(props.post.lastUpdated);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const like = props.post.like.length - props.post.dislike.length;
  let rating = null;
  // to determine thumb up or down
  if (like >= 0) {
    rating = <p>{like} &#128077; {props.post.reply.length} &#128172;</p>
  } else {
    rating = <p>{like} &#128078; {props.post.reply.length} &#128172;</p>;
  }

  const postClickHandler = () => {
    setCurrentPost(props.post);
  };

  return (
    <div className={styles.postItem} onClick={postClickHandler}>
      <div className={styles.mainInfo}>
        <h3>{props.post.creator.username}</h3>
        <h2>{props.post.title}</h2>
      </div>
      <div className={styles.minorInfo}>
        <p>{props.post.reply.length} &#128172;</p>
        <p>{rating}</p>
        <p className={styles.category}>{props.post.category}</p>
        <p className={styles.date}>{shortDate.toString()}</p>
      </div>
    </div>
  );
};

export default PostItem;
