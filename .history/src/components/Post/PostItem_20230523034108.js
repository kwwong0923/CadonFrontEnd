import React from 'react'
// CSS
import styles from "./PostItem.module.css"
const PostItem = (props) => {
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
  return (
    <div>PostItem</div>
  )
}

export default PostItem