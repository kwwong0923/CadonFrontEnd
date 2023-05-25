import React, { useContext, useEffect } from "react";
// Context
import { AppContext } from "../../context/App.provider";

// Services
import PostService from "../../services/post.service";
// CSS
import styles from "./PostList.module.css";
const PostList = () => {
  const { postList, getPosts } = useContext(AppContext);
  const [filteredPosts, setFilterPosts] = postList;

  useEffect(() =>
  {
    
  })
  return <div>PostList</div>;
};

export default PostList;
