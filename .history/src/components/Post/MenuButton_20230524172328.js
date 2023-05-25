import React, { Fragment, useContext, useState } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Service
import PostService from "../../services/post.service";
// Component
import NewPost from "./NewPost";
// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
  // Context
  const { user, category, postList, getPosts } = useContext(AppContext);
  const [currentUser, setCurrentUser] = user;
  const [selectedCategory, setSelectedCategory] = category;
  const [filteredPosts, setFilterPosts] = postList;

  // local state
  const [createPostIsShown, setCreatePostIsShown] = useState(false);

  // Event
  const displayCreatePost = () =>
  {
    setCreatePostIsShown(!createPostIsShown);
  }

  const onShowSavedPostHandler = async() =>
  {
    try
    {
      let response = await PostService.getSavedPost();
      setFilterPosts(response.data);
    }
    catch (err)
    {
      console.log(err);
    }    
  }

  const onHotPostHandler = async() =>
  {
    try
    {
      let response = await PostService.getHotPosts();
      setFilterPosts(response.data);
    }
    catch (err)
    {
      console.log(err);
    } 
  }

  const onShowPostHandler

  return (
    <Fragment>
      <div className={styles.menuButtons}>
        <button className="menu-button" onClick={getPosts}>
          {selectedCategory == "General" && (<span>&#128173;</span>)}
          {selectedCategory == "Travel" && (<span>&#127887;</span>)}
          {selectedCategory == "Food" && (<span>&#127789;</span>)}
          {selectedCategory == "Game" && (<span>&#127918;</span>)}
          {selectedCategory == "News" && (<span>&#128250;</span>)}
          {selectedCategory == "Sport" && (<span>&#9917;</span>)}
          {selectedCategory == "Music" && (<span>&#127911;</span>)}
          {selectedCategory == "Other" && (<span>&#128512;</span>)}  {selectedCategory}
        </button>
        <button className="menu-button" onClick={onHotPostHandler}>&#128293; HOT</button>
        {currentUser && <button onClick={onShowSavedPostHandler}>&#128190; SAVED</button>}
        {currentUser && <button onClick={onShowSavedPostHandler}>&#128213; OWNED</button>}
        {currentUser && <button onClick={displayCreatePost}>&#10133;</button>}
      </div>
      {createPostIsShown && (
        <NewPost displayCreatePost={displayCreatePost}/>
      )}
    </Fragment>
  );
};

export default MenuButton;
