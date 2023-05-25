import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// CSS Module
import styles from "./Modal.module.css"

// Backdrop
const Backdrop = () =>
{
    return <div className={styles.backdrop} />;
}

// Modal Overlay
const ModalOverlay = (props) =>
{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
    return (
      <Fragment>
          {ReactDOM.createPortal(<Backdrop />, portalElement)}
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      </Fragment>);
  };
  

export default Modal