import { usePosts } from "../hooks/usePosts";
import PostList from "../components/Post/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";

function Posts() {
  const { posts, loading, error, reload } = usePosts();

  return (
    <section>
      <h1>Posts</h1>
      {loading && <LoadingSpinner text="Loading posts..." />}
      {error && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && <PostList posts={posts} />}
    </section>
  );
}

export default Posts;
