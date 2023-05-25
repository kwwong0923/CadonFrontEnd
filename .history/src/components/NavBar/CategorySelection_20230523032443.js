import React, { useContext } from "react";
// Context
// import { AppContext } from "../../App";
import { AppContext } from "../../context/App.provider";

// CSS Module
import styles from "./CategorySelection.module.css";

const CategorySelection = () => {
  const { category } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = category;

  // Events
  const onCategoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <select
      className={styles.selection}
      name="category"
      onChange={onCategoryChangeHandler}
    >
      <option value="General">General</option>
      <option value="Travel">Travel</option>
      <option value="Food">Food</option>
      <option value="Game">Game</option>
      <option value="News">News</option>
      <option value="Sport">Sport</option>
      <option value="Music">Music</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default CategorySelection;
