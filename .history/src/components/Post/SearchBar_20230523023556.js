import React, { useState } from "react";
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

  const searchHandler = ()
  return (
    <div>
      <select name="search" onChange={searchTypeChangeHandler}>
        <option value="post">Post</option>
        <option value="user">User</option>
      </select>
      <input type="text" onChange={searchInputChangeHandler} />
      <button className="searching-button" onClick={searchHandler}>
        &#128269;
      </button>
    </div>
  );
};

export default SearchBar;
