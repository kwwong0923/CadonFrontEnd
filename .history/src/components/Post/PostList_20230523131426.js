import React, { useContext, useEffect, Fragment } from "react";
// Context
import { AppContext } from "../../context/App.provider";
// Components
import PostItem from "./PostItem";
// Services
import PostService from "../../services/post.service";
// CSS
import styles from "./PostList.module.css";
const PostList = () => {
  const { postList, getPosts } = useContext(AppContext);
  const [filteredPosts, setFilterPosts] = postList;

  useEffect(() =>
  {
    getPosts();
  }, [])
  
  return (
  <div className={styles.list}>
    {filteredPosts && filteredPosts.map((post) => {
        return <PostItem key={post._id} post={post} />
    })}
  </div>);
};

export default PostList;
