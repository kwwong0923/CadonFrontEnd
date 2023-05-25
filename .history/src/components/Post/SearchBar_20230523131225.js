import React, { useState, useContext } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Services
import PostService from "../../services/post.service";
// CSS
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  // Context
  const { postList } =  useContext(AppContext);
  const [filteredPosts, setFilterPosts] = postList;
  // Local State
  const [searchType, setSearchType] = useState("post");
  const [searchKeyWord, setSearchKeyWord] = useState("");

  // Events
  const searchTypeChangeHandler = (event) => {
    setSearchType(event.target.value);
  };

  const searchInputChangeHandler = (event) => {
    setSearchKeyWord(event.target.value);
  };

  const searchHandler = async () => {
    try
    {
      if (searchType === "post")
      {
        let response = await PostService.getPostsByKeyword(searchKeyWord);
        setFilterPosts(response.data);
        setSearchKeyWord("")
      }
      else if (searchType === "user")
      {
        let response = await PostService.getPostsByUsername(searchKeyWord);
        setFilterPosts(response.data);
      }
    }
    catch (err)
    {
      console.log(err);
    }
    
  };
  return (
    <div className={styles.searching}>
      <select name="search" onChange={searchTypeChangeHandler}>
        <option value="post">Post</option>
        <option value="user">User</option>
      </select>
      <input type="text" onChange={searchInputChangeHandler} value={searchKeyWord}/>
      <button onClick={searchHandler}>&#128269;</button>
    </div>
  );
};

export default SearchBar;
