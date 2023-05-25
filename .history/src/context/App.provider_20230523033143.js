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
    if (selectedCategory === "General")
    {
        let PostsFound
    }
  }
  const contextValue = {
    user: [currentUser, setCurrentUser],
    post: [currentPost, setCurrentPost],
    category: [selectedCategory, setSelectedCategory],
    postList: [filteredPosts, setFilterPosts],
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
