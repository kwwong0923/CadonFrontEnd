import React, { useState, createContext } from "react";
// Service
import AuthService from "../services/auth.service";
import PostService from "../services/post.service";
const AppContext = createContext();

const AppProvider = (props) => {
  // States
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [currentPost, setCurrentPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [filteredPosts, setFilterPosts] = useState([]);
  // Functions
  const getPosts = async() =>
  {
    try
    {
        if (selectedCategory === "General")
        {
            let response = await PostService.getAllPosts();
            setFilterPosts(response.data);
        }
        else
        {
            let response = await PostService.getPostsByCategory(selectedCategory);
            setFilterPosts(response.data);
        }
    }
    catch (err)
    {
        console.log(err);
    }
    
  }

  const resetCurrentPost = () =>
  {
    setCurrentPost(null);
  }

  const refreshCurrentPost = async () =>
  {
    let response = await PostService.getPostById(currentPost._id);
    setCurrentPost(response.data);
  }

  const checkIfSaved = () =>
  {
    if (currentPost)
    {
      if (currentUser.user.savedPost.includes(_id))
      {
        return true;
      }
    }
    
    else 
    {
      return false;
    }
  }

  const contextValue = {
    user: [currentUser, setCurrentUser],
    post: [currentPost, setCurrentPost],
    category: [selectedCategory, setSelectedCategory],
    postList: [filteredPosts, setFilterPosts],
    getPosts, resetCurrentPost, refreshCurrentPost, checkIfSaved
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
