import React, { useState, useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";
// CSS
import styles from "./Edit.module.css";

const Edit = (props) => {
  // AppContext
  const { user, posts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;


  return (

  )
};

export default Edit;
