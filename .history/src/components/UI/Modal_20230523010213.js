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
            <div> className={styles.}</div>
        </div>
    )
}
const Modal = () => {
    return (
        <div>Modal</div>
    )
}

export default Modal