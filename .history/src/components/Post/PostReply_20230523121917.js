import React, { useContext, Fr } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// CSS
import styles from "./PostReply.module.css";
const PostReply = (props) => {
  // Date
  const date = new Date(props.reply.date);
  const shortDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <div>PostReply</div>;
};

export default PostReply;
