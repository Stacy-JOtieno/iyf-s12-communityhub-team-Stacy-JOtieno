import { useContext } from "react";
import PostsContext from "../context/PostsContext";

export function usePosts() {
  const value = useContext(PostsContext);
  if (!value) {
    throw new Error("usePosts must be used inside PostsProvider");
  }
  return value;
}
