import { useMemo, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { filterPosts } from "../utils/posts";
import PostList from "../components/Post/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";
import styles from "../components/Post/Post.module.css";

function Posts() {
  const { posts, loading, error, reload, toggleLike } = usePosts();
  const [query, setQuery] = useState("");
  const visible = useMemo(() => filterPosts(posts, query), [posts, query]);

  return (
    <section>
      <h1>Posts</h1>
      <div className={styles.search}>
        <label htmlFor="post-search">Search posts</label>
        <input
          id="post-search"
          type="search"
          value={query}
          placeholder="Search by title, content, or author"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {loading && <LoadingSpinner text="Loading posts..." />}
      {error && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && <PostList posts={visible} onLike={toggleLike} />}
    </section>
  );
}

export default Posts;
