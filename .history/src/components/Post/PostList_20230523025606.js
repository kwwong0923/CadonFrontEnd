import React, { useContext, useEffect } from "react";
// Context
import { AppContext } from "../../App";
// CSS
import styles from "./PostList.module.css";
const PostList = () => {
  const { postList } = useContext(AppContext);
  const [filteredPosts, setFilterPosts] = postList;
  return <div>PostList</div>;
};

export default PostList;
