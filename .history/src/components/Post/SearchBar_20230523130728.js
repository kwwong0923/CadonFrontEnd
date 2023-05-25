import React, { useState } from "react";
// Context
i
// Services
import PostService from "../../services/post.service";
// CSS
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchType, setSearchType] = useState("post");
  const [searchKeyWord, setSearchKeyWord] = useState("");

  // Events
  const searchTypeChangeHandler = (event) => {
    setSearchType(event.target.value);
  };

  const searchInputChangeHandler = (event) => {
    setSearchKeyWord(event.target.value);
  };



  const searchHandler = () => {};
  return (
    <div className={styles.searching}>
      <select name="search" onChange={searchTypeChangeHandler}>
        <option value="post">Post</option>
        <option value="user">User</option>
      </select>
      <input type="text" onChange={searchInputChangeHandler} />
      <button onClick={searchHandler}>&#128269;</button>
    </div>
  );
};

export default SearchBar;
