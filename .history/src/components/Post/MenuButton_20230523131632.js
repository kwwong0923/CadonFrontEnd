import React, { useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";

// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
  const { user, category, getPosts } = useContext(AppContext);
  const {currentUser } = user;
  const [selectedCategory, setSelectedCategory] = category;

  return (
    <div className={styles.menuButtons}>
      <button className="menu-button" onClick={getPosts}>{selectedCategory}</button>
      <button className="menu-button">HOT</button>
        {currentUser && <button>SAVED</button>}
        {currentUser && <button>+</button>}
    </div>
  );
};

export default MenuButton;
