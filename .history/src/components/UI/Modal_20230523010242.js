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

const Modal = () => {
    return (
        <div>Modal</div>
    )
}

export default Modal