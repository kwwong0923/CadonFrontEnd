import React, { useContext } from 'react'
// Context
import { AppContext } from '../../context/App.provider';
// CSS
import styles from "./PostItem.module.css"
const PostItem = (props) => {
import { AppContext } from "../../context/App.provider";
import { AppContext } from "../../context/App.provider";
    const post = useContext()
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
    rating = <p>{like} &#128077;</p>;
  } else {
    rating = <p>{like} &#128078;</p>;
  }
  return (
    <div className="post-item" onClick={postClickHandler}>
      <div className="main-info">
        <h3>{props.post.creator.username}</h3>
        <h2>{props.post.title}</h2>
      </div>
      <div className="minor-info">
        <p>{rating}</p>
        <p className="post-category">{props.post.category}</p>
        <p className="post-date">{shortDate.toString()}</p>
      </div>
    </div>
  )
}

export default PostItem