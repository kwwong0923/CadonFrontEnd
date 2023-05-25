import React, { useState, createContext } from "react";

export const AppContext = createContext();
const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
const [currentPost, setCurrentPost] = useState(null);
const [selectedCategory, setSelectedCategory] = useState("General");
const [filteredPosts, setFilterPosts] = useState([]);
