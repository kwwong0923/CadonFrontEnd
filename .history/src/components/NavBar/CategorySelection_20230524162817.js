import React, { useContext, useEffect } from "react";
// Context
// import { AppContext } from "../../App";
import { AppContext } from "../../context/App.provider";

// CSS Module
import styles from "./CategorySelection.module.css";

const CategorySelection = () => {
  const { category, getPosts, resetCurrentPost } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = category;

  // Events
  const onCategoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    getPosts();
    resetCurrentPost();
  }, [selectedCategory]);
  return (
    <select
      className={styles.selection}
      name="category"
      onChange={onCategoryChangeHandler}
    >
      <option value="General">General</option>
      <option value="Travel">Travel</option>
      <option value="Food">Food&#127860;</option>
      <option value="Game">Game</option>
      <option value="News">News</option>
      <option value="Sport">Sport</option>
      <option value="Music">Music&#127929;</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default CategorySelection;
