import { useMemo, useState } from "react";
import PostsContext from "./PostsContext";
import useFetch from "../hooks/useFetch";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function normalize(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    author: post.author || `User ${post.userId}`,
  };
}

export function PostsProvider({ children }) {
  const { data, loading, error, reload } = useFetch(POSTS_URL);
  const [localPosts, setLocalPosts] = useState([]);

  const posts = useMemo(() => {
    const remote = Array.isArray(data) ? data.map(normalize) : [];
    return [...localPosts, ...remote];
  }, [data, localPosts]);

  function addPost({ title, body, author }) {
    const post = {
      id: `local-${Date.now()}`,
      title,
      body,
      author: author || "Community member",
    };
    setLocalPosts((current) => [post, ...current]);
    return post;
  }

  const value = { posts, loading, error, reload, addPost };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
