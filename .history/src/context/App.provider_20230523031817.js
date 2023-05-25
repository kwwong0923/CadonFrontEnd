import React, { useState, createContext } from "react";
// Service
import authService from "../services/auth.service";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [currentPost, setCurrentPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [filteredPosts, setFilterPosts] = useState([]);

  const contextValue = {
    user: [currentUser, setCurrentUser],
    post: [currentPost, setCurrentPost],
    category: [selectedCategory, setSelectedCategory],
    postList: [filteredPosts, setFilterPosts],
  };

  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
};

export {AppContext, AppProvider}
