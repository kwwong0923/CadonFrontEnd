import React, { useContext, Fragment } from "react";
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

  on

  return (
    <Fragment>
      <div className={styles.reply}>
        <div className={styles.info}>
          <h3>
            #{props.index + 1} {props.reply.userId.username}
          </h3>
          <div className={styles.detailsInfo}>
            <p>
              {props.reply.like.length} <button>&#128077;</button>
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
