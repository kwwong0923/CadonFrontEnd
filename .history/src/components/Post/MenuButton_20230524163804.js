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

    }
    
  }

  return (
    <Fragment>
      <div className={styles.menuButtons}>
        <button className="menu-button" onClick={getPosts}>
          {selectedCategory}
        </button>
        <button className="menu-button">&#128293; HOT</button>
        {currentUser && <button onClick={onShowSavedPostHandler}>&#128190; SAVED</button>}
        {currentUser && <button onClick={displayCreatePost}>&#10133</button>}
      </div>
      {createPostIsShown && (
        <NewPost displayCreatePost={displayCreatePost}/>
      )}
    </Fragment>
  );
};

export default MenuButton;
