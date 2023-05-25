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
        e
    }
    catch (err)
    {
        console.log(err);
    }
    
  }
  const contextValue = {
    user: [currentUser, setCurrentUser],
    post: [currentPost, setCurrentPost],
    category: [selectedCategory, setSelectedCategory],
    postList: [filteredPosts, setFilterPosts],
    getPosts: getPosts
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
