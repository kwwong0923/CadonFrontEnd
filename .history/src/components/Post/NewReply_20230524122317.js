import React from "react";
// Context
import { AppContext } from "../../context/App.provider";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./NewReply.module.css";

const NewReply = () => {
  return (
    <Modal>
      <div>
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
