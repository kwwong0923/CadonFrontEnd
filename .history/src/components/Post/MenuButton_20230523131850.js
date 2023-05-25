import React, { Fragment, useContext, useState } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// UI
import Modal from "../UI/Modal";
// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
  // Context
  const { user, category, getPosts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  const [selectedCategory, setSelectedCategory] = category;

  // local state
  const [createPostIsShown, setCreatePostIsShown] = useState(false);

  // Event
  const onPlusClickHandler = 
  return (
    <Fragment>
      <div className={styles.menuButtons}>
        <button className="menu-button" onClick={getPosts}>
          {selectedCategory}
        </button>
        <button className="menu-button">HOT</button>
        {currentUser && <button>SAVED</button>}
        {currentUser && <button>+</button>}
      </div>

    </Fragment>
  );
};

export default MenuButton;
