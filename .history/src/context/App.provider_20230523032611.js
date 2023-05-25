import React, { useState, createContext } from "react";
// Service
import AuthService from "../services/auth.service";
export const AppContext = createContext();

const AppProvider = (props) => {
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
        {props.children}
    </AppContext.Provider>
  )
};

export default AppProvider
