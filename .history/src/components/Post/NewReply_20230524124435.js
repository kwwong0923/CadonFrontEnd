import React from "react";
// Context
import { AppContext } from "../../context/App.provider";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewReply.module.css";

const NewReply = (props) => {
  return (
    <Modal>
      <div className={styles.popup}>
        <p>
            <label htmlFor="content">Content: </label>
            
        </p>
        <div className={styles.buttons}>
          <button>
            Post
          </button>
          <button onClick={props.onDisplayReplyHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default NewReply;
