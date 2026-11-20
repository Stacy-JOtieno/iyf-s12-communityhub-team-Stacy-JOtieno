import { useMemo, useState } from "react";
import PostsContext from "./PostsContext";
import useFetch from "../hooks/useFetch";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function normalize(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    excerpt: post.body,
    author: post.author || `User ${post.userId}`,
    likes: post.likes || 0,
    liked: Boolean(post.liked),
  };
}

export function PostsProvider({ children }) {
  const { data, loading, error, reload } = useFetch(POSTS_URL);
  const [localPosts, setLocalPosts] = useState([]);
  const [reactions, setReactions] = useState({});

  const posts = useMemo(() => {
    const remote = Array.isArray(data) ? data.map(normalize) : [];
    return [...localPosts, ...remote].map((post) => {
      const reaction = reactions[post.id];
      return reaction ? { ...post, ...reaction } : post;
    });
  }, [data, localPosts, reactions]);

  function addPost({ title, body, author }) {
    const post = normalize({
      id: `local-${Date.now()}`,
      title,
      body,
      author: author || "Community member",
    });
    setLocalPosts((current) => [post, ...current]);
    return post;
  }

  function toggleLike(id) {
    setReactions((current) => {
      const previous = current[id] || { liked: false, likes: 0 };
      const liked = !previous.liked;
      return {
        ...current,
        [id]: {
          liked,
          likes: Math.max(0, previous.likes + (liked ? 1 : -1)),
        },
      };
    });
  }

  const value = { posts, loading, error, reload, addPost, toggleLike };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
