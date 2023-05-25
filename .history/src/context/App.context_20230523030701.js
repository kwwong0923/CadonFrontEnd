import React, { useState, createContext } from "react";

export const AppContext = createContext(){
  user: [],
  post: [],
  category: [],
  postList: [],
};
const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
const [currentPost, setCurrentPost] = useState(null);
const [selectedCategory, setSelectedCategory] = useState("General");
const [filteredPosts, setFilterPosts] = useState([]);
const contextObj = {
  user: [currentUser, setCurrentUser],
  post: [currentPost, setCurrentPost],
  category: [selectedCategory, setSelectedCategory],
  postList: [filteredPosts, setFilterPosts],
};
