import React, { useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";

// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
  const { user, category, getPosts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  const [selectedCategory, setSelectedCategory] = category;

  const onCategoryClickHandler = () =>
  {

  }
  return (
    <div className={styles.menuButtons}>
      <button className="menu-button" onClick={}>{selectedCategory}</button>
      <button className="menu-button">HOT</button>
        {currentUser && <button>SAVED</button>}
        {currentUser && <button>+</button>}
    </div>
  );
};

export default MenuButton;
